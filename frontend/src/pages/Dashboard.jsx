import { useEffect, useState } from "react";
import axios from "axios";
import Charts from "../components/Charts";

export default function Dashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
  fetch("http://127.0.0.1:8000/data")
    .then(res => res.json())
    .then(data => setData(data));
}, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/data");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl">

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Dashboard Analytics
      </h2>

      <Charts data={data} />

    </div>
  );
}