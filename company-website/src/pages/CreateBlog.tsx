import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useBlog } from '../context/BlogContext'

export default function CreateBlog() {
  const { user } = useAuth()
  const { addPost } = useBlog()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const excerpt = content.length > 150 ? `${content.slice(0, 150)}...` : content

    addPost({
      title,
      excerpt,
      content,
      author: user?.name ?? 'Anonim',
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    })

    navigate('/blog')
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Tulis Blog Baru</h1>
      <p className="mt-2 text-slate-600">
        Halaman ini hanya bisa diakses karena kamu sudah login sebagai{' '}
        <span className="font-semibold">{user?.name}</span>. Coba logout lalu buka halaman ini lagi
        untuk melihat bagaimana Protected Route bekerja.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-700">
            Judul
          </label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Judul artikel kamu"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-slate-700">
            Konten
          </label>
          <textarea
            id="content"
            required
            rows={8}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Tulis isi artikel di sini..."
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-slate-700">
            Tag/Kategori <span className="text-slate-400">(opsional, pisahkan dengan koma)</span>
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="React, Tutorial"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Publikasikan
        </button>
      </form>
    </div>
  )
}
