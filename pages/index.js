import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Bannersrc from '../components/Bannersrc';
import Shop from '../components/Shop';
import Beauty from '../components/Beauty';
import Sales from '../components/Sales';
import Journal from '../components/Journal';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* =================== Head Tag ====================== */}
      <Head>
        <title>Opentic - Fashion</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content=""/>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      {/* ================== Header ======================== */}
      <header>
        {/* =============== Navbar ==================== */}
        <Navbar/>
      </header>

      {/* ===================== Main ======================== */}
      <main>
        {/* ============== Banner Section ================= */}
        <Bannersrc/>

        {/* ============== Shop Section ================= */}
        <Shop/>

        {/* ============== Beauty Section ================= */}
        <Beauty/>

        {/* ============== Sales Section ================= */}
        <Sales/>

        {/* ============== Journal Section ================= */}
        <Journal/>
      </main>

      {/* ============== Footer ================= */}
      <Footer/>
    </div>
  )
}
