import ProductContent from "./ProductContent";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import { useState } from "react";

function Main(props) {
  let selectedVariationID = Math.floor(Math.random() * 696969);

  const [product, setProduct] = useState({
    selectedID: selectedVariationID,
    title: "Áo thun thể thao nam hàng VNXK âbcb",
    brand: "Adidas",
    variations: [
      {
        id: selectedVariationID,
        name: "Màu đỏ",
        price: 22000,
        quantity: 1,
        percentSaleOff: 0.1,
        imageURL: "/images/shopping/red.jpg",
      },
      {
        id: Math.floor(Math.random() * 696969),
        name: "Màu đen",
        price: 12000,
        quantity: 10,
        percentSaleOff: 0.69,
        imageURL: "/images/shopping/black.jpg",
      },
      {
        id: Math.floor(Math.random() * 696969),
        name: "Màu xanh",
        price: 25000,
        quantity: 4,
        percentSaleOff: 0,
        imageURL: "/images/shopping/blue.jpg",
      },
    ],
    productAttributes: [
      {
        name: "Chất liệu",
        value: "Polyester và thun",
      },
      {
        name: "",
        value: "Thấm mồ hôi tốt",
      },
      {
        name: "",
        value:
          "Ao thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon",
      },
    ],
    description: `Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu
      nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co
      giãn giúp người tiêu dùng thoải mái khi mặc`,
  });

  const [selectedVariation, setSelectedVariation] = useState(product.variations[0]);

  let {
    title,
    brand,
    variations,
    selectedID,
    productAttributes,
    description,
  } = product;

  function handleOnVariationClick(selectedID) {
    let selectedProduct = variations.find((p, i) => {
      return p.id === selectedID;
    });
    setSelectedVariation(selectedProduct);
  }

  return (
    <div className="container">
      <div className="list-blog">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt
          eveniet maxime magni in, nostrum facilis, temporibus, quam facere sint
          est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti, qui.
        </p>
      </div>
      <div id="app">
        <div className="cart">Giỏ hàng (1)</div>
        <div className="product">
          <ProductImage selectedVariation={selectedVariation} />
          <ProductContent
            title={title}
            brand={brand}
            variations={variations}
            selectedID={selectedID}
            handleOnVariationClick={handleOnVariationClick}
          />
        </div>
        <ProductDescription
          productAttributes={productAttributes}
          description={description}
        />
      </div>
    </div>
  );
}

export default Main;
