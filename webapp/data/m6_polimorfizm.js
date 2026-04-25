window.courseData.push({
    id: 'polimorfizm',
    title: '6. ÇOK BİÇİMLİLİK VE REFLECTION',
    icon: 'fa-people-group',
    content: `
        <h3>Çoklu İşlevler (Polymorphism)</h3>
        <p>Polimorfizm, "çok biçimlilik" anlamına gelir. OOP'nin en güçlü özelliklerinden biridir. Üst sınıfın referans değişkeninin (pointer), alt sınıflara ait nesneleri tutabilmesi ve çağrılan metodun <strong>çalışma zamanında (runtime)</strong> dinamik olarak doğru sınıfa yönlendirilmesidir.</p>
        <p>Örneğin elinizde bir <code>Sekil</code> listesi var. Siz sadece döngüyle <code>sekil.alanHesapla()</code> dediğinizde Java; nesne Daire ise dairenin, Kare ise karenin formülünü otomatik çalıştırır. Buna Dynamic Method Dispatch denir.</p>
        <pre><code class="language-java">Sekil s1 = new Daire();
Sekil s2 = new Kare();
s1.ciz(); // Daire sınıfının metodu çalışır!
s2.ciz(); // Kare sınıfının metodu çalışır!</code></pre>

        <h3>Sınıf Yansıması (Reflection API)</h3>
        <p>Java'da Reflection, bir programın çalışırken (Runtime) kendi kendisini incelemesini ve değiştirmesini sağlayan çok gelişmiş bir özelliktir. İsmini String olarak bildiğiniz bir sınıfı yükleyebilir, private değişkenlerini kırabilirsiniz.</p>
        <pre><code class="language-java">// Reflection ile Private metoda erişme örneği
Class clazz = GizliSinif.class;
Method m = clazz.getDeclaredMethod("sifreyiVer");
m.setAccessible(true); // GÜVENLİK İHLALİ!
m.invoke(new GizliSinif());</code></pre>
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
    public void ciz() { System.out.println("Genel şekil çiziliyor."); }
}

class Daire extends Sekil {
    @Override
    public void ciz() { System.out.println("Daire çiziliyor."); }
}

class Kare extends Sekil {
    @Override
    public void ciz() { System.out.println("Kare çiziliyor."); }
}

public class Main {
    public static void main(String[] args) {
        // POLİMORFİZM: Üst sınıf referansı alt sınıfı tutar
        Sekil s1 = new Daire();
        Sekil s2 = new Kare();
        
        s1.ciz(); // Run-time'da Daire'nin ciz() i bulunur
        s2.ciz(); // Run-time'da Kare'nin ciz() i bulunur
        
        // REFLECTION (Mini Örnek)
        Class<?> clazz = s1.getClass();
        System.out.println("S1'in Gerçek Sınıfı: " + clazz.getName());
    }
}`,
    expectedOutput: `Daire çiziliyor.\nKare çiziliyor.\nS1'in Gerçek Sınıfı: Daire`,
    quizzes: [
        { q: "Çok Biçimlilik (Polymorphism) nedir?", o: ["Sınıfların şifrelenmesi", "Aynı arayüzü veya üst sınıfı kullanan farklı nesnelerin, aynı metoda farklı tepkiler (kodlar) vermesi yeteneğidir", "Birden fazla değişken atanmasıdır", "Veritabanına çoklu kayıt girmektir"], c: 1, e: "Polymorphism sayesinde bir 'Hayvan' referansına 'Kedi' atadığınızda sesCikar() metodu kediye göre çalışır." },
        { q: "Dinamik Çok Biçimlilik (Dynamic / Runtime Polymorphism) hangi mekanizma ile sağlanır?", o: ["Metod Overloading (Aşırı Yükleme)", "Encapsulation (Sarmalama)", "Metod Overriding (Yeniden Tanımlama)", "Static Değişkenler"], c: 2, e: "Dinamik polimorfizm, alt sınıfın ata metodunu Override etmesi ve Java'nın çalışma zamanında gerçek nesnenin türünü bulup o metodu çalıştırmasıyla olur." },
        { q: "Polimorfik bir atama olan 'Hayvan h = new Kedi();' işleminde 'Hayvan' ve 'Kedi' terimleri sırasıyla nedir?", o: ["Referans Türü ve Nesne Türü", "Nesne Türü ve Referans Türü", "Değişken ve Metot", "Class ve Interface"], c: 0, e: "'Hayvan', derleyicinin gördüğü Referans (Pointer) tipidir. 'new Kedi()' ise Heap bellekte gerçekten yaratılan Nesnenin (Object) tipidir." },
        { q: "Dynamic Method Dispatch (Dinamik Metot Çağrımı) kavramı ne zaman gerçekleşir?", o: ["Derleme sırasında (Compile Time)", "Program kapatılırken", "Çalışma zamanında (Run Time)", "Kullanıcı veri girerken"], c: 2, e: "Derleyici 'h.sesCikar()' kodunu sadece onaylar. O nesnenin gerçekten bir Kedi mi yoksa Köpek mi olduğunu JVM (Çalışma Zamanı) anlar." },
        { q: "Eğer 'Kedi' sınıfı, 'Hayvan' sınıfında OLMAYAN 'tirmala()' adında özel bir metoda sahipse, 'Hayvan h = new Kedi();' referansı üzerinden 'h.tirmala()' çağrılabilir mi?", o: ["Evet, sorunsuz çalışır", "Hayır, derleme hatası verir", "Sadece if ile kontrol edilirse çalışır", "Metot public ise çalışır"], c: 1, e: "Derleyici sadece referansın türüne (Hayvan) bakar. Hayvan sınıfında 'tirmala()' olmadığı için hata verir. Bu metodu çağırmak için referansı aşağı doğru (Downcasting) dönüştürmek gerekir." },
        { q: "Polimorfizm kullanmanın yazılım mimarisine en büyük katkısı nedir?", o: ["Programı çok hızlandırması", "If-Else veya Switch-Case bloklarına (Tip kontrolüne) gerek kalmadan, kodun yeni sınıflara otomatik adapte olabilmesi (Genişletilebilirlik)", "Belleği temizlemesi", "Arayüz tasarımını yapması"], c: 1, e: "Yeni bir şekil (örn: Üçgen) eklediğinizde sadece class Uçgen extends Sekil yazarsınız. Ana programdaki 'sekil.ciz()' döngüsünü hiç değiştirmeniz gerekmez (Open-Closed Prensibi)." },
        { q: "Upcasting (Yukarı Dönüştürme) kavramı aşağıdakilerden hangisidir?", o: ["Alt sınıf nesnesinin üst sınıf referansına atanması (Örn: Object o = new String();)", "Üst sınıf nesnesinin alt sınıfa zorlanması", "Sayısal değerlerin dönüştürülmesi", "Nesnenin silinmesi"], c: 0, e: "Alt sınıflar her zaman güvenle üst sınıflarına atanabilir, buna Upcasting denir ve Java bunu otomatik yapar." },
        { q: "Downcasting (Aşağı Dönüştürme) yapılırken güvenliği sağlamak için kullanılan, nesnenin gerçek tipini sorgulayan operatör hangisidir?", o: ["typeof", "instanceof", "isA", "castType"], c: 1, e: "'if (obj instanceof Kedi)' ifadesi, o referansın bellekte gerçekten bir kedi tutup tutmadığını kontrol eder. Böylece ClassCastException hataları önlenir." },
        { q: "Reflection API'nin temel tanımı nedir?", o: ["Grafik motoru kütüphanesidir", "Veritabanı bağlantı aracıdır", "Programın çalışırken (Runtime) kendi sınıflarını, metotlarını ve değişkenlerini inceleyebilmesi ve müdahale edebilmesidir", "Ekran yansıması yapmasıdır"], c: 2, e: "Reflection ile bir sınıfın adını String olarak kullanarak iç yapısını okuyabilir ve çalıştırabilirsiniz." },
        { q: "Aşağıdakilerden hangisi Java Reflection API'nin 'Kalbi' veya 'Giriş Kapısı' olarak nitelendirilen, sınıf bilgilerini tutan nesnedir?", o: ["Method nesnesi", "Field nesnesi", "Class nesnesi (java.lang.Class)", "String nesnesi"], c: 2, e: "Sınıfın aynasını (yansımasını) elde etmek için önce o sınıfa ait 'Class' objesine (.getClass() veya ClassName.class ile) erişmeniz gerekir." },
        { q: "Reflection API'nin getirdiği en büyük güvenlik riski nedir?", o: ["Sistemi yavaşlatması", "Virüs indirmesi", "'private' olarak işaretlenmiş değişkenlere ve metotlara dışarıdan müdahale edilebilmesi ve değiştirilebilmesi", "Dosyaları silmesi"], c: 2, e: "setAccessible(true) fonksiyonu kullanılarak OOP'nin temel kuralı olan Sarmalama (Encapsulation) delinebilir." },
        { q: "Aşağıdakilerden hangisi Reflection kullanılarak YAPILAMAZ?", o: ["Bir sınıfın ismini String olarak okuyup ondan nesne üretmek", "Bir nesnenin tüm private değişkenlerinin değerini okumak", "Kodun derlenme (Compile) aşamasında syntax (yazım) hatasını otomatik düzeltmek", "Sınıfın içerdiği kurucu (constructor) metodları listelemek"], c: 2, e: "Reflection çalışma zamanında (Runtime) devrede olan bir araçtır. Kod yazımındaki (Compile Time) eksik noktalı virgül gibi hataları düzeltemez." },
        { q: "Spring, Hibernate, JUnit gibi devasa Java Framework'leri neden perde arkasında bolca Reflection kullanır?", o: ["Daha hızlı oldukları için", "Geliştiricilerin yazdığı @Autowired, @Entity gibi Annotation'ları (Notasyonları) okuyup dinamik nesne üretmek ve bağlamak için", "Görsellik kattığı için", "Java'nın zorunluluğu olduğu için"], c: 1, e: "Framework'ler sizin yazdığınız sınıfları önceden bilemez. Uygulama çalışınca tüm sınıfları Reflection ile tarar ve sihirli bir şekilde yönetir." },
        { q: "Polimorfizm'in Statik (Derleme zamanı) versiyonuna ne ad verilir?", o: ["Overriding", "Dynamic Dispatch", "Metod Aşırı Yükleme (Overloading)", "Encapsulation"], c: 2, e: "Overloading, aynı metot isminin farklı parametrelerle kullanılmasıdır ve hangi metot formunun çağrılacağı derleyici tarafından derleme anında bilinir." },
        { q: "Reflection işlemi yaparken performansı nasıl etkiler?", o: ["Son derece artırır", "Hiç etkilemez", "Normal metod çağrılarına göre çok daha yavaş çalışır ve maliyetlidir", "Sadece belleği etkiler, hızı etkilemez"], c: 2, e: "Reflection, tip güvenliğini çalışma anında doğruladığı ve optimizasyonları pas geçtiği için klasik 'nesne.metot()' kullanımına göre ciddi performans kaybı yaşatır." },
        { q: "Class.forName(\"com.example.Veritabani\"); kodu ne işe yarar?", o: ["Sınıfın adını değiştirir", "Sınıfı siler", "Parametre olarak verilen String isimli sınıfı belleğe dinamik olarak yükler", "Hata fırlatır"], c: 2, e: "Bu, sınıfların kodun içine sert bir şekilde (hardcode) gömülmeden (örn: ayarlardan okunan metinlerle) belleğe yüklenmesini (Dynamic Class Loading) sağlayan harika bir Reflection özelliğidir." },
        { q: "Aşağıdaki operatörlerden hangisi Polimorfik atamada geçersiz tür dönüşümlerini engellemek için kod içinde 'If' şartı ile kullanılır?", o: ["typeof", "==", "instanceof", "is"], c: 2, e: "if (obj instanceof String) kalıbı, obj referansının Heap'teki gerçek nesnesinin String olup olmadığını sorgular." },
        { q: "Java'daki 'Object' sınıfı Polimorfizm açısından neden çok önemlidir?", o: ["Sadece string tuttuğu için", "Tüm sınıflar Object'ten türediği için 'Object' tipinde bir dizi veya değişken yaratarak İSTİSNASIZ her şeyi içinde tutabilirsiniz", "Hızlı olduğu için", "Main metodu içerdiği için"], c: 1, e: "Object obj = new Araba(); veya Object obj = new Scanner(); yapabilirsiniz. En tepedeki ata olduğu için mutlak polimorfizm sağlar." },
        { q: "Polimorfik yapılarda Late Binding (Geç Bağlama) neyi ifade eder?", o: ["İnternet bağlantısını", "Metodun gövdesi ile metot çağrısının arasındaki bağın, kod çalışıp nesne yaratılana kadar kurulamamasını", "Derlemenin yavaşlamasını", "Metodun en son yazılmasını"], c: 1, e: "Late Binding, Overriding (ezilmiş) metotlarda devreye girer. Hangi metot bloğunun çalışacağı run-time'da belli olur." },
        { q: "Bir Method nesnesini (Reflection ile elde edilmiş) zorla çalıştırmak için kullanılan fonksiyon aşağıdakilerden hangisidir?", o: ["start()", "run()", "invoke()", "execute()"], c: 2, e: "method.invoke(obj, arg1, arg2) fonksiyonu, Reflection dünyasında o metodu obj nesnesi üzerinde tetiklemek için kullanılır." }
    ]
});
