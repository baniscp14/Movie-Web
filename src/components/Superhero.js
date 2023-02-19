import { Card, Container, Row, Col, Image } from "react-bootstrap"
import BatmanImage from "../assets/bg/Superhero/Batman.jpg"
import FantasticFourImage from "../assets/bg/Superhero/Fantastic-Four.jpg" 
import SriAsihImage from "../assets/bg/Superhero/Sri-Asih.jpg" 
import SupermanImage from "../assets/bg/Superhero/Superman.jpg" 
import WiroSablengImage from "../assets/bg/Superhero/Wiro-Sableng.jpg" 
import XMenImage from "../assets/bg/Superhero/X-Men.jpg"  

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPER HERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={BatmanImage} alt="Batman Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Batman</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional 
                                content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>

                    <Col  md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={FantasticFourImage} alt="FantasticFour Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Fantastic Four</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional 
                                content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>

                    <Col  md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={SriAsihImage} alt="SriAsih Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Sri Asih</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional 
                                content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>

                    <Col  md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={SupermanImage} alt="Superman Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Superman</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional 
                                content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>

                    <Col  md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={WiroSablengImage} alt="WiroSableng Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Wiro Sableng</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional 
                                content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>

                    <Col  md={4}  className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={XMenImage} alt="XMen Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">X-Men</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional 
                                content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero