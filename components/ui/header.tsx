import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white flex gap-x-2 px-5 py-5">
        <Link href={'/'}>Home</Link>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/product'}>Product</Link>
    </header>
  )
}
