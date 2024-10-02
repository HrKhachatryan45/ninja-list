import React from 'react';
import Link from "next/link";
import Image from "next/image";

function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                {/*<img src={'/logo.png'}  />*/}
                <Image src={'/logo.png'} width={128} height={77} />
            </div>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/ninjas'}>NInja list</Link>
        </nav>
    );
}

export default Navbar;