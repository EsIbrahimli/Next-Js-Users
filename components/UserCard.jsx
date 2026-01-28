import styles from './UserCard.module.css';
import Image from 'next/image';
import Link from 'next/link';



export default function UserCard({ user }){

       return (
        <Link href={`/users/${user.id}`} className={styles.link}>
        <div className={styles.card}>
            <Image className="rounded-full mb-4" src={`https://i.pravatar.cc/150?img=${user.id}`} alt="logo" width={100} height={100} />
                    {fields.map((field) => (
                        <p key={field.key}>{field.label}: {user[field.key]}</p>
                    ))}
        </div>
        </Link>
    );
}


const fields=[
    {
        label: 'Name',
        key: 'name',
    },
    {
        label: 'Email',
        key: 'email',
    },
    {
        label: 'Phone',
        key: 'phone',
    },
    {
        label: 'Website',
        key: 'website',
    }
]