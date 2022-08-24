import React from "react";
import { CSSProperties } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: center;
  align-content: flex-start;
  gap: 15px;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

export interface params {
  children: JSX.Element | JSX.Element[]
  style?: CSSProperties
}

const App = (params: params): JSX.Element => {  
    return (
        <Container style={params.style}>
          {params.children}
        </Container>
    );
};

export default App;