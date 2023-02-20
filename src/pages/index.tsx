import { Button, useMantineTheme } from '@mantine/core';
import { IconAward, IconTrash, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import { ColorSchemeToggle } from 'src/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from 'src/components/Welcome/Welcome';

export default function HomePage() {
  const theme = useMantineTheme();
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Button className="m-1 bg-blue-600 p-5">ボタン</Button>
      <h1 className=" text-center text-2xl font-bold text-blue-600 underline">TailwindCSS!</h1>
      <Link href="/hello" passHref>
        <Button className="bg-blue-600">Next link button</Button>
      </Link>
      <br />
      <Button className="rounded bg-gray-200 px-4 py-2 text-white hover:bg-gray-100">
        Gray 200
      </Button>
      <Button className="rounded bg-gray-300 px-4 py-2 text-white hover:bg-gray-200">
        Gray 300
      </Button>
      <Button className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-300">
        Gray 400
      </Button>
      <Button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-400">
        Gray 500
      </Button>
      <Button className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-500">
        Gray 600
      </Button>
      <Button className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600">
        Gray 700
      </Button>
      <Button className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
        Gray 800
      </Button>
      <Button className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">
        Gray 900
      </Button>
      <Button className="rounded bg-black px-2 py-1 text-white shadow-lg shadow-black/50">
        Submit
      </Button>
      <Button className="rounded bg-slate-500 px-2 py-1 text-white shadow-lg shadow-slate-500/50">
        Submit
      </Button>
      <Button className="rounded bg-gray-500 px-2 py-1 text-white shadow-lg shadow-gray-500/50">
        Submit
      </Button>
      <Button className="rounded bg-zinc-500 px-2 py-1 text-white shadow-lg shadow-zinc-500/50">
        Submit
      </Button>
      <Button className="rounded bg-neutral-500 px-2 py-1 text-white shadow-lg shadow-neutral-500/50">
        Submit
      </Button>
      <Button className="rounded bg-stone-500 px-2 py-1 text-white shadow-lg shadow-stone-500/50">
        Submit
      </Button>
      <Button className="rounded bg-red-500 px-2 py-1 text-white shadow-lg shadow-red-500/50">
        Submit
      </Button>
      <Button className="rounded bg-orange-500 px-2 py-1 text-white shadow-lg shadow-orange-500/50">
        Submit
      </Button>
      <Button className="rounded bg-amber-500 px-2 py-1 text-white shadow-lg shadow-amber-500/50">
        Submit
      </Button>
      <Button className="rounded bg-yellow-500 px-2 py-1 text-white shadow-lg shadow-yellow-500/50">
        Submit
      </Button>
      <Button className="rounded bg-lime-500 px-2 py-1 text-white shadow-lg shadow-lime-500/50">
        Submit
      </Button>
      <Button className="rounded bg-green-500 px-2 py-1 text-white shadow-lg shadow-green-500/50">
        Submit
      </Button>
      <Button className="rounded bg-emerald-500 px-2 py-1 text-white shadow-lg shadow-emerald-500/50">
        Submit
      </Button>
      <Button className="rounded bg-teal-500 px-2 py-1 text-white shadow-lg shadow-teal-500/50">
        Submit
      </Button>
      <Button className="rounded bg-cyan-500 px-2 py-1 text-white shadow-lg shadow-cyan-500/50">
        Submit
      </Button>
      <Button className="rounded bg-sky-500 px-2 py-1 text-white shadow-lg shadow-sky-500/50">
        Submit
      </Button>
      <Button className="rounded bg-blue-500 px-2 py-1 text-white shadow-lg shadow-blue-500/50">
        Submit
      </Button>
      <Button className="rounded bg-indigo-500 px-2 py-1 text-white shadow-lg shadow-indigo-500/50">
        Submit
      </Button>
      <Button className="rounded bg-violet-500 px-2 py-1 text-white shadow-lg shadow-violet-500/50">
        Submit
      </Button>
      <Button className="rounded bg-purple-500 px-2 py-1 text-white shadow-lg shadow-purple-500/50">
        Submit
      </Button>
      <Button className="rounded bg-fuchsia-500 px-2 py-1 text-white shadow-lg shadow-fuchsia-500/50">
        Submit
      </Button>
      <Button className="rounded bg-pink-500 px-2 py-1 text-white shadow-lg shadow-pink-500/50">
        Submit
      </Button>
      <Button className="rounded bg-rose-500 px-2 py-1 text-white shadow-lg shadow-rose-500/50">
        Submit
      </Button>
      <IconAward
        size={36} // set custom `width` and `height`
        color="red" // set `stroke` color
        stroke={3} // set `stroke-width`
        strokeLinejoin="miter"
      />
      <IconUser size={36} color={theme.colors.gray[6]} />
      <Button className=" bg-black" color="red" size="md" leftIcon={<IconTrash size={18} />}>
        Delete
      </Button>
    </>
  );
}
