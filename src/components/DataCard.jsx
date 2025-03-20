import React, { useState } from "react";
import FollowersData from "./FollowersData";

function DataCard({ item,width,height }) {
  const [followers, setFollowers] = useState(false);
  return (
    <div className=" w-full flex justify-center items-center flex-col">
      <div className="shadow-[0_1px_30px_rgba(0,0,0,0.5)]  w-[70%] mt-6 flex items-center gap-10 flex-row m-auto ">
     
          <div className="border-2 border-gray-400/50">
            <img width={width} height={height} src={item.avatar_url} alt="avatar" />
          </div>
        <div>
          User Name : {item.login}
          <button
            onClick={() => setFollowers(!followers)}
            className=" hover:text-red-700 text-red-500 font-bold py-2 px-4 rounded"
          >
            Followers
          </button>
        </div>
      </div>
      {followers && (
        <div className="w-[70%]  ">
          <FollowersData url={item.followers_url} />
        </div>
      )}
    </div>
  );
}

export default DataCard;
