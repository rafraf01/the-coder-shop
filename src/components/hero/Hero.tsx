import ModelFashion1 from "../../assets/image/fashion-1.jpg";
import ArrowRight from "../../assets/image/right-arrow.png";
import { FiArrowDown } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Button from "../button/Button";
import InPageMenu from "../in-page-menu/InPageMenu";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const inpageMenu = ['shop now', 'learn more', 'essentials']
  const navigate = useNavigate();
  return (
    <div className="hero z-[97] w-full px-6">
      <div className="hero-wrapper flex w-full flex-col justify-center gap-3 xl:flex-row">
        <div className="flex h-full w-full flex-wrap gap-3">
          <div className="relative h-[500px] w-full rounded-3xl bg-stone-400/30 p-10">
            <h1 className="flex flex-wrap items-center gap-5 font-climatecrisis">
              <span className="text-2xl xl:text-5xl">where FASHION</span>
              <img
                src={ArrowRight}
                alt="arrow right"
                className="h-14 w-36 object-contain xl:object-cover"
              />
            </h1>
            <h1 className="mt-5 font-climatecrisis text-3xl lg:text-5xl">
              MEETS PASSION
            </h1>

            <p className="text-md absolute bottom-0 right-0 p-10 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              soluta iusto expedita veniam asperiores, cumque id, tempora
              numquam voluptatibus.
            </p>
          </div>
          <div className="flex h-[245px] w-full flex-row gap-3">
            <div className="group relative h-full w-full rounded-3xl bg-model-1 bg-cover">
              <span className="text-md absolute bottom-0 p-5 font-climatecrisis tracking-[0.2em] text-white transition-all duration-500 xl:text-2xl xl:group-hover:scale-110">
                #trend
              </span>
            </div>
            <div className="group relative h-full w-full rounded-3xl bg-model-2 bg-cover">
              <span className="text-md absolute bottom-0 p-5 font-climatecrisis tracking-[0.2em] text-white transition-all duration-500 xl:text-2xl xl:group-hover:scale-110">
                #fashion addict
              </span>
            </div>
          </div>
        </div>
        <div className="group relative h-full w-full rounded-2xl xl:max-h-[750px] xl:overflow-hidden">
          <img
            src={ModelFashion1}
            alt="model fashion 1"
            className="pointer-events-none -z-40 h-full w-full rounded-3xl object-cover"
          />
          <div className="absolute bottom-0 hidden flex-wrap p-4 lg:flex xl:flex lg:w-full">
            <Button onClick={() => navigate('products')}
            className="z-50 h-10 w-10 justify-start rounded-full border-[1px] bg-white/30 font-urbanist font-semibold uppercase text-white backdrop-blur-sm transition-colors duration-300 hover:border-black hover:text-black lg:h-[60px] lg:w-[60px] xl:h-[60px] xl:w-[60px]">
              shop now
            </Button>
            <Button
              hasIcon={true}
              variant="primary"
              className="group/button-1 justify-end lg:ml-auto xl:ml-auto"
            >
              learn more
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black group-hover/button-1:bg-white lg:h-8 lg:w-8">
                <FiArrowDown className="text-xs font-light text-white group-hover/button-1:text-black lg:text-xl" />
              </span>
            </Button>
            <Button
              hasIcon={true}
              variant="secondary"
              className="group/button-2 justify-end lg:ml-5 xl:ml-5"
            >
              shop by essentials
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white group-hover/button-2:bg-black lg:h-8 lg:w-8">
                <MdOutlineProductionQuantityLimits className="text-xs font-light text-black group-hover/button-2:text-white lg:text-xl" />
              </span>
            </Button>
          </div>
          <div className="block lg:hidden xl:hidden absolute bottom-5 w-full">
            <InPageMenu menu={inpageMenu} onClick={() => navigate('products')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
