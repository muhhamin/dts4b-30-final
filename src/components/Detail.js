import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../apis/tmdb";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const Detail = () => {
    const [movie, setMovie] = useState([]);
    let params = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            try 
            {
                const fetchedMovie = tmdb.get(`/movie/${params.id}`);
                setMovie(fetchedMovie.data);
                console.log(fetchedMovie);
                console.log(movie);
            } catch (error) {
                console.log(error);
              }
        };
        fetchMovies();
    }, [movie, params]);
    

    return (
        <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `${BASE_IMAGE_URL}${movie.poster_path}`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} alt="img" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {movie.overview}
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
          </Box>
        </Grid>
      </Grid>
    </Paper>
    )
}

export default Detail;