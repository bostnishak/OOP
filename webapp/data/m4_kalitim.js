window.courseData.push({
    id: 'kalitim',
    title: '4. KALITIM VE METOD AŞIRI YÜKLEME',
    icon: 'fa-sitemap',
    content: `
        <h3>Kalıtım (Inheritance) - "IS-A" İlişkisi</h3>
        <p>Bir sınıfın başka bir sınıfın özelliklerini ve metodlarını devralmasıdır. <code>extends</code> anahtar kelimesi ile yapılır. "Köpek BİR Hayvandır" (Dog IS-A Animal) ilişkisini kurar.</p>
        <pre><code class="language-java">class Hayvan { int yas; }
class Kedi extends Hayvan {
// Kedi sınıfı otomatik olarak 'yas' değişkenine sahip olur
}</code></pre>
        
        <h3>Metod Aşırı Yükleme (Method Overloading)</h3>
        <p>Aynı sınıf içerisinde <strong>aynı isme</strong> fakat <strong>farklı parametrelere</strong> (sayısı veya tipi farklı) sahip birden fazla metod tanımlamaktır. (Compile-time Polymorphism)</p>
        <pre><code class="language-java">void yazdir(int x) { System.out.println(x); }
void yazdir(String s) { System.out.println(s); } // Overload edildi</code></pre>

        <h3>Metodu Yeniden Tanımlama (Method Overriding)</h3>
        <p>Alt sınıfın (Child), üst sınıftan (Parent) miras aldığı bir metodu <strong>kendi ihtiyaçlarına göre değiştirmesi</strong> (ezmesi) işlemidir. Birebir aynı isim ve parametrelere sahip olmalıdır.</p>
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
    expectedOutput: `Int Toplam: 15\nDouble Toplam: 7.8\nMiyav!`,
    quizzes: [
        { q: "Java'da kalıtım sağlamak için hangi anahtar kelime kullanılır?", o: ["implements", "inherits", "extends", "super"], c: 2, e: "'extends' anahtar kelimesi, bir sınıfın diğerinden miras almasını sağlar." },
        { q: "Metod Overloading (Aşırı Yükleme) yapabilmek için metodların hangi özelliğinin kesinlikle farklı olması gerekir?", o: ["Metot İsimleri", "Dönüş Tipleri (Return Type)", "Parametre Sayısı veya Parametre Veri Tipleri", "Erişim Belirleyicileri (Public/Private)"], c: 2, e: "Sadece dönüş tipi farklı olan metotlar overload edilemez (Derleme hatası verir). Parametre imzası kesinlikle farklı olmalıdır." },
        { q: "Alt sınıfın üst sınıftaki bir metodu ezmesi (Overriding) işlemi için metodun hangi özellikleri aynı olmalıdır?", o: ["Sadece İsim", "Sadece Parametreler", "Hem İsim hem de Parametre imzası", "İsim aynı, dönüş tipi farklı"], c: 2, e: "Overriding (Yeniden tanımlama) yapılırken metot ismi ve parametre imzası ata sınıfla BİREBİR aynı olmalıdır." },
        { q: "Java'da bir sınıfın başka bir sınıfı miras almasını engellemek (Kısırlaştırmak) için sınıf tanımında hangi anahtar kelime kullanılır?", o: ["static", "final", "private", "const"], c: 1, e: "'final class' kelime grubu ile tanımlanan bir sınıftan miras alınamaz (Örn: java.lang.String sınıfı final'dır)." },
        { q: "Bir alt sınıfın yapıcı metodu (constructor) içerisinde, üst sınıfın yapıcı metodunu çağırmak için hangi anahtar kelime kullanılır?", o: ["this()", "parent()", "base()", "super()"], c: 3, e: "'super()' komutu ata sınıfın constructor'ına erişmek ve değişkenlerini set etmek için kullanılır." },
        { q: "Java'da bütün sınıfların gizli atası (en tepedeki sınıf) aşağıdakilerden hangisidir?", o: ["Object Sınıfı", "Main Sınıfı", "Class Sınıfı", "System Sınıfı"], c: 0, e: "Java'da kalıtım ağacının en tepesinde java.lang.Object sınıfı bulunur. Tüm sınıflar dolaylı olarak ondan miras alır." },
        { q: "Bir metodun üzerine yazılan '@Override' notasyonunun (Annotation) temel amacı nedir?", o: ["Metodu hızlandırmak", "Derleyiciyi (Compiler) uyarmak ve ata sınıfta böyle bir metod olup olmadığını kontrol ettirmek", "Metodu gizlemek", "Overloading yapıldığını bildirmek"], c: 1, e: "@Override zorunlu değildir ama yazıldığında derleyiciye ata sınıfta aynı imzayla bir metot olduğunu kontrol ettirir, typo hatalarını önler." },
        { q: "Alt sınıf (Subclass), üst sınıfın (Superclass) hangi öğelerine doğrudan erişemez?", o: ["Public metodlara", "Protected değişkenlere", "Private değişkenlere", "Paket içi (Default) öğelere"], c: 2, e: "Private öğelere, kendi alt sınıfları dahil sınıfın dışındaki HİÇBİR YERDEN erişilemez." },
        { q: "Java'da çoklu kalıtım (bir sınıfın iki sınıftan birden extends edilmesi) neden yasaktır?", o: ["Java çok eskilere dayandığı için", "Diamond (Elmas) Problemini (Aynı isimli metodun hangi atadan geleceği karmaşası) önlemek için", "Performansı düşürdüğü için", "Gereksiz olduğu için"], c: 1, e: "Java'da class A extends B, C yapılamaz. Bunun nedeni B ve C'de aynı isimli metot varsa hangisinin miras alınacağının belirsiz olmasıdır (Elmas Problemi)." },
        { q: "Bir alt sınıfta, üst sınıftan miras alınan bir değişken ile aynı isimde yeni bir değişken tanımlanmasına ne ad verilir?", o: ["Variable Shadowing (Değişken Gölgeleme)", "Variable Overriding", "Variable Overloading", "Variable Casting"], c: 0, e: "Buna Shadowing (gölgeleme) denir. Üst sınıfın değişkeni gizlenmiş olur, ona erişmek için 'super.degiskenAdi' kullanmak gerekir." },
        { q: "Metod Overloading'de derleyici hangi metodu çağıracağına ne zaman karar verir?", o: ["Derleme zamanında (Compile-time / Early Binding)", "Çalışma zamanında (Runtime / Late Binding)", "Sadece program ilk açıldığında", "Nesne silinirken"], c: 0, e: "Overloading (Aşırı yükleme) statiktir, derleyici parametrelere bakarak hangi metodun çalışacağına derleme zamanında karar verir." },
        { q: "Aşağıdaki Overloading denemelerinden hangisi GEÇERSİZDİR (Derleme hatası verir)?", o: ["void topla(int a) ve void topla(double a)", "void topla(int a, int b) ve void topla(int a)", "int topla(int a) ve double topla(int a)", "void topla(String a, int b) ve void topla(int a, String b)"], c: 2, e: "SADECE dönüş tiplerini (int -> double) değiştirmek overload sayılmaz. Java, çağrılırken hangi metodun kastedildiğini bilemez." },
        { q: "Kalıtım ilişkisi (IS-A) aşağıdaki hangi senaryo için UYGUNDUR?", o: ["Araba ve Motor", "Çalışan ve Maaş", "Kuş ve Papağan", "Kitap ve Sayfa"], c: 2, e: "Papağan BİR Kuştur (Parrot IS-A Bird). Diğer şıklar bileşim (HAS-A) ilişkisidir." },
        { q: "Aşağıdakilerden hangisi Object sınıfından miras gelen ve ezilmesi (override edilmesi) sıkça tavsiye edilen metotlardan biridir?", o: ["main()", "toString()", "print()", "delete()"], c: 1, e: "toString() metodu nesnenin referans adresi yerine anlamlı bir String temsilini yazdırmak için sınıflarda çok sık override edilir." },
        { q: "Bir sınıftan miras alınan metodu Override (Ezerken), yeni metodun erişim belirleyicisi (Access Modifier) hakkında hangi kural geçerlidir?", o: ["Erişim seviyesi daraltılamaz (örn: public bir metot private yapılamaz)", "Erişim seviyesi her zaman private olmalıdır", "Erişim seviyesi tamamen aynı kalmak zorundadır", "Daha dar bir seviye seçilmelidir"], c: 0, e: "Override edilen metotların görünürlüğü kısılamaz. Üst sınıfta protected olan bir metot alt sınıfta public yapılabilir, ancak private yapılamaz." },
        { q: "Bir 'abstract' (soyut) sınıftan miras alan normal (somut) bir sınıf ne yapmak ZORUNDADIR?", o: ["Onu sarmalamak zorundadır", "O sınıfın sadece yapıcı metodunu çağırmak zorundadır", "O sınıftaki tüm gövdesiz (abstract) metotları ezmek (override etmek) zorundadır", "O sınıftan nesne üretmek zorundadır"], c: 2, e: "Eğer bir sınıf abstract metot içeriyorsa, onu extends eden alt sınıflar bu metotların içini doldurmak (implement etmek) mecburiyetindedir." },
        { q: "'super' anahtar kelimesi metodlar dışında nerede kullanılır?", o: ["Sadece static bloklarda", "Sadece if koşullarında", "Sınıfın kendi değişkenlerine ulaşmak için", "Ata sınıftaki metotlara ve gölgelenmiş (shadowed) değişkenlere ulaşmak için"], c: 3, e: "'super.isim' atanın değişkenine, 'super.hesapla()' atanın orijinal metoduna ulaşmak için kullanılır." },
        { q: "Overloading ve Overriding'in Polimorfizm (Çok biçimlilik) ile ilişkisi nedir?", o: ["Her ikisi de polimorfizm ile alakasızdır.", "Overloading Compile-Time (Statik), Overriding ise Run-Time (Dinamik) Polimorfizmdir.", "Overloading dinamik, overriding statiktir.", "Her ikisi de sadece arayüzlerde çalışır."], c: 1, e: "Aşırı yükleme derleme zamanında çözülen statik çok biçimlilik, yeniden tanımlama ise çalışma zamanında nesne türüne göre çözülen dinamik çok biçimliliktir." },
        { q: "Java'da kurucu metotlar (Constructor) miras alınır mı?", o: ["Hayır, kalıtımla alt sınıfa geçmezler.", "Evet, tamamen miras alınırlar.", "Sadece parametresiz olan miras alınır.", "Evet ama kullanılamazlar."], c: 0, e: "Constructors (Kurucular) miras ALINMAZLAR. Alt sınıf kendi kurucusunu yazmalı ve içinden 'super()' ile ata sınıfın kurucusunu tetiklemelidir." },
        { q: "Bir sınıf aynı anda hem 'extends' hem de 'implements' anahtar kelimelerini kullanabilir mi?", o: ["Hayır, sadece biri", "Evet, örn: class A extends B implements C, D", "Evet, ama implements önce yazılmalıdır", "Sadece abstract ise kullanabilir"], c: 1, e: "Java'da bir sınıf bir sınıftan miras alırken aynı anda birden fazla arayüzü de (interface) uygulayabilir." }
    ]
});
