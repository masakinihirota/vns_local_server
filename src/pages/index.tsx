import { ColorSchemeToggle } from 'src/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from 'src/components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <h1 className=" text-center text-2xl font-bold text-blue-600 underline">TailwindCSS!</h1>
    </>
  );
}
