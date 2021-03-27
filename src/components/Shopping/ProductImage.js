function ProductImage({ selectedVariation }) {
  return (
    <div className="product-image">
      <div className="image">
        <img src={selectedVariation.imageURL} alt={selectedVariation.name} />
      </div>
    </div>
  );
}

export default ProductImage;
