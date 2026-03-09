"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav>
      <Link href="/" className="logo">
        Studio <span>Lumière</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" className={pathname === "/services" ? "active" : ""}>
            Services
          </Link>
        </li>
      </ul>
    </nav>
  )
}
