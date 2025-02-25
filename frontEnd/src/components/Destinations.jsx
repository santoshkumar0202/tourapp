//frontEnd\src\components\Destinations.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";

function Destinations() {

  const [destination, setDestination] = useState([]);
useEffect(() => {
  const fetchDestinations = async () => {
    try {
      const res = await axios.get("http://localhost:4000/book");
      console.log("Fetched destinations:", res.data);
      setDestination(res.data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };
  fetchDestinations();
}, []);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-28 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </div>
        <div>
        {
        destination.map((item) => (
            <Cards key={item.id} item={item} />
          ))}

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Destinations;
