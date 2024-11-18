
export default async function ServerComponent() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    console.log('<<=== 🚀 posts ===>>',posts);
  return (
    <div>server-component</div>
  )
}
