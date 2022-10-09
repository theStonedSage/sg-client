import { Box } from "@mui/material";
import React from "react";

export type IPresentationLayoutProps = {
  children: any;
};

const PresentationLayout: React.FC<IPresentationLayoutProps> = ({
  children,
}) => {
  return <Box sx={{ minHeight: "80vh" }}>{children}</Box>;
};

export { PresentationLayout };
