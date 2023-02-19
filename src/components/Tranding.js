import { Card, Container, Row, Col, Image } from "react-bootstrap"
import AvatarImage from "../assets/bg/Tranding/Avatar.jpg"
import DoctorStrangeImage from "../assets/bg/Tranding/Doctor-Strange.jpg" 
import GunDocterStrange2Image from "../assets/bg/Tranding/Gun-Docter Strange2.jpg" 
import SmileImage from "../assets/bg/Tranding/Smile.jpg" 
import SpidermanImage from "../assets/bg/Tranding/Spiderman.jpg" 
import ValentineImage from "../assets/bg/Tranding/Valentine.jpg"  

const Tranding = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="tranding">
                    <Card className="movieImage">
                        <Image src={AvatarImage} alt="Avatar Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">AVATAR</Card.Title>
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
                        <Image src={DoctorStrangeImage} alt="Doctor-Strange Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Doctor Strange</Card.Title>
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
                        <Image src={GunDocterStrange2Image} alt="GunDocterStrange2 Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Gun Docter Strange 2</Card.Title>
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
                        <Image src={SmileImage} alt="Smile Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Smile</Card.Title>
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
                        <Image src={SpidermanImage} alt="Spiderman Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Spiderman</Card.Title>
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
                        <Image src={ValentineImage} alt="Valentine Movies"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Valentine</Card.Title>
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

export default Tranding