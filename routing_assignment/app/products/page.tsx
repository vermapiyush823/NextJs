import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1 className="text-4xl  font-bold text-center text-white-600">
        Products
      </h1>
      <ul className="text-2xl text-center text-white-600">
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
