import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1>Confirm order by clicking the button below</h1>
      <Link href="/order">Confirm</Link>
    </div>
  );
};

export default page;
