'use client'

import { usePathname } from "next/navigation";

export default function Main({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const path = usePathname()
    const pathName = path.split('/')[1]
    return (
        <main className={`${pathName === 'job'? 'mt-[160px]':'mt-[73px]'}`}>{children}</main>
    )
}
