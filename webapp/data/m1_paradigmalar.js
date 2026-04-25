window.courseData.push({
    id: 'paradigmalar',
    title: '1. PROGRAMLAMA PARADİGMALARI',
    icon: 'fa-book-open',
    content: `
        <p><strong>Programlama Paradigmaları</strong>, kod yazarken problemleri nasıl modelleyeceğimizi ve çözeceğimizi belirleyen temel yaklaşımlardır.</p>
        <h3>Prosedüral Programlama (Procedural Programming)</h3>
        <p>Program, adım adım çalıştırılan fonksiyonlar (prosedürler) dizisi olarak kurgulanır. Veriler ve fonksiyonlar birbirinden tamamen ayrıdır. C dili buna en iyi örnektir.</p>
        <pre><code class="language-java">// Prosedüral Yaklaşım (Java'da bile bazen böyle yazılır)
int bakiye = 1000;
public static void paraCek(int miktar) {
    bakiye = bakiye - miktar;
}</code></pre>
        <ul>
            <li><strong>Dezavantajı:</strong> Proje büyüdükçe fonksiyonların hangi verileri değiştirdiğini takip etmek (Spagetti Kod) imkansızlaşır.</li>
        </ul>
        <h3>Nesne Tabanlı Programlama (OOP)</h3>
        <p>Gerçek dünyadaki nesneleri modelleme sanatıdır. Bir arabayı düşünün; arabanın özellikleri (rengi, modeli = <em>veriler/değişkenler</em>) ve davranışları (hızlanması, fren yapması = <em>fonksiyonlar/metodlar</em>) vardır. OOP, bu verileri ve fonksiyonları <strong>Nesne (Object)</strong> adı verilen tek bir kutuda birleştirir.</p>
        <pre><code class="language-java">// Nesne Tabanlı Yaklaşım
class BankaHesabi {
    private int bakiye = 1000;
    public void paraCek(int miktar) {
        this.bakiye -= miktar;
    }
}</code></pre>
        <ul>
            <li><strong>Avantajları:</strong> Kod tekrarını önler (Modülerlik), güvenlik sağlar (Kapsülleme) ve bakımı kolaylaştırır.</li>
        </ul>
    `,
    uml: `
    classDiagram
        class ProgrammingParadigm {
            +Procedural
            +ObjectOriented
            +Functional
        }
    `,
    code: `public class Main {
    public static void main(String[] args) {
        // OOP'de her şey bir nesnedir.
        System.out.println("OOP Dünyasına Hoş Geldiniz!");
        System.out.println("Paradigmalar, problemleri çözme yöntemlerimizdir.");
    }
}`,
    expectedOutput: `OOP Dünyasına Hoş Geldiniz!\nParadigmalar, problemleri çözme yöntemlerimizdir.`,
    quizzes: [
        { q: "Hangi programlama paradigmasında veri ve fonksiyonlar birbirinden tamamen bağımsızdır?", o: ["Nesne Tabanlı Programlama", "Fonksiyonel Programlama", "Prosedüral Programlama", "Olay Yönelimli Programlama"], c: 2, e: "Prosedüral programlamada (örneğin C dilinde) program, birbiri ardına çalışan fonksiyonlar bütünüdür. Veriler serbestçe dolaşır." },
        { q: "Aşağıdakilerden hangisi Nesne Tabanlı Programlamanın (OOP) temel avantajlarından biri DEĞİLDİR?", o: ["Kod tekrarını önlemesi (Reusability)", "Programın çalışma hızını (Execution Speed) doğrudan arttırması", "Kodun bakımını (Maintenance) kolaylaştırması", "Veri güvenliğini (Encapsulation) sağlaması"], c: 1, e: "OOP, donanımsal çalışma hızını arttırmaz. Hatta prosedüral dillere göre milisaniyeler bazında daha yavaş olabilir. Temel amacı programcı verimliliğidir." },
        { q: "Bir nesnenin sahip olduğu özellikler ve davranışlar OOP terminolojisinde sırasıyla ne olarak adlandırılır?", o: ["Sınıf ve Paket", "Veri (Data/Attribute) ve Metod (Method)", "Fonksiyon ve Prosedür", "Değişken ve Referans"], c: 1, e: "OOP'de özellikler 'Attribute', 'Field' veya 'Data'; davranışlar veya eylemler ise 'Metod (Method)' olarak adlandırılır." },
        { q: "Prosedüral programlamada karşılaşılan 'Spagetti Kod' sorunu neyi ifade eder?", o: ["Kodun İtalyanca yazılmasını", "Fonksiyonların ve verilerin iç içe girerek takibinin imkansızlaşmasını", "Kodun çok kısa olmasını", "Yalnızca makarna şirketlerinin kullandığı bir algoritmayı"], c: 1, e: "Spagetti kod, mantıksal akışın karmaşıklaşması ve hangi fonksiyonun hangi veriyi değiştirdiğinin izlenememesi durumudur." },
        { q: "Aşağıdaki dillerden hangisi katı bir şekilde SADECE Nesne Yönelimli Programlamayı destekler (Prosedüral kod yazılamaz)?", o: ["C", "C++", "Java", "Python"], c: 2, e: "Java'da her şey bir sınıfın içinde olmak zorundadır. C++, Python gibi dillerde sınıf dışında da serbest fonksiyonlar (prosedüral) yazılabilir." },
        { q: "Gerçek dünyadaki nesnelerin yazılıma aktarılması işlemine genel olarak ne isim verilir?", o: ["Derleme (Compilation)", "Modelleme (Modeling / Abstraction)", "Şifreleme (Encryption)", "Hata Ayıklama (Debugging)"], c: 1, e: "Gerçek dünyadaki karmaşık yapıların sadeleştirilerek koda dökülmesine Modelleme veya Soyutlama (Abstraction) denir." },
        { q: "Nesne yönelimli programlamanın 4 temel taşı hangisinde doğru verilmiştir?", o: ["Değişken, Döngü, Şart, Fonksiyon", "Kalıtım, Polimorfizm, Sarmalama, Soyutlama", "Class, Object, Method, Property", "Public, Private, Protected, Default"], c: 1, e: "OOP'nin 4 temel prensibi: Inheritance (Kalıtım), Polymorphism (Çok biçimlilik), Encapsulation (Sarmalama) ve Abstraction (Soyutlama)'dır." },
        { q: "Java'nın nesne yönelimli doğası gereği uygulamanın çalışmaya başladığı 'main' metodu nerede bulunmalıdır?", o: ["Dosyanın en başında serbest halde", "Bir sınıfın (class) içinde", "İşletim sisteminin konfigürasyonunda", "Ayrı bir .exe dosyasında"], c: 1, e: "Java'da her şey nesne/sınıf mimarisine dahildir. Bu nedenle main metodu bile bir sınıfın içinde tanımlanmak zorundadır." },
        { q: "Aşağıdakilerden hangisi fonksiyonel programlamaya (Functional Programming) ait bir özelliktir?", o: ["Verilerin değiştirilemez (Immutable) olması", "Veri ve metodların aynı kutuda olması", "Global değişkenlerin sık kullanımı", "Sınıf hiyerarşilerinin derin olması"], c: 0, e: "Fonksiyonel programlamada veriler genellikle 'immutable' (değiştirilemez) kabul edilir ve yan etkisi olmayan saf fonksiyonlar (pure functions) kullanılır." },
        { q: "Bir hastane otomasyonunda 'Doktor' ve 'Hasta' kavramlarının yazılıma aktarılması hangi kavrama girer?", o: ["Nesne (Object)", "Değişken (Variable)", "Sınıf (Class) tasarımı", "Döngü (Loop)"], c: 2, e: "Doktor ve Hasta kavramsal şablonlar olduğu için bunlar birer Sınıf (Class) olarak tasarlanırlar." },
        { q: "Paradigma (Paradigm) kelimesinin yazılımdaki karşılığı nedir?", o: ["Hata tespit yöntemi", "Derleyici türü", "Problemlere yaklaşım ve çözüm tarzı", "Kod çalıştırma hızı"], c: 2, e: "Paradigma, bir programlama dilinin veya geliştiricinin problemleri nasıl çözeceğini belirleyen düşünce tarzıdır." },
        { q: "Aşağıdakilerden hangisi OOP dillerinden biri DEĞİLDİR?", o: ["C#", "C", "Ruby", "Java"], c: 1, e: "C dili, tamamen prosedüral bir dildir ve Sınıf (Class) kavramını desteklemez." },
        { q: "OOP'de metodların (fonksiyonların) doğrudan verilere erişebilmesinin temel sebebi nedir?", o: ["Hızlı çalışmaları", "Aynı sınıf (nesne) çatısı altında paketlenmiş olmaları (Encapsulation)", "Global değişken kullanmaları", "Derleyicinin öyle istemesi"], c: 1, e: "OOP'de veri ve o veriyi işleyen metodlar aynı kutuda (sınıfta) olduğu için metodlar iç değişkenlere doğrudan ve güvenle erişebilir." },
        { q: "Yazılım mimarisinde modülerliğin artması ne anlama gelir?", o: ["Kodun yavaşlaması", "Kodun parçalara ayrılarak bağımsız yönetilebilmesi", "Tüm kodun tek dosyada olması", "Görselliğin artması"], c: 1, e: "Modülerlik, sistemin birbirine bağlı ama bağımsız çalışabilen parçalara bölünmesi demektir. OOP modülerliği artırır." },
        { q: "OOP'de 'State' (Durum) ve 'Behavior' (Davranış) neleri temsil eder?", o: ["State: Metodlar, Behavior: Veriler", "State: Değişkenler/Veriler, Behavior: Metodlar", "Her ikisi de fonksiyonları", "Her ikisi de hataları"], c: 1, e: "Bir nesnenin State'i (durumu) değişkenlerindeki anlık değerleri, Behavior'ı (davranışı) ise yapabildiği eylemleri (metodları) temsil eder." },
        { q: "Programlama dillerinin evrimi genellikle hangi yönde olmuştur?", o: ["Makine dilinden -> İnsan diline (Yüksek seviyeli dillere) ve karmaşık mimarilere (OOP)", "OOP'den -> Makine diline", "C#'tan -> Assembly'ye", "Sürekli daha az özellik eklenmesi"], c: 0, e: "Diller zamanla 1 ve 0'lardan (Makine dili), prosedüral dillere ve oradan da insan algısına en yakın olan Nesne Yönelimli dillere evrilmiştir." },
        { q: "Prosedüral dillerin günümüzde hala kullanılmasının (örneğin C) en büyük sebebi nedir?", o: ["Öğrenmesinin zor olması", "Donanıma çok yakın çalışabilmesi ve inanılmaz hızlı olması", "OOP desteklemesi", "Web sitesi yapmak için ideal olması"], c: 1, e: "C gibi diller donanımla doğrudan konuştuğu için gömülü sistemlerde ve işletim sistemi çekirdeklerinde (hız gerektiğinde) hala rakipsizdir." },
        { q: "Kod okunabilirliği açısından prosedüral vs OOP karşılaştırmasında hangisi doğrudur?", o: ["Prosedüral daha okunaklıdır", "OOP, büyük projelerde gerçek dünya modellemesi yaptığı için okunabilirliği ciddi oranda artırır", "İkisi de aynıdır", "Sadece yorum satırları okunabilirliği etkiler"], c: 1, e: "Büyük projelerde on binlerce fonksiyon yerine, mantıksal olarak ayrılmış nesne sınıfları (Müşteri sınıfı, Sipariş sınıfı vb.) kodu çok daha anlaşılır kılar." },
        { q: "Bir yazılım ekibinde OOP kullanılmasının en büyük faydası nedir?", o: ["Ekibin daha az maaş alması", "Görevlerin sınıflar (nesneler) bazında kolayca paylaştırılabilmesi", "Projeyi 1 günde bitirmeleri", "Kahve molalarının uzaması"], c: 1, e: "OOP modüler olduğu için, bir geliştirici Veritabanı sınıfını yazarken diğeri Arayüz sınıfını birbirini etkilemeden güvenle geliştirebilir." },
        { q: "Aşağıdaki ifadelerden hangisi yanlıştır?", o: ["C++ hem prosedüral hem OOP destekler.", "Java'da pointer (işaretçi) aritmetiği serbestçe kullanılır.", "C# Microsoft tarafından geliştirilen OOP tabanlı bir dildir.", "Python fonksiyonel programlamayı da destekler."], c: 1, e: "Java'da güvenlik ve bellek yönetimini (Garbage Collector) kolaylaştırmak için C/C++'taki gibi doğrudan bellek adresi (pointer) manipülasyonu yasaklanmıştır." }
    ]
});
