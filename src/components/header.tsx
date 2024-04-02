import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'
export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <a href="/">
        <img src={nlwUniteIcon} alt="" />
      </a>
      <nav className="flex gap-5 font-medium text-sm">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </header>
  )
}
