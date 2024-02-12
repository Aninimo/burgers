import type { AppProps } from 'next/app'

import { Provider } from "react-redux";
import store from "../redux/store";

import '../styles/globals.scss'
import "swiper/css";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/css/bootstrap.min.css");
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }
  
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
