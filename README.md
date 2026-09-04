# Merkez Servisim

Türkiye genelinde beyaz eşya, kombi ve klima tamiri/bakımı için SEO odaklı, telefon trafiğine yönelik kurumsal tanıtım sitesi. Next.js (App Router) ile geliştirildi, tamamen statik olarak üretilir ve Vercel üzerinde barındırılır.

## Kapsam

- **7 hizmet kategorisi** (`/hizmetler/[hizmet]`): klima, kombi, çamaşır makinesi, bulaşık makinesi, buzdolabı, fırın-ocak, kurutma makinesi.
- **81 il sayfası** (`/[il]`): gerçek bölge/nüfus/ilçe verisiyle her il için özel içerik.
- **567 il × hizmet kombinasyon sayfası** (`/[il]/[hizmet]`): örn. `/istanbul/klima-servisi`.
- Anasayfa, Hakkımızda, İletişim, SSS, Hizmet Bölgelerimiz (`/sehirler`), Gizlilik Politikası.
- `sitemap.xml`, `robots.ts`, her sayfada `Metadata` + JSON-LD (Organization, BreadcrumbList, Service, FAQPage, LocalBusiness).

Toplam ~670 statik sayfa; marka/cihaz üretici isimleri kullanılmaz (bağımsız özel teknik servis konumlandırması).

## Veri

`src/lib/data/iller.json` dosyası 81 ilin plaka kodu, bölge, nüfus, yüzölçümü ve ilçe listesini içerir. Bu dosya `scripts/prepare-il-data.mjs` ile açık kaynaklı bir il/ilçe veri setinden üretildi (bkz. script içi kaynak).

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresini açın.

## Build

```bash
npm run build
```

## Dağıtım

Vercel'e bağlı GitHub reposuna yapılan her `push`, otomatik olarak yeniden build + deploy tetikler. Ek ortam değişkeni gerekmez.

## Yapı

```
src/
  app/                 # App Router sayfaları (statik + dinamik route'lar)
  components/
    layout/            # Header, Footer, mobil arama çubuğu
    sections/          # Anasayfa/iç sayfa bölümleri (Hero, SSS, vb.)
    ui/                 # Buton, Reveal, Marquee, Icon gibi genel bileşenler
  lib/
    data/               # İl ve hizmet verisi
    content/            # İl/hizmet sayfaları için şablon içerik üreticileri
    seo.ts              # Metadata + JSON-LD yardımcıları
    site-config.ts      # Marka adı, telefon, site URL sabitleri
```
