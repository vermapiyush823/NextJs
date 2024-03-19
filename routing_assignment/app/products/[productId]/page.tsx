const page = ({ params }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Product Page</h1>
      <h2>Name: {params.productId}</h2>
    </div>
  );
};

export default page;
