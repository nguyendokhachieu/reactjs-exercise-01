function ProductDescription({ productAttributes, description }) {
  let attributeJSX = productAttributes.map((value, index) => {
    return (
      <li key={index}>
        {value.name !== "" ? value.name + ":" : ""} {value.value}
      </li>
    );
  });

  return (
    <div className="description">
      <ul className="extra-info">{attributeJSX}</ul>
      <h2>Mô tả sản phẩm</h2>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductDescription;
