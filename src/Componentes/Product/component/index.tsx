import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Img = styled.img`
  aspect-ratio: 9/16;
  object-fit: cover;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  background-color: #1c1719;
  border-radius: 5px;
`;
const Title = styled.p`
  color: white;
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
}

const defaultProps = {
  // title: 'Productp 1',
  // image: "https://http2.mlstatic.com/D_NQ_NP_657258-MLA47664529266-0.webp"
}

const App = (params: params): JSX.Element => {
  params = { ...defaultProps, ...params}

  const handleClick = () => {
    if (typeof(params.onClick) === 'function') params.onClick(params.value)
  }
  return(
    <Container onClick={handleClick} onMouseLeave={params.onMouseLeave} onMouseOver={params.onMouseOver} >
      <Img src={params.image} />

      <Body>
        <Title>{params.title}</Title>
        <Description>{params.description}</Description>
      </Body>
    </Container>
  )
}

export default App;