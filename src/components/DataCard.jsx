import React, { useState } from "react";
import FollowData from "./FollowData";

function DataCard({ item, width, height, Followers }) {
  const [followers, setFollowers] = useState(false);
  const [following, setFollowing] = useState(false);
  //filter the following url
  const filterUrl = (url) => {
    const newUrl = url.split("{")[0];
    return newUrl;
  };

  return (
    <div className=" w-full flex justify-center items-center  flex-col">
      <div className="shadow-[0_1px_30px_rgba(0,0,0,0.5)] rounded-md bg-gray-900 w-[70%] mt-6 flex items-center gap-30 flex-row m-auto ">
        <div className="border-2 border-gray-400/50 rounded-md">
          <img
            width={width || 200}
            height={height || 200}
            src={item.avatar_url}
            alt="avatar"
          />
        </div>
        <div className="flex flex-col justify-between text-2xl items-center ">
          User Name : {item.login}
          <div>
            {/* check the presence of the followers and show button  */}
            {!Followers && (
              <button
                onClick={() => setFollowers(!followers)}
                className=" hover:text-red-700 text-red-500 text-lg font-bold py-2 px-4 rounded"
              >
                Followers
              </button>
            )}
            {/* check the presence of the followers and show button  */}
            {!Followers && (
              <button
                onClick={() => setFollowing(!following)}
                className=" hover:text-red-700 text-red-500  text-lg font-bold py-2 px-4 rounded"
              >
                Following
              </button>
            )}
          </div>
        </div>
      </div>
      {/* setting a pop up ui for showing followers and the followings */}
      {followers && (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-sm flex justify-center rounded-md items-center scrollbar-hide">
          <div className="w-[70%] max-h-[80vh] overflow-y-auto bg-gray-900/70 rounded-md relative ">
            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setFollowers(false)}
            >
              ❌
            </button>
            <FollowData url={item.followers_url} />
          </div>
        </div>
      )}
      {following && (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-sm flex justify-center rounded-md h-screen items-center  scrollbar-hide">
          <div className="w-[70%] max-h-[80vh] overflow-y-auto bg-gray-900/70 rounded-md relative  ">
            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setFollowing(false)}
            >
              ❌
            </button>
            {/* there we filter the following url and then use it  */}
            <FollowData url={filterUrl(item.following_url)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DataCard;
