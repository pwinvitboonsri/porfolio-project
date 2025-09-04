import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const { pathname } = useLocation();

  // Normalize paths so "/" doesn't get treated as prefix of everything
  const normalize = (p) => (p.replace(/\/+$/, '') || '/');
  const current = normalize(pathname);

  // exact=true for Home so "/" isn’t active on every page
  const isActive = (to, { exact = false } = {}) => {
    const target = normalize(to);
    if (exact) return current === target;
    return current === target || current.startsWith(target + '/');
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">Bwinvit</Link>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={isActive('/', { exact: true }) ? 'active' : undefined}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/portfolio"
              className={isActive('/portfolio') ? 'active' : undefined}
            >
              Portfolio
            </Link>
          </li> */}
          <li>
            <Link
              to="/experience"
              className={isActive('/experience') ? 'active' : undefined}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className={isActive('/education') ? 'active' : undefined}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive('/contact') ? 'active' : undefined}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
