import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  box-shadow: 0 0 12px 0 grey;
`;

const Img = styled.img`
  aspect-ratio: 9/16;
  object-fit: cover;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  border-radius: 5px;
`;
const Title = styled.p`
  color: red;
`;
const Description = styled.p`

`;

export interface params {
  value: string;
  image: string;
  title: string;
  description?: string;
  onClick?: (value:string) => void;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>
};

const defaultProps = {
  // title: 'Productp 1',
  // image: "https://http2.mlstatic.com/D_NQ_NP_657258-MLA47664529266-0.webp"
};

/**
 * 
 * @param params 
 * @param params.value key of product
 * @param params.image image of product
 * @param params.title title of product
 * @param params.description description of product
 * @param params.onClick  callback that returns an ID when pressing the component 
 * @param params.onMouseLeave
 * @param params.onMouseOver
 * 
 * @example 
 * import CardProducts from './Componentes/Product';
 * 
 * const App = (): JSX.Element => {     
 *   return (
 *     <CardProducts
 *       value='1' 
 *       image='telefono1.webp' 
 *       title='Telefono'
 *       onMouseOver={()=>console.log('over')}
 *       onMouseLeave={()=>console.log('leave')}
 *     />    
 * )}
 * 
 * export default App
 * 
 * @returns  JSX.Element
 */


const App = (params: params): JSX.Element => {
  params = { ...defaultProps, ...params};

  const handleClick = () => {
    if (typeof(params.onClick) === 'function') params.onClick(params.value)
  };

  return(
    <Container onClick={handleClick} onMouseLeave={params.onMouseLeave} onMouseOver={params.onMouseOver} >
      <Img src={params.image} />

      <Body>
        <Title>{params.title}</Title>
        <Description>{params.description}</Description>
      </Body>
    </Container>
  );
};

export default App;