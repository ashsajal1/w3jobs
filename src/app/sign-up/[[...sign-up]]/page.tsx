import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return <div className='grid place-items-center p-6'>
        <SignUp />
    </div>;
}