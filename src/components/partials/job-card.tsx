import { EyeIcon, Bookmark } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function JobCard() {
    return (
        <div className="flex items-start gap-4 border p-2">
            <Avatar className="ml-4">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
                <h3 className="font-bold text-lg">Senior Frontend Web developer</h3>
                <p className="font-light text-slate-600">Company name</p>
                <div className="flex items-center gap-2">
                    <p className="text-sm font-light text-slate-600">United States <span>(Remote)</span></p>
                    <Separator orientation="vertical" />
                    <p className="text-sm font-light text-slate-600">$120000 - $250000</p>
                </div>

                <div className="flex items-center gap-2 mt-4">
                    <Button size={'sm'}>
                        <EyeIcon className="size-4 mr-1" />
                        <span>View</span>
                    </Button>
                    <Button size={'sm'} variant={'outline'}>
                        <Bookmark className="size-4 mr-1" />
                        <span>Save</span>
                    </Button>
                </div>
            </div>

        </div>

    )
}
