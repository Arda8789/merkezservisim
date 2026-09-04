import type { Il } from "@/lib/data/iller";
import type { Hizmet } from "@/lib/data/hizmetler";
import { pick } from "@/lib/utils";

const ACILIS_VARYANT = [
  (il: Il, h: Hizmet) =>
    `${il.ad} genelinde ${h.ad.toLocaleLowerCase("tr-TR")} ihtiyacınız için adrese giden teknik servis ağımız hizmetinizde. ${il.ad} sınırları içindeki ${il.ilceler.length} ilçenin tamamına, bölgenize en yakın teknik ekibi yönlendiriyoruz.`,
  (il: Il, h: Hizmet) =>
    `${il.ad}'da ${h.kisaAd.toLocaleLowerCase("tr-TR")} arızası yaşayan hanelerin ilk tercihi, şeffaf fiyat politikasıyla çalışan özel teknik servis hattımız oluyor. ${il.bolge} Bölgesi'nin merkezlerinden biri olan ${il.ad}'ın tamamında adrese giderek hizmet veriyoruz.`,
  (il: Il, h: Hizmet) =>
    `${il.ad} içinde ${h.ad.toLocaleLowerCase("tr-TR")} konusunda uzmanlaşmış teknik ekibimiz, arızanızı yerinde tespit ederek net bir fiyat teklifi sunar. Onayınızın ardından onarım aynı gün içinde tamamlanır.`,
];

const KAPANIS_VARYANT = [
  (il: Il, h: Hizmet) =>
    `${il.ad}'daki ${h.kisaAd.toLocaleLowerCase("tr-TR")} arızanız için hattımızı aramanız yeterli; bölgenize en yakın teknik ekip yönlendirilir ve işlem 1 yıl garanti kapsamına alınır.`,
  (il: Il, h: Hizmet) =>
    `${il.ad} genelinde verdiğimiz ${h.ad.toLocaleLowerCase("tr-TR")} hizmetinde arıza tespiti ve fiyat teklifi ücretsizdir, onarıma yalnızca siz onayladıktan sonra başlanır.`,
];

export function getComboAcilisParagrafi(il: Il, hizmet: Hizmet): string {
  return pick(ACILIS_VARYANT, il.plaka + hizmet.slug.length)(il, hizmet);
}

export function getComboKapanisParagrafi(il: Il, hizmet: Hizmet): string {
  return pick(KAPANIS_VARYANT, il.plaka * 3 + hizmet.slug.length)(il, hizmet);
}

export function getComboSss(il: Il, hizmet: Hizmet): { soru: string; cevap: string }[] {
  const hizmetAdiKucuk = hizmet.ad.toLocaleLowerCase("tr-TR");
  return [
    {
      soru: `${il.ad}'da ${hizmetAdiKucuk} için ne kadar sürede gelirsiniz?`,
      cevap: `${il.ad} içindeki çoğu çağrıda, talebinizi ilettiğiniz saate bağlı olarak aynı gün içinde bölgenize en yakın teknik ekibi yönlendiriyoruz.`,
    },
    {
      soru: `${il.ad}'ın tüm ilçelerinde ${hizmetAdiKucuk} veriyor musunuz?`,
      cevap: `Evet, ${il.ad} sınırları içindeki ${il.ilceler.length} ilçenin tamamında ${hizmetAdiKucuk} hizmeti veriyoruz. Bulunduğunuz ilçeyi hattımıza iletmeniz yeterli.`,
    },
    ...hizmet.sss.slice(0, 2),
  ];
}
