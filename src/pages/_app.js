import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  return (
      <ParallaxProvider>
        <Svg/>
        <Header/>
        <div className="font-dana">
          <Component {...pageProps} />
        </div>
      </ParallaxProvider>
  );
}
