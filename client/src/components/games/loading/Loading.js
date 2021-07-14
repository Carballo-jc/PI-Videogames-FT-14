import React from "react";
import styled from "styled-components";

const TextLoading = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

const Loading = () => {
  return (
    <TextLoading>
      <h1> Cargando sus juegos por favor espere...</h1>
    </TextLoading>
  );
};

export default Loading;
