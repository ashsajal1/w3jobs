import { UserProfile } from '@clerk/nextjs'

export default function page() {
    return (
        <div className='grid place-items-center p-6'>
            <UserProfile />
        </div>
    )
}
