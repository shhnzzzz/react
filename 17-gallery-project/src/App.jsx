import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";

const App = () => {
  const [userdata, setuserdata] = useState([]);
  const [index, setindex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setuserdata(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-2xl font-semibold text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
      Loading Images...
    </h3>
  );

  if (userdata.length > 0) {
    printUserData = userdata.map((elem, idx) => (
      <Card key={idx} elem={elem} />
    ));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">

      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-black/40 border-b border-gray-800">
        <h1 className="text-4xl font-bold text-center py-6 tracking-wide">
           Picsum Gallery
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-wrap justify-center gap-8">
          {printUserData}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-8 mt-10 pb-8">

          <button
            disabled={index === 1}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300
              ${
                index === 1
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-amber-400 hover:bg-amber-500 hover:scale-105 active:scale-95 text-black shadow-lg"
              }`}
            onClick={() => {
              if (index > 1) {
                setindex(index - 1);
                setuserdata([]);
              }
            }}
          >
            ← Previous
          </button>

          <div className="text-xl font-semibold">
            Page <span className="text-amber-400">{index}</span>
          </div>

          <button
            className="px-8 py-3 rounded-full bg-amber-400 text-black font-semibold shadow-lg hover:bg-amber-500 hover:scale-105 active:scale-95 transition-all duration-300"
            onClick={() => {
              setindex(index + 1);
              setuserdata([]);
            }}
          >
            Next →
          </button>

        </div>
      </div>
    </div>
  );
};

export default App;