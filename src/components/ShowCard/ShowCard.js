import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  Chip,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";

import { NotificationsSharp, NotificationsNoneSharp } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardMedia: {
    height: (props) => `${props.isMobile ? 150 : 200}px`,
    backgroundSize: "cover",
    backgroundPosition: "25% 25%",
    backgroundImage: (props) => `url(${props.image})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  nameContainer: {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    paddingLeft: "1rem",
  },
  chipContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  chip: {
    opacity: 0.9,
  },
});

const ShowCard = ({ name, image, notificationOn, nextEpisodeDate }) => {
  const styles = useStyles({ image });
  return (
    <Card>
      <div className={styles.cardMedia}>
        <CardContent className={styles.chipContainer}>
          {nextEpisodeDate ? (
            <Chip
              color={"secondary"}
              className={styles.chip}
              label={`Next episode: ${nextEpisodeDate}`}
            />
          ) : (
            ""
          )}
        </CardContent>
        <div className={styles.nameContainer}>
          <Typography className={styles.name} variant={"h5"}>
            {name}
          </Typography>
          <CardActions>
            <IconButton size={"small"} color={"secondary"}>
              {notificationOn ? (
                <NotificationsSharp />
              ) : (
                <NotificationsNoneSharp />
              )}
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

ShowCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  notificationOn: PropTypes.bool,
  nextEpisodeDate: PropTypes.string,
  isMobile: PropTypes.bool,
};

ShowCard.defaultProps = {
  isFavorite: false,
  notificationOn: false,
  nextEpisodeDate: "",
  isMobile: true,
};

export default ShowCard;
