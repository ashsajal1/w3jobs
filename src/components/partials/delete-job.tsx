'use client'
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteJob({ handleDelete }: { handleDelete: () => void }) {
    return (
        <div>
            <Button onClick={handleDelete} size="sm" variant="outline">
                <Trash2 className="size-4 mr-1" />
                <span>Delete</span>
            </Button>
        </div>
    )
}
