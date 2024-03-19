import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <h2>Product 1</h2>
        <p>Price: $100</p>
        <Link
          href="/checkout"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-12"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default page;
