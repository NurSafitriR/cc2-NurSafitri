export default function Footer() {
  return (
    <footer className="bg-green-900">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-green-200 sm:px-6">
        <p className="font-semibold text-orange-400">Susu Mbok Darmi</p>
        <p className="mt-1">Sehatkan Tubuhmu Dengan Susuku</p>

        <div className="mt-4 space-y-1">
          <p>Jl. Achmad Adnawijaya No.65, RT.02/RW.16, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152</p>
          <p>
            CS: <a href="https://wa.me/6281190070902" className="hover:text-orange-300">+62 811-9007-0902</a>
            {' · '}
            Pesanan Besar: <a href="https://wa.me/6281288193770" className="hover:text-orange-300">+62 812-8819-3770</a>
          </p>
          <p>
            <a href="mailto:marcomm.pr@susumbokdarmi.id" className="hover:text-orange-300">
              marcomm.pr@susumbokdarmi.id
            </a>
          </p>
          <p>
            <a href="https://instagram.com/susu_mbokdarmi" className="hover:text-orange-300">Instagram</a>
            {' · '}
            <a href="https://tiktok.com/@susumbokdarmiofficial" className="hover:text-orange-300">TikTok</a>
            {' · '}
            <a href="https://x.com/PibosiMbok" className="hover:text-orange-300">X</a>
          </p>
        </div>

        <p className="mt-4 text-green-300">
          &copy; {new Date().getFullYear()} Susu Mbok Darmi — PT Sumoda Tama Berkah. Dibuat untuk keperluan belajar React.
        </p>
      </div>
    </footer>
  )
}
