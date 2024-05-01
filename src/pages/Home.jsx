import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar.jsx';
import ImageCard from '../components/ImageCard.jsx';

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({theme}) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({theme}) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px){
    font-size: 20px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({theme}) => theme.secondary};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 30px 0px;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 30px;
  @media(min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  const item = {
    photo: "https://res.cloudinary.com/dmotxa0iv/image/upload/v1713252072/img-cQLZiyeOWETOKcgkuQtZI4lm_n5gbjr.png",
    author: "Ayush",
    prompt: "HEY Prompt",
  };
  const item1 = {
    photo: "https://res.cloudinary.com/dmotxa0iv/image/upload/v1713252066/img-eb8y07FjnvbubgNdxYoZYjsq_i5rkhh.png",
    author: "Ananya",
    prompt: "HEY Prompt",
  };
  const item2 = {
    photo: "https://res.cloudinary.com/dmotxa0iv/image/upload/v1713252083/img-BXJ4M0TqNzUR8ihdenOJk02j_kzmfp4.png",
    author: "Mukund",
    prompt: "HEY Prompt",
  };
  const item3 = {
    photo: "https://res.cloudinary.com/dmotxa0iv/image/upload/v1713252047/img-q7CsaT7nZ5aFEuTJL5y73VNk_nyjzvn.png",
    author: "Om",
    prompt: "HEY Prompt",
  };
  const item4 = {
    photo: "https://res.cloudinary.com/dmotxa0iv/image/upload/v1713252598/img-sDSGT0nxKp2GQ2u0p31gVWwl_uux7fe.png",
    author: "Snehal",
    prompt: "HEY Prompt",
  };
  const item5 = {
    photo: "https://res.cloudinary.com/dmotxa0iv/image/upload/v1714549183/o4o6knstxj6tkuigimfa.png",
    author: "Snehal",
    prompt: "HEY Prompt",
  };
  return (
    <Container>
      <Headline>Explore popular posts in the Community!
        <Span>⦿ Generated with AI ⦿</Span>
      </Headline>
      {/* <SearchBar/> */}
      <Wrapper>
        <CardWrapper>
          <ImageCard item={item} />
          <ImageCard item={item1} />
          <ImageCard item={item2} />
          <ImageCard item={item3} />
          <ImageCard item={item4} />
          <ImageCard item={item5} />
          {/* <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} /> */}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Home;
