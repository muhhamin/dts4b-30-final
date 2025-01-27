import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import * as React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useNavigate } from "react-router-dom";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  const longText = movie.overview;

  let navigate = useNavigate();

  const onDetail = (id) => {
      navigate(`/detail/${id}`);
  }

  return (
    <Card id={movie.id} sx={{ display: "flex", width: 400, margin: 5 }}>
      <Button onClick={() => onDetail(movie.id)}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 225 }}
          image={`${BASE_IMAGE_URL}${movie.poster_path}`}
          alt="Movie poster"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {movie.title}
              {" (" + new Date(movie.release_date).getFullYear() + ")"}
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
              }}
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                {longText}
              </ReactReadMoreReadLess>
            </Typography>
            <Box
              sx={{
                width: 100,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="read-only"
                precision={0.1}
                value={movie.vote_average / 2}
                max={5}
                readOnly
              />
              <Box sx={{ ml: 2 }}>{movie.vote_average}</Box>
            </Box>
          </CardContent>
        </Box>
      </Button>
    </Card>
  );
};

export default MovieCard;
