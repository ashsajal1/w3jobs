import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
    return (
        <div className="p-12">
            <div>
                <h1 className='text-xl md:text-4xl font-bold'>Get jobs that suit your skills</h1>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <Link href={'/jobs'}>
                    <Button>Explore jobs</Button>
                </Link>
                <Link href={'/jobs'}>
                    <Button variant={'outline'}>Post jobs</Button>
                </Link>
            </div>
        </div>
    )
}
