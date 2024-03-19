const page = ({ params }) => {
  return (
    <div>
      <h1>Confirm order : {params.id}</h1>
      <button>confirm</button>
    </div>
  );
};

export default page;
