public class Main {
    public static void main(String[] args) {
        Student student = new Student("Ahmet", 20);
        student.bilgileriGoster();
    }
}

class Student {
    String isim;
    int yas;

    public Student(String isim, int yas) {
        this.isim = isim;
        this.yas = yas;
    }

    public void bilgileriGoster() {
        System.out.println("Öğrenci Adı: " + isim);
        System.out.println("Öğrenci Yaşı: " + yas);
    }
}
