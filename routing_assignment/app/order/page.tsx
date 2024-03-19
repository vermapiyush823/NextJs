import Link from "next/link";
const page = () => {
  return (
    <div>
      <ul>
        <li>
          <h1>Confirm order : 1</h1>
          <Link href="/order/1">Confirm</Link>
        </li>
        <li>
          <h1>Confirm order : 2</h1>
          <Link href="/order/2">Confirm</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
