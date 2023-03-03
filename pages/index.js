import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    alert("Order Placed Successfully");
    router.push("/product");
  };

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/blog">Blogs</Link>
        </li>
        <li>
          <Link href="/product">Products</Link>
        </li>
      </ul>

      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
