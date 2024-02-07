import Navbar from "@/components/front/Navbar";
import Banner from "@/components/front/Home/banner";
import News from "@/components/front/Home/News";
import About from "@/components/front/Home/About";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Banner />
      <News />
      <About />
    </div>
  );
}
