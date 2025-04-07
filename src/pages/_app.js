import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Svg/>
        <Header/>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </>
  );
}
