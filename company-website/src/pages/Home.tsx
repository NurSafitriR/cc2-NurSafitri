import { Link } from 'react-router-dom'
import bannerVideo from '../assets/Banner.mp4'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'

const favoriteServiceIds = ['darmi-cookies', 'darmi-pisang', 'darmi-strawberry']
const favoriteServices = favoriteServiceIds
  .map((id) => services.find((service) => service.id === id))
  .filter((service) => service !== undefined)

export default function Home() {
  return (
    <div>
      <div className="relative h-56 w-full overflow-hidden bg-green-900 sm:h-72 md:h-96">
        <video
          className="h-full w-full object-cover"
          src={bannerVideo}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(event) => event.preventDefault()}
        />
      </div>

      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
            Sejak 2013 &middot; Bogor
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Sehatkan Tubuhmu Dengan Susuku
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Susu Mbok Darmi menghadirkan susu pasteurisasi segar dari peternak lokal Bogor,
            disajikan dengan nuansa &ldquo;jadul&rdquo; yang hangat di lebih dari 180 gubuk
            se-Jabodetabek dan Bandung.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/services"
              className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-orange-600"
            >
              Lihat Menu Kami
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-green-700 bg-white px-6 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Tentang Perusahaan Kami</h2>
            <p className="mt-4 text-slate-600">
              Sejak 2013, Susu Mbok Darmi berawal dari kecintaan pada susu pasteurisasi berkualitas
              dari peternak lokal Bogor. Kini kami hadir di lebih dari 180 gubuk (outlet) yang
              tersebar di Jabodetabek dan Bandung, menyajikan susu segar dengan sentuhan nostalgia
              untuk seluruh &ldquo;Cucu si Mbok&rdquo;.
            </p>
            <Link
              to="/about"
              className="mt-4 inline-block text-sm font-semibold text-green-700 hover:text-green-800"
            >
              Baca selengkapnya tentang kami &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-green-50 p-6 text-center">
              <p className="text-3xl font-bold text-green-700">180+</p>
              <p className="mt-1 text-sm text-slate-600">Gubuk (Outlet)</p>
            </div>
            <div className="rounded-xl bg-green-50 p-6 text-center">
              <p className="text-3xl font-bold text-green-700">13+</p>
              <p className="mt-1 text-sm text-slate-600">Tahun Berdiri</p>
            </div>
            <div className="rounded-xl bg-orange-50 p-6 text-center">
              <p className="text-3xl font-bold text-orange-600">17</p>
              <p className="mt-1 text-sm text-slate-600">Varian Rasa</p>
            </div>
            <div className="rounded-xl bg-orange-50 p-6 text-center">
              <p className="text-3xl font-bold text-orange-600">3</p>
              <p className="mt-1 text-sm text-slate-600">Platform Pesan Antar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Menu Favorit Kami</h2>
            <p className="mt-2 text-slate-600">Susu pasteurisasi segar dengan berbagai varian rasa</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteServices.map((service) => (
              <div key={service.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                {service.imageUrl && (
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-block rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Lihat Semua Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Apa Kata Cucu si Mbok</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="rounded-xl border border-slate-200 p-6">
              <blockquote className="text-sm text-slate-600">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                {testimonial.name}
                <span className="block text-xs font-normal text-slate-500">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}
