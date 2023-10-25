import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-[17rem]  rounded-lg shadow-lg cursor-pointer">
      <img
        className="rounded-lg border border-black"
        alt="video"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>
          {channelTitle}{" "}
          <span className="bg-red-500 text-white  m-1">Subscribe</span>
        </li>
        <li className="cursor-not-allowed">
          {statistics.viewCount}{" "}
          <span className="bg-blue-500 text-white  ">Views</span>
        </li>
      </ul>
    </div>
  );
};

// Higher Order Component
export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 rounded-lg shadow-lg cursor-pointer border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
