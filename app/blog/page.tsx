import ClientComponent from "@/components/ui/client-component";
import ServerComponent from "@/components/ui/server-component";

export default function Page() {
  return (
    <div>
      <h1>Blog page</h1>
      <ServerComponent />
      <ClientComponent />
     
    </div>
  )
}
