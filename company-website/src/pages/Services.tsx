import { services } from '../data/services'

export default function Services() {
  return (
    <div>
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Menu Kami</h1>
          <p className="mt-4 text-slate-600">
            Susu pasteurisasi segar dengan berbagai varian rasa, dibuat dari bahan baku pilihan
            peternak lokal Bogor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              {service.imageUrl && (
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-3 flex-1 text-sm text-slate-600">{service.description}</p>
                {service.price && (
                  <p className="mt-4 text-sm font-semibold text-orange-600">{service.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
