import React from 'react';
import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
function NotFound(props) {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            // router.back()
            router.push('/')
        },3000)
    }, []);

    return (
        <div className={'not-found'}>
            <h1>Oooops...</h1>
            <h2>Page not found</h2>
            <p>Go back to <Link href={'/'}>Homepage</Link> </p>
        </div>
    );
}

export default NotFound;