import React from "react";
import Header from "../Header/header";

const Body = () => {
  return (
    <div className="min-h-screen bg-red-50">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-10 text-red-900">
        Body
      </div>
    </div>
  );
};

export default Body;
