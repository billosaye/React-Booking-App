import Navbar from "../../components/navbar/Navbar";
import MainHeader from "../../components/header/MainHeader";
import { Featured } from "../../components/featured/Featured";
import "./home.css";
import { Propertylist } from "../../components/PropertyList/Propertylist";
import { Featuredproperties } from "../../components/FeaturedProperties/Featuredproperties";
import { MailList } from "../../components/MailList/MailList";
import Footer from "../../components/Footer/footer";
function Home() {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <Propertylist />
        <h1 className="homeTitle">Home Guest Love</h1>
        <Featuredproperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
