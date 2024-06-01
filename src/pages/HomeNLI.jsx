import BannerNLI from '../component/BannerNLI'
import Navigationabar from '../component/Navigationbar'
import KatpopularNLI from '../component/KatpopularNLI'
import PromoNLI from '../component/PromoNLI'
import WhywNLI from '../component/WhywNLI'
import WelcomeNLI from '../component/WelcomeNLI'
import Footer from '../component/Footer'

export default function HomeNLI() {
    return (
        <>
            <Navigationabar log={0}/>
            <BannerNLI/>
            <KatpopularNLI/>
            <PromoNLI/>
            <WhywNLI/>
            <WelcomeNLI/>
            <Footer/>
        </>
    )
}
  
