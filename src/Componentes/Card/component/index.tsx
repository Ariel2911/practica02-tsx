import styled from 'styled-components';

import Avatar from '../../Avatar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  background-color: royalblue;
  width: 123px;
  height: 160px;
  border-radius: 6px;
`;
const Title = styled.p`
  color: whitesmoke;
`;

const Description = styled.p`
  font-size: 12px;
`;

export interface params {
  value: string;
  title: string;
  description?: string;
  image: string;
  onClick?: (value: string) => void;
};

/**
 * 
 * @param params 
 * @returns 
 */

const App = (params: params): JSX.Element => {

  const handleClick = () => {
    if (typeof(params.onClick) === 'function') params.onClick(params.value)
  }

  return (
    <Container onClick={handleClick} >
    
      <Avatar image={params.image} />

      <Title>{params.title}</Title>

      <Description>{params.description}</Description>
      
    </Container>
  );
};

export default App
