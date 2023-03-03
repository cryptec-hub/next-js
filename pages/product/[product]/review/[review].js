import { useRouter } from "next/router";

export default function Reviews() {
  const router = useRouter();
  const { product, review } = router.query;
  console.log(router.query);
  return (
    <h1>
      Review {review} for product {product}
    </h1>
  );
}
