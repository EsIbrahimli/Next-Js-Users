import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col min-h-screen  font-sans  h-full">
         <nav className="flex gap-4 justify-center items-center bg-sky-300 py-4 mb-16 w-full h-14">
          <ul>
            <li className="text-xl text-sky-800 font-bold hover:text-sky-500 "><Link href="/users">Users</Link></li>
          </ul>
         </nav>
         <Image className="mx-auto" src={`https://www.goodfreephotos.com/cache/vector-images/group-of-members-users-icon_800.png?cached=1522468571`} alt="logo" width={700} height={700} />
 
    </div>
  );
} 
