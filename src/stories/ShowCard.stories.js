import React from "react";
import ShowCardComponent from "../components/ShowCard/ShowCard";

export default {
  title: "Show card",
  component: ShowCardComponent,
  decorators: [(story) => <div style={{ maxWidth: "450px" }}>{story()}</div>],
};

const imageUrl =
  "https://image.tmdb.org/t/p/w500/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg";

export const ShowCard = () => (
  <ShowCardComponent
    name={"The 100"}
    image={imageUrl}
    nextEpisodeDate={new Date().toDateString()}
  />
);
export const ShowCardWithActiveButtons = () => (
  <ShowCardComponent
    name={"The 100"}
    isFavorite
    notificationOn
    image={imageUrl}
    nextEpisodeDate={new Date().toDateString()}
  />
);
export const ShowCardNoDate = () => (
  <ShowCardComponent
    name={"The 100"}
    isFavorite
    notificationOn
    image={imageUrl}
  />
);
