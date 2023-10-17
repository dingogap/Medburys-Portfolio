// Display the Page Header
import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Peter Medbury</Link>
          <Navbar/>
        </div>
      </nav>
    </header>
  );
}
