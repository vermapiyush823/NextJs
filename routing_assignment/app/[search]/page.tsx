const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Search page for product : {params.search}</h1>
    </div>
  );
};

export default page;
