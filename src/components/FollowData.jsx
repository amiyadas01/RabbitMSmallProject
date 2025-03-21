import React, { useEffect, useState } from "react";
import getApi from "../api/api";
import DataCard from "./DataCard";

function FollowData({ url }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi(url);
      setData(res);
      setTimeout(() => setLoading(false), 300);
    };
    fetchData();
  }, [url]);
  //filter user
  const filteredData = data.filter((item) =>
    item.login.toLowerCase().includes(search.toLowerCase())
  );
  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {" "}
        <div className=" w-10 h-10 text-2xl rounded-full border-t fast-spin border-amber-50 "></div>
      </div>
    );
  return (
    <div className=" w-full flex flex-col justify-center items-center text-white">
      <div className=" w-[70%] flex justify-center items-center m-6 gap-11">
        {/* adding input field to search user for filter it */}
        <input
          type="text"
          placeholder="Search User..."
          className="border-2 border-gray-400/50 w-[70%] rounded-md p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* maping the filtered data  */}
      {filteredData.map((item) => (
        <DataCard
          key={item.id}
          width={50}
          Followers={true}
          height={50}
          item={item}
        />
      ))}
    </div>
  );
}

export default FollowData;
