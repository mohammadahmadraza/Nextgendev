


function Header() {



    const headerStyling = {
        backgroundColor: '#173B45',
        position: 'sticky',
        top: '20px'

    };

    return (
        <nav className="navbar border border-0 rounded navbar-expand-lg" style={headerStyling}>
            <div className="container justify-content-sm-center justify-content-md-between justify-content-lg-between">
                <a className="navbar-brand" href="#">

                </a>
                <div id="navbarNav" className="d-none d-md-block d-lg-block ">
                    <ul className=" d-flex flex-row navbar-nav">
                        <li className="nav-item px-2">
                            <a className="nav-link  fs-5 fw-bold text-light" aria-current="page" >Skills</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link fs-5 fw-bold text-light" >Projects</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link fs-5 fw-bold text-light" >About</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link fs-5 fw-bold text-light" >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // </div>

    )
}

export default Header;