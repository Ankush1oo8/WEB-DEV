import "./product.css";

function Product({ title, price }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h3>Price: {price}</h3>
    </div>
  );
}
export default Product;
