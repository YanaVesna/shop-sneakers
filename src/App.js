import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./assets/cards.json";

function App() {
  const [items, setItems] = React.useState([]);

  return (
    <div className="wrapper">
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2>Your shopping cart</h2>
          <div className="items">
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/sneakers2.jpg"
                alt="your choise"
              />
              <div className="cartItem__textblock">
                <div className="cartItem__textblock__b">
                  <p>Man's sneakers Nike Air Max 270</p>
                  <h3>1000 $</h3>
                </div>
                <div className="cartItem__textblock__btn">
                  <button className="cartItem__textblock__img">
                    <img
                      width={11}
                      height={11}
                      src="/img/ch-btn.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/sneakers3.jpg"
                alt="your choise"
              />
              <div className="cartItem__textblock">
                <div className="cartItem__textblock__b">
                  <p>Man's sneakers Nike Air Max 270</p>
                  <h3>1000 $</h3>
                </div>
                <div className="cartItem__textblock__btn">
                  <button className="cartItem__textblock__img">
                    <img
                      width={11}
                      height={11}
                      src="/img/ch-btn.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/sneakers4.jpg"
                alt="your choise"
              />
              <div className="cartItem__textblock">
                <div className="cartItem__textblock__b">
                  <p>Man's sneakers Nike Air Max 270</p>
                  <h3>1000 $</h3>
                </div>
                <div className="cartItem__textblock__btn">
                  <button className="cartItem__textblock__img">
                    <img
                      width={11}
                      height={11}
                      src="/img/ch-btn.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/sneakers1.jpg"
                alt="your choise"
              />
              <div className="cartItem__textblock">
                <div className="cartItem__textblock__b">
                  <p>Man's sneakers Nike Air Max 270</p>
                  <h3>1000 $</h3>
                </div>
                <div className="cartItem__textblock__btn">
                  <button className="cartItem__textblock__img">
                    <img
                      width={11}
                      height={11}
                      src="/img/ch-btn.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/sneakers5.jpg"
                alt="your choise"
              />
              <div className="cartItem__textblock">
                <div className="cartItem__textblock__b">
                  <p>Man's sneakers Nike Air Max 270</p>
                  <h3>1000 $</h3>
                </div>
                <div className="cartItem__textblock__btn">
                  <button className="cartItem__textblock__img">
                    <img
                      width={11}
                      height={11}
                      src="/img/ch-btn.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="OrderSummary">
            <h3>Order summary</h3>
            <ul>
              <li>
                <span>Sum total</span>
              </li>
              <li>
                <img src="/img/Rectangle29.png" alt="" />
              </li>
              <li>
                <h3>2000,00$</h3>
              </li>
            </ul>
            <ul>
              <li>
                <span>Delivery fee</span>
              </li>
              <li>
                <img src="/img/Rectangle29.png" alt="" />
              </li>
              <li>
                <h3>0RWF</h3>
              </li>
            </ul>
            <div className="OrderSummary__btn">
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div className="presantation"></div>
      <div className="content">
        <div className="titleCard">
          <h1>Available products</h1>
          <div className="titleCard__serch-block">
            <img src="/img/search.svg" alt="searh" />
            <input placeholder="Searching ..." />
          </div>
        </div>
        <div className="content-box">
          {/* <Card /> */}
          {cards.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
