import React from 'react';
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";

function Layout({children}) {
    return (
        <div className={'content'}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;