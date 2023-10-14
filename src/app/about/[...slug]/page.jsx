import React from "react";

export default function pageDynamicSlug({ params }) {
  const { slug } = params;
  console.log(slug);
  return (
    <div>
      {slug.map((res, i) => (
        <h1>
          slug {i} {res}{" "}
        </h1>
      ))}
    </div>
  );
}
