import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeImages, Data } from "./data";
import {
  SectionContainer,
  ContentContainer,
  MainHeading,
  Carousel,
  Gallary,
  CarouselThemes,
  Para,
  Link,
  Row,
  Column,
  Text,
  Heading,
  RightArrowIcon,
  LeftArrowIcon,
  RightArrow,
  LeftArrow,
} from "./themeStyle";

const NextArrow = ({ onClick }) => {
  return (
    <RightArrow onClick={onClick}>
      <RightArrowIcon />
    </RightArrow>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <LeftArrow onClick={onClick}>
      <LeftArrowIcon />
    </LeftArrow>
  );
};

const Theme = () => {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <SectionContainer>
      <ContentContainer>
        <MainHeading>
          Getting an Online store all set up is easier than you think
        </MainHeading>
        <Carousel>
          <Slider {...settings}>
            {ThemeImages.map((imgs) => {
              return (
                <Gallary key={imgs.id}>
                  <CarouselThemes src={imgs.img} alt="themes" />
                  <Para>
                    {imgs.title} <span>by foodie</span>
                  </Para>
                </Gallary>
              );
            })}
          </Slider>
        </Carousel>

        <Link href="#">Browse all themes</Link>
        <Row>
          {Data.map((theme) => {
            return (
              <Column key={theme.id}>
                <Heading>{theme.header}</Heading>
                <Text>{theme.text}</Text>
              </Column>
            );
          })}
        </Row>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Theme;
