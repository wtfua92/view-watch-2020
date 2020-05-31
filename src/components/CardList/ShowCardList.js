import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import ShowCard from "../ShowCard/ShowCard";

const ShowCardList = ({ shows }) => {
  const showCards = shows.map((s) => (
    <Grid item>
      <ShowCard {...s} />
    </Grid>
  ));

  return (
    <Grid container justify={"center"}>
      <Grid item xs={false} md={2} />
      <Grid xs={12} md={8} spacing={2} container item direction="column">
        {showCards}
      </Grid>
      <Grid item xs={false} md={2} />
    </Grid>
  );
};

ShowCardList.propTypes = {
  shows: PropTypes.array.isRequired,
};

export default ShowCardList;
