import React from "react";
import { Carousel } from "react-bootstrap";
import SliderImage1 from "../image/slider-1.jpg";
import SliderImage2 from "../image/slider-2.jpg";
import SliderImage3 from "../image/slider-3.jpg";
import SliderImage4 from "../image/slider-4.jpg";
import SliderImage5 from "../image/slider-5.jpg";

const Slider = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block img-fluid w-100"
                  src={SliderImage1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid w-100"
                  src={SliderImage2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid w-100"
                  src={SliderImage3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid w-100"
                  src={SliderImage4}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid w-100"
                  src={SliderImage5}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
