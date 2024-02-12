import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export function Slider() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="w-screen"
    >
      <div className="box bg-danger position-absolute top-0 rounded"></div>
      <SwiperSlide>
        <div className="p-4 d-flex justify-content-between">
          <div>
            <h3>Try your new</h3>
            <h2 className="text-danger">
              Cheezy <span>Bluster</span>
            </h2>
            <p className="textWidth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              accumsan diam est, vitae pharetra lorem porta vitae.
            </p>
            <button className="btn button text-white">Order now</button>
          </div>
          <div>
            <img
              src="https://pngimg.com/uploads/burger_sandwich/small/burger_sandwich_PNG96777.png"
              alt="Hamburger"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 d-flex justify-content-between">
          <div>
            <h3>Try your new</h3>
            <h2 className="text-danger">
              Bold <span>Burger</span>
            </h2>
            <p className="textWidth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              accumsan diam est, vitae pharetra lorem porta vitae.
            </p>
            <button className="btn button text-white">Order now</button>
          </div>
          <div>
            <img src="https://pngimg.com/uploads/burger_sandwich/small/burger_sandwich_PNG96761.png" 
              alt="Hamburger"/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 d-flex justify-content-between">
          <div>
            <h3>Try your new</h3>
            <h2 className="text-danger">
              Burger <span>Master</span>
            </h2>
            <p className="textWidth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              accumsan diam est, vitae pharetra lorem porta vitae.
            </p>
            <button className="btn button text-white">Order now</button>
          </div>
          <div>
            <img src="https://pngimg.com/uploads/burger_sandwich/small/burger_sandwich_PNG96774.png" alt="Hamburger"/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 d-flex justify-content-between">
          <div>
            <h3>Try your new</h3>
            <h2 className="text-danger">
              Sub <span>Sandwich</span>
            </h2>
            <p className="textWidth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              accumsan diam est, vitae pharetra lorem porta vitae.
            </p>
            <button className="btn button text-white">Order now</button>
          </div>
          <div>
            <img src="https://pngimg.com/uploads/burger_sandwich/small/burger_sandwich_PNG4137.png" alt="Hamburger"/>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
