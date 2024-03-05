import LogoImg from "./logo.svg"
import WatchImg from "./watch.svg"
import StrImg from "./str.png"
function App() {
  return (
    <><div className="header">
      <div className="logo">
        <img src={LogoImg} />
      </div>
      <div className="nav">
        <p className="nav__item">Home</p>
        <p className="nav__item">about</p>
        <p className="nav__item">store</p>
        <p className="nav__item">contact</p>
      </div>
    </div>
    <div className="display">
    <div className="hero__section">
        <div className="text__content">
          <h1 className="title">Tech For Real Life</h1>
          <h5 className="subtitle">Get it all done right from your wrist.</h5>
          <h3 className="add__text">Gen 5 Smartwatch The Carlyle HR White Silicone</h3>
          <h3 className="price">₹ 22,995.00</h3>
          <h5 className="text">(Price Inclusive of GST)</h5>
          <button className="btn">buy now</button>
        </div>
      </div>
      <div className="img__content">
        <img src={WatchImg} />
        <button className="btn__2"><img className="" src={StrImg} /></button>
        </div>
        </div></>
  );
}

export default App;
