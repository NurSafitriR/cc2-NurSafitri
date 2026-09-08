import { Link } from 'react-router-dom'
import { useBlog } from '../context/BlogContext'

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogList() {
  const { posts } = useBlog()

  return (
    <div>
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Blog</h1>
          <p className="mt-4 text-slate-600">
            Cerita, tips, dan info seputar susu pasteurisasi dan gubuk Susu Mbok Darmi.
          </p>
          <Link
            to="/blog/create"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            + Tulis Blog Baru
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{post.author}</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-slate-500">Belum ada artikel. Jadilah yang pertama menulis!</p>
        )}
      </section>
    </div>
  )
}
