window.courseData.push({
    id: 'sarmalama',
    title: '5. SARMALAMA VE ARAYÜZLER',
    icon: 'fa-shield-halved',
    content: `
        <h3>Sarmalama (Encapsulation)</h3>
        <p>Nesnenin iç dünyasını (değişkenleri) dış dünyadan gizlemek ve korumaktır. Değişkenler <code>private</code> yapılır, onlara erişim <code>public getter ve setter</code> metodları ile kontrollü olarak sağlanır.</p>
        <pre><code class="language-java">class Kasa {
    private int sifre; // Gizli veri
    public void setSifre(int yeniSifre) { 
        if(yeniSifre > 0) this.sifre = yeniSifre; // Kontrollü erişim
    }
}</code></pre>
        
        <h3>Arayüz (Interface) ve Gerçekleştirilmesi</h3>
        <p>Arayüzler (Interfaces), sınıfların yapması "gereken" eylemleri tanımlayan sözleşmelerdir. Metodların sadece adları vardır, gövdeleri (kodları) yoktur.</p>
        <pre><code class="language-java">interface Yazdirilabilir {
    void yazdir(); // Gövdesiz metod
}
class Belge implements Yazdirilabilir {
    public void yazdir() { System.out.println("Yazdırılıyor..."); }
}</code></pre>
        
        <h3>Statik Değişken ve Metodlar</h3>
        <p><code>static</code> anahtar kelimesi, nesneye değil <strong>direkt olarak sınıfa</strong> ait olmayı sağlar. Nesne üretmeden <code>Math.pow()</code> gibi çağrılabilir.</p>
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
        Kus ..|> Ucan : Implements
        
        class BankaHesabi {
            -bakiye : double
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
    expectedOutput: `Para yatırıldı. Yeni bakiye: 500.0\nKuş kanat çırparak uçuyor.`,
    quizzes: [
        { q: "Sarmalama (Encapsulation) konseptinin asıl amacı nedir?", o: ["Sınıfın kalıtım almasını sağlamak", "Değişkenleri private yaparak verilere dışarıdan doğrudan müdahaleyi kesmek ve güvenliği sağlamak", "Sınıfın daha hızlı çalışmasını sağlamak", "Metodları gizlemek"], c: 1, e: "Encapsulation, nesnenin durumunu (verilerini) koruma altına alır. Kötü amaçlı veya yanlış tipteki verilerin (örn: eksi yaş) değişkene atanmasını setter metodlarıyla kontrol eder." },
        { q: "Java'da bir değişkeni 'private' yapmak ne anlama gelir?", o: ["Sadece o dosyadaki sınıflar erişebilir", "Sadece o sınıftan türeyen alt sınıflar erişebilir", "Hiçbir şekilde erişilemez", "Değişkene SADECE tanımlandığı sınıfın içerisindeki metodlardan erişilebilir"], c: 3, e: "'private' erişim belirleyicisi (Access Modifier), veriyi tamamen kendi sınıfının duvarları arasına hapseder." },
        { q: "Encapsulation'da verileri okumak ve değiştirmek için genellikle kullanılan standart metot çiftlerine ne ad verilir?", o: ["Reader / Writer", "Getter / Setter", "Input / Output", "Pusher / Puller"], c: 1, e: "Getter metotları veriyi okumak (döndürmek), Setter metotları ise veriyi koşullar dahilinde değiştirmek için kullanılır." },
        { q: "Bir Arayüz (Interface) içinde tanımlanan metodların Java 8 öncesindeki temel özelliği nedir?", o: ["Sadece public olabilirler ve kod gövdeleri ({ }) yoktur", "Private olmak zorundadırlar", "Statik olabilirler", "Kalıtılamazlar"], c: 0, e: "Geleneksel arayüzler sadece metod imzalarını (sözleşmeyi) belirler, metodun nasıl çalışacağına dair hiçbir kod barındırmazlar." },
        { q: "Bir sınıfın bir Arayüzü (Interface) sistemine dahil etmesi (uygulaması) için hangi kelime kullanılır?", o: ["extends", "includes", "implements", "inherits"], c: 2, e: "Sınıflar sınıfları 'extends' ile miras alırken, arayüzleri 'implements' anahtar kelimesi ile gerçekleştirirler." },
        { q: "Bir sınıf implements ettiği bir Arayüzün (Interface) metodlarını ne yapmak zorundadır?", o: ["Sadece ismini değiştirmek zorundadır", "Private yapmak zorundadır", "Sadece birini seçip yazmak zorundadır", "Arayüzdeki tüm gövdesiz metodları ezmek (Override) ve içlerini kodlamak zorundadır"], c: 3, e: "Arayüz bir sözleşmedir. Sözleşmeye imza atan (implements eden) sınıf, arayüzdeki her kuralı (metodu) yerine getirmekle yükümlüdür." },
        { q: "Statik (static) bir değişkenin normal bir değişkenden en büyük farkı nedir?", o: ["Değiştirilemez olması", "Sadece string alabilmesi", "Her nesneye değil, Sınıfa ait olması (Tüm nesneler için tek/ortak olması)", "Sadece private olması"], c: 2, e: "Static değişkenler RAM'de sınıf başına bir kez oluşturulur. Bir nesne static değişkeni değiştirirse, diğer tüm nesneler de o değişmiş değeri görür." },
        { q: "Java'da bir metodun statik (static) olması ne anlama gelir?", o: ["Daha yavaş çalışması", "Gövdesinin olmaması", "Nesne üretilmeden (new denilmeden) ClassName.methodName() şeklinde çağrılabilmesi", "Sadece sayısal değer döndürmesi"], c: 2, e: "Math.pow(), Math.sqrt() gibi metodlar statiktir. Bunları kullanmak için Math m = new Math() yapmanıza gerek yoktur." },
        { q: "Statik bir metodun içerisinden statik OLMAYAN (instance) bir değişkene doğrudan erişilebilir mi?", o: ["Evet, her zaman erişilir", "Hayır, erişilemez", "Sadece public ise erişilir", "Sadece aynı pakette ise erişilir"], c: 1, e: "Statik bir metod nesne var olmadan da çalışabildiği için, ortada olmayan bir nesnenin değişkenine erişemez. (Derleme hatası verir)." },
        { q: "Aşağıdakilerden hangisi bir 'Interface' tanımlamak için doğru bir sözdizimidir?", o: ["class public interface MyInterface {}", "interface MyInterface {}", "abstract class MyInterface {}", "static interface MyInterface {}"], c: 1, e: "'interface' anahtar kelimesi ile tanımlanır. İçindeki tüm metotlar varsayılan olarak 'public abstract' kabul edilir." },
        { q: "Java'da bir sınıfın 'final' olarak işaretlenmesiyle (final class), bir değişkenin 'final' olarak işaretlenmesi (final int) arasındaki fark nedir?", o: ["İkisi de aynı şeydir", "Final sınıf silinemez, final değişken silinebilir", "Final sınıf miras alınamaz, final değişkenin ise atandıktan sonra değeri değiştirilemez (sabit/constant olur)", "Final sınıf gizlidir, final değişken açıktır"], c: 2, e: "'final' sınıflar kısırlaştırılır (extends edilemez), 'final' değişkenler ise pi sayısı gibi sabitlenir." },
        { q: "Arayüzler (Interfaces) çoklu kalıtım problemini (Diamond Problem) nasıl çözer?", o: ["Problemi çözemezler", "Arayüzlerin metod gövdeleri olmadığı için, aynı isimli iki metod gelse bile hangi kodun çalışacağı karmaşası (çakışma) yaşanmaz", "Derleyiciyi kapatarak çözer", "Metotları silerek çözer"], c: 1, e: "İki farklı arayüzden aynı metot ismi (Örn: void ciz();) gelse dahi içleri boş olduğu için sınıf sadece bir tane ciz() metodu yazar ve çakışma (Elmas Problemi) yaşanmaz." },
        { q: "Bir setter metodu yazılırken dışarıdan gelen parametre ile sınıfın kendi değişkeninin isimleri aynıysa (örn: this.isim = isim), 'this' kelimesi kullanılmazsa ne olur?", o: ["Program çöker", "Variable Shadowing (Gölgeleme) olur ve değişken kendine atanır, sınıfın verisi değişmeden kalır", "Derleme hatası verir", "Otomatik olarak düzeltilir"], c: 1, e: "Lokal değişken, sınıf değişkenini gölgeler. 'this' kullanılmazsa lokal değişken kendi kendine eşitlenir ve nesnenin private alanı güncellenmez." },
        { q: "Aşağıdaki ifadelerden hangisi Abstract Sınıflar ve Interface'ler arasındaki farkı iyi açıklar?", o: ["Interface'ler değişken tutamaz, Abstract sınıflar tutabilir", "Bir sınıf birden fazla Abstract sınıfı extends edebilirken, sadece tek bir Interface implement edebilir", "Bir sınıf birden fazla Interface implement edebilirken, sadece BİR Abstract sınıf extends edebilir", "Aralarında hiçbir fark yoktur"], c: 2, e: "Java'da sınıflar için TEKLİ kalıtım (extends) kuralı geçerlidir. Ancak arayüzler (implements) için ÇOKLU bağlantı serbesttir." },
        { q: "Public, Private, Protected gibi erişim belirleyicilerinin genel adı nedir?", o: ["Class Types", "Access Modifiers (Erişim Belirleyiciler)", "Data Types", "Object States"], c: 1, e: "Bunlar Encapsulation (Sarmalama) konseptinin kalbi olan Access Modifiers'lardır." },
        { q: "Encapsulation, nesnenin hangi özelliğini kontrol altına almayı hedefler?", o: ["Sadece metodlarını", "Sadece statik değişkenlerini", "Durumunu (State / Variables)", "Hızını"], c: 2, e: "Nesnenin durumu (state) o an değişkenlerinde tuttuğu verilerdir. Sarmalama bu durumun kontrolsüzce bozulmasını (örn: eksi bakiye) engeller." },
        { q: "Bir nesnenin public getter metodunun döndürdüğü nesne, referans tipi (örn: ArrayList) ise güvenlik açığı (Encapsulation ihlali) nasıl oluşur?", o: ["Sistem yavaşlar", "Döndürülen referans üzerinden dışarıdaki bir kod orijinal listeye eleman ekleyip silebilir", "Listeler gizlenemez", "Derleyici engeller"], c: 1, e: "Nesne referansı direkt döndürülürse, dışarıdaki biri listeye .add() diyerek private verinizi bozabilir. Bu yüzden getter'larda genellikle verinin 'Kopyası' (Defensive Copy) döndürülür." },
        { q: "Arayüz (Interface) içerisine yazılan bir değişken varsayılan (default) olarak hangi özelliklere sahiptir?", o: ["private ve değişken", "public, static ve final (sabit)", "protected", "Sadece static"], c: 1, e: "Arayüzler state (durum) tutamaz. İçerisine yazılan her değişken otomatik olarak 'public static final' yani bir Sabit (Constant) haline gelir." },
        { q: "Main() metodu neden 'static' olmak zorundadır?", o: ["Hızlı olması için", "Değişkenlerinin gizli olması için", "Program başladığında henüz bellekte yaratılmış hiçbir nesne (object) olmamasına rağmen JVM'in metodu bulup çalıştırabilmesi için", "Diğer metotlardan ayrılması için"], c: 2, e: "Statik metotlar nesne var olmadan çağrılabilir. Java programı başlatıldığında bellekte nesne olmadığı için main metodu static olmaya mecburdur." },
        { q: "Singleton Tasarım Deseni'nin uygulanmasında statik öğelerin ve encapsulation'ın rolü nedir?", o: ["Hiç rolü yoktur", "Sınıfın Constructor'ı private yapılır ve tek bir nesne örneği 'static' bir değişkende tutularak tüm projeye o dağıtılır", "Tüm metotları silmeye yarar", "Kalıtımı iptal eder"], c: 1, e: "Singleton, projenin tamamında bir sınıftan sadece 1 adet nesne olmasını garanti eder. Bu da private kurucu ve public static getter ile sağlanır." }
    ]
});
