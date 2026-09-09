import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PourQui from "@/components/PourQui";
import Courbe from "@/components/Courbe";
import Outil from "@/components/Outil";
import Methode from "@/components/Methode";
import Acces from "@/components/Acces";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <PourQui />
      <Courbe />
      <Outil />
      <Methode />
      <Acces />
      <Footer />
    </div>
  );
}
