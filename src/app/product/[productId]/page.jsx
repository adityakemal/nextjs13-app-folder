import React from "react";

export const generateMetadata = async ({ params }) => {
  const { productId } = params;
  console.log(productId);
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  //   console.log(await res.json());
  const data = await res.json();
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [data.image],
      type: "website",
    },
  };
};

async function getData(id) {
  try {
    // const res = await axios.get("https://fakestoreapi.com/products");
    // const res = await axios.get("http://localhost:3000/api/product");
    // console.log(res.data, "<<<<<<<<<");
    // return res.data.data;
    // KALO PAKE FETCH BAWAAN LEBIH BANYAK FITUR BISA PAKE CACHE
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      //   cache: "no-store", // selalu ngambil data dari api pas reload dengan dan akan loading
      cache: "force-cache", // selalu ngambil data dari cache sampai ada yg revalidate cachenya
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

export default async function pageDetailProduct({ params }) {
  const { productId } = params;
  const product = await getData(productId);
  console.log(product, "product");
  return (
    <div>
      {/* <Head>
        <link property="og:image" content={product.image} />
        <meta property="og:type" content="website"></meta>
      </Head> */}
      ////
      <h1 className="text-40">get data with serverside props</h1>
      <pre>{JSON.stringify(product, 0, 2)}</pre>;
    </div>
  );
}
