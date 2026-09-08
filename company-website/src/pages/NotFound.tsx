import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-slate-900">404</h1>
      <p className="mt-2 text-slate-600">Halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/" className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800">
        &larr; Kembali ke Home
      </Link>
    </div>
  )
}
