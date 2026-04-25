window.courseData.push({
    id: 'siniflar-ve-nesneler',
    title: '2. SINIFLAR, NESNELER VE BİLEŞİM',
    icon: 'fa-cube',
    content: `
        <h3>Sınıflar (Classes) ve Nesneler (Objects)</h3>
        <p><strong>Sınıf:</strong> Nesnelerin üretildiği bir kalıptır (Blueprint). Örneğin "Araba Fabrikasındaki Üretim Planı" bir sınıftır.</p>
        <p><strong>Nesne:</strong> O kalıptan üretilmiş, bellekte yer kaplayan somut varlıktır. Üretim planından çıkan kırmızı Ferrari bir nesnedir.</p>
        <pre><code class="language-java">// Sınıf Tanımı
class Kopek {
    String isim;
    public void havla() {
        System.out.println(isim + " havlıyor!");
    }
}
// Nesne Üretimi
Kopek k1 = new Kopek();
k1.isim = "Karabaş";
k1.havla();
</code></pre>
        
        <h3>Bileşim (Composition) - "Has-A" İlişkisi</h3>
        <p>Bileşim, bir sınıfın başka bir sınıfın nesnesini özellik olarak barındırmasıdır. Araba bir motora "sahiptir" (Car HAS-A Engine).</p>
        <pre><code class="language-java">class Motor {
    public void calis() { System.out.println("Motor çalıştı"); }
}
class Araba {
    Motor m = new Motor(); // Araba motora sahip (Composition)
}</code></pre>
        
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
        engine = new Engine(); // Nesne oluşturulurken motor da üretilir
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
    expectedOutput: `Anahtar çevrildi...\nMotor ateşlendi. Vrum vrum!`,
    quizzes: [
        { q: "Bir nesnenin bellekte oluşturulmasını sağlayan Java anahtar kelimesi nedir?", o: ["class", "create", "new", "object"], c: 2, e: "'new' anahtar kelimesi, belleğin Heap bölgesinde yeni bir nesne için yer ayrılmasını ve sınıfın yapıcı (constructor) metodunun çağrılmasını sağlar." },
        { q: "Bir sınıfın içerisinde başka bir sınıfın nesnesini değişken olarak tutmaya ne ad verilir?", o: ["Kalıtım (Inheritance)", "Çok Biçimlilik (Polymorphism)", "Sarmalama (Encapsulation)", "Bileşim (Composition)"], c: 3, e: "Bileşim (Composition) 'sahip olma' (HAS-A) ilişkisidir. Bir bilgisayarın işlemciye (CPU) sahip olması bileşime örnektir." },
        { q: "Sınıf (Class) ve Nesne (Object) arasındaki ilişkiyi en iyi açıklayan ifade hangisidir?", o: ["Sınıf kalıp (blueprint), nesne ise o kalıptan çıkan somut üründür.", "Sınıf bir hafıza bölgesidir, nesne fonksiyondur.", "Her ikisi de tamamen aynı şeydir.", "Nesne kalıptır, sınıf ise kopyasıdır."], c: 0, e: "Sınıf sadece kavramsal bir tanımlamadır. Nesne ise bu tanımlamadan yola çıkılarak bellekte oluşturulan gerçek varlıktır." },
        { q: "Bir nesnenin yaratılması sırasında otomatik olarak çağrılan ve sınıf adıyla aynı isme sahip metoda ne ad verilir?", o: ["Destructor", "Main", "Constructor (Yapıcı Metod)", "Getter"], c: 2, e: "Constructor, nesne ilk 'new' ile yaratılırken çalışan, genellikle başlangıç (init) değerlerini atayan özel bir metoddur." },
        { q: "Bileşim (Composition) ilişkisi OOP tasarımında genellikle hangi kelime grubu ile anılır?", o: ["IS-A (Bir ...dir)", "HAS-A (Bir ...e sahiptir)", "USES-A (Kullanır)", "BEHAVES-AS (Davranır)"], c: 1, e: "Composition her zaman 'HAS-A' ilişkisidir. Araba bir Motora SAHİPTİR (Car HAS-A Engine)." },
        { q: "Nesneler arası iletişim mekanizmasına ne ad verilir?", o: ["Kalıtım", "Mesaj Gönderme (Message Passing)", "Polimorfizm", "Sarmalama"], c: 1, e: "Bir nesnenin diğer bir nesnenin public metodunu çağırması işlemine OOP literatüründe 'Mesaj Gönderme' denir." },
        { q: "Aşağıdakilerden hangisi bir Sınıf (Class) ismi olmak için Java standartlarına en uygundur?", o: ["ogrenciKayıt", "1nciSinif", "OgrenciIslemleri", "Ogrenci_İşlemleri_Yap()"], c: 2, e: "Sınıf isimleri PascalCase (İlk harfi ve kelime başları büyük) olmalı ve rakamla başlamamalıdır. 'OgrenciIslemleri' en doğrusudur." },
        { q: "Heap (Yığın) bellekte sahipsiz kalan (referansı kopan) nesneleri kim temizler?", o: ["Programcı", "Garbage Collector (Çöp Toplayıcı)", "İşletim Sistemi", "Harddisk"], c: 1, e: "Java'da C++'ın aksine bellek temizliği otomatik yapılır. Artık kullanılmayan nesneleri JVM içerisindeki Garbage Collector temizler." },
        { q: "Bir metoda aynı sınıfa ait birden fazla nesne gönderildiğinde, metodun hangi nesne için çalıştığını belirtmek için hangi anahtar kelime kullanılır?", o: ["this", "super", "that", "static"], c: 0, e: "'this' anahtar kelimesi o an üzerinde işlem yapılan (aktif olan) nesneyi işaret eder." },
        { q: "UML Sınıf diyagramlarında bileşim (Composition) ilişkisi nasıl gösterilir?", o: ["İçi boş üçgen", "İçi dolu elmas (baklava dilimi)", "Kesik çizgi", "Düz çizgi"], c: 1, e: "Composition içi dolu (siyah) bir elmas şekliyle gösterilir. Sıkı bir bağdır (Bütün yok olursa parça da yok olur)." },
        { q: "Aşağıdakilerden hangisi Java'da Primitive (İlkel) bir veri tipidir?", o: ["String", "Araba", "int", "Scanner"], c: 2, e: "int, double, char, boolean gibi tipler ilkeldir ve nesne değillerdir (stack'te tutulurlar). String ve kendi yazdığımız sınıflar referans tiptir." },
        { q: "İki sınıf arasında 'Aggregation' (Birleştirme - İçi boş elmas) ilişkisi varsa ne anlama gelir?", o: ["Kalıtım vardır", "Parça, bütünden bağımsız yaşayabilir (Örn: Sınıf ve Öğrenci)", "Parça bütünsüz yaşayamaz", "Metod aşırı yüklenmiştir"], c: 1, e: "Aggregation, Composition'ın daha gevşek halidir. Okul yıkılsa bile Öğrenci varlığını sürdürebilir." },
        { q: "Aşağıdakilerden hangisi bir nesnenin davranışını (behavior) temsil eder?", o: ["Metodlar", "Değişkenler", "Paketler", "Sınıf ismi"], c: 0, e: "Nesnelerin eylemleri (davranışları), sınıf içerisine yazılan metodlar ile belirlenir." },
        { q: "Bir sınıftan kaç adet nesne türetilebilir?", o: ["1", "İşletim sistemi limitleri dahilinde sınırsız", "100", "Bileşim sayısına göre değişir"], c: 1, e: "Bir sınıf (kalıp) üzerinden RAM'iniz dolana kadar sınırsız sayıda 'new' kelimesi ile nesne yaratabilirsiniz." },
        { q: "Aşağıdaki kodda 'x' nedir? -> Araba x = new Araba();", o: ["İlkel değişken", "Referans (İşaretçi) değişken", "Sınıfın kendisi", "Metod parametresi"], c: 1, e: "'x' objenin kendisi değil, objenin bellekteki yerini (adresini) tutan bir referans değişkendir." },
        { q: "Bir nesneyi silmek için Java'da C++'taki gibi 'delete' veya 'free' kelimeleri kullanılır mı?", o: ["Evet", "Sadece abstract sınıflar için", "Hayır, referansı null yapmak yeterlidir (GC siler)", "Her zaman zorunludur"], c: 2, e: "Java bellek yönetimini otomatik yapar. Bir nesnenin referansını kestiginizde (örn: x = null) Garbage Collector onu uygun zamanda yok eder." },
        { q: "Kapsüllemenin (Sarmalama) sınıflarla olan temel ilgisi nedir?", o: ["Sınıfları siler", "Sınıfın içindeki verileri dış nesnelerden korur", "Birden fazla sınıf oluşturur", "Arayüzleri iptal eder"], c: 1, e: "Sınıf içindeki değişkenleri private yaparak, o nesnenin dışarıdan yanlış bir veriye maruz kalmasını engelleriz." },
        { q: "Constructor (Yapıcı Metod) ne döndürür?", o: ["int", "void", "String", "Hiçbir şey döndürmez (void bile yazılmaz)"], c: 3, e: "Yapıcı metodların bir geri dönüş tipi yoktur, başına 'void' dahil hiçbir şey yazılmaz. Sadece sınıf adıyla aynı olmak zorundadır." },
        { q: "Statik değişkenlerin (static variables) nesnelerle olan ilişkisi nedir?", o: ["Her nesneye özel kopyalanırlar", "Nesnelere ait DEĞİLDİR, Sınıfa aittir ve tüm nesneler için ortaktır", "Nesne silinince statik değişken de silinir", "Sadece main metodunda kullanılırlar"], c: 1, e: "Static değişkenler tekildir, sınıfa aittir. Bir nesne onu değiştirirse, diğer tüm nesneler için de değişmiş olur." },
        { q: "Hangisi geçerli bir nesne kopyalama (klonlama) yöntemi sayılır?", o: ["a = b diyerek atama yapmak", "Cloneable arayüzünü implement edip clone() metodunu ezmek", "Sınıfın ismini değiştirmek", "Static metod kullanmak"], c: 1, e: "Sadece a=b demek nesneyi değil referansı kopyalar. Gerçek kopya için Deep Copy algoritmaları veya clone() metodu kullanılır." }
    ]
});
