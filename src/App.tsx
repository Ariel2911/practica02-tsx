import { useState } from 'react';
import Card, { params as paramsCard } from './Componentes/Card';
import Grid from './Componentes/Grid';

const App = (): JSX.Element => {
  const [ data, setData ] = useState<paramsCard[]>([
    { value: '1', title:'Tienda 1', image:'/vite.svg'},
    { value: '2', title:'Tienda 2', image:'/vite.svg'},
    { value: '3', title:'Tienda 3', image:'/vite.svg'},
    { value: '4', title:'Tienda 4', image:'/vite.svg'},
    { value: '5', title:'Tienda 5', image:'/vite.svg'},
    { value: '6', title:'Tienda 6', image:'/vite.svg'},
    { value: '7', title:'Tienda 7', image:'/vite.svg'},
    { value: '8', title:'Tienda 8', image:'/vite.svg'},
  ])
  return (
    <Grid>
      {
        data.map((value, index) => (

          <Card key={index} {...value} onClick={} />

        ))
      }
      
    </Grid>
  )
}

export default App
