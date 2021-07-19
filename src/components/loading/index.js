import React from "react";
import { LoadingContainer } from "./styles";
import LoadingImage from "../../img/pokeball.png";

export const Loading = () => (
  <LoadingContainer>
    <img src={LoadingImage} alt="Loading" />
  </LoadingContainer>
);