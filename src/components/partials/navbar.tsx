import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookmarkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
    return (
        <nav className="p-4 h-[80px] fixed top-0 w-full border-b flex justify-between items-center">
            <div className="flex items-center gap-4">
                <p className="font-bold text-2xl">W3Jobs</p>
                <form className="flex items-center gap-2">
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
        </nav>
    )
}
