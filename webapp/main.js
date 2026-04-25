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
                        <div class="progress-fill" style="width: ${Math.random() * 50 + 20}%"></div>
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
        umlContent.innerHTML = `<div class="mermaid">${module.uml}</div>`;
        // Re-render mermaid
        try {
            await window.mermaid.run({
                querySelector: '.mermaid'
            });
        } catch(e) {
            console.error("Mermaid parsing error", e);
        }

        // 3. Code Editor
        codeEditor.textContent = module.code;
        // Re-render syntax highlighting
        Prism.highlightElement(codeEditor);
        
        // Hide console if open
        consoleOutput.classList.add('hidden');

        // 4. Quiz
        renderQuiz(module.quiz);
    }

    // Render Quiz
    function renderQuiz(quiz) {
        if(!quiz) {
            quizContainer.innerHTML = '<p>No quiz for this module.</p>';
            return;
        }

        let optionsHtml = quiz.options.map((opt, i) => `
            <label class="option-label">
                <input type="radio" name="quizOption" value="${i}">
                <span>${opt}</span>
            </label>
        `).join('');

        quizContainer.innerHTML = `
            <p class="question-text">${quiz.question}</p>
            <div class="options">
                ${optionsHtml}
            </div>
            <button class="submit-btn" id="submitQuiz">SUBMIT ANSWER</button>
            <div class="quiz-feedback" id="quizFeedback"></div>
        `;

        document.getElementById('submitQuiz').addEventListener('click', () => {
            const selected = document.querySelector('input[name="quizOption"]:checked');
            const feedback = document.getElementById('quizFeedback');
            
            if(!selected) {
                feedback.textContent = 'Please select an answer.';
                feedback.className = 'quiz-feedback feedback-error';
                return;
            }

            if(parseInt(selected.value) === quiz.correct) {
                feedback.textContent = 'Correct! Excellent job.';
                feedback.className = 'quiz-feedback feedback-success';
            } else {
                feedback.textContent = 'Incorrect. Try again!';
                feedback.className = 'quiz-feedback feedback-error';
            }
        });
    }

    // Run Code Simulation
    runBtn.addEventListener('click', () => {
        consoleOutput.classList.remove('hidden');
        consoleText.textContent = 'Compiling Java code...\\n';
        
        setTimeout(() => {
            const code = codeEditor.textContent;
            if(code.includes('System.out.println')) {
                // Extract println content roughly
                const regex = /System\\.out\\.println\\(["'](.*?)["']\\)/g;
                let match;
                let output = '';
                while ((match = regex.exec(code)) !== null) {
                    output += match[1] + '\\n';
                }
                if(output === '') output = 'Output executed.\\n';
                consoleText.textContent += '\\n[SUCCESS] Output:\\n' + output;
            } else {
                consoleText.textContent += '\\n[SUCCESS] Code compiled successfully, but no console output was generated.';
            }
        }, 600);
    });

    closeConsole.addEventListener('click', () => {
        consoleOutput.classList.add('hidden');
    });

    // Initialize
    initMenu();
});
