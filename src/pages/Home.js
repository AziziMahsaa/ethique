import Breakfasttable from "../component/home/Breakfasttable";
import Discover from "../component/home/Discover";
import Cardsection from "../component/home/newflavor/Cardsection";
import Colorfulmacarons from "../component/home/Colorfulmacarons";
import Socialposts from "../component/home/Socialposts";
import Swipery from "../component/home/Swiper";
import Chocolate from "../component/home/Chocolate";
function Home() {
  return (
    <div className="flex flex-col gap-5 bg-white">
      <div
        className="h-[545px] w-full bg-cover md:hidden "
        id="wallpaper"
      ></div>
      <div
        className=" hidden md:block h-screen w-full  bg-cover "
        id="wallpaperweb"
      ></div>

      <Cardsection />
      <Discover />
      <Breakfasttable />
      <Chocolate />
      <Swipery />
      <Colorfulmacarons />
      <Socialposts />
    </div>
  );
}

export default Home;
