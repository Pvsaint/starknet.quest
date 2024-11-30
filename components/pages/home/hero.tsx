import React, { FunctionComponent } from "react";
import styles from "@styles/components/pages/home/hero.module.css";

import Typography from "../../UI/typography/typography";
import { TEXT_TYPE } from "@constants/typography";
import SplitTitle from "./splitTitle";


const Hero: React.FC = () => (
  <header role="banner">
      <div className="item-center justify-center pb-4">
        <SplitTitle className="leading-12 pb-2" />

        <Typography type={TEXT_TYPE.H1} 
          className={`${styles.header} flex justify-center text-center text-5xl leading-12 text-transparent`}>
          WITH STARKNET
        </Typography>
      </div>
      
      <Typography type={TEXT_TYPE.BODY_MICRO} color="textGray"
        className="max-w-screen-sm text-sm leading-6 text-center">
        Starknet Quest is our gateway to DeFi, offering tools and opportunities 
        for individuals, DAOs, and protocols to grow their assets and explore Starknet's
        full potential.
      </Typography>

  </header>
);

export default Hero;
