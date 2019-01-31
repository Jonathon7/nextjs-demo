import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/path">
          <a>Path</a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        ul {
          background: black;
        }
      `}
    </style>
  </div>
);

export default Navbar;
