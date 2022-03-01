import { useRouter } from "next/router";

function details() {
  const router = useRouter();
  console.log(router.query.newsId);
  return <div>Variety</div>;
}

export default details;
