import React from "react";

function Card({ image, title, price }) {
  const onClickButton = () => {
    alert(1);
  };

  return (
    <div className="card">
      <div className="card__img-unlike">
        <img src="/img/unlike.svg" alt="sneakers are unliked" />
      </div>
      <img
        className="card__img"
        width={133}
        height={112}
        /* src="/img/sneakers/sneakers1.jpg" */
        src={image}
        alt="sneakers"
      />
      <p>{title}</p>
      <div className="card__box">
        <div className="card__box__price">
          <span>PRICE:</span>
          <h3>{price} $</h3>
        </div>
        <div className="card__box__button">
          <button className="card__box__button__img" onClick={onClickButton}>
            <img width={11} height={11} src="/img/button.svg" alt="plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
