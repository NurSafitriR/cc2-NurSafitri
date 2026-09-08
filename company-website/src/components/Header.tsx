import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors hover:text-orange-300 ${
    isActive ? 'text-orange-400' : 'text-green-50'
  }`

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-green-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg font-bold text-white">
            M
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold text-orange-400">Susu Mbok Darmi</span>
            <span className="text-xs text-green-100">Sehatkan Tubuhmu Dengan Susuku</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About Us
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Menu
          </NavLink>
          <NavLink to="/teams" className={navLinkClasses}>
            Teams
          </NavLink>
          <NavLink to="/blog" className={navLinkClasses}>
            Blog
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="hidden text-sm text-green-100 sm:inline">
                Hi, <span className="font-semibold text-white">{user?.name}</span>
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg border border-green-600 px-3 py-1.5 text-sm font-medium text-green-50 transition hover:bg-green-700"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="rounded-lg bg-orange-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-orange-600"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      <nav className="flex items-center justify-center gap-4 overflow-x-auto border-t border-green-700 px-4 py-2 md:hidden">
        <NavLink to="/" className={navLinkClasses} end>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClasses}>
          About
        </NavLink>
        <NavLink to="/services" className={navLinkClasses}>
          Menu
        </NavLink>
        <NavLink to="/teams" className={navLinkClasses}>
          Teams
        </NavLink>
        <NavLink to="/blog" className={navLinkClasses}>
          Blog
        </NavLink>
      </nav>
    </header>
  )
}
