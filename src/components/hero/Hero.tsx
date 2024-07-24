import ModelFashion1 from "../../assets/image/fashion-1.jpg";
import ArrowRight from "../../assets/image/right-arrow.png";
import { FiArrowDown } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="hero z-[97] w-full px-6">
      <div className="hero-wrapper flex w-full flex-col justify-center gap-2 xl:flex-row">
        <div className="flex h-full w-full flex-wrap gap-2">
          <div className="relative h-[500px] w-full rounded-3xl bg-stone-400/30 p-10">
            <h1 className="font-climatecrisis flex flex-wrap items-center gap-5">
              <span className="text-3xl xl:text-4xl">where FASHION</span>
              <img
                src={ArrowRight}
                className="h-14 w-36 object-contain xl:object-cover"
              />
            </h1>
            <h1 className="font-climatecrisis mt-5 text-5xl xl:text-6xl">
              MEETS PASSION
            </h1>

            <p className="text-md absolute bottom-0 py-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              soluta iusto expedita veniam asperiores, cumque id, tempora
              numquam voluptatibus.
            </p>
          </div>
          <div className="flex h-[245px] w-full flex-row gap-2">
            <div className="bg-model-1 group relative h-full w-full rounded-3xl bg-cover">
              <span className="text-md font-climatecrisis absolute bottom-0 p-5 tracking-[0.2em] text-white transition-all duration-500 xl:text-2xl xl:group-hover:scale-110">
                #trend
              </span>
            </div>
            <div className="bg-model-2 group relative h-full w-full rounded-3xl bg-cover">
              <span className="text-md font-climatecrisis absolute bottom-0 p-5 tracking-[0.2em] text-white transition-all duration-500 xl:text-2xl xl:group-hover:scale-110">
                #fashion addict
              </span>
            </div>
          </div>
        </div>
        <div className="group relative h-full w-full rounded-2xl xl:max-h-[750px] xl:overflow-hidden">
          <img
            src={ModelFashion1}
            className="pointer-events-none -z-40 h-full w-full rounded-3xl object-cover"
          />
          <Button className="font-urbanist absolute bottom-0 left-48 right-0 top-36 z-50 m-auto h-[60px] w-[60px] rounded-full border-[1px] bg-white/30 font-semibold uppercase text-white backdrop-blur-sm transition-colors duration-300 hover:border-black hover:text-black">
            shop now
          </Button>
          <div className="absolute bottom-0 right-0 p-4">
            <Button hasIcon={true} variant="primary" className="group/button-1">
              learn more
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black group-hover/button-1:bg-white">
                <FiArrowDown className="text-xl font-light text-white group-hover/button-1:text-black" />
              </span>
            </Button>
            <Button
              hasIcon={true}
              variant="secondary"
              className="group/button-2"
            >
              shop by essentials
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white group-hover/button-2:bg-black">
                <MdOutlineProductionQuantityLimits className="text-xl font-light text-black group-hover/button-2:text-white" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
