import styled from 'styled-components';

const Grid = styled.div`
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
  background-color: #222329;
`;

export default Grid;