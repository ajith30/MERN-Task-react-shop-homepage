import Product from "./Product";
import productList from "../productList";

function ProductList({count, setCount}) {

  return (
    <div className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {/* <Product count={count} setCount={setCount} /> */}

                {productList.map((product) => {
                  return <Product key={product.id} count={count} setCount={setCount} product={product}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductList;
