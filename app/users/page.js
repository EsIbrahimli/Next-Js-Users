import { getUsers } from '@/services/user.api';
import UserCard from '@/components/UserCard';
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from 'next/link';

export default async function UsersPage(){
  

    const users = await getUsers();
    console.log(users);

    
    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
            <h1 className="text-2xl font-bold text-sky-800 flex items-center gap-2 mb-4">Users <FaArrowAltCircleDown /></h1>
            <div className="flex flex-wrap justify-center items-center gap-2 ">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
            </div>
            <Link href="/" className="text-blue-500 font-bold hover:text-blue-700">Back to Home</Link>
        </div>
    );
}