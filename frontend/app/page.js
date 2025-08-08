export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-3xl font-bold">Adorra frontend (Next.js)</h1>
        <p className="text-gray-600">Router: <code>/</code> și <code>/chestionar</code>. API health la <code>/api/health</code>.</p>
        <p><a className="underline" href="/chestionar">→ Mergi la /chestionar</a></p>
      </div>
    </main>
  );
}
