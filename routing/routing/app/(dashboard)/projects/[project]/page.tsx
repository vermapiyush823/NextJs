export default function page({ params }: { params: any }) {
  const name: string = "Piyush";
  return (
    <main>
      <h1>
        project : {params.project} : {name}
      </h1>
    </main>
  );
}
