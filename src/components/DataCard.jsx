import React from "react";

function DataCard({ item }) {
  return (
    <div className="shadow-[0_1px_30px_rgba(0,0,0,0.5)]  w-[70%] mt-6 flex items-center gap-10 flex-row m-auto ">
      <div className="border-2 border-gray-400/50">
        <img width={200} height={200} src={item.avatar_url} alt="avatar" />
      </div>
      <div>
        User Name : {item.login}
      </div>
    </div>
  );
}

export default DataCard;
