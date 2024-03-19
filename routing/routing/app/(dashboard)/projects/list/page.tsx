import Link from "next/link";
export default function page() {
  return (
    <main>
      <h1>All Projects</h1>
      <ul>
        <li>
          <Link href="/projects/project-1">Project 1</Link>
        </li>
        <li>
          <Link href="/projects/project-2">Project 2</Link>
        </li>
        <li>
          <Link href="/projects/project-3">Project 3</Link>
        </li>
      </ul>
    </main>
  );
}
