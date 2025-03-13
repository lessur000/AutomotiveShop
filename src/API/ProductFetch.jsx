import { useEffect, useState } from "react";

//import productContext
import ProductFetch from "./Context/ProductContext";

const ProductFetchProvider = ({ children }) => {
  //Accessories state
  const [accessories, setAccessories] = useState([]);
  //Engine state
  const [engine, setEngine] = useState([]);
  //PartsBody state
  const [parts, setParts] = useState([]);
  //Wheels state
  const [wheels, setWheels] = useState([]);

  //fetch Accessories & Engine & Partsbody & Wheels

  // Define an asynchronous function to fetch accessories data
  //Fetch Accessories
  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const accessoriesResponse = await fetch(
          "http://localhost:3000/Accessories"
        ); // Make a GET request to the specified URL

        // Check if the response is not OK (status code is not in the range 200-299)
        if (!accessoriesResponse.ok) {
          throw new Error(`HTTP error! status: ${accessoriesResponse.json}`); // Throw an error with the status code if the response is not OK
        }
        const accessoriesData = await accessoriesResponse.json(); // Parse the JSON data from the response
        // console.log(accessoriesData); // Log the fetched data to the console for debugging purposes
        setAccessories(accessoriesData); // Update the state with the fetched data
      } catch (error) {
        console.error("Error Fetching accessories:", error); // Log any errors that occur during the fetch operation
      }
    };
    fetchAccessories(); // Call the fetchAccessories function to initiate the fetch operation
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  //Fetch Engine
  useEffect(() => {
    const fetchEngine = async () => {
      try {
        const engineResponse = await fetch("http://localhost:3000/Engine");
        if (!engineResponse.ok) {
          throw new Error(`HTTP error! status: ${engineResponse.json}`);
        }
        const engineData = await engineResponse.json();
        // console.log(engineData);
        setEngine(engineData);
      } catch (error) {
        console.log("Error Fetching engine:", error);
      }
    };
    fetchEngine();
  }, []);

  //Fetch PartsBody
  useEffect(() => {
    const fetchPartsBody = async () => {
      try {
        const partsbodyResponse = await fetch(
          "http://localhost:3000/PartsBody"
        );
        if (!partsbodyResponse.ok) {
          throw new Error(`HTTP error! status: ${partsbodyResponse.json}`);
        }
        const partsbodyData = await partsbodyResponse.json();
        // console.log(partsbodyData);
        setParts(partsbodyData);
      } catch (error) {
        console.log("Error Fetching partsbody:", error);
      }
    };
    fetchPartsBody();
  }, []);

  //Fetch wheels
  useEffect(() => {
    const fetchWheels = async () => {
      try {
        const wheelsResponse = await fetch("http://localhost:3000/Wheels");
        if (!wheelsResponse.ok) {
          throw new Error(`HTTP error! status: ${wheelsResponse.json}`);
        }
        const wheelsData = await wheelsResponse.json();
        // console.log(wheelsData);
        setWheels(wheelsData);
      } catch (error) {
        console.log("Error fetching wheels:", error);
      }
    };
    fetchWheels();
  }, []);

  return (
    <ProductFetch.Provider value={{ accessories, engine, parts, wheels }}>
      {children}
    </ProductFetch.Provider>
  );
};

export default ProductFetchProvider;
