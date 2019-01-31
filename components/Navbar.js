import Link from "next/link";

const Navbar = () => (
  <div>
    <ul className="nav-cont">
      <h1>Next.js</h1>
      <div className="nav-links">
        <li>
          <Link href="/weather">
            <a>Weather App</a>
          </Link>
        </li>
      </div>
    </ul>
    <style jsx>
      {`
        .nav-cont {
          position: fixed;
          top: 0;
          left: 0;
          background: #202020;
          list-style-type: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          width: 100%;
          margin: 0;
        }

        .nav-links {
          display: flex;
          justify-content: space-between;
          width: 100px;
          padding-right: 70px;
        }

        h1 {
          letter-spacing: 1px;
        }

        li {
          margin: 0;
        }

        a {
          color: white;
          text-decoration: none;
          margin: 0;
          letter-spacing: 0.5px;
        }
      `}
    </style>
  </div>
);

export default Navbar;
