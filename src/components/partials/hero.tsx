import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
    return (
        <div className='flex flex-col justify-start md:items-start items-center'>
            <h1 className='font-bold text-lg md:text-2xl md:w-1/3 text-center md:text-start'>W3Jobs: Connecting Web Talent with Top Companies</h1>
            <p className='text-center md:text-start'>Find Your Next Great Opportunity.</p>

            <div className="flex items-center gap-2 mt-4">
                <Link href={'/jobs'}>
                    <Button>Explore jobs</Button>
                </Link>
                <Link href={'/jobs/create'}>
                    <Button variant={'outline'}>Post jobs</Button>
                </Link>
            </div>
        </div>
    )
}
