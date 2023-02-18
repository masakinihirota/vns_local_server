import { Button } from '@mantine/core';
import Link from 'next/link';
import { ColorSchemeToggle } from 'src/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from 'src/components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Button className="m-1 bg-blue-600 p-5">ボタン</Button>
      <h1 className=" text-center text-2xl font-bold text-blue-600 underline">TailwindCSS!</h1>
      <Link href="/hello" passHref>
        <Button className="bg-blue-600">Next link button</Button>
      </Link>
      <Button>ボタン</Button>
    </>
  );
}
