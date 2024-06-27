'use client'
import { Trash2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { handleDelete } from "./actions";

export default function DeleteJob({ id }: { id: number }) {
    return (
        <div>
            <Button onClick={() => handleDelete(id)} size="sm" variant="outline">
                <Trash2 className="size-4 mr-1" />
                <span>Delete</span>
            </Button>
        </div>
    )
}
