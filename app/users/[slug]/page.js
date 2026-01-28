
import { getUserById } from '@/services/user.api';
import Link from 'next/link';
import styles from './page.module.css';
import UserCard from '@/components/UserCard';

export default async function UserPage({ params }) {
    const { slug } = await params;
    const user = await getUserById(slug);
    console.log(user);

    if (!user) {
        return (
            <div className={styles.container}>
                <h1>User not found</h1>
                <Link href="/users">Back to Users</Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <UserCard user={user} />
                <Link href="/users" className={styles.backButton}>Back to Users</Link>
            </div>
        </div>
    );
}