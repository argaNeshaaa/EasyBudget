import { useState } from 'react'
import './App.css'
import bgImage from "./assets/background.png"
import ParticleBackground from "./components/ParticleBackground"
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

        {/* 🔹 Background utama (blur + tekstur kasar) */}
<div
  className="absolute inset-0 scale-105 blur-md"
  style={{
    background: "linear-gradient(to top right, #1D2D50 0%, #133B5C 35%, #1E5F74 60%, #FCDAB7 100%)",    
    filter: "brightness(0.9) blur(8px)",
    boxShadow: "inset 0 0 120px rgba(0,0,0,0.4)", // vignette halus di tepi
    transition: "background 2s ease-in-out",  
  }}
></div>



        {/* 🔹 Overlay tekstur kasar (grain effect) */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25 z-10"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/noise.png')",
            backgroundSize: "300px 300px",
          }}
        ></div>

        {/* 🔹 Lapisan partikel di atas background */}
        <div className="absolute inset-0 z-20 opacity-60">
          <ParticleBackground />
        </div>

        {/* 🔹 Overlay transparan gelap untuk kontras teks */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-30"></div>

        {/* 🔹 Konten utama */}
        <Navbar />
        <div className="relative z-40 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-lg p-10 rounded-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang</h1>
          <p className="text-lg mb-6">Website Keuangan Pribadi & Bisnis Anda</p>
          <button
            className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300"
            onClick={() => setCount((c) => c + 1)}
          >
            Klik {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
