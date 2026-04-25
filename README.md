# OOP in JAVA - Interaktif Egitim Platformu

Java dilinde Nesne Yonelimli Programlama (Object-Oriented Programming - OOP) temellerini ogretmek amaciyla gelistirilmis, modern web teknolojileri ile insa edilmis profesyonel bir egitim platformudur. 

## Proje Ozeti

Bu platform, ogrencilerin OOP kavramlarini sadece teorik olarak degil; gorsel UML diyagramlari, interaktif Java kod simule edicisi ve aciklamali sinav motoru ile pratik yaparak ogrenmesini hedefler. Geleneksel ve karmasik masaustu uygulamalarinin aksine, hicbir kurulum gerektirmeden dogrudan tarayici uzerinden calisir. Modern "Glassmorphism" tasarim dili kullanilarak karanlik tema (Dark Mode) uzerine insa edilmistir.

## Temel Ozellikler

*   **Kapsamli Mufredat:** Programlama Paradigmalarindan baslayip, Siniflar, UML, Kalitim, Sarmalama, Polimorfizm ve Sınıf Yansimasi (Reflection) konularini iceren 6 ana modul.
*   **Gelisitirilmis Sinav Motoru (Quiz Engine):** Her modul icin ozel olarak hazirlanmis 20 adet, toplamda 120 soruluk devasa bir veritabani. Yanlis cevaplarda dogru cevabin mantigini anlatan detayli geri bildirim sistemi.
*   **Dinamik UML Diyagramlari:** Mermaid.js altyapisi ile her konunun mimarisini aciklayan interaktif Sınıf (Class) ve Siralama (Sequence) diyagramlari.
*   **Kod Editoru ve Simulator:** Prism.js entegrasyonu sayesinde VSCode benzeri syntax renklendirmesi. Ayrica yazilan ornek kodlarin gercek zamanli konsol ciktilarini (output) gosteren calistirma simulatoru.
*   **Premium UI/UX:** Kilitlenmeyen (scrollable) bagimsiz paneller, puruzsuz gecis animasyonlari ve neon vurgularla desteklenmis cam efekti tasarimi.

## Nasil Calistirilir?

Proje herhangi bir sunucu (backend) veya veritabani kurulumu gerektirmez. Calistirmak icin asagidaki adimlari izlemeniz yeterlidir:

1.  Projeyi bilgisayariniza indirin veya klonlayin.
2.  `webapp` klasorunun icerisine girin.
3.  `index.html` dosyasina cift tiklayarak Chrome, Firefox, Safari veya Edge gibi modern bir tarayicida acin.

## Teknolojiler

*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Kutuphaneler:** 
    *   **Prism.js:** Kod renklendirmesi (Syntax Highlighting) icin.
    *   **Mermaid.js:** UML diyagramlarinin kod uzerinden cizimi icin.
    *   **FontAwesome:** Modern arayuz ikonlari icin.
    *   **Google Fonts:** Poppins ve Fira Code tipografileri icin.
*   **Mimari:** Moduler veri yonetimi (Her dersin verisi `data/` klasoru altinda bagimsiz JavaScript objeleri olarak tutulmaktadir).

## Modul Icerikleri

1.  Programlama Paradigmalari
2.  Siniflar, Nesneler ve Bilesim (Composition)
3.  UML'ye Giris ve Diyagramlar
4.  Kalitim (Inheritance) ve Metod Asiri Yukleme (Overloading/Overriding)
5.  Sarmalama (Encapsulation) ve Arayuzler (Interfaces)
6.  Cok Bicimlilik (Polymorphism) ve Sinif Yansimasi (Reflection)