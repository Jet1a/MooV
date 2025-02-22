import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import { CrewMember } from "@/app/types/movieType";
import defaultAvatar from "@/public/default_avatar.jpg";

const CrewList = ({ crew }: { crew: CrewMember[] }) => (
  <>
    <Heading title="Crew" />
    <div className="details__cast">
      {crew.map((member, index) => (
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
            <p>As {member.job}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default CrewList;
