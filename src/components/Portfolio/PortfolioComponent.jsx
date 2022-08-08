import '../../assets/styles/scss/Portfolio/GlobalComponents.scss'
import { MdOutlineArrowUpward } from 'react-icons/md'
import PortfolioIntro from "../../components/Portfolio/Sections/IntroComponent";
import FloatingButton from './FloatingButtonComponent';
import PortfolioNavBar from './PortfolioNavBarComponent';
import AboutUs from './Sections/AboutUs';
import CRMImages from './Sections/CRMImages';
import CRMServices from './Sections/CRMServises';
import Footer from './Sections/Footer';
import Pricing from './Sections/Pricing';
import Reports from './Sections/Reports';

const PortfolioComponents = () => {
     return (
          <main className="portfolio-body">
               <PortfolioNavBar />
               <PortfolioIntro />
               <CRMServices />
               <CRMImages />
               <AboutUs />
               <Reports />
               <Pricing />
               <Footer />
               <FloatingButton position={'fixed'} icon={<MdOutlineArrowUpward color='#fff' size={35} />} />
          </main>
     );
}

export default PortfolioComponents;