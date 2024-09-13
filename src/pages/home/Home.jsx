import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/header";
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
      <Header />
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
