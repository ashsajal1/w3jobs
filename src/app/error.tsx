'use client'

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Bug } from "lucide-react"


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="grid place-content-center">
            <div className="flex items-center flex-col gap-4 mt-24">
                <Alert className="flex flex-col gap-2">
                    <AlertDescription className="flex flex-col items-center">
                        <Bug className="h-10 w-10" />
                        <h1 className="mt-4">Something went wrong!</h1>
                    </AlertDescription>

                    <Button onClick={() => reset()}>Try again</Button>
                </Alert>

            </div>
        </div>
    )
}