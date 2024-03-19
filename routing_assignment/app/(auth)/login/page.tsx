import Link from "next/link";
const page = () => {
  return (
    <div>
      <form className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-white-600">Login</h1>
        <input
          className="border-2 border-black-600"
          type="text"
          placeholder="Username"
        />
        <input
          className="border-2 border-black-600"
          type="password"
          placeholder="Password"
        />
        <button className="border-1 p-2 border-black-600" type="submit">
          Login
        </button>
      </form>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-white-600">
          Don&apos;t have an account?
        </h1>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};

export default page;
