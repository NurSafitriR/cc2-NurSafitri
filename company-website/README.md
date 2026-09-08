# Susu Mbok Darmi — Company Profile Website

Company profile website dibangun dengan **React + Vite + TypeScript + Tailwind CSS**.
Terdiri dari 7 halaman: Home, About Us, Services, Teams, Blog List, Create Blog, dan Login.

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka URL yang muncul di terminal (default `http://localhost:5173`).

## Struktur Folder

```
src/
  context/
    AuthContext.tsx     -> state autentikasi global
    BlogContext.tsx     -> state daftar blog global
  components/
    Layout.tsx           -> Header + Footer + <Outlet />
    Header.tsx
    Footer.tsx
    ProtectedRoute.tsx    -> route guard untuk Create Blog
  pages/
    Home.tsx, AboutUs.tsx, Services.tsx, Teams.tsx,
    BlogList.tsx, CreateBlog.tsx, Login.tsx, NotFound.tsx
  data/
    dummyBlogs.ts, services.ts, testimonials.ts
  types/
    blog.ts
  App.tsx
  main.tsx
```

## Arsitektur

- **Routing** — React Router, semua halaman nested di bawah `Layout` (Header & Footer tetap, konten berganti lewat `<Outlet />`). Route `blog/create` dibungkus `ProtectedRoute`, yang redirect ke `/login` jika user belum login.
- **State management** — `AuthContext` menyimpan status login, `BlogContext` menyimpan daftar blog. Keduanya diakses lintas halaman lewat hook `useAuth()` dan `useBlog()`.
- **Teams** — data anggota tim diambil dari `https://randomuser.me/api/?results=6`.

## Status & Next Steps

| Bagian | Status saat ini | Next step |
|---|---|---|
| Login (`AuthContext.tsx`) | Simulasi — tanpa validasi server, status disimpan di `localStorage` | Sambungkan ke API login Backendless, simpan token yang dikembalikan |
| Data Blog (`BlogContext.tsx`, `dummyBlogs.ts`) | Data dummy, blog baru hanya tersimpan di state React (hilang saat refresh) | Sambungkan ke tabel Blog di Backendless untuk fetch & create |
| Data Services & Testimonials | Statis di kode | Bisa dipindah ke tabel/CMS Backendless |
| About Us — daftar tim | Placeholder manual | Satukan dengan data Teams atau tabel Team Members di Backendless |
| Create Blog | Validasi hanya di client | Tambahkan validasi/pengecekan token di server |
