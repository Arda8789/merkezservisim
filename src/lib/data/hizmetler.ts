import type { IconName } from "@/components/ui/Icon";

export interface ArizaBelirtisi {
  baslik: string;
  aciklama: string;
}

export interface BakimMaddesi {
  baslik: string;
  aciklama: string;
}

export interface HizmetSss {
  soru: string;
  cevap: string;
}

export interface Hizmet {
  slug: string;
  ad: string;
  kisaAd: string;
  icon: IconName;
  gorseller: string[];
  kisaAciklama: string;
  girisParagraflari: string[];
  bakimBasligi: string;
  bakimGirisi: string;
  arizaBelirtileri: ArizaBelirtisi[];
  bakimMaddeleri: BakimMaddesi[];
  sss: HizmetSss[];
  anahtarKelimeler: string[];
}

export const hizmetler: Hizmet[] = [
  {
    slug: "klima-servisi",
    gorseller: ["/images/klima-teknisyen-1.jpg", "/images/klima-teknisyen-2.jpg", "/images/klima-teknisyen-3.jpg"],
    ad: "Klima Servisi",
    kisaAd: "Klima",
    icon: "Fan",
    kisaAciklama:
      "Klimanızda soğutmama, gaz kaçağı veya elektronik arıza mı var? İç ve dış ünitede kapsamlı tespitle aynı gün kalıcı çözüm sunuyoruz.",
    girisParagraflari: [
      "Klima arızalarının büyük bölümü gaz kaçağı, kirlenmiş filtre, tıkanmış drenaj hattı ya da elektronik kart sorunlarından kaynaklanır. Bu belirtilerin çoğu, cihaz çalışmaya devam ederken bile fark edilmeden ilerleyebilir ve zamanla kompresöre kadar zarar verebilir.",
      "Teknik servis ağımız, klimanızın iç ve dış ünitesinde adreste kapsamlı bir tespit yaparak arızanın kök nedenini bulur. Şeffaf fiyat teklifi sizden onay almadan işleme geçilmez; onarım tamamlandığında işçilik ve parça 1 yıl garanti kapsamına alınır.",
      "Yaz aylarında yoğunlaşan soğutmama şikayetlerinde olduğu gibi, kış aylarında ısıtma modunda verim düşüklüğü yaşayan split klimalarda da aynı gün içinde bölgenize en yakın teknik ekibi yönlendiriyoruz.",
    ],
    bakimBasligi: "Periyodik Klima Bakımı",
    bakimGirisi:
      "Klima bakımı, arıza oluşmadan önce filtre temizliği, gaz basıncı kontrolü ve dış ünite temizliği ile hem enerji verimliliğini artırır hem de kompresörün ömrünü uzatır. Sezon başlarında yaptırılan düzenli bakım, yaz ortasında beklenmedik arıza riskini büyük ölçüde azaltır.",
    arizaBelirtileri: [
      { baslik: "Soğutma veya Isıtma Yapmıyor", aciklama: "Kompresör çalışıyor ama üflenen hava beklenen sıcaklıkta değilse gaz kaçağı veya kompresör arızası olasıdır." },
      { baslik: "Gaz Kaçağı Şüphesi", aciklama: "İç ünitede buzlanma, düşük performans veya dış ünitede yağ lekesi gaz kaçağının tipik belirtileridir." },
      { baslik: "Su Damlatma / Sızıntı", aciklama: "Tıkanmış drenaj hortumu veya yanlış eğim, iç üniteden su damlamasına yol açar." },
      { baslik: "Garip Ses ve Titreşim", aciklama: "Fan motorunda aşınma veya gevşeyen parçalar çalışma sırasında anormal ses üretir." },
      { baslik: "Uzaktan Kumanda Bağlantı Sorunu", aciklama: "Elektronik kart veya alıcı ünitedeki arızalar cihazın komutlara yanıt vermemesine neden olabilir." },
      { baslik: "Sürekli Açılıp Kapanma", aciklama: "Termistör arızası veya gaz eksikliği, kompresörün kısa aralıklarla devreye girip çıkmasına sebep olur." },
    ],
    bakimMaddeleri: [
      { baslik: "Filtre Temizliği ve Kontrolü", aciklama: "Toz tutan filtreler hava akışını azaltır ve enerji tüketimini artırır." },
      { baslik: "Gaz Basıncı Ölçümü", aciklama: "Standart altı gaz basıncı verimi düşürür ve kompresöre zarar verir." },
      { baslik: "Dış Ünite Temizliği", aciklama: "Toz ve yaprak birikimi ısı transferini zorlaştırır, dış ünitenin nefes almasını engeller." },
      { baslik: "Drenaj Hattı Kontrolü", aciklama: "Tıkanan tahliye hattı su sızıntısı ve nem birikimine yol açar." },
      { baslik: "Elektronik Kart ve Bağlantı Kontrolü", aciklama: "Gevşek bağlantılar ve nem, kart üzerinde kalıcı hasara neden olabilir." },
    ],
    sss: [
      { soru: "Klima gaz dolumu bakım kapsamında mı?", cevap: "Standart bakımda gaz basıncı kontrol edilir; gaz kaçağı tespit edilirse ayrıca fiyat onayınız alındıktan sonra kaçak noktası onarılıp gaz dolumu yapılır." },
      { soru: "Klimam soğutuyor ama yeterince değil, sebebi ne olabilir?", cevap: "Kirli filtre, düşük gaz basıncı veya kirlenmiş dış ünite en sık nedenlerdir. Yerinde yapılan tespit ile kesin sebep birkaç dakika içinde belirlenir." },
      { soru: "Split klima dışında hangi tiplere bakıyorsunuz?", cevap: "Duvar tipi split klimaların yanı sıra salon tipi ve kaset tipi klimalarda da tespit ve onarım hizmeti veriyoruz." },
      { soru: "Kış aylarında da klima servisi çağırabilir miyim?", cevap: "Evet, ısıtma modunda yaşanan verim düşüklüğü veya arızalarda hattımız yıl boyunca açık." },
    ],
    anahtarKelimeler: ["klima servisi", "klima tamiri", "klima bakımı", "klima gaz dolumu", "split klima arıza", "klima soğutmuyor"],
  },
  {
    slug: "kombi-servisi",
    gorseller: ["/images/kombi-teknisyen-1.jpg", "/images/kombi-teknisyen-2.jpg", "/images/kombi-teknisyen-3.jpg"],
    ad: "Kombi Servisi",
    kisaAd: "Kombi",
    icon: "Flame",
    kisaAciklama:
      "Su kaçağı, ateşleme sorunu veya ısıtmama arızalarında; kombinizde yerinde tespit ve garantili onarım için tek hat yeterli.",
    girisParagraflari: [
      "Kombi arızaları özellikle kış aylarında acil çözüm gerektirir. Ateşleme problemi, basınç düşüşü, su kaçağı veya ısıtmama şikayetlerinin çoğu, doğru tespit edildiğinde aynı gün içinde giderilebilecek onarımlardır.",
      "Teknik servis ağımız, kombinizin brülör, eşanjör, sirkülasyon pompası ve elektronik kart aksamında adreste kapsamlı arıza tespiti yapar. Onarıma başlamadan önce net fiyat teklifi sunulur, işlem sonunda 1 yıl işçilik ve parça garantisi belgesi teslim edilir.",
      "Kombinizin marka ve modelinden bağımsız olarak, doğalgazlı kombi sistemlerinin tamamında güvenli ve şeffaf bir onarım süreci sağlıyoruz.",
    ],
    bakimBasligi: "Yıllık Kombi Bakımı",
    bakimGirisi:
      "Isıtma sezonu başlamadan önce yapılan kombi bakımı; brülör temizliği, basınç ayarı ve baca gazı kontrolü ile hem yakıt verimliliğini artırır hem de karbonmonoksit riskine karşı güvenliği sağlar. Düzenli bakım aynı zamanda beklenmedik kış arızalarının önüne geçer.",
    arizaBelirtileri: [
      { baslik: "Ateşleme Almıyor", aciklama: "Ateşleme elektrodu, gaz valfi veya iyonizasyon sensöründeki arızalar kombinin yanmaya geçmesini engeller." },
      { baslik: "Su Kaçağı", aciklama: "Sızdıran conta, çatlak eşanjör veya aşınmış pompa salmastırası su kaçağının başlıca nedenleridir." },
      { baslik: "Basınç Sürekli Düşüyor", aciklama: "Tesisatta gizli kaçak veya genleşme tankı arızası basıncın tekrar tekrar düşmesine yol açar." },
      { baslik: "Yeterince Isıtmıyor", aciklama: "Kireçlenmiş eşanjör veya ayarı bozulmuş brülör, ısıtma performansını ciddi şekilde düşürür." },
      { baslik: "Hata Kodu Veriyor", aciklama: "Ekranda beliren arıza kodları, elektronik kart veya sensör kaynaklı sorunlara işaret eder." },
      { baslik: "Garip Ses Çıkarıyor", aciklama: "Kireçlenme veya pompa arızası kombide vuruntu ve uğultu şeklinde seslere neden olabilir." },
    ],
    bakimMaddeleri: [
      { baslik: "Brülör ve Yanma Kontrolü", aciklama: "Verimli ve güvenli yanma için brülör düzenli olarak temizlenmelidir." },
      { baslik: "Basınç ve Genleşme Tankı Kontrolü", aciklama: "Doğru basınç seviyesi, sistemin dengeli çalışması için kritik önemdedir." },
      { baslik: "Baca Gazı ve Karbonmonoksit Kontrolü", aciklama: "Güvenli tahliye, ev sakinlerinin sağlığı için hayati bir kontrol noktasıdır." },
      { baslik: "Sirkülasyon Pompası Kontrolü", aciklama: "Pompadaki aşınma, ısının eve dengeli dağılmasını engeller." },
      { baslik: "Elektronik Kart ve Sensör Testi", aciklama: "Sensör hassasiyeti, kombinin doğru sıcaklıkta ve güvenli çalışmasını sağlar." },
    ],
    sss: [
      { soru: "Kombi bakımı yılda kaç kez yapılmalı?", cevap: "Isıtma sezonu başlamadan önce yılda bir kez yapılan düzenli bakım, çoğu kombi arızasını önlemek için yeterlidir." },
      { soru: "Kombim sürekli basınç düşürüyor, tehlikeli mi?", cevap: "Tekrarlayan basınç düşüşü genellikle tesisatta gizli bir kaçağa işaret eder; yerinde yapılan basınç testi ile kaynağı güvenle tespit ediyoruz." },
      { soru: "Baca gazı kontrolü neden önemli?", cevap: "Yanlış yanan veya tıkanan baca sistemi karbonmonoksit birikimine yol açabilir; bakım sırasında bu kontrol mutlaka yapılır." },
      { soru: "Kombim hata kodu veriyor, hemen kapatmalı mıyım?", cevap: "Ekranda kilitleme hatası görüyorsanız cihazı kapatıp hattımızı aramanızı öneririz; teknisyenimiz telefonda kodu değerlendirip yönlendirme yapar." },
    ],
    anahtarKelimeler: ["kombi servisi", "kombi tamiri", "kombi bakımı", "kombi arıza", "kombi basınç düşürüyor", "kombi ateşleme almıyor"],
  },
  {
    slug: "camasir-makinesi-tamiri",
    gorseller: ["/images/camasir-teknisyen-1.jpg", "/images/camasir-teknisyen-2.jpg", "/images/camasir-teknisyen-3.jpg"],
    ad: "Çamaşır Makinesi Tamiri",
    kisaAd: "Çamaşır Makinesi",
    icon: "WashingMachine",
    kisaAciklama:
      "Su alma, sıkma yapmama veya sızıntı gibi arızalarda çamaşır makinenizi yerinde inceliyor, şeffaf fiyatla aynı gün onarıyoruz.",
    girisParagraflari: [
      "Çamaşır makinesi arızalarının çoğu; su alma-boşaltma devresi, kapak kilidi, motor kömürleri veya elektronik kart kaynaklıdır. Erken fark edilmeyen küçük bir sızıntı bile zamanla motor ve elektronik aksama zarar verebilir.",
      "Teknik ekibimiz, çamaşır makinenizi adresinizde açıp arızayı gözle ve ölçümle doğruladıktan sonra net bir fiyat teklifi sunar. Onayınızın ardından orijinal uyumlu parça ile onarım tamamlanır ve işlem 1 yıl garanti kapsamına alınır.",
    ],
    bakimBasligi: "Çamaşır Makinesi Bakımı",
    bakimGirisi:
      "Deterjan çekmecesinde ve kauçuk contada biriken kireç ve nem, zamanla koku ve sızıntı sorununa yol açar. Düzenli bakım, tamburun ve pompanın ömrünü uzatırken enerji ve su tüketimini de dengede tutar.",
    arizaBelirtileri: [
      { baslik: "Su Almıyor", aciklama: "Su musluğu, giriş valfi veya seviye sensöründeki arızalar makinenin su almasını engelleyebilir." },
      { baslik: "Su Boşaltmıyor / Sıkma Yapmıyor", aciklama: "Tahliye pompasında tıkanıklık veya arıza, suyun tahliye edilememesine ve sıkma adımının başlamamasına neden olur." },
      { baslik: "Kapıdan Su Sızdırıyor", aciklama: "Aşınmış kapak lastiği (körük) sızıntının en sık görülen nedenidir." },
      { baslik: "Aşırı Titreşim ve Ses", aciklama: "Amortisör veya yatak (rulman) aşınması, sıkma sırasında aşırı titreşime yol açar." },
      { baslik: "Program Yarıda Duruyor", aciklama: "Kapak kilidi arızası veya elektronik kart hatası programın tamamlanmasını engeller." },
      { baslik: "Isıtma Yapmıyor", aciklama: "Rezistans arızası, suyun ısıtılmamasına ve düşük sıcaklıkta yıkamaya neden olur." },
    ],
    bakimMaddeleri: [
      { baslik: "Deterjan Çekmecesi Temizliği", aciklama: "Birikinti, hem koku hem de tıkanma riski oluşturur." },
      { baslik: "Kapak Lastiği (Körük) Kontrolü", aciklama: "Lastik aralarında biriken nem küf ve kötü kokuya yol açar." },
      { baslik: "Filtre ve Pompa Kontrolü", aciklama: "Pompa filtresinde sıkışan yabancı cisimler su tahliyesini yavaşlatır." },
      { baslik: "Tambur ve Rulman Kontrolü", aciklama: "Erken aşınma tespiti, daha büyük bir motor arızasını önler." },
    ],
    sss: [
      { soru: "Çamaşır makinem ıslak kokuyor, arıza mı?", cevap: "Genellikle kapak lastiğinde ve deterjan çekmecesinde biriken nemden kaynaklanır; bakım sırasında bu bölgeler temizlenip kontrol edilir." },
      { soru: "Sıkma yapmıyor ama su alıyor, sorun ne olabilir?", cevap: "Bu belirti çoğunlukla tahliye pompasında tıkanıklık veya kapak kilidi sensöründeki arızaya işaret eder." },
      { soru: "Her marka çamaşır makinesine bakıyor musunuz?", cevap: "Piyasadaki çoğu marka ve modelde tespit ve onarım hizmeti sunuyoruz; parça uyumluluğunu arama sırasında teyit ediyoruz." },
    ],
    anahtarKelimeler: ["çamaşır makinesi tamiri", "çamaşır makinesi servisi", "çamaşır makinesi su almıyor", "çamaşır makinesi sıkmıyor", "çamaşır makinesi tamircisi"],
  },
  {
    slug: "bulasik-makinesi-tamiri",
    gorseller: ["/images/bulasik-teknisyen-1.jpg", "/images/bulasik-teknisyen-2.jpg"],
    ad: "Bulaşık Makinesi Tamiri",
    kisaAd: "Bulaşık Makinesi",
    icon: "Droplets",
    kisaAciklama:
      "Yıkama performansı düşen, su tahliye etmeyen veya sızdıran bulaşık makinenizde arızayı yerinde tespit edip aynı gün çözüyoruz.",
    girisParagraflari: [
      "Bulaşık makinesi arızaları genellikle püskürtme kollarındaki tıkanıklık, tahliye pompası arızası veya kapı contası sızıntısından kaynaklanır. Bu tür arızalar erken müdahale edilmediğinde makinenin alt gövdesine su sızıntısına kadar ilerleyebilir.",
      "Orijinal uyumlu parça tespiti yapan teknik ekibimiz, arızayı adresinizde tespit ederek net bir fiyat teklifi sunar ve onayınızla onarımı aynı seansta tamamlar. Tüm işlemler 1 yıl işçilik ve parça garantisi kapsamındadır.",
    ],
    bakimBasligi: "Bulaşık Makinesi Bakımı",
    bakimGirisi:
      "Kireç ve yağ birikintileri zamanla püskürtme kollarını tıkayarak yıkama performansını düşürür. Filtre ve conta bakımının düzenli yapılması, hem yıkama kalitesini korur hem de kötü koku oluşumunu engeller.",
    arizaBelirtileri: [
      { baslik: "Yıkama Performansı Düştü", aciklama: "Tıkanmış püskürtme kolları veya kireçlenmiş rezistans, bulaşıkların yeterince temizlenmemesine yol açar." },
      { baslik: "Su Tahliye Etmiyor", aciklama: "Tahliye pompasında veya hortumda tıkanıklık, yıkama sonunda suyun kalmasına neden olur." },
      { baslik: "Kapıdan Su Sızdırıyor", aciklama: "Aşınmış kapı contası veya yanlış yerleşim sızıntının en sık görülen sebebidir." },
      { baslik: "Deterjan Eritmiyor / Tabletler Erimeden Kalıyor", aciklama: "Deterjan haznesi mekanizmasındaki arıza veya düşük su sıcaklığı bu soruna yol açabilir." },
      { baslik: "Kurutma Yapmıyor", aciklama: "Isıtma elemanı veya fan arızası, bulaşıkların ıslak kalmasına neden olur." },
      { baslik: "Çalışmıyor / Açılmıyor", aciklama: "Kapı kilidi sensörü veya elektronik kart arızası cihazın başlamamasına yol açabilir." },
    ],
    bakimMaddeleri: [
      { baslik: "Püskürtme Kolu Temizliği", aciklama: "Tıkanan delikler suyun düzgün dağılmasını engeller ve yıkama kalitesini düşürür." },
      { baslik: "Filtre Temizliği", aciklama: "Yemek artıkları filtre üzerinde birikerek tahliyeyi yavaşlatır." },
      { baslik: "Kapı Contası Kontrolü", aciklama: "Küçük çatlaklar zamanla su sızıntısına dönüşebilir." },
      { baslik: "Kireç Çözücü Bakımı", aciklama: "Sert su kullanılan bölgelerde rezistans ve boru hatlarında kireçlenme daha hızlı oluşur." },
    ],
    sss: [
      { soru: "Bulaşıklar neden hala kirli çıkıyor?", cevap: "En sık neden tıkanmış püskürtme kollarıdır; filtre ve kollardaki birikinti temizlendiğinde performans genellikle normale döner." },
      { soru: "Makine altından su geliyor, ne yapmalıyım?", cevap: "Cihazı kapatıp musluğu kısarak hattımızı aramanızı öneririz; sızıntı kaynağı adreste hızlıca tespit edilir." },
      { soru: "Ankastre bulaşık makinelerine de bakıyor musunuz?", cevap: "Evet, hem ankastre hem de solo bulaşık makinelerinde tespit ve onarım hizmeti veriyoruz." },
    ],
    anahtarKelimeler: ["bulaşık makinesi tamiri", "bulaşık makinesi servisi", "bulaşık makinesi su almıyor", "bulaşık makinesi sızdırıyor"],
  },
  {
    slug: "buzdolabi-tamiri",
    gorseller: ["/images/buzdolabi-teknisyen-1.jpg", "/images/buzdolabi-teknisyen-2.jpg", "/images/buzdolabi-teknisyen-3.jpg"],
    ad: "Buzdolabı Tamiri",
    kisaAd: "Buzdolabı",
    icon: "Refrigerator",
    kisaAciklama:
      "Soğutmama, aşırı buzlanma veya kompresör sesi gibi arızalar gıda güvenliğini tehdit etmeden önce aynı gün yerinde müdahale ediyoruz.",
    girisParagraflari: [
      "Buzdolabı arızaları, içindeki gıdaların bozulma riski nedeniyle en acil müdahale gerektiren ev cihazı arızalarından biridir. Soğutmama, aşırı buzlanma veya kompresörden gelen anormal ses, çoğunlukla gaz kaçağı, termostat veya kompresör kaynaklı sorunlara işaret eder.",
      "Teknik servis ağımız, çağrınızı aldıktan sonra bölgenize en yakın ekibi yönlendirerek soğutma sistemini, kompresörü ve elektronik kartı yerinde test eder. Net fiyat teklifi onayınızın ardından onarım aynı gün tamamlanır ve 1 yıl garanti kapsamına alınır.",
    ],
    bakimBasligi: "Buzdolabı Bakımı",
    bakimGirisi:
      "Yoğuşturucu ve buharlaştırıcı bölümlerinde biriken toz, kompresörün daha fazla çalışmasına ve enerji tüketiminin artmasına neden olur. Kapı contasının düzenli kontrolü ise soğuk hava kaçağını önleyerek verimi korur.",
    arizaBelirtileri: [
      { baslik: "Soğutmuyor veya Yetersiz Soğutuyor", aciklama: "Gaz kaçağı, kompresör arızası veya termostat sorunu en sık karşılaşılan nedenlerdir." },
      { baslik: "Aşırı Buzlanma", aciklama: "Defrost sistemindeki arıza veya kapı contasındaki boşluk buzlanmayı hızlandırır." },
      { baslik: "Kompresörden Anormal Ses", aciklama: "Aşınmış kompresör veya gevşek montaj, çalışırken belirgin ses ve titreşime yol açar." },
      { baslik: "Kapıdan Sızıntı / Su Birikmesi", aciklama: "Tıkanan defrost tahliye kanalı, dolap içinde veya altında su birikmesine neden olur." },
      { baslik: "Sürekli Çalışıyor, Durmuyor", aciklama: "Termostat arızası veya gaz eksikliği kompresörün gereğinden uzun süre çalışmasına yol açar." },
      { baslik: "İç Aydınlatma veya Panel Arızası", aciklama: "Kapı anahtarı veya elektronik kart arızası aydınlatma ve gösterge sorunlarına neden olabilir." },
    ],
    bakimMaddeleri: [
      { baslik: "Yoğuşturucu Temizliği", aciklama: "Tozlu yoğuşturucu, kompresörün daha fazla enerji harcamasına neden olur." },
      { baslik: "Kapı Contası Kontrolü", aciklama: "Sızdıran conta hem soğuk kaçağına hem de nem birikimine yol açar." },
      { baslik: "Defrost Sistemi Kontrolü", aciklama: "Düzenli kontrol, aşırı buzlanmayı ve olası su taşmasını önler." },
      { baslik: "Sıcaklık Ayarı ve Sensör Testi", aciklama: "Doğru kalibrasyon, gıda güvenliği için gereken sabit sıcaklığı garanti eder." },
    ],
    sss: [
      { soru: "Buzdolabım soğutmuyor, gıdalar bozulmadan ne kadar sürede gelirsiniz?", cevap: "Bu tür acil çağrılarda bölgenize en yakın ekibi önceliklendirerek genellikle aynı gün içinde yönlendiriyoruz." },
      { soru: "No-frost buzdolaplarına da bakıyor musunuz?", cevap: "Evet, hem statik hem de no-frost sistemli buzdolaplarında tespit ve onarım hizmeti veriyoruz." },
      { soru: "Buzdolabından su sızıyor, tehlikeli mi?", cevap: "Genellikle tıkanan defrost kanalından kaynaklanır; elektrikli aksama temas etmeden önce hattımızı aramanızı öneririz." },
    ],
    anahtarKelimeler: ["buzdolabı tamiri", "buzdolabı servisi", "buzdolabı soğutmuyor", "no-frost buzdolabı arıza", "buzdolabı kompresör arızası"],
  },
  {
    slug: "derin-dondurucu-tamiri",
    gorseller: ["/images/dondurucu-teknisyen-1.jpg", "/images/dondurucu-teknisyen-2.jpg", "/images/dondurucu-teknisyen-3.jpg"],
    ad: "Derin Dondurucu Tamiri",
    kisaAd: "Derin Dondurucu",
    icon: "Snowflake",
    kisaAciklama:
      "Sandık veya dikey derin dondurucunuzda dondurmama, aşırı buzlanma ya da kompresör arızası mı var? Gıdalarınız bozulmadan aynı gün müdahale ediyoruz.",
    girisParagraflari: [
      "Derin dondurucular genellikle uzun süreli gıda saklamak için kullanıldığından, bu cihazlardaki bir arıza fark edilmeden günlerce sürebilir ve büyük miktarda gıdanın bozulmasına yol açabilir. Dondurmama, yetersiz soğutma veya kompresörden gelen anormal ses en sık karşılaşılan belirtilerdir.",
      "Teknik ekibimiz hem sandık tipi hem de dikey (dolap tipi) derin dondurucularda gaz kaçağı, termostat ve kompresör arızalarını yerinde tespit eder. Net fiyat teklifi onayınızın ardından onarım aynı gün tamamlanır ve işçilik ile parça 1 yıl garanti kapsamına alınır.",
    ],
    bakimBasligi: "Derin Dondurucu Bakımı",
    bakimGirisi:
      "Buzlanmanın kalınlaşması ve kapı contasındaki aşınma, derin dondurucularda enerji tüketimini ciddi şekilde artırır. Düzenli defrost ve conta kontrolü, hem verimi korur hem de kompresörün ömrünü uzatır.",
    arizaBelirtileri: [
      { baslik: "Dondurmuyor veya Yetersiz Soğutuyor", aciklama: "Gaz kaçağı, kompresör arızası veya termostat sorunu dondurma performansını düşürür." },
      { baslik: "Aşırı Buzlanma", aciklama: "Kapı contasındaki boşluk veya sık kapı açılışı buzlanmayı hızlandırır ve iç hacmi daraltır." },
      { baslik: "Kompresör Sürekli Çalışıyor", aciklama: "Gaz eksikliği veya termostat arızası kompresörün durmadan çalışmasına neden olur." },
      { baslik: "Anormal Ses ve Titreşim", aciklama: "Aşınmış kompresör veya gevşek montaj çalışma sırasında belirgin ses üretir." },
      { baslik: "Kapı Sızdırıyor / Tam Kapanmıyor", aciklama: "Deforme olmuş kapak veya aşınmış conta soğuk hava kaçağına yol açar." },
      { baslik: "Elektronik Gösterge Arızası", aciklama: "Kart veya sensör arızaları sıcaklık göstergesinin hatalı çalışmasına neden olabilir." },
    ],
    bakimMaddeleri: [
      { baslik: "Defrost ve Buz Çözme Kontrolü", aciklama: "Kalın buz tabakası enerji tüketimini artırır ve iç hacmi daraltır." },
      { baslik: "Kapak Contası Kontrolü", aciklama: "Sızdıran conta hem soğuk kaçağına hem de aşırı buzlanmaya yol açar." },
      { baslik: "Yoğuşturucu Temizliği", aciklama: "Tozlu yoğuşturucu kompresörün daha fazla enerji harcamasına neden olur." },
      { baslik: "Termostat Kalibrasyonu", aciklama: "Doğru kalibrasyon, gıda güvenliği için gereken sabit dondurma sıcaklığını garanti eder." },
    ],
    sss: [
      { soru: "Sandık tipi ve dikey derin donduruculara da bakıyor musunuz?", cevap: "Evet, her iki tipte de yerinde arıza tespiti ve garantili onarım hizmeti sunuyoruz." },
      { soru: "Derin dondurucum dondurmuyor, gıdalarım bozulmadan gelir misiniz?", cevap: "Bu tür acil çağrılarda bölgenize en yakın ekibi önceliklendirerek genellikle aynı gün içinde yönlendiriyoruz." },
      { soru: "Aşırı buzlanma normal mi?", cevap: "Belirli bir kalınlığın üzerindeki buzlanma genellikle kapı contası veya defrost sistemi arızasına işaret eder; yerinde kontrolle nedeni belirlenir." },
    ],
    anahtarKelimeler: ["derin dondurucu tamiri", "derin dondurucu servisi", "sandık tipi dondurucu arıza", "derin dondurucu dondurmuyor"],
  },
  {
    slug: "firin-ocak-tamiri",
    gorseller: ["/images/firin-teknisyen-1.jpg", "/images/firin-teknisyen-2.jpg", "/images/firin-teknisyen-3.jpg"],
    ad: "Fırın ve Ocak Tamiri",
    kisaAd: "Fırın & Ocak",
    icon: "CookingPot",
    kisaAciklama:
      "Isıtmayan fırın, ateş almayan ocak gözü veya arızalı termostat gibi sorunlarda ankastre ve standart setlerde güvenli onarım sağlıyoruz.",
    girisParagraflari: [
      "Fırın ve ocaklardaki arızalar genellikle rezistans, termostat, ateşleme modülü veya gaz valfi kaynaklıdır. Gazlı sistemlerde güvenlik en öncelikli konu olduğundan, tespit ve onarım işlemleri her zaman gerekli güvenlik kontrolleri ile birlikte yürütülür.",
      "Teknik ekibimiz ankastre fırın, ankastre ocak ve standart fırınlı ocaklarda yerinde tespit yaparak arızayı belirler ve şeffaf fiyat onayınızın ardından onarımı tamamlar. Yapılan işlemler 1 yıl işçilik ve parça garantisi kapsamındadır.",
    ],
    bakimBasligi: "Fırın ve Ocak Bakımı",
    bakimGirisi:
      "Ocak gözlerinde ve fırın rezistanslarında biriken yağ ve yemek artıkları, ateşleme sorunlarına ve dengesiz ısıtmaya neden olabilir. Düzenli temizlik ve contaların kontrolü, hem enerji verimini korur hem de güvenli kullanımı sağlar.",
    arizaBelirtileri: [
      { baslik: "Fırın Isıtmıyor", aciklama: "Üst veya alt rezistanstaki kopukluk, fırının hiç ısınmamasına ya da dengesiz pişirmesine neden olur." },
      { baslik: "Ocak Gözü Ateş Almıyor", aciklama: "Ateşleme modülü veya termokupl arızası gazlı ocaklarda ateşlemeyi engeller." },
      { baslik: "Termostat Sıcaklığı Tutmuyor", aciklama: "Arızalı termostat, ayarlanan sıcaklığın sürekli dalgalanmasına yol açar." },
      { baslik: "Fırın Kapısı Sızdırıyor", aciklama: "Aşınmış kapı contası ısı kaybına ve dengesiz pişirmeye neden olur." },
      { baslik: "Gaz Kokusu", aciklama: "Gaz kokusu fark ettiğinizde cihazı kullanmayı bırakıp havalandırma yapmanız ve hattımızı hemen aramanız güvenlik açısından önemlidir." },
      { baslik: "Elektronik Panel / Gösterge Arızası", aciklama: "Kart veya buton arızaları programların seçilememesine neden olabilir." },
    ],
    bakimMaddeleri: [
      { baslik: "Rezistans ve Isıtma Elemanı Kontrolü", aciklama: "Erken tespit, dengesiz pişirme sorunlarını önler." },
      { baslik: "Ateşleme ve Gaz Valfi Kontrolü", aciklama: "Güvenli ateşleme için düzenli kontrol gereklidir." },
      { baslik: "Kapı Contası ve Cam Kontrolü", aciklama: "Sızdıran conta ısı kaybına ve enerji israfına yol açar." },
      { baslik: "Termostat Kalibrasyonu", aciklama: "Doğru kalibrasyon, tarif edilen sürede ve sıcaklıkta pişirme sağlar." },
    ],
    sss: [
      { soru: "Gaz kokusu alıyorum, ne yapmalıyım?", cevap: "Öncelikle cihazı kapatıp ortamı havalandırın, ardından açık alevden uzak durarak hattımızı arayın; ekibimiz size güvenlik adımlarını telefonda da anlatır." },
      { soru: "Ankastre fırın ve ocaklara da bakıyor musunuz?", cevap: "Evet, hem ankastre hem de standart fırın ve ocak modellerinde tespit ve onarım hizmeti sunuyoruz." },
      { soru: "Fırın dengesiz pişiriyor, sebebi ne olabilir?", cevap: "Genellikle üst veya alt rezistanslardan birinin kısmen arızalanması ya da termostat sapması bu duruma yol açar." },
    ],
    anahtarKelimeler: ["fırın tamiri", "ocak tamiri", "ankastre fırın tamiri", "ocak ateş almıyor", "fırın ısıtmıyor"],
  },
  {
    slug: "kurutma-makinesi-tamiri",
    gorseller: [],
    ad: "Kurutma Makinesi Tamiri",
    kisaAd: "Kurutma Makinesi",
    icon: "RotateCw",
    kisaAciklama:
      "Kurutmayan, aşırı ısınan veya program tamamlamayan kurutma makinenizde arızayı yerinde tespit edip garantili onarıyoruz.",
    girisParagraflari: [
      "Kurutma makinesi arızalarının çoğu, tıkanmış tüy filtresi ve kanalları, kayış aşınması veya ısıtma elemanı sorunlarından kaynaklanır. Bu tür tıkanıklıklar hem kurutma süresini uzatır hem de cihazın aşırı ısınma riskini artırır.",
      "Teknik ekibimiz, kondansasyonlu ve ısı pompalı kurutma makinelerinde yerinde tespit yaparak arızanın kaynağını belirler ve net fiyat onayınızın ardından onarımı tamamlar. Tüm onarımlar 1 yıl işçilik ve parça garantisi kapsamındadır.",
    ],
    bakimBasligi: "Kurutma Makinesi Bakımı",
    bakimGirisi:
      "Tüy filtresinin ve yoğuşturucu ünitesinin düzenli temizlenmemesi, kurutma süresinin uzamasına ve enerji tüketiminin artmasına neden olur. Düzenli bakım, hem performansı korur hem de aşırı ısınma riskini azaltır.",
    arizaBelirtileri: [
      { baslik: "Kurutmuyor veya Yetersiz Kurutuyor", aciklama: "Tıkanmış tüy filtresi veya hava kanalı, kurutma performansını ciddi şekilde düşürür." },
      { baslik: "Aşırı Isınıyor", aciklama: "Isıtma elemanındaki arıza veya tıkanıklık cihazın normalden fazla ısınmasına yol açar." },
      { baslik: "Program Yarıda Duruyor", aciklama: "Kapak kilidi sensörü veya elektronik kart arızası programın tamamlanmasını engeller." },
      { baslik: "Aşırı Ses ve Titreşim", aciklama: "Aşınmış tambur kayışı veya rulman, çalışma sırasında belirgin ses üretir." },
      { baslik: "Su Haznesi Dolmuyor / Boşalmıyor (Kondansasyonlu)", aciklama: "Tahliye pompası veya hortum tıkanıklığı su haznesiyle ilgili sorunlara neden olur." },
      { baslik: "Kötü Koku", aciklama: "Yoğuşturucu ünitesinde biriken nem ve tüy, zamanla kötü kokuya yol açabilir." },
    ],
    bakimMaddeleri: [
      { baslik: "Tüy Filtresi Temizliği", aciklama: "Her kullanım sonrası temizlenmesi gereken filtre, tıkandığında verimi doğrudan etkiler." },
      { baslik: "Yoğuşturucu / Isı Eşanjörü Temizliği", aciklama: "Birikinti, kurutma süresini uzatan en yaygın nedenlerden biridir." },
      { baslik: "Kayış ve Tambur Kontrolü", aciklama: "Erken aşınma tespiti, motor arızasını önler." },
      { baslik: "Su Tahliye Sistemi Kontrolü", aciklama: "Tıkanıklık, kondansasyonlu modellerde taşma riskine yol açabilir." },
    ],
    sss: [
      { soru: "Kurutma makinem çalışıyor ama çamaşırlar hala nemli, neden?", cevap: "En sık neden tıkanmış tüy filtresi veya yoğuşturucu ünitesidir; bu bölgelerin temizliği çoğu zaman performansı normale döndürür." },
      { soru: "Isı pompalı kurutma makinelerine de bakıyor musunuz?", cevap: "Evet, kondansasyonlu ve ısı pompalı sistemlerin ikisinde de tespit ve onarım hizmeti sunuyoruz." },
      { soru: "Cihaz aşırı ısınıyor, kullanmaya devam edebilir miyim?", cevap: "Aşırı ısınma fark ettiğinizde cihazı durdurup fişini çekmenizi ve hattımızı aramanızı öneririz." },
    ],
    anahtarKelimeler: ["kurutma makinesi tamiri", "kurutma makinesi servisi", "kurutma makinesi kurutmuyor", "ısı pompalı kurutma makinesi arıza"],
  },
];

export function getHizmetBySlug(slug: string): Hizmet | undefined {
  return hizmetler.find((h) => h.slug === slug);
}
