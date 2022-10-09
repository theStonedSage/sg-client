import { Container, Grid } from "@mui/material";
import React from "react";
import EntryCard from "../../components/EntryCard";
import TitleBar from "../../components/TitleBar";
import { PresentationLayout } from "../../layouts/PresentationLayout";
import { homePageContent } from "./utils/constants";

export type IHomeProps = {};

const Home: React.FC<IHomeProps> = () => {
  return (
    <PresentationLayout>
      <TitleBar title="Popular Titles" />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={1}>
          {
            homePageContent?.map((p: any, i: number) => (
                <Grid item key={`home-${i}`} xs={12} sm={6} md={4}>
            <EntryCard {...p} />
                  
                </Grid>
              ))}
        </Grid>
      </Container>
      
    </PresentationLayout>
  );
};

export default Home;
