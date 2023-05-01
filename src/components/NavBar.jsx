import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      {/* <Link to="/">HomePage</Link>
      <Link to="/login">login</Link>
      <Link to="/about">about</Link> */}

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            UseContext
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>
              </li> */}

              <NavLink to='/' className={ (args)=>{
                const { isActive } = args
                return ` nav-link ${isActive ? 'active' : ''} `
              } }>
                Home
              </NavLink>
              <NavLink to='/about' className={ (args)=>{
                const { isActive } = args
                return ` nav-link ${isActive ? 'active' : ''} `
              } }>
                Sobre nosotros
              </NavLink>
              <NavLink to='/Login' className={ (args)=>{
                const { isActive } = args
                return ` nav-link ${isActive ? 'active' : ''} `
              } }>
                Login
              </NavLink>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
