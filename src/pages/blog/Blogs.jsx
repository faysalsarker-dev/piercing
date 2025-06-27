import AllBlogs from "../../components/AllBlogs";




export default function Blogs() {
  return (
    <>


      <div className="min-h-screen bg-background-secondary py-10">
        <section className="max-w-6xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold ">Våra senaste bloggar</h1>
            <p className="mt-2 text-lg ">Tips, trender och berättelser från din favoritbutik</p>
          </header>

      <AllBlogs/>
        </section>

   
      </div>
    </>
  );
}
