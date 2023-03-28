

function Navbar({count}) {
    
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container" >
            <a className="navbar-brand" href="#!">AK STORE</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#!navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#!">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#!">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#!">All Products</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                        <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                    </ul>
                    </li>
                </ul>
            </div>

            <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                </button>
            </form>
        </div>
    </nav>
  )
}

export default Navbar;
