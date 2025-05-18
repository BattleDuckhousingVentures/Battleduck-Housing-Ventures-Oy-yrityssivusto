// pages/index.js
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-8">
      <section className="text-center py-10">
        <img src="/logo.png" alt="Battleduck logo" className="h-48 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Battleduck Housing Ventures Oy</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Asuntojen osto, remontointi ja myynti asiantuntemuksella Uudellamaalla. Luomme koteja uudelleen – tehokkaasti, rohkeasti ja omintakeisella otteella.
        </p>
        <div className="text-md text-gray-700">
          <p><strong>Y-tunnus:</strong> 3536284-5</p>
          <p><strong>Toimitusjohtaja:</strong> Ville Hänninen</p>
          <p><strong>Osoite:</strong> Harustie 1 E 50, 00980 Helsinki</p>
        </div>
      </section>
    </main>
  );
}
