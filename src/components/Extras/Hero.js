import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";

const Hero = () => {
  return (
    <div
    className={`relative min-h-[75vh] 100px:min-h-[100vh] w-full bg-no-repeat bg-origin-content ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Deals for <br /> You Daily Needs
        </h1>
        
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
