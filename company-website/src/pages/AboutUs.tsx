const teamDivisions = [
  {
    role: 'Tim Produksi & Quality Control',
    bio: 'Memastikan setiap gelas susu pasteurisasi diproses secara higienis dan segar setiap hari.',
  },
  {
    role: 'Tim Operasional Gubuk',
    bio: 'Mengelola 180+ gubuk yang tersebar di Jabodetabek dan Bandung agar tetap nyaman untuk para Cucu si Mbok.',
  },
  {
    role: 'Tim Marketing & Kemitraan',
    bio: 'Menghadirkan Susu Mbok Darmi lebih dekat lewat GrabFood, GoFood, ShopeeFood, dan TikTok Shop.',
  },
]

const values = [
  {
    title: 'Bahan Baku Lokal',
    description: 'Kami bekerja sama dengan peternak lokal di Bogor untuk menjaga kualitas dan kesegaran susu.',
  },
  {
    title: 'Higienis & Konsisten',
    description: 'Proses pasteurisasi yang terjaga memastikan setiap gelas susu aman dan rasanya konsisten.',
  },
  {
    title: 'Nuansa Jadul yang Hangat',
    description: 'Setiap gubuk kami dirancang dengan sentuhan vintage yang hangat, mencerminkan karakter lokal.',
  },
]

export default function AboutUs() {
  return (
    <div>
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Tentang Kami</h1>
          <p className="mt-4 text-slate-600">
            Mengenal lebih dekat perjalanan Susu Mbok Darmi, dari sebuah gubuk kecil di Bogor
            hingga menjangkau Jabodetabek dan Bandung.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Sejarah Perusahaan</h2>
        <p className="mt-4 text-slate-600">
          Susu Mbok Darmi (di bawah naungan PT Sumoda Tama Berkah) didirikan pada tahun 2013 di
          Bogor, berawal dari kecintaan pada susu pasteurisasi berkualitas dari peternak lokal.
          Setiap outlet kami disebut &ldquo;gubuk&rdquo;, dirancang dengan nuansa vintage
          &ldquo;jadul&rdquo; yang hangat namun tetap elegan, mencerminkan karakter lokal di
          setiap lokasi.
        </p>
        <p className="mt-4 text-slate-600">
          Kini kami telah bertumbuh menjadi lebih dari 180 gubuk yang tersebar di Jabodetabek dan
          Bandung, termasuk titik-titik susu panas di berbagai stasiun KRL. Produk kami juga bisa
          dipesan lewat GrabFood, GoFood, ShopeeFood, dan TikTok Shop. Visi kami adalah menjadi
          brand minuman susu pasteurisasi terbaik dan terbesar di Indonesia.
        </p>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Tim Inti Kami</h2>
          <p className="mt-2 text-sm text-slate-500">
            *Data di bawah ini masih ilustratif per divisi. Untuk daftar tim yang diambil langsung
            dari API, kunjungi halaman <a href="/teams" className="text-green-700 underline">Teams</a>.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamDivisions.map((division) => (
              <div key={division.role} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-orange-100" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-slate-900">{division.role}</h3>
                <p className="mt-2 text-sm text-slate-600">{division.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Nilai Kami</h2>
        <p className="mt-2 text-slate-600">
          Prinsip yang kami pegang di setiap gelas susu dan setiap gubuk yang kami buka.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
