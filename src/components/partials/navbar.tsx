'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookmarkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const path = usePathname();
    const pathName = path.split('/')[1];

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const experiences = ['Enter level', 'Mid level', 'Senior']
    const workType = ['Remote', 'Onsite', 'Hybrid']
    const datePosted = ['Past month', 'Past week', 'Past 24 hours', 'Anytime']
    const salaryRanges = ['$40000+', '$60000+', '$80000+', '$100000+', '$150000+',]
    return (
        <nav className={`bg-white dark:bg-black z-10 fixed top-0 w-full flex flex-col justify-between ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm dark:bg-opacity-80 dark:backdrop-blur-lg' : ''}`}>
            <section className="p-4 border-b flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                    <Link href='/'><p className="font-bold text-2xl">W3Jobs</p></Link>
                    <form className="hidden md:flex items-center gap-2">
                        <Input type="text" placeholder="react job, angular job" />
                        <Button>Search</Button>
                    </form>
                </div>

                <div className="flex items-center gap-2">
                    <Button size={'icon'} className="rounded-full" variant={'ghost'}>
                        <BookmarkIcon />
                    </Button>
                    <ModeToggle />
                    <Avatar className="ml-4">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </section>

            <section className={`p-4 border-b w-full overflow-y-hidden overflow-x-scroll md:overflow-x-auto ${pathName === 'jobs' && path.length === 2 ? 'flex justify-start gap-3 items-center' : 'hidden'}`}>
                <p>Filters</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Experience</SelectLabel>
                            {
                                experiences.map((experience: string) => (
                                    <SelectItem key={experience} value={experience}>{experience}</SelectItem>

                                ))
                            }

                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Remote" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Work type</SelectLabel>
                            {
                                workType.map((wt: string) => (
                                    <SelectItem key={wt} value={wt}>{wt}</SelectItem>

                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Date Posted" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Date Posted</SelectLabel>
                            {
                                datePosted.map((date: string) => (
                                    <SelectItem key={date} value={date}>{date}</SelectItem>

                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Salary" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Salary Range</SelectLabel>
                            {
                                salaryRanges.map((salary: string) => (
                                    <SelectItem key={salary} value={salary}>{salary}</SelectItem>

                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </section>
        </nav>
    )
}
