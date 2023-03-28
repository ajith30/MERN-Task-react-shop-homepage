
import { useState } from "react";

function Product({product, count, setCount}) {
    const [rate, setRate] = useState(product.rating);

    const handleChange = (e) => {
        setRate(parseInt(e.target.value));
    }
    

    const [btnDisabled, setBtnDisabled] = useState(false);
  
    const handleAddCart = (e) => {
        setBtnDisabled(true);
        setCount(count + 1);
    }

    const handleRemoveCart = (e) => {
        setBtnDisabled(false);
        setCount(count - 1);
    }

  return (
    <div className="col mb-5">
        <div className="card h-100">
            {/* <Sale badge */}
            <div className="badge bg-dark text-white position-absolute sale-badge">Sale</div>
            {/*  Product image */}
            <img className="card-img-top" src={product.thumbnail} alt="product" />
            {/*  Product details */}
            <div className="card-body p-4">
                <div className="text-center">
                    {/*  Product name */}
                    <h5 className="fw-bolder">{product.name}</h5>
                    {/*  Product reviews */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        
                        <div className="star-rating">
                            <input type="radio" name={`${product.id}`} id={`${product.id}a`} value="5" checked={rate === 5} onChange={handleChange} />
                            <label htmlFor={`${product.id}a`}></label>

                            <input type="radio" name={`${product.id}`} id={`${product.id}b`} value="4" checked={rate === 4} onChange={handleChange} />
                            <label htmlFor={`${product.id}b`}></label>

                            <input type="radio" name={`${product.id}`} id={`${product.id}c`} value="3" checked={rate === 3} onChange={handleChange} />
                            <label htmlFor={`${product.id}c`}></label>

                            <input type="radio" name={`${product.id}`} id={`${product.id}d`} value="2" checked={rate === 2} onChange={handleChange} />
                            <label htmlFor={`${product.id}d`}></label>

                            <input type="radio" name={`${product.id}`} id={`${product.id}e`} value="1" checked={rate === 1} onChange={handleChange} />
                            <label htmlFor={`${product.id} e`}></label>
  
                        </div>

                    </div>
                    {/*  Product price */}
                    <span className="text-muted text-decoration-line-through me-3">$1000.00</span>
                    ${product.price}.00

                    <div className="text-start pt-1 mt-2 mb-0">
                        <h6>Description:</h6><p>{product.description}</p>
                    </div>
                </div>
            </div>
            {/*  Product actions */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    {(btnDisabled === false) ?
                    <button className="btn btn-outline-dark mt-auto" onClick={handleAddCart} disabled={btnDisabled}>Add to cart</button>
                    : <button className="btn btn-outline-dark mt-auto" onClick={handleRemoveCart}>Remove From Cart</button>
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product;
