import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// import React, { useState } from "react";

// FETCHING WITH SERVER SIDE

async function getData() {
  try {
    // const res = await axios.get("https://fakestoreapi.com/products");
    // const res = await axios.get("http://localhost:3000/api/product");
    // console.log(res.data, "<<<<<<<<<");
    // return res.data.data;
    // KALO PAKE FETCH BAWAAN LEBIH BANYAK FITUR BISA PAKE CACHE
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store", // selalu ngambil data dari api pas reload dengan dan akan loading
      //   cache: "force-cache", // selalu ngambil data dari cache sampai ada yg revalidate cachenya
      //next mengatur konfigurasi cache
      next: {
        // revalidate: 10, //detik // akan revalidasi update data dalam cache per detik
        tags: ["product_oke"], //akan merevalidasi update data dengan hit api post
      },
    });
    // console.log(res.json(), "<<<<<<<<<");
    return res.json();
  } catch (error) {
    console.log(error, "error fetching data<<<<<<<<<<<<<<<<<");
  }
}

export default async function pageProduct() {
  //   const [first, setfirst] = useState([]);
  const product = await getData();
  return (
    <div>
      <div className="flex-wrap flex gap-[20px] justify-evenly">
        {product?.map((res) => (
          <div className="w-[300px] border-2 rounded-md" key={res.id}>
            <Image
              src={res.image}
              width={500}
              height={500}
              alt="Picture of the author"
              className="aspect-square object-contain p-5"
            />
            <Link href={`/product/${res.id}`}>
              <p className="p-5">{res?.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
