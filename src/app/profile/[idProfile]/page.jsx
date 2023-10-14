import React from "react";

export default function pageDetailProfile({ params }) {
  return (
    <div>
      pageDetailProfile
      <pre>{JSON.stringify(params, 0, 2)}</pre>
    </div>
  );
}
