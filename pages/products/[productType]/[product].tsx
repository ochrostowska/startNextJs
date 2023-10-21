import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProductPage() {
  const router = useRouter();
  const { productType } = router.query;

  useEffect(() => {
    console.log("ProductPage useEffect", productType);
  }, [productType]);

  console.log(router.query, router.pathname, router.query.productType);

  return (
    <div>{`ProductPage ${router.query.productType} ${router.query.product} `}</div>
  );
}
