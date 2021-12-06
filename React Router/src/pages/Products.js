import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <section>
      <h1>The products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">A Course</Link>
        </li>
      </ul>
    </section>
  );
};
