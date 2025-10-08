
"use client";
import { useState } from "react";

type Product = { id:number; name:string; price:number; code:string; tags?:string[] };

const products: Product[] = [
  { id: 1, name: "Minimal Çiçek", price: 18.9, code: "CD-001" },
  { id: 2, name: "Kraft Zarflı", price: 22.5, code: "CD-002" },
  { id: 3, name: "Yaldız Baskı", price: 29.0, code: "CD-003" },
  { id: 4, name: "Vintage Dantel", price: 34.9, code: "CD-004" },
  { id: 5, name: "Botanik Seri", price: 24.9, code: "CD-005" },
  { id: 6, name: "Monogram", price: 27.0, code: "CD-006" }
];

const categories = [
  { key: "dugun", label: "Düğün Davetiyeleri" },
  { key: "nisan", label: "Nişan" },
  { key: "kina", label: "Kına" },
  { key: "sunnet", label: "Sünnet" },
  { key: "ozel", label: "Özel Tasarım" }
];

export default function Page() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = products.filter(p =>
    (cat === "all" ? true : p.tags?.includes(cat)) &&
    (q ? (p.name + p.code).toLowerCase().includes(q.toLowerCase()) : true)
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-black tracking-tight text-xl">Coconut Davetiye</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#kategori" className="hover:text-black">Kategoriler</a>
            <a href="#urunler" className="hover:text-black">Ürünler</a>
            <a href="#hakkimizda" className="hover:text-black">Hakkımızda</a>
            <a href="#iletisim" className="hover:text-black">İletişim</a>
          </nav>
          <a href="#iletisim" className="px-4 py-2 rounded-2xl bg-black text-white text-sm">Teklif Al</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50" />
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hayalinizi anlatan
              <span className="block underline decoration-4">özel davetiyeler</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">Coconut Davetiye ile düğün, nişan ve tüm özel günleriniz için şık, kişiselleştirilebilir tasarımlar.</p>
            <div className="mt-6 flex gap-3">
              <a href="#urunler" className="px-5 py-3 rounded-2xl bg-black text-white text-sm">Koleksiyona Göz At</a>
              <a href="#iletisim" className="px-5 py-3 rounded-2xl border text-sm">Ücretsiz Örnek Metinler</a>
            </div>
          </div>
          <div className="aspect-video rounded-2xl bg-gray-100 shadow-inner flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl">💌</div>
              <div className="mt-2 text-gray-600">Koleksiyon görsel alanı (kendi fotoğraflarınızla değiştirilecek)</div>
            </div>
          </div>
        </div>
      </section>

      <section id="kategori" className="py-14 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Kategoriler</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <button onClick={() => setCat("all")} className={`px-4 py-2 rounded-2xl border text-sm ${cat==="all"?"bg-black text-white":""}`}>Tümü</button>
            {categories.map(c => (
              <button key={c.key} onClick={() => setCat(c.key)} className={`px-4 py-2 rounded-2xl border text-sm ${cat===c.key?"bg-black text-white":""}`}>{c.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section id="urunler" className="py-14 border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Öne Çıkan Ürünler</h2>
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Ürün adı veya kodu ara..." className="px-4 py-2 rounded-2xl border bg-white w-full md:w-80" />
          </div>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(p => (
              <div key={p.id} className="group border bg-white rounded-2xl overflow-hidden hover:shadow-sm transition-shadow">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <span className="text-4xl">📷</span>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs text-gray-500">Kod: {p.code}</div>
                    </div>
                    <div className="font-bold">₺{p.price.toFixed(2)}</div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-2 rounded-xl border text-sm">Detay</button>
                    <button className="px-3 py-2 rounded-xl bg-black text-white text-sm">Teklif Al</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="py-14 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center">
            <span className="text-6xl">🎀</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Kişiye Özel Tasarım</h3>
            <p className="mt-3 text-gray-600">Metin, renk, kâğıt seçimi ve zarflarda dilediğiniz özelleştirmeyi yapıyoruz. Numune talep edebilir, son onayı dijital prova ile verebilirsiniz.</p>
            <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-gray-700">
              <li>24–72 saatte dijital taslak</li>
              <li>Opsiyonel yaldız/varak, kraft zarf, UV lak</li>
              <li>İstanbul içi hızlı kargo / aynı gün kurye seçenekleri</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold">Sık Sorulanlar</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border bg-white">
              <div className="font-semibold">Teslim süresi nedir?</div>
              <p className="text-sm text-gray-600 mt-1">Onaydan sonra baskı ve paketleme 3–7 iş günü sürer.</p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="font-semibold">Kişiselleştirme yapılıyor mu?</div>
              <p className="text-sm text-gray-600 mt-1">İsim, tarih, renk paleti ve kâğıt türü dahil tüm ayrıntıları özelleştiriyoruz.</p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="font-semibold">Numune alabilir miyim?</div>
              <p className="text-sm text-gray-600 mt-1">Evet, seçtiğiniz model için ücretli/ücretsiz numune opsiyonları sunuyoruz.</p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="font-semibold">Kargo seçenekleri neler?</div>
              <p className="text-sm text-gray-600 mt-1">Standart ve ekspres kargo; İstanbul içi aynı gün teslimat opsiyonu.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-14 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold">Teklif & İletişim</h3>
          <p className="mt-2 text-gray-600">Whatsapp veya e‑posta ile hızlı dönüş yapıyoruz.</p>
          <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid sm:grid-cols-2 gap-3 max-w-3xl">
            <input className="px-4 py-3 rounded-2xl border" placeholder="Ad Soyad" required />
            <input className="px-4 py-3 rounded-2xl border" placeholder="E‑posta" type="email" required />
            <input className="px-4 py-3 rounded-2xl border sm:col-span-2" placeholder="Telefon" />
            <textarea className="px-4 py-3 rounded-2xl border sm:col-span-2" placeholder="Talep/Notlar" rows={4} />
            <button className="px-5 py-3 rounded-2xl bg-black text-white text-sm sm:col-span-2">Gönder</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">Not: Form örnektir. Gerçek gönderim için form sağlayıcısına bağlanacak.</p>
        </div>
      </section>

      <footer className="border-t py-10 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Coconut Davetiye. Tüm hakları saklıdır.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Gizlilik</a>
            <a href="#" className="hover:text-black">Şartlar</a>
            <a href="#" className="hover:text-black">İade & Teslimat</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
