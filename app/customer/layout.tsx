import Link from "next/link"

export default function CustomerLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="flex">
        <div className="w-[220px] flex flex-col gap-y-4">
            
                <Link href="/customer">Dashboard</Link>
                <Link href="/customer/profile">Profile</Link>
                <Link href="/customer/orders">Orders</Link>
            
        </div>
        <div className="main-content flex-1">
        {children}
        </div>
    </section>
    )
  }