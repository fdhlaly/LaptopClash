"use client";

import { useState } from "react";
import Header from "./components/Header";
import GetLaptopInfo from "./components/GetLaptopInfo";
import AIResults from "./components/AIResult";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home() {
  const [form, setForm] = useState({
    firstLaptop: "",
    secondLaptop: "",
    firstProcessor: "",
    secondProcessor: "",
    firstStorage: "",
    secondStorage: "",
    firstRAM: "",
    secondRAM: "",
    firstPrice: "",
    secondPrice: "",
    usage: "",
  });

  const [result, setResult] = useState(
    "Hasil perbandingan bakal muncul di sini..."
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = `saya ingin membeli laptop untuk keperluan ${form.usage}, bantu saya untuk mempertimbangkan mana yang terbaik antara laptop ${form.firstLaptop} dengan processor (${form.firstProcessor}, penyimpanan ${form.firstStorage}, RAM ${form.firstRAM}, dengan harga Rp.${form.firstPrice}) dan laptop ${form.secondLaptop} dengan processor (${form.secondProcessor}, penyimpanan ${form.secondStorage}, RAM ${form.secondRAM}, dengan harga ${form.secondPrice})`;

    setIsLoading(true);

    try {
      const response = await fetch(
        `${BASE_URL}/?q=${encodeURIComponent(prompt)}`
      );
      if (!response.ok) {
        throw new Error("Gagal ambil data dari API.");
      }
      const data = await response.json();
      if (data && data.text) {
        setResult(data.text);
      } else {
        setResult("Format data dari API tidak terduga. Coba lagi ya!");
      }
      setForm({
        firstLaptop: "",
        secondLaptop: "",
        firstProcessor: "",
        secondProcessor: "",
        firstStorage: "",
        secondStorage: "",
        firstRAM: "",
        secondRAM: "",
        firstPrice: "",
        secondPrice: "",
        usage: "",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult("Ada masalah saat ambil data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header title="LaptopClash" />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
        <div className="card bg-gray-800 shadow-xl w-full mx-auto p-6">
          <h2 className="text-3xl text-center font-bold mb-4">
            Bandingkan Laptop Favoritmu!
          </h2>
          <GetLaptopInfo
            onSubmit={handleSubmit}
            form={form}
            onInputChange={handleInputChange}
          />
        </div>
        <div className="mt-6 card bg-gray-700 shadow-xl w-full mx-auto p-6">
          <AIResults result={result} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}
