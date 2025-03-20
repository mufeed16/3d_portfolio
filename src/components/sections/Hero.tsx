import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#da8ee7]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} #da8ee7 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="mt-8 flex flex-row gap-4">
          </div>
        </div>
      </div>

      <ComputersCanvas />

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    </section>
  );
};

export default Hero;

