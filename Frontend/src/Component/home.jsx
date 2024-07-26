import "../assets/css/home.css";
import Carouselslid from "./Carousels";
import room1 from "../assets/img/room-1.jpg.webp";
// import arrow from "../assets/img/arrowline.webp";
// import img1 from "../assets/img/home-midimg-1.webp";
// import img2 from "../assets/img/home-midimg-2.webp";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <section>
            {/* <div className="row main-content">
                <div className="col-md img-column">
                    <div className="img-container">
                        <img src={img1} alt="Mid Image 1" className="main-img" />
                        <img src={arrow} alt="Arrow" className="arrow-img" />
                    </div>
                    <div className="img-background">
                        <img src={img2} alt="Mid Image 2" className="background-img" />
                    </div>
                </div>
                <div className="col-md text-container">
                    <h3 className="guarantee-text">Guaranteed & Certified</h3>
                    <h1 className="main-heading">The World's Best Online Education Institute</h1>
                    <p className="main-description">Choose from over 210,000 online video courses with new additions published every month.</p>
                </div>
            </div> */}
            <Carouselslid />
            <div className="apartment-section">
                <div className="header">
                    <h1>Apartment Room</h1>
                </div>
                <div className="content">
                    <div className="rowmain">
                        <img src={room1} alt="Room" className="room-image" />
                        <div className="description">
                            <p>Hello</p>
                        </div>
                        <img src={room1} alt="Room" className="room-image" />
                        <div className="description">
                            <p>Hello</p>
                        </div>
                    </div>
                    <div className="rowmain">
                        <div className="description">
                            <p>Hello</p>
                        </div>
                        <img src={room1} alt="Room" className="room-image" />
                        <div className="description">
                            <p>Hello</p>
                        </div>
                        <img src={room1} alt="Room" className="room-image" />
                    </div>
                </div>
            </div>
            <section style={{margin:"70px 0px"}}>
                <div className="last-secction">
                    <h1>Latest news from our blog</h1>
                </div>
                <div className="row-last-blog">
                    <Card style={{ width: '28rem', }}>
                        <Card.Img variant="top" src={room1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem' }}>
                        <Card.Img variant="top" src={room1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem' }}>
                        <Card.Img variant="top" src={room1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </section>
            <section style={{margin:"70px 20px", backgroundColor:"#f3f4f7"}}>
                <div className="last-secction">
                    <h1>Latest news from our blog</h1>
                </div>
                <div className="row-last-blog" style={{paddingBottom:"100px"}}>
                   
                    <Card style={{ width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{width:"100px",height:"100px",borderRadius:"50%"}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{  width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{width:"100px",height:"100px",borderRadius:"50%"}}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{  width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{width:"100px",height:"100px",borderRadius:"50%"}}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </section>
    );
};

export default Home;
