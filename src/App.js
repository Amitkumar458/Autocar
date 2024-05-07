
import TopNav from './Component/TopNav';
import './App.css';
import SelectYourType from './Component/SelectYourType';
import BuySellCar from './Component/BuySellCar';
import HelpfulCarBuying from './Component/HelpfulCarBuying';
import RecentReview from './Component/RecentReview';
import WhyChooseUs from './Component/WhyChooseUs';
import BannerInfo from './Component/Banner/BannerInfo';
import Footer from './Component/Footer/Footer';
import QyeryBanner from './Component/Banner/QyeryBanner';
import BookAutoCar from './Component/BookAutoCar';
import HelpCenter from './Component/HelpCenter';
import ExploreVehicle from './Component/ExploreVehicle';
import TopNavMain from './Component/TopNavComp/TopNavMain';

function App() {
  return (
    <>
      <TopNav/>
      <TopNavMain/>
      <SelectYourType/>
      <BuySellCar/>
      <ExploreVehicle/>
      <WhyChooseUs/>
      <BookAutoCar/>
      <HelpCenter/>
      <BannerInfo/>
      <RecentReview/>
      <HelpfulCarBuying/>
      <QyeryBanner/>
      <Footer/>
    </>
  );
}

export default App;
