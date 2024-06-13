'use client'

import { usePathname } from "next/navigation";

export default function Main({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname()

    return (
        <main className={`${path === '/jobs'? 'mt-[146px]':'mt-[73px]'}`}>{children}</main>
    )
}
