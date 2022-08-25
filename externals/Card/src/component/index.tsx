import React from 'react';
import styled from 'styled-components';

import Avatar from '../../Avatar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  width: 123px;
  height: 160px;
  border-radius: 6px;
  box-shadow: 0 0 12px 0 grey;
`;
const Title = styled.p`
  color: red;
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
 * @param params.value  Identificador del elemento
 * @param params.title  titulo del elemento
 * @param params.description  descripción del elemento
 * @param params.image  imagen del elemento
 * @param params.onClick  callback que retorna un identificador al precionar sobre el componente
 * 
 * @example
 * import { useState } from 'react';
 * import Card, { params as paramsCard } from './Componentes/Card';
 * import Grid from './Componentes/Grid';
 *
 * const App = (): JSX.Element => {
 *   const [ data, setData ] = useState<paramsCard[]>([
 *     { value: '1', title:'Tienda 1', image:'/vite.svg'},
 *     { value: '2', title:'Tienda 2', image:'/vite.svg'},
 *     { value: '3', title:'Tienda 3', image:'/vite.svg'},
 *  ])
 *  return (
 *    <Grid>
 *      { data.map((value, index) => ( <Card key={index} {...value} onClick={} /> )) }      
 *    </Grid>
 *  )
 * }

 * export default App
 
 * 
 * @returns JSX.Element
 */

const App = (params: params): JSX.Element => {

  const handleClick = () => {
    if (typeof(params.onClick) === 'function') params.onClick(params.value);
  };

  return (
    <Container onClick={handleClick} >
    
      <Avatar image={params.image} />

      <Title>{params.title}</Title>

      <Description>{params.description}</Description>
      
    </Container>
  );
};

export default App;
