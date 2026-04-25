const courseData = [
    {
        id: 'paradigmalar',
        title: '1. PROGRAMLAMA PARADİGMALARI',
        icon: 'fa-book-open',
        content: `
            <p><strong>Programlama Paradigmaları</strong>, kod yazarken problemleri nasıl modelleyeceğimizi ve çözeceğimizi belirleyen temel yaklaşımlardır.</p>
            <h3>Prosedüral Programlama (Procedural Programming)</h3>
            <p>Program, adım adım çalıştırılan fonksiyonlar (prosedürler) dizisi olarak kurgulanır. Veriler ve fonksiyonlar birbirinden tamamen ayrıdır. C dili buna en iyi örnektir.</p>
            <ul>
                <li><strong>Dezavantajı:</strong> Proje büyüdükçe fonksiyonların hangi verileri değiştirdiğini takip etmek (Spagetti Kod) imkansızlaşır.</li>
            </ul>
            <h3>Nesne Tabanlı Programlama (OOP)</h3>
            <p>Gerçek dünyadaki nesneleri modelleme sanatıdır. Bir arabayı düşünün; arabanın özellikleri (rengi, modeli = <em>veriler/değişkenler</em>) ve davranışları (hızlanması, fren yapması = <em>fonksiyonlar/metodlar</em>) vardır. OOP, bu verileri ve fonksiyonları <strong>Nesne (Object)</strong> adı verilen tek bir kutuda birleştirir.</p>
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
    }
}`,
        quizzes: [
            {
                question: "Hangi programlama paradigmasında veri ve fonksiyonlar birbirinden tamamen bağımsızdır?",
                options: [
                    "Nesne Tabanlı Programlama",
                    "Fonksiyonel Programlama",
                    "Prosedüral Programlama",
                    "Olay Yönelimli Programlama"
                ],
                correctIndex: 2,
                explanation: "Prosedüral programlamada (örneğin C dilinde) program, birbiri ardına çalışan fonksiyonlar bütünüdür. Veriler (değişkenler) serbestçe dolaşır ve herhangi bir fonksiyon tarafından değiştirilebilir."
            },
            {
                question: "Aşağıdakilerden hangisi Nesne Tabanlı Programlamanın (OOP) temel avantajlarından biri DEĞİLDİR?",
                options: [
                    "Kod tekrarını önlemesi (Reusability)",
                    "Programın çalışma hızını (Execution Speed) doğrudan arttırması",
                    "Kodun bakımını (Maintenance) kolaylaştırması",
                    "Veri güvenliğini (Encapsulation) sağlaması"
                ],
                correctIndex: 1,
                explanation: "OOP, donanımsal çalışma hızını arttırmaz. Hatta nesne oluşturma ve sanal metod çağrıları (virtual methods) nedeniyle prosedüral dillere göre milisaniyeler bazında daha yavaş olabilir. OOP'nin temel amacı programcı verimliliğini ve kod düzenini artırmaktır."
            },
            {
                question: "Bir nesnenin sahip olduğu özellikler (renk, marka) ve davranışlar (hızlanma, durma) OOP terminolojisinde sırasıyla ne olarak adlandırılır?",
                options: [
                    "Sınıf ve Paket",
                    "Veri (Data/Attribute) ve Metod (Method)",
                    "Fonksiyon ve Prosedür",
                    "Değişken ve Referans"
                ],
                correctIndex: 1,
                explanation: "OOP'de özellikler 'Attribute', 'Field' veya 'Data' olarak adlandırılırken; davranışlar veya eylemler 'Metod (Method)' olarak adlandırılır."
            }
        ]
    },
    {
        id: 'siniflar-ve-nesneler',
        title: '2. SINIFLAR, NESNELER VE BİLEŞİM',
        icon: 'fa-cube',
        content: `
            <h3>Sınıflar (Classes) ve Nesneler (Objects)</h3>
            <p><strong>Sınıf:</strong> Nesnelerin üretildiği bir kalıptır (Blueprint). Örneğin "Araba Fabrikasındaki Üretim Planı" bir sınıftır.</p>
            <p><strong>Nesne:</strong> O kalıptan üretilmiş, bellekte yer kaplayan somut varlıktır. Üretim planından çıkan kırmızı Ferrari bir nesnedir.</p>
            
            <h3>Bileşim (Composition) - "Has-A" İlişkisi</h3>
            <p>Bileşim, bir sınıfın başka bir sınıfın nesnesini özellik olarak barındırmasıdır. Örneğin bir Araba sınıfının içinde, bir Motor (Engine) nesnesinin bulunmasıdır. Araba bir motora "sahiptir" (Car HAS-A Engine).</p>
            
            <h3>Mesajlar ve Metodlar</h3>
            <p>Nesneler birbirleriyle <strong>mesajlaşarak</strong> iletişim kurarlar. Bir nesnenin metodunu çağırmak, aslında o nesneye bir mesaj (komut) göndermektir. Örneğin: <code>araba.calis()</code> komutu, arabaya "çalış" mesajını gönderir.</p>
        `,
        uml: `
        classDiagram
            Car *-- Engine : Composition (Has-A)
            class Car {
                -Engine engine
                +startCar()
            }
            class Engine {
                +ignite()
            }
        `,
        code: `class Engine {
    public void ignite() {
        System.out.println("Motor ateşlendi. Vrum vrum!");
    }
}

class Car {
    // Bileşim (Composition): Araba bir motora sahiptir
    private Engine engine; 

    public Car() {
        engine = new Engine();
    }

    public void startCar() {
        System.out.println("Anahtar çevrildi...");
        engine.ignite(); // Mesaj gönderme
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Nesne (Object) oluşturuldu
        myCar.startCar();      // Nesneye mesaj gönderildi
    }
}`,
        quizzes: [
            {
                question: "Bir nesnenin bellekte oluşturulmasını sağlayan Java anahtar kelimesi nedir?",
                options: ["class", "create", "new", "object"],
                correctIndex: 2,
                explanation: "'new' anahtar kelimesi, belleğin Heap bölgesinde yeni bir nesne için yer ayrılmasını ve sınıfın yapıcı (constructor) metodunun çağrılmasını sağlar."
            },
            {
                question: "Bir sınıfın içerisinde başka bir sınıfın nesnesini değişken olarak tutmaya ne ad verilir?",
                options: ["Kalıtım (Inheritance)", "Çok Biçimlilik (Polymorphism)", "Sarmalama (Encapsulation)", "Bileşim (Composition)"],
                correctIndex: 3,
                explanation: "Bileşim (Composition) 'sahip olma' (HAS-A) ilişkisidir. Bir bilgisayarın işlemciye (CPU) sahip olması, bir arabanın motora sahip olması bileşime örnektir."
            },
            {
                question: "Aşağıdakilerden hangisi Sınıf (Class) ve Nesne (Object) arasındaki ilişkiyi en iyi açıklar?",
                options: [
                    "Sınıf kalıp (blueprint), nesne ise o kalıptan çıkan üründür.",
                    "Sınıf bir hafıza bölgesidir, nesne ise bir fonksiyondur.",
                    "Her ikisi de tamamen aynı şeydir.",
                    "Nesne kalıptır, sınıf ise o kalıbın kopyasıdır."
                ],
                correctIndex: 0,
                explanation: "Sınıf sadece kavramsal bir tanımlamadır (örneğin bir mimari çizim). Nesne ise bu çizimden yola çıkılarak inşa edilmiş gerçek binadır."
            }
        ]
    },
    {
        id: 'uml-giris',
        title: '3. UML\'YE GİRİŞ VE DİYAGRAMLAR',
        icon: 'fa-project-diagram',
        content: `
            <h3>UML (Birleştirilmiş Modelleme Dili) Nedir?</h3>
            <p>UML, yazılım sistemlerinin yapısını ve davranışlarını görselleştirmek için kullanılan standartlaştırılmış bir dildir. Kod yazmadan önce projenin haritasını çıkarmamızı sağlar.</p>
            
            <h3>Temel Diyagram Türleri</h3>
            <ul>
                <li><strong>Kullanım Durumu (Use Case) Diyagramı:</strong> Sistemin dışarıdan nasıl göründüğünü, aktörleri (kullanıcılar) ve sistemin hangi işlevleri sunduğunu gösterir.</li>
                <li><strong>Sınıf (Class) Diyagramı:</strong> Sistemdeki sınıfları, özelliklerini (değişkenler), metodlarını ve birbirleriyle olan ilişkilerini (Kalıtım, Bileşim) tanımlar.</li>
                <li><strong>Sıralama (Sequence) Diyagramı:</strong> Nesnelerin zaman içinde birbirleriyle nasıl mesajlaştığını kronolojik olarak gösterir.</li>
                <li><strong>Etkinlik (Activity) Diyagramı:</strong> Bir sürecin adım adım nasıl işlediğini gösteren akış şemasıdır (Flowchart).</li>
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
        code: `// UML Diyagramları tasarım aracıdır.
// Yukarıdaki Sequence (Sıralama) diyagramı, basit bir giriş (Login)
// işleminin nesneler arası mesajlaşmasını temsil etmektedir.

public class UML_Aciklama {
    public static void main(String[] args) {
        System.out.println("UML koddan ziyade tasarım ve mimariyi temsil eder.");
    }
}`,
        quizzes: [
            {
                question: "Bir otomasyon sisteminde 'Müşteri', 'Personel' gibi aktörlerin sistemle etkileşimini gösteren diyagram hangisidir?",
                options: ["Sınıf Diyagramı", "Sıralama Diyagramı", "Kullanım Durumu (Use Case) Diyagramı", "Durum (State) Diyagramı"],
                correctIndex: 2,
                explanation: "Use Case diyagramları, sistemi kimin kullandığını (Aktör) ve sistemin bu aktörlere hangi işlevleri (Kullanım Durumları) sunduğunu yüksek seviyeden gösterir."
            },
            {
                question: "UML Sınıf (Class) Diyagramlarında, bir metodun önündeki '-' işareti ne anlama gelir?",
                options: ["Metodun public olduğunu", "Metodun silinmesi gerektiğini", "Metodun private olduğunu", "Metodun statik olduğunu"],
                correctIndex: 2,
                explanation: "UML standartlarına göre: '+' public (açık), '-' private (gizli), '#' protected (korumalı) anlamına gelir."
            },
            {
                question: "Zaman eksenini (yukarıdan aşağıya doğru) baz alarak nesneler arasındaki mesajlaşmayı gösteren diyagram hangisidir?",
                options: ["Sıralama (Sequence) Diyagramı", "Sınıf Diyagramı", "Etkinlik Diyagramı", "Use Case Diyagramı"],
                correctIndex: 0,
                explanation: "Sıralama diyagramları, işlemlerin hangi sırayla ve hangi nesneler arasında (metod çağrıları ile) gerçekleştiğini zaman çizelgesinde gösterir."
            }
        ]
    },
    {
        id: 'kalitim',
        title: '4. KALITIM VE METOD AŞIRI YÜKLEME',
        icon: 'fa-sitemap',
        content: `
            <h3>Kalıtım (Inheritance) - "IS-A" İlişkisi</h3>
            <p>Bir sınıfın başka bir sınıfın özelliklerini ve metodlarını devralmasıdır. <code>extends</code> anahtar kelimesi ile yapılır. "Köpek BİR Hayvandır" (Dog IS-A Animal) ilişkisini kurar.</p>
            
            <h3>Metod Aşırı Yükleme (Method Overloading)</h3>
            <p>Aynı sınıf içerisinde <strong>aynı isme</strong> fakat <strong>farklı parametrelere</strong> (sayısı veya tipi farklı) sahip birden fazla metod tanımlamaktır. (Compile-time Polymorphism)</p>

            <h3>Metodu Yeniden Tanımlama (Method Overriding)</h3>
            <p>Alt sınıfın (Child), üst sınıftan (Parent) miras aldığı bir metodu <strong>kendi ihtiyaçlarına göre değiştirmesi</strong> (ezmesi) işlemidir. Birebir aynı isim ve parametrelere sahip olmalıdır. (Runtime Polymorphism)</p>
        `,
        uml: `
        classDiagram
            class Matematik {
                +topla(int a, int b)
                +topla(double a, double b)
                +topla(int a, int b, int c)
            }
            note for Matematik "Aşırı Yükleme (Overloading) Örneği"
            
            Hayvan <|-- Kedi : Miras (Inheritance)
            class Hayvan {
                +sesCikar()
            }
            class Kedi {
                +sesCikar() // Overriding
            }
        `,
        code: `class Matematik {
    // Overloading (Aşırı Yükleme)
    public int topla(int a, int b) { return a + b; }
    public double topla(double a, double b) { return a + b; }
}

class Hayvan {
    public void sesCikar() {
        System.out.println("Belirsiz bir ses...");
    }
}

class Kedi extends Hayvan {
    // Overriding (Yeniden Tanımlama)
    @Override
    public void sesCikar() {
        System.out.println("Miyav!");
    }
}

public class Main {
    public static void main(String[] args) {
        Matematik m = new Matematik();
        System.out.println("Int Toplam: " + m.topla(5, 10));
        System.out.println("Double Toplam: " + m.topla(5.5, 2.3));

        Kedi boncuk = new Kedi();
        boncuk.sesCikar(); // Miyav! yazar. Parent'in metodu ezildi.
    }
}`,
        quizzes: [
            {
                question: "Java'da bir sınıfın başka bir sınıftan kalıtım alması için hangi anahtar kelime kullanılır?",
                options: ["implements", "extends", "inherits", "super"],
                correctIndex: 1,
                explanation: "'extends' anahtar kelimesi sınıflar arası kalıtımda (inheritance) kullanılır. 'implements' ise bir sınıfın bir arayüzü (interface) uygulaması için kullanılır."
            },
            {
                question: "Aynı isimde fakat parametreleri farklı (örn: yazdir(int x) ve yazdir(String s)) metodlar tanımlamaya ne ad verilir?",
                options: ["Overriding (Yeniden Tanımlama)", "Encapsulation (Sarmalama)", "Overloading (Aşırı Yükleme)", "Inheritance (Kalıtım)"],
                correctIndex: 2,
                explanation: "Aynı sınıf içinde isimleri aynı, aldığı parametrelerin veri tipleri veya sayıları farklı olan metodlar oluşturulmasına Overloading (Aşırı Yükleme) denir."
            },
            {
                question: "Metod Overriding (Yeniden Tanımlama) yapılırken Java'da güvenliği artırmak ve derleyiciyi uyarmak için metodun üstüne genellikle hangi notasyon yazılır?",
                options: ["@Override", "@Deprecated", "@SupressWarnings", "@Overload"],
                correctIndex: 0,
                explanation: "@Override notasyonu derleyiciye 'Ben üst sınıftaki bir metodu eziyorum, eğer üst sınıfta böyle bir metod yoksa bana hata ver' diyerek güvenli kod yazmayı sağlar."
            },
            {
                question: "Java'da çoklu kalıtım (bir sınıfın birden fazla sınıftan aynı anda extends edilmesi) desteklenir mi?",
                options: ["Evet, her zaman", "Evet, sadece abstract sınıflar için", "Hayır, Java çoklu kalıtımı desteklemez", "Evet, virgül ile ayrılarak yazılır"],
                correctIndex: 2,
                explanation: "Java'da C++'ın aksine sınıflar arası çoklu kalıtım desteklenmez (Elmas Problemini önlemek için). Ancak bir sınıf birden fazla Interface'i (arayüzü) implement edebilir."
            }
        ]
    },
    {
        id: 'sarmalama',
        title: '5. SARMALAMA VE ARAYÜZLER',
        icon: 'fa-shield-halved',
        content: `
            <h3>Sarmalama (Encapsulation)</h3>
            <p>Nesnenin iç dünyasını (değişkenleri) dış dünyadan gizlemek ve korumaktır. Değişkenler <code>private</code> yapılır, onlara erişim <code>public getter ve setter</code> metodları ile kontrollü olarak sağlanır. Örneğin yaş değişkenine eksi (-) bir değer girilmesini setter metodu içinde engelleyebilirsiniz.</p>
            
            <h3>Arayüz (Interface) ve Gerçekleştirilmesi</h3>
            <p>Arayüzler (Interfaces), sınıfların yapması "gereken" eylemleri tanımlayan sözleşmelerdir. Metodların sadece adları vardır, gövdeleri (kodları) yoktur. Bir sınıf arayüzü <code>implements</code> anahtar kelimesi ile gerçekleştirirse (implement ederse), arayüzdeki tüm metodların içini doldurmak ZORUNDADIR.</p>
            
            <h3>Statik Değişken ve Metodlar</h3>
            <p><code>static</code> anahtar kelimesi, bir değişkenin veya metodun <strong>nesneye değil, direkt olarak sınıfa ait olmasını</strong> sağlar. Yani nesne üretmeden <code>SinifAdi.metodAdi()</code> şeklinde erişilebilirler.</p>
        `,
        uml: `
        classDiagram
            class Ucan {
                <<interface>>
                +uc()
            }
            class Kus {
                +uc()
            }
            Ucan <|.. Kus : Implements
            
            class BankaHesabi {
                -double bakiye
                +getBakiye()
                +setBakiye()
            }
        `,
        code: `// Arayüz (Interface)
interface Ucan {
    void uc(); // Gövdesi yok
}

class Kus implements Ucan {
    @Override
    public void uc() {
        System.out.println("Kuş kanat çırparak uçuyor.");
    }
}

class BankaHesabi {
    private double bakiye; // Sarmalama (Encapsulation)

    public double getBakiye() {
        return bakiye;
    }

    public void paraYatir(double miktar) {
        if(miktar > 0) {
            bakiye += miktar;
            System.out.println("Para yatırıldı. Yeni bakiye: " + bakiye);
        } else {
            System.out.println("Geçersiz miktar!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankaHesabi hesap = new BankaHesabi();
        hesap.paraYatir(500); // Kontrollü erişim
        
        Kus minikKus = new Kus();
        minikKus.uc();
    }
}`,
        quizzes: [
            {
                question: "Aşağıdakilerden hangisi Sarmalamanın (Encapsulation) asıl amacıdır?",
                options: [
                    "Kodun çalışma hızını arttırmak",
                    "Sınıfın iç verilerini gizleyerek güvenliği ve kontrolü sağlamak",
                    "Sınıflar arası kalıtım yapmayı sağlamak",
                    "Arayüz (Interface) tanımlamak"
                ],
                correctIndex: 1,
                explanation: "Sarmalama, verileri (değişkenleri) private yaparak dışarıdan rastgele değiştirilmelerini engeller. Veri modifikasyonu sadece kontrollü metodlar (setter) üzerinden yapılır."
            },
            {
                question: "Java'da bir arayüzü (Interface) bir sınıfa uygulamak için hangi anahtar kelime kullanılır?",
                options: ["extends", "inherits", "implements", "interface"],
                correctIndex: 2,
                explanation: "'implements' kelimesi kullanılır. Bir sınıf, birden fazla arayüzü virgülle ayırarak aynı anda implement edebilir."
            },
            {
                question: "Arayüzler (Interfaces) ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
                options: [
                    "Arayüzlerden 'new' anahtar kelimesi ile nesne üretilemez.",
                    "Arayüzler sadece metod imzalarını barındırır (Java 8 öncesi için).",
                    "Bir sınıf sadece tek bir arayüzü implement edebilir.",
                    "Arayüzleri implement eden sınıflar, arayüzdeki metodları ezmek (override) zorundadır."
                ],
                correctIndex: 2,
                explanation: "Java'da bir sınıf sadece bir sınıftan miras (extends) alabilir ancak birden fazla arayüzü (interface) implements edebilir."
            },
            {
                question: "Nesne oluşturmaya gerek kalmadan, doğrudan Sınıfİsmi.MetodAdı() şeklinde çağrılabilen metodlara ne ad verilir?",
                options: ["Private metodlar", "Static metodlar", "Abstract metodlar", "Final metodlar"],
                correctIndex: 1,
                explanation: "Static anahtar kelimesi, değişkenin veya metodun sınıfa ait olduğunu belirtir. Nesne belleğe yüklenmeden önce bile static alanlar kullanılabilir durumdadır (Math.pow() gibi)."
            }
        ]
    },
    {
        id: 'polimorfizm',
        title: '6. ÇOK BİÇİMLİLİK (POLYMORPHISM)',
        icon: 'fa-people-group',
        content: `
            <h3>Çoklu İşlevler (Polymorphism)</h3>
            <p>Polimorfizm, "çok biçimlilik" anlamına gelir. OOP'nin en güçlü özelliklerinden biridir. Üst sınıfın referans değişkeninin (pointer), alt sınıflara ait nesneleri tutabilmesi ve çağrılan metodun <strong>çalışma zamanında (runtime)</strong> dinamik olarak doğru sınıfa yönlendirilmesidir.</p>
            
            <p>Örneğin elinizde bir <code>Sekil</code> listesi var. Bu listede hem <code>Daire</code> hem de <code>Kare</code> nesneleri var. Siz sadece <code>sekil.alanHesapla()</code> dediğinizde Java, nesne Daire ise dairenin, Kare ise karenin alan formülünü otomatik olarak çalıştırır. (Buna Dynamic Method Dispatch denir).</p>
        `,
        uml: `
        classDiagram
            Sekil <|-- Daire
            Sekil <|-- Kare
            class Sekil {
                +ciz()
            }
            class Daire {
                +ciz()
            }
            class Kare {
                +ciz()
            }
        `,
        code: `class Sekil {
    public void ciz() {
        System.out.println("Genel bir şekil çiziliyor.");
    }
}

class Daire extends Sekil {
    @Override
    public void ciz() {
        System.out.println("O yuvarlak bir daire!");
    }
}

class Kare extends Sekil {
    @Override
    public void ciz() {
        System.out.println("Kare çiziliyor (4 eşit kenar).");
    }
}

public class Main {
    public static void main(String[] args) {
        // Polimorfizm: Üst sınıf referansı, alt sınıf nesnesini tutuyor
        Sekil s1 = new Daire();
        Sekil s2 = new Kare();
        
        // Çalışma zamanında (Runtime) doğru metodlar çağrılır
        s1.ciz(); // Daire'nin ciz metodu çalışır
        s2.ciz(); // Kare'nin ciz metodu çalışır
    }
}`,
        quizzes: [
            {
                question: "Üst sınıf türünden bir referansın, çalışma zamanında alt sınıfın metodunu tetiklemesi mekanizmasına ne ad verilir?",
                options: ["Encapsulation", "Polymorphism (Dynamic Dispatch)", "Abstraction", "Static Binding"],
                correctIndex: 1,
                explanation: "Bu yapı Polymorphism (Çok biçimlilik) olarak adlandırılır. Hangi metodun çalışacağına derleme zamanında değil, çalışma zamanında (runtime) bellekteki nesnenin gerçek türüne bakılarak karar verilir."
            },
            {
                question: "Polimorfizm oluşturmak için aşağıdaki hangi iki kavramın bir arada kullanılması zorunludur?",
                options: [
                    "Kalıtım (Inheritance) ve Metod Yeniden Tanımlama (Overriding)",
                    "Sarmalama (Encapsulation) ve Kalıtım",
                    "Arayüz (Interface) ve Statik Metodlar",
                    "Aşırı Yükleme (Overloading) ve Private Değişkenler"
                ],
                correctIndex: 0,
                explanation: "Polimorfizmin gerçekleşmesi için sınıflar arası bir ata-çocuk ilişkisi (Kalıtım) ve çocuğun atadan gelen metodu kendisine göre özelleştirmesi (Overriding) gerekir."
            }
        ]
    },
    {
        id: 'nesne-yansimasi',
        title: '12. SINIF YANSIMASI (REFLECTION)',
        icon: 'fa-mirror',
        content: `
            <h3>Sınıf Yansıması (Reflection API) Nedir?</h3>
            <p>Java'da Reflection, bir programın çalışırken (Runtime) kendi kendisini incelemesini ve değiştirmesini sağlayan çok gelişmiş ve tehlikeli bir özelliktir.</p>
            <p>Normalde kod yazarken hangi sınıfı kullandığınızı bilirsiniz. Ancak Reflection ile ismini sadece bir <strong>String ("com.app.Araba")</strong> olarak bildiğiniz bir sınıfı çalışma zamanında belleğe yükleyebilir, içerisindeki private metodları bulabilir ve hatta onları zorla çalıştırabilirsiniz!</p>
            
            <h3>Nerelerde Kullanılır?</h3>
            <p>Spring Boot, Hibernate gibi büyük Framework'ler; IDE'lerin kod tamamlama (IntelliSense) özellikleri ve JUnit gibi test araçları tamamen Reflection kullanarak çalışır. Sizin yazdığınız sınıfları çalışma zamanında tarayıp üzerlerindeki @Autowired, @Test gibi notasyonları bulurlar.</p>
        `,
        uml: `
        classDiagram
            class Class {
                +getName()
                +getMethods()
                +getFields()
                +getConstructors()
            }
            note for Class "Java Reflection API'nin kalbi olan 'Class' nesnesi"
        `,
        code: `import java.lang.reflect.Method;

class GizliKutu {
    private void sirriSoyle() {
        System.out.println("Bu çok gizli bir metottur!");
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        GizliKutu kutu = new GizliKutu();
        
        // Kutu nesnesinin sınıf tipini (Class nesnesini) al
        Class<?> clazz = kutu.getClass();
        System.out.println("Sınıfın Adı: " + clazz.getName());
        
        // Reflection ile private metoda zorla erişiyoruz!
        Method metod = clazz.getDeclaredMethod("sirriSoyle");
        metod.setAccessible(true); // Private erişimi kırıyoruz!
        
        // Metodu kutu nesnesi üzerinde çalıştır (Invoke)
        metod.invoke(kutu);
    }
}`,
        quizzes: [
            {
                question: "Reflection API kullanarak çalışma zamanında (Runtime) aşağıdakilerden hangisi YAPILAMAZ?",
                options: [
                    "Bir sınıfın sahip olduğu metodların listesini çekmek",
                    "Sınıfın private değişkenlerinin değerini değiştirmek",
                    "Kodun derlenmeden (compile edilmeden) direkt makine koduna dönüşmesini sağlamak",
                    "İsmi String olarak verilen bir sınıfın nesnesini oluşturmak"
                ],
                correctIndex: 2,
                explanation: "Reflection, derleme ile ilgili bir araç değildir. Zaten derlenmiş (bytecode) olan sınıfların çalışma zamanında incelenmesi ve manipüle edilmesini sağlar."
            },
            {
                question: "Reflection'ın en büyük dezavantajı nedir?",
                options: [
                    "Yalnızca statik metodları çalıştırabilmesi",
                    "Çok fazla kod yazımına sebep olması",
                    "Sadece public metodları görebilmesi",
                    "Performans kaybı yaşatması ve güvenlik zaafiyetleri doğurabilmesi"
                ],
                correctIndex: 3,
                explanation: "Reflection, tip kontrolünü çalışma zamanında yaptığı için normal çağrılara göre çok daha yavaştır. Ayrıca private metodlara/değişkenlere dışarıdan müdahale edilmesine izin verdiği için OOP'nin Kapsülleme (Encapsulation) güvenliğini deler."
            }
        ]
    }
];

// Export for main.js
window.courseData = courseData;
