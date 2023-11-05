# Frontend Challenge | b2b-ndcui

Proje Açıklaması: Bu proje, uçak bileti alımı senaryosunu simüle etmek amacıyla oluşturulmuştur. Geliştirme için Vite kullanılmış olup, React ve TypeScript çerçevesinde bir Single Page Application (SPA) geliştirilmiştir.

## Kriterler

- [x] Uygulama SPA olmalıdır.
- [x] React, Typescript, Vite ve Tailwind configurasyonları yapılarak geliştirme yapılmalır.
- [ ] Unit test yazılması.
- [x] En az 3 ayrı sayfa içermelidir. ( Uçuş sorgulama, Uçuş listeleme, Kabin seçimi)

- **Uçuş sorgulama sayfası**
  - [x] Tarih alanında herhangi bir işlem yapılmayacaktır. Görsel olarak eklenmesi yeterlidir.
  - [x] Kalkış ve varış noktaları paylaşılan jsonda ki noktalar olduğunda uçuş listeleme sayfasının açılması beklenmektedir.
  - [x] Jsonda yer almayan kalkış ve varış noktaları denendiğinde uçuş listeleme sayfasının açılmaması beklenmektedir.
- **Uçuş Listeleme sayfası**
  - [x] Uçuş Listeleme Sayfası default olarak açıldığında uçuşları eco fly ücretlerine göre sıralanması beklenmektedir.
  - [x] Sıralama kriteri değiştirildiğinde listelemede ki değişimin gözlemlenmesi beklenmektedir.
  - [x] **Promosyon kodu aktif olduğunda**.
  - [x] Eco fly harici tüm economy – business kabinlerde uçuşu seç butonları disable olmalıdır.
  - [x] Eco fly paketlerde %50 indirim uygulanmalıdır.
- **Kabin Seçimi sayfası**

  - [x] **Economy-Business kabinlerinin altındaki paketlerden herhangi birinin uçuşu seç butonuna tıklandığında**
  - [x] status=available ise kabin seçimi tamamlandı,
  - [x] Status=error ise kabin seçimi tamamlanamadı şeklinde tasarıma uygun görüntülenebilmesi beklenmektedir.

- **Stiller**
- [x] Uçuş Sorgulama Sayfası: background-color -> sky-900
- [x] Uçuş Sorgulama Sayfası kalkış-varış seçim alanı -> background-color: gray-400 opacity 60%;
- [x] Uçuşu Seç button color -> background-color: red-500 ;
- [x] Uçuş Listeleme Sayfası shadow -> box-shadow: 0 4px 8px 0 rgba(0,0,0,.05)
- [x] Uçuş Listeleme Sayfası paket header color -> background-color: #f9f9f9;

## Teknolojiler

- React
- TypeScript
- Redux Toolkit
- React Router
- Vite
- Jest
- Tailwind CSS

#### React & TypeScript

Uygulama React ve TypeScript kullanarak geliştirildi. Ayrıca projenin geliştirme ortamı olarak Vite kullanıldı. Uygulama, mümkün olduğunca dışardan farklı kütüphaneleri kullanmaksızın özel React bileşenleri ve özel hook'lar geliştirildi. Ayrıca form doğrulamaları ve benzeri işlemler saf React kullanılarak gerçekleştirildi.

Projede ayrıca sayfa yönetimi için React Router DOM'un en güncel sürümü kullanıldı. Bu sayede sayfalar arasındaki iletişim query parametreleri ve React Router DOM'un navigasyon durumuyla yönetildi.

#### State Yönetimi

Projede state yönetimi için Redux Toolkit kullanılmıştır. Sayfalar arasındaki iletişimi genellikle query parametreleri veya React Router DOM navigasyon durumu ile sağladık. Bu yaklaşım, kullanıcının doldurduğu form verilerinin sıfırlanmamasını ve sayfa yenilendiğinde veya farklı bir kullanıcıyla paylaşıldığında bile form verilerinin ve listelenen uçuşların kaybolmamasını sağlar.

#### Stiller

Uygulamada, Tailwind CSS sınıfları dışında özel bir stil kullanmamaya özen gösterildi. Özel stil ihtiyacı olması durumunda, ilgili CSS kuralları tailwind.config.js dosyasında tanımlanmıştır. Proje, Tailwind CSS'in gücünü kullanarak tasarlandı ve -talep edilmediği için- responsive (duyarlı) tasarım içermez.

#### Testler

Projede testler jest kullanılarak yazılmıştır. Testler, uygulamanın farklı bileşenlerini ve işlevselliğini test etmek için kullanılabilir. Ancak, testler sınırlı vakit nedeniyle sembolik olarak oluşturulmuştur.

#### Projeyi Başlatmadan

Projeyi başlatmadan önce, src/ dizini altındaki AppConfig.js dosyasını kullanarak uygulamanın temel ayarlarını merkezi bir şekilde yönetmeyi deneyebilirsiniz. Bu dosya, projenin bazı önemli ayarlarını içermektedir. İşte bu ayarlar hakkında detaylı bilgiler:

appName: Uygulamanın adı. Proje başlığında ve sayfa başlıklarında kullanılır.

brandName: Markanın adı. Uygulama içinde marka adını göstermek için kullanılır.

discountRate: Promosyon kodu ile yapılan indirimin oranını belirtir. Bu oran, ekonomi sınıfı biletlerin fiyatına uygulanır.

pendingDurationMilliseconds: İsteklerin yüklenme süresini simüle etmek için kullanılır. Bu değer, özellikle yükleme animasyonlarını test etmek için tasarlandı ama yeterli vakit olmadığı için tamamlayamadım. Şu an sadece simülasyon süresini belirleyebiliyoruz.

lang: Daha sonrasında ii18 gibi kütüphaneler yardımıyla proje farklı diller eklenebilmesi için kullanıldı.

Her sayfa altında sayfadaki statik metinleri içeren bir obje var. Buradaki değerleri güncelleyerek tek yerden metinlere müdahale edilebilir. Bu statik metinler arasında form kontrol elementlerinin kullandığı hata mesajları ve metinler de var.

## Proje Geliştirme Ortamı

Projeyi geliştirmek ve çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Proje klasörünü yerel makinenize kopyalayın.
2. Gerekli bağımlılıkları yüklemek için aşağıdaki komutu kullanın:

   ```bash
   npm install
   ```

### Gereksinimler

Aşağıdaki yazılımların yüklü olduğundan emin olun:

- [Node.js](https://nodejs.org/) - JavaScript çalıştırmak için
- [npm](https://www.npmjs.com/) veya [Yarn](https://yarnpkg.com/) - Paket yöneticisi

### Kurulum

Projeyi yerel makinenize klonlayın ve bağımlılıkları yükleyin:

```console
git clone git@github.com:ahmetakifarslan/code-case-flight-challange.git
cd proje-ad
npm install
# veya
yarn
```

### Kullanım

Bağımlılıklar yüklendikten sonra, Vite geliştirme sunucusunu başlatmak için aşağıdaki komutları kullanabilirsiniz:

```console
npm run dev
# veya
yarn dev
```

Bu komut, projeyi yerel geliştirme sunucusunda çalıştıracaktır. Sunucu başladığında, tarayıcınız otomatik olarak açılacaktır. Aşağıdaki adres üzerinden görüntüleyebilirsiniz:

http://localhost:5173
