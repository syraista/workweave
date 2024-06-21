import Navigationbar from '../component/Navigationbar'
import Bannerhome from '../component/Bannerhome'
import Kategorilist from '../component/Kategorilist'
import Footer from '../component/Footer'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomeLI() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollToElementId = params.get('lookup');
        if (scrollToElementId) {
            const element = document.getElementById(scrollToElementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Navigationbar log={1} navn={1}/>
            <Bannerhome name={"RAIHAN"}/>
            <Kategorilist/>
            <Footer/>
        </>
    )
}
  
