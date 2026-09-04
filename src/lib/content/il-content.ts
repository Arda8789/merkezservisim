import type { Il } from "@/lib/data/iller";
import type { Hizmet } from "@/lib/data/hizmetler";
import { pick } from "@/lib/utils";

const GIRIS_VARYANT = [
  (il: Il) =>
    `${il.ad} genelinde beyaz eşya, kombi ve klima arızalarınız için adrese giden teknik servis ağımız hizmet veriyor. ${il.bolge} Bölgesi'nin ${il.ilceler.length} ilçesini kapsayan bu ağ sayesinde, ${il.ad} içinde bulunduğunuz noktaya en yakın teknik ekip yönlendirilir.`,
  (il: Il) =>
    `Çamaşır makinesinden kombiye, klimadan buzdolabına kadar ${il.ad}'daki tüm beyaz eşya ve ısıtma-soğutma arızalarınızda şeffaf fiyatlı, garantili özel teknik servis hizmeti sunuyoruz. ${il.ad} ve bağlı ${il.ilceler.length} ilçede aynı gün yerinde müdahale hedefliyoruz.`,
  (il: Il) =>
    `${il.ad}'da yaşayan binlerce hane, beyaz eşya ve ısıtma-soğutma sistemlerindeki arızalarda tek bir hattı arayarak çözüme ulaşıyor. Teknik servis ağımız ${il.ad} sınırları içindeki ${il.ilceler.length} ilçenin tamamında adrese giderek hizmet verir.`,
  (il: Il) =>
    `${il.bolge} Bölgesi'nin önemli merkezlerinden ${il.ad}'da; kombi, klima ve beyaz eşya arızalarınız için şeffaf fiyat politikası ve 1 yıl garanti güvencesiyle çalışan bir teknik servis ağından hizmet alırsınız.`,
];

const KAPANIS_VARYANT = [
  (il: Il) =>
    `${il.ad} içinde nerede olursanız olun, hattımızı aradığınızda arızanızı not alıyor ve size en yakın teknik ekibi yönlendiriyoruz. Fiyat teklifini onaylamadan hiçbir işleme başlanmaz.`,
  (il: Il) =>
    `${il.ad}'daki teknik servis çağrılarında öncelikli hedefimiz aynı gün içinde adresinize ulaşmaktır. Arıza tespiti ve fiyat teklifi sunumu ücretsizdir.`,
  (il: Il) =>
    `${il.ad} genelinde verdiğimiz hizmetlerin tamamı 1 yıl işçilik ve parça garantisi kapsamındadır. Cihazınızın arızasını anlatmak için hattımızı aramanız yeterli.`,
  (il: Il) =>
    `${il.ad}'da ihtiyacınız olan teknik servis desteği için 7/24 açık olan hattımızdan bize ulaşabilir, bölgenize en yakın ekibin yönlendirilmesini sağlayabilirsiniz.`,
];

export function getIlGirisParagrafi(il: Il): string {
  return pick(GIRIS_VARYANT, il.plaka)(il);
}

export function getIlKapanisParagrafi(il: Il): string {
  return pick(KAPANIS_VARYANT, il.plaka + 1)(il);
}

export function getIlSss(il: Il): { soru: string; cevap: string }[] {
  return [
    {
      soru: `${il.ad} genelinde tüm ilçelere hizmet veriyor musunuz?`,
      cevap: `Evet, ${il.ad} sınırları içindeki ${il.ilceler.length} ilçenin tamamında adrese giden teknik servis ağımız üzerinden hizmet veriyoruz. Bulunduğunuz ilçeyi hattımıza ilettiğinizde size en yakın teknik ekip planlanır.`,
    },
    {
      soru: `${il.ad}'da aynı gün teknisyen gönderebiliyor musunuz?`,
      cevap: `Talebinizi ilettiğiniz saate ve bulunduğunuz ilçeye bağlı olarak çoğu çağrıda aynı gün içinde ${il.ad}'daki size en yakın teknik ekibi yönlendiriyoruz.`,
    },
    {
      soru: `${il.ad} için fiyatlarınız diğer illerden farklı mı?`,
      cevap: `Fiyatlandırma; arızanın türüne ve kullanılan parçaya göre belirlenir, il bazında ekstra bir ücret uygulanmaz. Net fiyat teklifi, arıza yerinde tespit edildikten sonra onayınıza sunulur.`,
    },
    {
      soru: `${il.ad}'da hangi cihazlara servis veriyorsunuz?`,
      cevap: `${il.ad} genelinde klima, kombi, çamaşır makinesi, bulaşık makinesi, buzdolabı, fırın-ocak ve kurutma makinesi olmak üzere geniş bir yelpazede tamir ve bakım hizmeti sunuyoruz.`,
    },
  ];
}

export function getIlHizmetCumlesi(il: Il, hizmet: Hizmet): string {
  const cumleler = [
    `${il.ad} genelinde ${hizmet.ad.toLocaleLowerCase("tr-TR")} taleplerinde aynı gün yerinde tespit yapıyoruz.`,
    `${il.ad}'daki ${hizmet.kisaAd.toLocaleLowerCase("tr-TR")} arızalarında şeffaf fiyat teklifiyle garantili onarım sağlıyoruz.`,
    `${il.ad} ve çevresinde ${hizmet.kisaAd.toLocaleLowerCase("tr-TR")} bakım ve onarım hizmetini tek hat üzerinden yönetiyoruz.`,
  ];
  return pick(cumleler, il.plaka + hizmet.slug.length);
}

/** Deterministic sample of district names for compact previews (e.g. hero subtitles). */
export function getIlceOrnekleri(il: Il, count = 5): string[] {
  return il.ilceler.slice(0, count);
}
