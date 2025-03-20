import React, { useEffect, useState } from 'react'
import getApi from '../api/api';
import DataCard from './DataCard';

function FollowersData({url}) {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
        const fetchData = async () => {
    const res = await getApi(url)
    setData(res);
        };
    fetchData();
    }, [url]);
  
    const filteredData = data.filter((item) =>
      item.login.toLowerCase().includes(search.toLowerCase())
    );
   
  return (
    <div className=" w-full flex flex-col justify-center items-center text-white">
    <div className=" w-[70%] flex justify-center items-center m-6 gap-11">
      <input
        type="text"
        placeholder="Search User..."
        className="border-2 border-gray-400/50 w-[70%] p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {filteredData.map((item) => (
      
      <DataCard key={item.id} width={50} height={50} item={item} />
    ))}
  </div>
  )
}

export default FollowersData