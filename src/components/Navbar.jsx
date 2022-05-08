import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navWrapper">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    <h2>360 DESIGNS</h2>
                </Link>
            </div>
            <div className="navButtons">
                <div className="navButtonItem">
                    <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                        HOME
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/about' style={{ textDecoration: 'none', color: '#fff' }}>
                        ABOUT
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/services' style={{ textDecoration: 'none', color: '#fff' }}>
                        SERVICES
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }}>
                        CONTACT
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
