import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar"
import { Slider } from "../components/slider"
import { CardProduct } from "../components/cardProduct"
import { HotDeals } from "../components/hotDeals"
import { WhyTry } from "../components/whyTry"
import { Reviews } from "../components/reviews"
import { Footer } from "../components/footer"
import api from "../services/axios"

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/api/products")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error(err)
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <Slider/>
      <div className='bg text-center p-4'>
        <h2>
          Explore <span className="text-danger">Menu</span>
        </h2>     
        <div className='grid'>
          {data.map((item) => (
             <CardProduct key={item.id} product={item}/>
          ))}
        </div>
      </div>
      <HotDeals/>
      <WhyTry/>
      <Reviews/>
      <Footer/>
    </div>
  );
};
