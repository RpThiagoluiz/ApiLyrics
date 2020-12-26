import React from "react";
import { Container } from "./styles";

const Project = ({ title, link }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <a href={link} target="_blank">
        API Link
      </a>
      <br />
      <small>Procure a letra da musica que deseja!</small>
    </Container>
  );
};
export default Project;
