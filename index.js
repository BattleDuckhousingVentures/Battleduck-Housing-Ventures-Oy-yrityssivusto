// pages/index.js
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-8">
      <section className="text-center py-10">
        <img src="/logo.png" alt="Battleduck logo" className="h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Battleduck Housing Ventures Oy</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Asuntojen osto, remontointi ja myynti asiantuntemuksella Helsingissä. Luomme koteja uudelleen.
        </p>
      </section>
    </main>
  );
}
