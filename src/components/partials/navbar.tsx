'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookmarkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
    const path = usePathname();
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [country, setCountry] = useState('');
    const [experience, setExperience] = useState('');
    const [workType, setWorkType] = useState('');
    const [datePosted, setDatePosted] = useState('');
    const [salaryRange, setSalaryRange] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams();
        if (searchText) searchParams.set('search', searchText);
        if (country) searchParams.set('country', country);
        if (experience) searchParams.set('experience', experience);
        if (workType) searchParams.set('workType', workType);
        if (datePosted) searchParams.set('datePosted', datePosted);
        if (salaryRange) searchParams.set('salaryRange', salaryRange);
        router.push(`/jobs?${searchParams.toString()}`);
    }, [searchText, country, experience, workType, datePosted, salaryRange, router]);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchText(e.currentTarget.search.value);
    };

    const experiences = ['Entry level', 'Mid level', 'Senior'];
    const workTypes = ['Remote', 'Onsite', 'Hybrid', 'Freelance'];
    const datePosts = ['Past month', 'Past week', 'Past 24 hours', 'Anytime'];
    const salaryRanges = ['$40000+', '$60000+', '$80000+', '$100000+', '$150000+'];

    return (
        <nav className={`bg-white dark:bg-black z-10 fixed top-0 w-full flex flex-col justify-between ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm dark:bg-opacity-80 dark:backdrop-blur-lg' : ''}`}>
            <section className="p-4 border-b flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                    <Link href='/'><p className="font-bold text-2xl">W3Jobs</p></Link>
                    <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
                        <Input name="search" type="text" placeholder="react job, angular job" />
                        <Button type="submit">Search</Button>
                    </form>
                </div>
                <div className="flex items-center gap-2">
                    <Button size={'icon'} className="rounded-full" variant={'ghost'}>
                        <BookmarkIcon />
                    </Button>
                    <ModeToggle />
                    <div>
                        <SignedIn>
                            <Button size={'icon'} variant={'secondary'} className="rounded-full">
                                <UserButton />
                            </Button>
                        </SignedIn>
                        <SignedOut>
                            <Button>
                                <SignInButton />
                            </Button>
                        </SignedOut>
                    </div>
                </div>
            </section>
            {/* Filters */}
            <section className={`p-4 border-b w-full overflow-y-hidden overflow-x-scroll md:overflow-x-auto ${path === '/jobs' ? 'flex justify-start gap-3 items-center' : 'hidden'}`}>
                <p>Filters</p>
                <Select onValueChange={(value) => setCountry(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Country</SelectLabel>
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setExperience(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Experience</SelectLabel>
                            {experiences.map((experience: string) => (
                                <SelectItem key={experience} value={experience}>{experience}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setWorkType(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Work Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Work Type</SelectLabel>
                            {workTypes.map((wt: string) => (
                                <SelectItem key={wt} value={wt}>{wt}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setDatePosted(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Date Posted" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Date Posted</SelectLabel>
                            {datePosts.map((date: string) => (
                                <SelectItem key={date} value={date}>{date}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setSalaryRange(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Salary Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Salary Range</SelectLabel>
                            {salaryRanges.map((salary: string) => (
                                <SelectItem key={salary} value={salary}>{salary}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </section>
        </nav>
    );
}
