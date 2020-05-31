import React, { useState, useEffect } from "react";
import ShowCardList from "../CardList/ShowCardList";

const show = {
  name: "The 100",
  nextEpisodeDate: new Date().toDateString(),
  image: "https://image.tmdb.org/t/p/w500/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg",
  notificationOn: true,
};

export default () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    setShows([show, show, show, show, show, show, show]);
  }, []);

  return <ShowCardList shows={shows} />;
};
