import React from "react";
import { useEffect, useState } from "react";
import getApi from "../api/api";
import DataCard from "./DataCard";
import LoginBtn from "./LoginBtn";

const CACHE_KEY = "github_users";
const CACHE_EXPIRY = 10 * 1000;

function DataList({ url, user }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          //take data and the time when cached created
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > CACHE_EXPIRY;
          //check cached data valid or not
          if (!isExpired) {
            console.log("Using Cached Data ");
            setData(data);
            setTimeout(() => setLoading(false), 300);

            return;
          } else {
            console.log("Cache Expired, Fetching New Data ");
          }
        }

        // Fetch data
        const res = await getApi(url);
        //save data in localstorage with the current time
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: res, timestamp: Date.now() })
        );

        setData(res);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchData();
  }, [url]);
//filter data through search
  const filteredData = data.filter((item) =>
    item.login.toLowerCase().includes(search.toLowerCase())
  );
  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" w-10 h-10 border-t-2 rounded-full fast-spin border-amber-50 "></div>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex flex-col  gap-10 justify-center text-4xl items-center text-red-500">
        <div className="text-9xl">👾</div>
        {error}
      </div>
    );
  return (
    <div className=" w-full flex flex-col justify-center items-center  text-white">
      <div>
        <h1 className=" text-4xl">Hey welcome {user ? user.name : "🤔"}</h1>
      </div>
      <div className=" w-[70%] flex justify-center items-center m-6 gap-11">
        {/* adding input field to search user for filter it */}
        <input
          type="text"
          placeholder="Search User..."
          className="border-2 border-gray-400/50 rounded-md w-[70%] p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <LoginBtn />
      </div>
    {/* maping the filtered data  */}
      {filteredData.map((item) => (
        <DataCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default DataList;
