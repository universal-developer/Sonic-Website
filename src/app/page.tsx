import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/sections/Hero";
import ProductDescription from "@/components/sections/ProductDescription";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProductDescription />
      <h1 className="flex items-center justify-center m-0 w-auto h-auto">
        Next Section
      </h1>
    </>
  );
}
