import { useState, useEffect, useCallback } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import {
  CarouselSlideProps,
  CarouselProps,
  CarouselIndicatorProps,
} from "./components.interface";

const CarouselSlide = ({
  title,
  subtitle,
  location,
  choice,
  description,
  images,
}: CarouselSlideProps) => {
  const backgroundImage =
    window.innerWidth >= 992 ? images.desktop : images.mobile;

  const slideStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage}) `,
  };

  return (
    <Container
      fluid
      className="banner d-flex justify-content-center align-items-center"
      style={slideStyle}
    >
      <Row className="banner-container vw-100">
        <Col
          sm={12}
          lg={6}
          className="banner-header d-flex flex-column justify-content-center text-center text-md-start"
        >
          <h1 className="banner-title text-h2">{title}</h1>
          <h2 className="banner-subtitle text-h5">{subtitle}</h2>
          <p className="banner-line"></p>
        </Col>
        <Col sm={12} lg={6} className="banner-content">
          <div className="banner-info">
            <h3 className="banner-location">{location}</h3>
            <h3 className="banner-choice">{choice}</h3>
            <h4 className="banner-description">{description}</h4>
            <Button
              variant="light"
              className="banner-button d-flex justify-content-end align-items-center"
            >
              <span className="button-text">立即訂房</span>
              <span className="button-line"></span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const CarouselIndicator = ({
  index,
  isActive,
  onClick,
}: CarouselIndicatorProps) => (
  <li
    className={`carousel-indicator-item ${isActive ? "active" : ""}`}
    onClick={() => onClick(index)}
  />
);

// 輪播
const Carousel = ({ slides, interval }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 切換下一張
  const next = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  // 設定自動切換
  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <Row className="carousel-slides">
        {slides.map((slide, index) => (
          <Col
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <CarouselSlide {...slide} />
          </Col>
        ))}
      </Row>
      <Row className="banner-carousel__indicators">
        <ul>
          {slides.map((_, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              isActive={currentIndex === index}
              onClick={handleIndicatorClick}
            />
          ))}
        </ul>
      </Row>
    </div>
  );
};

export default Carousel;
