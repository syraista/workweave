import Navigationbar from '../component/Navigationbar'
import Bannerhome from '../component/Bannerhome'
import Kategorilist from '../component/Kategorilist'
import Footer from '../component/Footer'
export default function HomeLI() {
    return (
        <>
            <Navigationbar log={1} navn={1}/>
            <Bannerhome name={"RAIHAN"}/>
            <Kategorilist/>
            <Footer/>
        </>
    )
}
  
