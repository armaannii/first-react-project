import { Suspense } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Technologies from "./components/TechnologiesSection";
import type { Technology } from "./types/TechnologiesType";
import Footer from "./components/Footer";

const technologiesPromise = async(): Promise<Technology[]> =>{
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h5>Loading...</h5>}>
        <Technologies technologiesPromise={technologiesPromise()}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
