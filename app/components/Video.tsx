import React from "react";
import Heading from "./ui/Heading";
import { YouTubeEmbed } from "@next/third-parties/google";
import { VideoResult } from "@/app/types/movieType";

interface MovieVideoProps {
  videos: VideoResult[];
}

const Video = ({ videos }: MovieVideoProps) => {
  
  if (videos.length <= 0) {
    return null;
  }

  return (
    <section className="videos">
      <Heading title="Videos" />
      <div className="__list">
        {videos.map((video) => (
          <div className="video-wrapper" key={video.id}>
            <YouTubeEmbed videoid={video.key} height={320} width={500} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;
