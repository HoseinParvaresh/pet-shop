import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';

export default function App({ Component, pageProps }) {
  return (
      <>
        <Svg/>
        <Header/>
        <div className="container font-dana">
          <Component {...pageProps} />
        </div>
      </>
  );
}
