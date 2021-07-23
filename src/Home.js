import React from "react";
import "./Home.css";
import Product from "./Product";
import Banner from "./Banner";

// Content for the banner carousel and product listings on the homepage 
export default function Home() {
  return (

    <div className="home">
      <Banner />
      <div className="home__row">
        <Product
          id="12321341"
          title="Samsung Galaxy Book Pro Laptop Computer, 15.6 inch AMOLED Screen, i5 11th Gen"
          price={1099.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/813dec-cszS._AC_UY218_.jpg"
        />
        <Product
          id="12321342"
          title="Microsoft Xbox One X Console w/ Accessories, 1TB HDD - White"
          price={758.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/51Fvbb5J6cL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321343"
          title="RESPAWN RSP-110 Racing Style Gaming, Reclining Chair with Footrest, Red"
          price={171.54}
          rating={4}
          image="https://m.media-amazon.com/images/I/71qYGd8XJ7L._AC_UL320_.jpg"
        />
        <Product
          id="12321344"
          title="Playstation 5 DualSense Wireless Controller for PS5 Console - Gaming Accessories"
          price={66.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41UK+fp9jcS.jpg"
        />
        <Product
          id="12321345"
          title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons"
          price={99.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/41Ww3zikowL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321346"
          title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen"
          price={945.07}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61XDeaOrrKL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

