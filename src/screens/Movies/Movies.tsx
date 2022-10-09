import { Box, Container, Grid, TablePagination } from "@mui/material";
import React, { useState } from "react";
import EntryCard from "../../components/EntryCard";
import Loader from "../../components/Loader";
import TitleBar from "../../components/TitleBar";
import { PresentationLayout } from "../../layouts/PresentationLayout";
import { useGetMoviesByPage, useGetMoviesCount } from "../../queries";
import { pageSize } from "../../utils/constants";

export type IMoviesProps = {};

const Movies: React.FC<IMoviesProps> = () => {
  const [page, setPage] = useState(0);
  const { data: movieCount } = useGetMoviesCount();
  const { data: movies, isLoading, isError } = useGetMoviesByPage(page + 1);

  return (
    <PresentationLayout>
      <TitleBar title="Popular Movies" />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={1}>
          {isLoading
            ? <Loader />
            : isError
            ? "some error occured"
            : movies?.data?.map((m: any, i: number) => (
                <Grid item key={`movie-${i}`} xs={12} sm={6} md={4}>
                  <EntryCard
                    cardHeader={{
                      avatar: "A",
                      title: m.title,
                      subheader: `Released on ${m.releaseYear}`,
                    }}
                    image={{
                      url: m.images?.Poster_Art?.url,
                      alt: `img_${m.title}`,
                    }}
                    link="#"
                    content={m.description}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
      {movieCount && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 5,
          }}
        >
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={Number(movieCount?.data)} // This is what your request should be returning in addition to the current page of rows.
            rowsPerPage={pageSize}
            page={page}
            onPageChange={(e, p) => setPage(p)}
          />
        </Box>
      )}
    </PresentationLayout>
  );
};

export default Movies;
