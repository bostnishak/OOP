document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('navMenu');
    const moduleTitle = document.getElementById('moduleTitle');
    const textContent = document.getElementById('textContent');
    const umlContent = document.getElementById('umlContent');
    const codeEditor = document.getElementById('codeEditor');
    const quizContainer = document.getElementById('quizContainer');
    
    const runBtn = document.getElementById('runBtn');
    const consoleOutput = document.getElementById('consoleOutput');
    const closeConsole = document.getElementById('closeConsole');
    const consoleText = document.getElementById('consoleText');

    let currentModule = null;
    let currentQuizIndex = 0;
    let quizScore = 0;
    let isQuizAnswered = false;

    // Initialize Menu
    function initMenu() {
        window.courseData.forEach((module, index) => {
            const div = document.createElement('div');
            div.className = 'nav-item';
            if (index === 0) div.classList.add('active');
            
            div.innerHTML = `
                <i class="fa-solid ${module.icon}"></i>
                <div class="nav-details">
                    <span class="nav-title">${module.title}</span>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: ${Math.random() * 30 + 10}%"></div>
                    </div>
                </div>
            `;
            
            div.addEventListener('click', () => {
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                div.classList.add('active');
                loadModule(module);
            });
            
            navMenu.appendChild(div);
        });
        
        // Load first module
        if(window.courseData.length > 0) {
            loadModule(window.courseData[0]);
        }
    }

    // Load Module Content
    async function loadModule(module) {
        currentModule = module;
        
        // 1. Title & Content
        moduleTitle.innerHTML = `${module.title} <span>(MODULE)</span>`;
        textContent.innerHTML = module.content;
        
        // 2. UML Diagram
        if (module.uml) {
            umlContent.innerHTML = `<div class="mermaid">${module.uml}</div>`;
            try {
                await window.mermaid.run({ querySelector: '.mermaid' });
            } catch(e) { console.error("Mermaid error", e); }
        } else {
            umlContent.innerHTML = '';
        }

        // 3. Code Editor
        if (module.code) {
            codeEditor.textContent = module.code;
            Prism.highlightElement(codeEditor);
        } else {
            codeEditor.textContent = '// Bu bölüm için örnek kod bulunmuyor.';
        }
        
        consoleOutput.classList.add('hidden');

        // 4. Quiz
        currentQuizIndex = 0;
        quizScore = 0;
        renderQuiz();
    }

    // Render Quiz Engine
    function renderQuiz() {
        if(!currentModule.quizzes || currentModule.quizzes.length === 0) {
            quizContainer.innerHTML = '<p>Bu bölüm için test bulunmuyor.</p>';
            return;
        }

        if (currentQuizIndex >= currentModule.quizzes.length) {
            // Sınav bitti
            quizContainer.innerHTML = `
                <div class="quiz-result-screen">
                    <i class="fa-solid fa-trophy" style="font-size: 3rem; color: #f1c40f; margin-bottom: 20px;"></i>
                    <h3>TEST TAMAMLANDI!</h3>
                    <p>Puanınız: <strong style="color: var(--neon-cyan); font-size: 1.2rem;">${quizScore} / ${currentModule.quizzes.length}</strong></p>
                    <button class="submit-btn" id="restartQuiz" style="margin-top: 20px;">TESTİ TEKRAR ÇÖZ</button>
                </div>
            `;
            document.getElementById('restartQuiz').addEventListener('click', () => {
                currentQuizIndex = 0;
                quizScore = 0;
                renderQuiz();
            });
            return;
        }

        isQuizAnswered = false;
        const quiz = currentModule.quizzes[currentQuizIndex];
        
        let optionsHtml = quiz.options.map((opt, i) => `
            <label class="option-label" id="label-${i}">
                <input type="radio" name="quizOption" value="${i}">
                <span>${opt}</span>
            </label>
        `).join('');

        quizContainer.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.8rem; color: var(--text-muted);">
                <span>Soru ${currentQuizIndex + 1} / ${currentModule.quizzes.length}</span>
                <span>Puan: ${quizScore}</span>
            </div>
            <p class="question-text">${quiz.question}</p>
            <div class="options">
                ${optionsHtml}
            </div>
            <button class="submit-btn" id="submitQuiz">CEVAPLA</button>
            <div class="quiz-feedback" id="quizFeedback"></div>
        `;

        const submitBtn = document.getElementById('submitQuiz');
        submitBtn.addEventListener('click', () => {
            if(isQuizAnswered) {
                // Next Question eylemi
                currentQuizIndex++;
                renderQuiz();
                return;
            }

            const selected = document.querySelector('input[name="quizOption"]:checked');
            const feedback = document.getElementById('quizFeedback');
            
            if(!selected) {
                feedback.innerHTML = '<span style="color: #ffcc00;"><i class="fa-solid fa-triangle-exclamation"></i> Lütfen bir şık seçin.</span>';
                return;
            }

            isQuizAnswered = true;
            const selectedVal = parseInt(selected.value);
            const isCorrect = (selectedVal === quiz.correctIndex);
            
            // Tüm inputları disable yap
            document.querySelectorAll('input[name="quizOption"]').forEach(input => input.disabled = true);

            // Doğru şıkkı yeşil yap
            document.getElementById(`label-${quiz.correctIndex}`).style.color = '#a8ff60';
            
            if(isCorrect) {
                quizScore++;
                feedback.innerHTML = `
                    <div class="explanation-box success">
                        <strong><i class="fa-solid fa-check-circle"></i> Doğru Cevap!</strong><br><br>
                        ${quiz.explanation}
                    </div>
                `;
            } else {
                // Yanlış şıkkı kırmızı yap
                document.getElementById(`label-${selectedVal}`).style.color = '#ff5555';
                feedback.innerHTML = `
                    <div class="explanation-box error">
                        <strong><i class="fa-solid fa-circle-xmark"></i> Yanlış Cevap.</strong><br><br>
                        <em>Açıklama:</em> ${quiz.explanation}
                    </div>
                `;
            }

            submitBtn.innerHTML = 'SIRADAKİ SORU <i class="fa-solid fa-arrow-right"></i>';
            submitBtn.style.background = 'var(--neon-cyan)';
            submitBtn.style.color = '#000';
            submitBtn.style.boxShadow = '0 0 15px var(--neon-cyan-dim)';
        });
    }

    // Run Code Simulation
    runBtn.addEventListener('click', () => {
        consoleOutput.classList.remove('hidden');
        consoleText.textContent = 'Kod Derleniyor...\\n';
        
        setTimeout(() => {
            const code = codeEditor.textContent;
            if(code.includes('System.out.println')) {
                const regex = /System\\.out\\.println\\(["'](.*?)["']\\)/g;
                let match;
                let output = '';
                while ((match = regex.exec(code)) !== null) {
                    output += match[1] + '\\n';
                }
                if(output === '') output = 'Kod çalıştı.\\n';
                consoleText.textContent += '\\n[BAŞARILI] Konsol Çıktısı:\\n' + output;
            } else {
                consoleText.textContent += '\\n[BİLGİ] Kod başarıyla derlendi ancak konsola herhangi bir şey yazdırılmadı.\\nSystem.out.println() kullanmayı deneyin.';
            }
        }, 500);
    });

    closeConsole.addEventListener('click', () => {
        consoleOutput.classList.add('hidden');
    });

    // Initialize
    initMenu();
});
