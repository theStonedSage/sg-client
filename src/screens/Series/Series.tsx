import React, { useState } from "react";
import { Box, Container, Grid, TablePagination } from "@mui/material";
import EntryCard from "../../components/EntryCard";
import TitleBar from "../../components/TitleBar";
import { useGetSeriesByPage, useGetSeriesCount } from "../../queries";
import { pageSize } from "../../utils/constants";
import { PresentationLayout } from "../../layouts/PresentationLayout";
import Loader from "../../components/Loader";

export type ISeriesProps = {};

const Series: React.FC<ISeriesProps> = () => {
  const [page, setPage] = useState(0);
  const { data: seriesCount } = useGetSeriesCount();
  const { data: series, isLoading, isError } = useGetSeriesByPage(page + 1);
  return (
    <PresentationLayout>
      <TitleBar title="Popular Series" />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={1}>
          {isLoading
            ? <Loader />
            : isError
            ? "some error occured"
            : series?.data?.map((s: any, i: number) => (
                <Grid item key={`series-${i}`} xs={12} sm={6} md={4}>
                  <EntryCard
                    cardHeader={{
                      avatar: "A",
                      title: s.title,
                      subheader: `Released on ${s.releaseYear}`,
                    }}
                    image={{
                      url: s.images?.Poster_Art?.url,
                      alt: `img_${s.title}`,
                    }}
                    link="#"
                    content={s.description}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
      {seriesCount && (
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
            count={Number(seriesCount?.data)}
            rowsPerPage={pageSize}
            page={page}
            onPageChange={(e, p) => setPage(p)}
          />
        </Box>
      )}
    </PresentationLayout>
  );
};

export default Series;
