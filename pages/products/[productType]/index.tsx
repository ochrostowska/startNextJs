import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProductTypePage() {
  const router = useRouter();
  const { productType } = router.query;

  useEffect(() => {
    console.log("ProductTypePage useEffect", router.query);
  }, [router.query]);

  console.log(router.query, router.pathname, router.query.productType);

  return <div>{`ProductTypePage ${router.query.productType}`}</div>;
}
