import { useEffect, useState } from 'react'

interface RandomUser {
  login: { uuid: string }
  name: { first: string; last: string }
  gender: 'male' | 'female'
  picture: { large: string }
  email: string
  location: { city: string; country: string }
}

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
}

const maleNames = ['Budi Santoso', 'Agus Setiawan', 'Andi Wijaya', 'Eko Prasetyo', 'Hendra Gunawan', 'Joko Susilo']
const femaleNames = ['Siti Rahayu', 'Dewi Anggraini', 'Rina Marlina', 'Fitriani Lestari', 'Kartika Sari', 'Indah Permata']

const roles = ['Kepala Produksi', 'Barista Gubuk', 'Quality Control', 'Tim Marketing', 'Customer Service', 'Operasional Outlet']

const cities = ['Bogor', 'Depok', 'Jakarta', 'Tangerang', 'Bekasi', 'Bandung']

export default function Teams() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isCancelled = false

    async function fetchTeamMembers() {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://randomuser.me/api/?results=6')

        if (!response.ok) {
          throw new Error(`Gagal mengambil data (status ${response.status})`)
        }

        const data: { results: RandomUser[] } = await response.json()

        let maleIndex = 0
        let femaleIndex = 0

        const mapped: TeamMember[] = data.results.map((user, index) => {
          const isFemale = user.gender === 'female'
          const name = isFemale
            ? femaleNames[femaleIndex++ % femaleNames.length]
            : maleNames[maleIndex++ % maleNames.length]

          return {
            id: user.login.uuid,
            name,
            role: roles[index % roles.length],
            bio: `Bertugas di gubuk ${cities[index % cities.length]}, siap melayani para Cucu si Mbok setiap hari.`,
            photo: user.picture.large,
          }
        })

        if (!isCancelled) {
          setMembers(mapped)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Terjadi kesalahan tidak diketahui')
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false)
        }
      }
    }

    fetchTeamMembers()

    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <div>
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Tim Kami</h1>
          <p className="mt-4 text-slate-600">
            Data anggota tim di bawah ini diambil secara dinamis dari{' '}
            <code className="rounded bg-white px-1.5 py-0.5 text-sm">randomuser.me</code> sebagai
            simulasi daftar tim yang bisa diperbarui secara otomatis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-slate-500">
            <div
              className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-orange-500"
              role="status"
              aria-label="Loading"
            />
            <p>Mengambil data tim...</p>
          </div>
        )}

        {!isLoading && error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700">
            <p className="font-semibold">Gagal memuat data tim</p>
            <p className="mt-1 text-sm">{error}</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <div key={member.id} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                />
                <h3 className="mt-4 font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-green-700">{member.role}</p>
                <p className="mt-2 text-xs text-slate-500">{member.bio}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
