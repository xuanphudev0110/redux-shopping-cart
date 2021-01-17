import React from "react";
import ao1 from "../Assets/Image/ao1.jpg";
import ao3 from "../Assets/Image/ao3.jpg";
import ao10 from "../Assets/Image/ao10.jpg";
import ao11 from "../Assets/Image/ao11.jpg";
import { connect } from "react-redux";
import { addBasket } from "../redux/actions/addAction";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = props => {
  console.log(props);

  return (
    <React.Fragment>
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col lg={3} md={4} sm={6} xs={12}>
            <Card>
              <div className="image">
                <Card.Img variant="top" className="card-img" src={ao1} />
                <Card.Body>
                  <Card.Title>Blue T-shirt</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <h4>$15,00</h4>
                  <a
                    onClick={() => props.addBasket("blueTshirt")}
                    className="addToCart cart1"
                    href="#"
                  >
                    Add to cart
                  </a>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="card-22">
            <Card>
              <div className="image">
                <Card.Img variant="top" className="card-img" src={ao10} />
                <Card.Body>
                  <Card.Title>Green T-shirt</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <h4>$10,00</h4>
                  <a
                    onClick={() => props.addBasket("greenTshirt")}
                    className="addToCart cart2"
                    href="#"
                  >
                    Add to cart
                  </a>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="card-33">
            <Card>
              <div className="image">
                <Card.Img variant="top" className="card-img" src={ao11} />
                <Card.Body>
                  <Card.Title>Ashs T-shirt</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <h4>$17,00</h4>
                  <a
                    onClick={() => props.addBasket("ashsTshirt")}
                    className="addToCart cart3"
                    href="#"
                  >
                    Add to cart
                  </a>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="card-44">
            <Card>
              <div className="image">
                <Card.Img variant="top" className="card-img" src={ao3} />
                <Card.Body>
                  <Card.Title>Cosn T-shirt</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <h4>$13,00</h4>
                  <a
                    onClick={() => props.addBasket("cosnTshirt")}
                    className="addToCart cart4"
                    href="#"
                  >
                    Add to cart
                  </a>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default connect(null, { addBasket })(Home);
