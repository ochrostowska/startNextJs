import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { productType } = router.query;

  console.log(router.query, router.pathname, router.query.productType);

  return (
    <div>{`ProductPage ${router.query.productType} ${router.query.product} `}</div>
  );
}
