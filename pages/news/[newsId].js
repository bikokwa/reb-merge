import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const param = router.query.newsId;

  return (
    <>
      <h1>The Detail Page</h1>
      <p>{param}</p>
    </>
  );
};

export default DetailPage;
