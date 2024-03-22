import './App.css';
import Coin from './Coin/Coin';
import Logo from './Logo/Logo';
import RedirectBlock from './RedirectBlock/RedirectBlock';
import VideoBlock from './VideoBlock/VideoBlock';
import coinImg1 from '../images/coins/coin 1.svg';
import coinImg2 from '../images/coins/coin 2.svg';
import coinImg3 from '../images/coins/coin 3.svg';
import coinImg4 from '../images/coins/coin 4.svg';
import { useEffect, useState } from 'react';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let widthCoin1 = windowWidth >= 680
    ? "123px"
    : '72px';
  let widthCoin2 = windowWidth >= 680
    ? "131px"
    : "97px";
  let widthCoin3 = windowWidth >= 680
    ? "89px"
    : "60px";
  let widthCoin4 = windowWidth >= 680
    ? "71.85px"
    : "40px";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="app">
      <Logo />
      <div className="app-content">
        <VideoBlock />
        <RedirectBlock />
      </div>
      <Coin
        img={coinImg2}
        left="-5%"
        width={widthCoin2}
        duration='2.2s' />
      <Coin
        img={coinImg1}
        left="10%"
        width={widthCoin1}
        duration="1.8s" />
      <Coin
        img={coinImg3}
        left="20%"
        width={widthCoin3}
        duration='2.4s' />
      <Coin
        img={coinImg2}
        left={"40%"}
        width={widthCoin2}
        duration='2s' />
      <Coin
        img={coinImg4}
        left={"60%"}
        width={widthCoin4}
        duration='2.2s' />
      <Coin
        img={coinImg1}
        left={"80%"}
        width={widthCoin1}
        duration='2.6s' />
      <Coin
        img={coinImg3}
        left={"95%"}
        width={widthCoin3}
        duration="2.9s" />
    </main>
  );
}

export default App;
