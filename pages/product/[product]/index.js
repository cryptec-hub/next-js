import Link from "next/link";
import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();
  const productId = router.query.product;

  return (
    <>
      <h1>Details about product {productId} </h1>
      <Link href={"/product"}>Go Back to product page.</Link>
    </>
  );
}
