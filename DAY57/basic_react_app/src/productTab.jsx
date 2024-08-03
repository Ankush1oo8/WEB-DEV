import Product from "./product";
import "./product.css";
function ProductTab() {
  return (
    <>
      <Product title="phone" price={9999}></Product>
      <Product title="laptop" price="39999"></Product>
      <Product title="pen" price="20"></Product>
    </>
  );
}

export default ProductTab;
