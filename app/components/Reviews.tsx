"use client";

import React from "react";
import Heading from "./ui/Heading";
import { Reviewers } from "@/app/types/movie";
import defaultAvatar from "@/public/default_avatar.jpg";
import { format } from "date-fns";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { MdStarBorder } from "react-icons/md";
import { ShowMore } from "@re-dev/react-truncate";

interface ReviewsProps {
  reviews: Reviewers[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  if (reviews.length <= 0) {
    return null;
  }

  return (
    <section>
      <Heading title="Reviews" />
      <div className="review">
        {reviews.map((author) => (
          <div className="__card" key={author.id}>
            <div className="__user">
              <Avatar
                src={
                  typeof author.author_details.avatar_path === "string"
                    ? author.author_details.avatar_path
                    : defaultAvatar.src
                }
                alt={author.author_details.name}
                sx={{ width: 60, height: 60 }}
              />
              <div className="__user__info">
                <div className="__rating">
                  <span>
                    {author.author_details.name === ""
                      ? author.author_details.username
                      : author.author_details.name}
                  </span>

                  <Rating
                    name="review-rating"
                    defaultValue={Number(author.author_details.rating) / 2}
                    precision={0.1}
                    readOnly
                    size="small"
                    emptyIcon={<MdStarBorder fill="#ffffff44" />}
                  />
                </div>

                <span>
                  created at {format(author.created_at, "d MMM yyyy")}
                </span>
              </div>
            </div>
            <div className="__content">
              <ShowMore
                className="__showmore"
                lines={5}
                more="Read more"
                less="Read less"
              >
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {author.content}
                </ReactMarkdown>
              </ShowMore>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
