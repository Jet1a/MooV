"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbClockPlus } from "react-icons/tb";
import { useCurrentUser } from "../context/CurrentUserContext";

interface FavoriteProps {
  movieId: number;
}

const Favorite = ({ movieId }: FavoriteProps) => {
  const currentUser = useCurrentUser();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (currentUser?.favoriteIds?.includes(movieId.toString())) {
      setIsFavorite(true);
    }
  }, [movieId]);

  const toggleFavorite = () => {
    if (!currentUser) {
      toast.error("Please login first");
      return;
    }

    if (isFavorite) {
      axios
        .delete(`/api/favorites/${movieId}`)
        .then(() => {
          toast.success("Remove from Favorites");
          setIsFavorite(false);
        })
        .catch((error) => {
          toast.error("Something wrong!");
          throw new Error(error);
        });
    } else {
      axios
        .post(`/api/favorites/${movieId}`)
        .then(() => {
          toast.success("Add to Favorites");
          setIsFavorite(true);
        })
        .catch((error) => {
          toast.error("Something wrong!");
          throw new Error(error);
        });
    }
  };

  return (
    <div className={`favorite ${isFavorite ? 'favorited': 'non-favorite'}`} onClick={toggleFavorite}>
      <TbClockPlus />
    </div>
  );
};

export default Favorite;
