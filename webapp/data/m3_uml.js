window.courseData.push({
    id: 'uml-giris',
    title: '3. UML\'YE GİRİŞ VE DİYAGRAMLAR',
    icon: 'fa-project-diagram',
    content: `
        <h3>UML (Birleştirilmiş Modelleme Dili) Nedir?</h3>
        <p>UML, yazılım sistemlerinin yapısını ve davranışlarını görselleştirmek için kullanılan standartlaştırılmış bir dildir. Kod yazmadan önce projenin haritasını çıkarmamızı sağlar. Mühendislikte mimarın çizdiği taslak (blueprint) neyse, yazılımda da UML odur.</p>
        
        <h3>Temel Diyagram Türleri</h3>
        <ul>
            <li><strong>Kullanım Durumu (Use Case) Diyagramı:</strong> Sistemin dışarıdan nasıl göründüğünü, aktörleri (kullanıcılar, diğer sistemler) ve sistemin hangi ana işlevleri (senaryoları) sunduğunu gösterir.</li>
            <li><strong>Sınıf (Class) Diyagramı:</strong> Nesne yönelimli tasarımın belkemiğidir. Sistemdeki sınıfları, değişkenleri (attributes), metodları (operations) ve sınıflar arası ilişkileri (Kalıtım, Bileşim, Bağımlılık) detaylıca gösterir.</li>
            <li><strong>Sıralama (Sequence) Diyagramı:</strong> Zaman akışını (yukarıdan aşağıya) baz alarak nesnelerin birbirleriyle ne sırayla mesajlaştığını (hangi metodu çağırdığını) kronolojik olarak gösterir.</li>
            <li><strong>Etkinlik (Activity) Diyagramı:</strong> Bir sürecin veya metodun adım adım nasıl işlediğini gösteren gelişmiş akış şemalarıdır (Flowchart). if-else koşulları, döngüler ve paralel işlemler görselleştirilir.</li>
        </ul>
    `,
    uml: `
    sequenceDiagram
        actor Kullanici
        participant Arayuz
        participant Veritabani
        Kullanici->>Arayuz: Sisteme Giriş Yap (Kullanıcı Adı, Şifre)
        Arayuz->>Veritabani: Bilgileri Doğrula
        alt Başarılı
            Veritabani-->>Arayuz: Doğrulandı (Token)
            Arayuz-->>Kullanici: Hoş Geldiniz!
        else Başarısız
            Veritabani-->>Arayuz: Hata (Yetkisiz)
            Arayuz-->>Kullanici: Şifre Yanlış!
        end
    `,
    code: `// UML Diyagramları koda dökülmeden önceki mimari kararlardır.
// Yukarıdaki Sequence diyagramındaki mesajlar metotları temsil eder.

public class LoginService {
    public boolean verifyUser(String username, String password) {
        // Arayüzün Veritabanına attığı mesajı (metot çağrısını) temsil eder
        if(username.equals("admin") && password.equals("123")) {
            System.out.println("Doğrulandı! Hoş Geldiniz!");
            return true;
        } else {
            System.out.println("Hata! Şifre Yanlış!");
            return false;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        LoginService service = new LoginService();
        service.verifyUser("admin", "123");
    }
}`,
    expectedOutput: `Doğrulandı! Hoş Geldiniz!`,
    quizzes: [
        { q: "UML'in açılımı nedir?", o: ["Universal Machine Language", "Unified Modeling Language", "United Methods of Logic", "Universal Modeling Logic"], c: 1, e: "UML'in açılımı 'Unified Modeling Language' (Birleştirilmiş Modelleme Dili)'dir." },
        { q: "Bir otomasyon sisteminde 'Müşteri', 'Yönetici' gibi aktörlerin sistemle nasıl etkileşime girdiğini en üst seviyeden gösteren diyagram hangisidir?", o: ["Sınıf Diyagramı", "Sıralama Diyagramı", "Use Case (Kullanım Durumu) Diyagramı", "Etkinlik Diyagramı"], c: 2, e: "Use Case diyagramları, aktörlerin (çöp adam ikonları) sistem ile (elips şeklindeki kullanım durumları) olan ilişkilerini gösterir." },
        { q: "UML Sınıf (Class) Diyagramlarında, bir metodun veya değişkenin önündeki '+' (artı) işareti ne anlama gelir?", o: ["Private", "Protected", "Public", "Static"], c: 2, e: "UML standartlarına göre: '+' public, '-' private, '#' protected, ve '~' package-private anlamına gelir." },
        { q: "Zaman eksenini (yukarıdan aşağıya doğru) baz alarak nesneler arasındaki mesajlaşmayı (metot çağrılarını) gösteren diyagram hangisidir?", o: ["Sıralama (Sequence) Diyagramı", "Sınıf Diyagramı", "Ağ (Network) Diyagramı", "Use Case Diyagramı"], c: 0, e: "Sıralama (Sequence) diyagramlarında üstte nesneler bulunur ve aşağıya doğru inen zaman çizgileri (lifeline) üzerinden birbirlerine mesaj gönderirler." },
        { q: "Aşağıdakilerden hangisi UML diyagramlarının temel bir amacı DEĞİLDİR?", o: ["Geliştiriciler arası iletişimi artırmak", "Sistemin mimarisini belgelemek", "Programı direkt olarak makine diline derlemek", "Karmaşık tasarımları görselleştirerek basitleştirmek"], c: 2, e: "UML bir programlama dili değildir, derlenemez. İnsanların sistemi anlaması ve mimariyi tasarlaması için oluşturulan bir standartlar bütünüdür." },
        { q: "UML Sınıf diyagramlarında içi BOŞ ve ucu üçgen olan bir ok (---->|>) hangi ilişkiyi temsil eder?", o: ["Bileşim (Composition)", "Bağımlılık (Dependency)", "Kalıtım (Inheritance / Generalization)", "Kümeleme (Aggregation)"], c: 2, e: "Ucu boş (boyanmamış) üçgen ok, Kalıtım (Inheritance) yani 'IS-A' ilişkisini belirtir (Alt sınıf üst sınıfa bakar)." },
        { q: "UML Sınıf diyagramlarında içi DOLU bir baklava dilimi (elmas) hangi ilişkiyi temsil eder?", o: ["Composition (Sıkı Bileşim)", "Kalıtım", "Aggregation (Gevşek Kümeleme)", "Arayüz (Interface) Uygulaması"], c: 0, e: "İçi dolu siyah elmas Composition'ı belirtir (Has-A). Parçanın bütünle var olduğu çok sıkı ilişkidir (örn: Bina ve Oda)." },
        { q: "Yazılım sürecinin hangi aşamasında ağırlıklı olarak UML diyagramları çizilir?", o: ["Test Aşaması", "Tasarım ve Analiz Aşaması", "Bakım Aşaması", "Dağıtım (Deployment) Aşaması"], c: 1, e: "Kodlamaya (Implementation) geçilmeden önce, sistemin ne yapacağı ve nasıl yapılacağı Tasarım (Design) aşamasında UML ile belirlenir." },
        { q: "UML Sınıf diyagramında bir sınıf kutusu (dikdörtgeni) genel olarak kaç bölüme ayrılır?", o: ["2 (İsim ve Metotlar)", "4 (İsim, Tipler, Metotlar, Parametreler)", "1 (Sadece İsim)", "3 (İsim, Nitelikler(Değişkenler), Operasyonlar(Metotlar))"], c: 3, e: "Bir sınıf kutusu yukarıdan aşağı 3 bölümdür: En üstte Sınıf Adı, Ortada Özellikler (Attributes/Variables), En altta Metotlar (Operations)." },
        { q: "Etkinlik (Activity) diyagramının geleneksel yazılımdaki karşılığı aşağıdakilerden hangisidir?", o: ["Veritabanı tablosu", "Akış Şeması (Flowchart)", "Class (Sınıf)", "Zaman çizelgesi"], c: 1, e: "Activity diagram, iş süreçlerini ve algoritmaların adımlarını gösteren gelişmiş akış şemalarıdır." },
        { q: "Use Case diyagramlarındaki 'Actor' (Aktör) kimleri veya neleri temsil eder?", o: ["Sadece sistemin yazılımcılarını", "Veritabanındaki tabloları", "Sistemle etkileşime giren insanları veya diğer dış yazılım sistemlerini", "Sadece uygulamanın arayüzünü"], c: 2, e: "Aktör sadece bir insan (Örn: veznedar, müşteri) olmak zorunda değildir. Sisteme dışarıdan bağlanan bir Banka API'si veya saat (timer) de aktör olabilir." },
        { q: "Bir Sequence (Sıralama) diyagramında 'kesik kesik (---->>)' oklar neyi temsil eder?", o: ["Metodun silindiğini", "Geri dönüş (Return) mesajını", "Senkron bir metot çağrısını", "Hata olduğunu"], c: 1, e: "Sıralama diyagramlarında düz oklar bir metodu çağırmayı temsil ederken, kesik çizgili oklar o metodun işlemi bitirip geri döndürdüğü değeri (return) temsil eder." },
        { q: "UML diyagramlarında bir sınıfın 'Interface' (Arayüz) olduğu nasıl belirtilir?", o: ["<<interface>> etiketiyle (stereotype)", "Sınıfın ismini kırmızı yazarak", "Kutuyu yuvarlak çizerek", "Değişkenlerin önünde # kullanarak"], c: 0, e: "UML'de arayüzler sınıf kutusunun üst kısmına <<interface>> veya <<protocol>> gibi stereotype etiketleri yazılarak ayrıştırılır." },
        { q: "UML'de iki kullanım durumu (Use Case) arasındaki <<include>> (kapsar) ilişkisi ne demektir?", o: ["Birinci durum gerçekleşirken ikinci durumu MÜMKÜNSE çalıştırır.", "İki durum birbiriyle düşmandır.", "Birinci durum gerçekleşirken ikinci durumu KESİNLİKLE çalıştırmak zorundadır.", "Birinci durum iptal olur."], c: 2, e: "<<include>> zorunluluk belirtir. Örneğin 'Para Çekme' senaryosu çalışırken <<include>> 'Bakiye Kontrolü' senaryosunu içermek ZORUNDADIR." },
        { q: "UML'de iki kullanım durumu arasındaki <<extend>> (genişletir) ilişkisi ne demektir?", o: ["Zorunlu bir bağdır", "Bir durum çalışırken diğer durum belirli koşullar sağlanırsa İSTEĞE BAĞLI çalışır", "Durumun bittiği anlamına gelir", "Sonsuz döngü yaratır"], c: 1, e: "<<extend>> opsiyoneldir. 'Online Alışveriş Yap' senaryosu, istenirse 'Hediye Paketi Yap' senaryosunu extend edebilir." },
        { q: "Sequence diyagramlarında, nesnenin metot çalıştırdığı süre boyunca zaman çizgisi üzerinde oluşan dikey dikdörtgen kutuya ne ad verilir?", o: ["Lifeline", "Activation Bar (Aktivasyon Kutusu)", "Message Box", "Class Block"], c: 1, e: "Activation bar (Execution occurrence), nesnenin o an işlem yaptığını (CPU'yu kullandığını) ve kontrolün kendisinde olduğunu gösterir." },
        { q: "Statik (yapısal) bir UML diyagramı örneği aşağıdakilerden hangisidir?", o: ["Activity Diagram", "Sequence Diagram", "Class Diagram", "State Machine Diagram"], c: 2, e: "Class diyagramları sistemin anlık durağan 'yapısını' gösterdiği için Statik diyagramlardır. Activity ve Sequence ise sistemin 'davranışını' gösterdiği için Dinamik diyagramlardır." },
        { q: "State Machine (Durum Makinesi) diyagramı temel olarak neyi gösterir?", o: ["Tüm sınıfları", "Bir nesnenin yaşam döngüsünü ve geçirdiği durum değişimlerini", "Kullanıcıların ne yaptığını", "Uygulamanın ne kadar hızlı çalıştığını"], c: 1, e: "Bir nesnenin (örn: Sipariş nesnesi) 'Bekliyor', 'Hazırlanıyor', 'Kargolandı' gibi evrelerini State Machine diyagramı ile çizeriz." },
        { q: "UML standardını günümüzde yöneten ve sürdüren konsorsiyumun adı nedir?", o: ["W3C", "Microsoft", "OMG (Object Management Group)", "IEEE"], c: 2, e: "UML spesifikasyonları OMG (Object Management Group) tarafından standardize edilir ve yönetilir." },
        { q: "Component (Bileşen) diyagramlarının temel amacı nedir?", o: ["Nesnelerin iletişimini göstermek", "Yazılım modüllerinin (DLL'ler, .jar dosyaları) ve kütüphanelerin fiziksel bağlantılarını göstermek", "Değişkenleri tanımlamak", "Kullanıcı hatalarını listelemek"], c: 1, e: "Component diyagramları, sistemin yüksek seviyeli parçalarının (API'ler, veritabanı kütüphaneleri, paketler) birbirleriyle olan fiziksel entegrasyonunu haritalandırır." }
    ]
});
