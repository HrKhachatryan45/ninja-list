import React from 'react';
import styles from '../../styles/Ninjas.module.css'
import Link from "next/link";
export const getStaticProps = async () => {
    const response =await fetch('https://jsonplaceholder.typicode.com/users')
    const json =await response.json()

    return {
        props:{ninjas:json}
    }

}
function AllNinjas({ninjas}) {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map((ninja)=>(
                <div key={ninja.id}>
                    <Link href={`/ninjas/${ninja.id}`} className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default AllNinjas;