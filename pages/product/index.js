import Link from "next/link";

export default function Product() {
  return (
    <>
      <h1>Root Product Page</h1>
      <ul>
        <li>
          <Link href={"/product/1"}>Product 1</Link>
        </li>
        <li>
          <Link href={"/product/2"}>Product 2</Link>
        </li>
        <li>
          <Link href={"/product/3"}>Product 3</Link>
        </li>
      </ul>
      <Link href={"/"}>Go back To HomePage</Link>
    </>
  );
}
