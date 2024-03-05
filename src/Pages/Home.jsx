import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoryCard from "../components/CategoryCard";
import CarruselPrincipal from "../components/Carruseles/CarruselPrincipal";
import Card from "../components/Card";
import CarouselPinturas from "../components/Carruseles/CarruselPinturas";
import CarouselEscultura from "../components/Carruseles/CarruselEscul";
import CarouselFoto from "../components/Carruseles/CarruselFoto";
import Footer from "../components/Footer";
import CarouselDigital from "../components/Carruseles/CarruselDigital";

const Home = () => {
  return <>

    <div style={{ backgroundColor: '#E8E8E8' }}>
      <Header />
      <HeroSection />
      
      <CategoryCard />
      
      <CarruselPrincipal />
      <Card />
      <CarouselPinturas />
      <br />
      <CarouselDigital />
      <br />
      <CarouselEscultura />
      <br />
      <CarouselFoto />
      <br />
      <Footer />
    </div>
  </>

}
export default Home;