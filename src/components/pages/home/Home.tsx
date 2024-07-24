import Hero from "../../hero/Hero";
import TextBlock from "../../text-block/TextBlock";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <TextBlock className="text-3xl uppercase" title="Make your outfit">
        <div className="tracking-wide">
          <p className="font-urbanist text-2xl leading-loose">
            Dare to be different. Clothing with attitude. Embrace your
            individuality.
            <span className="bg-black p-1 text-white">
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
