'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLink = {
    href: string
    label: string
}

type Props = {
    navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname()

    return (
        <>
            {navLinks.map(({ href, label }) => (
                <Link
                    key={label}
                    href={href}
                    className={pathname === href ? "active" : ""}
                >
                    {label}
                </Link>
            ))}
        </>
    )
}

export {Navigation}