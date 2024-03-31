import Header from "@/components/Header"
import Card from "@/components/Card";
import Revenue from "@/components/Revenue";
import TopProducts from "@/components/TopProducts";


export default function HomePage() {

  return (
    <main className="h-screen pl-[3%] pr-[3%] mx-auto">
     <Header />
     <section className="flex flex-col md:mb-0 md:flex-row md:space-x-5
     justify-between w-full mt-5">
      <Card />
      <Card />
      <Card />
      <Card />
     </section>
     <section className="flex space-x-5 mt-5">
      <Revenue />
      <TopProducts />
     </section>
    </main>

  );
}