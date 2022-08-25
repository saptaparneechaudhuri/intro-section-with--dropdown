import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MenuModal from "./components/menu-modal/MenuModal";

import MenuOpen from "./components/MenuOpen";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <main className="container">
        <section className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </section>
        <MenuOpen />

        <Navbar />
        <Hero />
        <Header />
      </main>
      <MenuModal />
    </>
  );
};

export default App;
