import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import { CastMember } from "@/app/types/movieType";
import defaultAvatar from "@/public/default_avatar.jpg";

const CastList = ({ cast }: { cast: CastMember[] }) => (
  <>
    <Heading title="Cast" />
    <div className="details__cast">
      {cast.map((member, index) => (
        <div key={index} className="__role">
          <Image
            src={member.profile_path ?? defaultAvatar}
            alt={member.name}
            width={140}
            height={200}
            className="__image"
          />
          <div className="__role__desc">
            <p>{member.name}</p>
            <p>As {member.character}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default CastList;
