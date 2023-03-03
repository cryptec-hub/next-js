import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Root Blog Page</h1>
      <ul>
        <li>
          <Link href="blog/blog1">Blog1</Link>
        </li>
        <li>
          <Link href="blog/blog2">Blog2</Link>
        </li>
      </ul>
    </>
  );
}
