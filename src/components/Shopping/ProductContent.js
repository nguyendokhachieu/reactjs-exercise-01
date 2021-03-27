import { useState } from "react";

function formatNumber(n) {
  n = n.toString();
  let result = [];
  let index = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    result[index++] = n[i];
  }

  n = [];
  index = 0;
  for (let i = 0; i < result.length; i++) {
    if (i % 3 === 0) {
      n[index++] = ".";
    }
    n[index++] = result[i];
  }

  n.shift();
  n.reverse();
  return n.join("");
}

function ProductContent(props) {
  let { title, brand, variations, selectedID } = props;

  let [selectedVariationID, setSelectedVariationID] = useState(selectedID);

  function handleOnVariationClick(e) {
    setSelectedVariationID(Number(e.target.parentNode.children[0].value));
    props.handleOnVariationClick(Number(e.target.parentNode.children[0].value));
  }

  let selectedVariation = variations.find((p, i) => {
    return p.id === selectedVariationID;
  });

  let variationsJSX = null;
  variationsJSX = variations.map((value, index) => {
    return (
      <li
        onClick={handleOnVariationClick}
        key={value.id}
        className={value.id === selectedVariationID ? "active" : ""}
      >
        <input type="hidden" value={value.id} />
        <img src={value.imageURL} alt={value.name} />
      </li>
    );
  });

  return (
    <div className="product-content">
      <h3 className="title">
        <a
          href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html"
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </h3>
      <p className="brand">Thương hiệu: {brand ? brand : "No brand"}</p>
      <p className="quantity">Còn lại: {selectedVariation.quantity} Sản phẩm</p>
      <div className="wrapper-price">
        <div className="final-price">
          {formatNumber(
            selectedVariation.price -
              selectedVariation.price * selectedVariation.percentSaleOff
          )}
          &nbsp;₫
        </div>
        <div className="origin-price">
          {formatNumber(selectedVariation.price)} &nbsp;₫
        </div>
        <div className="sale-price">
          -{selectedVariation.percentSaleOff * 100}%
        </div>
      </div>
      <div className="wrapper-color">
        <div className="text">Màu sắc</div>
        <div className="list-color">
          <p className="color-text">{selectedVariation.name}</p>
          <ul>{variationsJSX}</ul>
        </div>
      </div>{" "}
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}

export default ProductContent;
