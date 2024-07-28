import Hero from "../../hero/Hero";
import TextBlock from "../../text-block/TextBlock";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <TextBlock className="text-3xl uppercase" title="Make your outfit">
        <div className="tracking-wide max-w-[800px]">
          <p className="font-urbanist lg:text-2xl text-xl leading-10 text-balance">
            Dare to be different. Clothing with attitude. Embrace your
            individuality.
            <span className="border-[1px] border-black rounded-full p-1 px-3 text-black mx-3 font-bold">
              Style meets comfort.
            </span>
            Unleash your unique style. Be bold, Be fashionable. Style that
            speaks volumes. Fashion that empowers.
          </p>
        </div>
      </TextBlock>
    </section>
  );
};

export default Home;
