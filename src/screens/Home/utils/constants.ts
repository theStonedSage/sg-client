import { IEntryCardProps } from "../../../components/EntryCard/EntryCard";

export const homePageContent: IEntryCardProps[] = [
  {
    cardHeader: {
      title: "Series",
      subheader: "Watch popular series",
    },
    image:{
        url: "https://i.pinimg.com/736x/98/4a/d0/984ad0157e8236564a0b093d14720470.jpg",
        alt: "series_cover"
    },
    link: "/series",
  },
  {
    cardHeader: {
      title: "Movies",
      subheader: "Watch popular movies",
    },
    image:{
        url:"https://images.template.net/wp-content/uploads/2016/10/24110602/Korean-Thriller-Movie-Poster.jpg",
        alt:"movies_cover"
    },
    link: "movies",
  },
];
