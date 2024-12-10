import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import NextPDetails from "@/components/NextPDetails";
import Pdetails from "@/components/Pdetails";
import Services from "@/components/Services";


import "bootstrap/dist/css/bootstrap.min.css"; 




export default function Home() {
  return (
    <>
      <MainSection></MainSection>
      <Pdetails></Pdetails>
      <NextPDetails></NextPDetails>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}
