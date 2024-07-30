import "../assets/css/home.css";
import Carouselslid from "./Carousels";
import room1 from "../assets/img/room-1.jpg.webp";
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const [rooms, setRoom] = useState([]);

    const loadRoom = () => {
        let url = "http://localhost:8000/home/room";
        axios.get(url).then((res) => { setRoom(res.data.slice(0, 4)) });
    }

    useEffect(() => {
        loadRoom()
    }, [])

    const renderRooms = () => {
        const rows = [];
        for (let i = 0; i < rooms.length; i += 2) {
            rows.push(
                <div className="rowmain" key={i}>
                    {i % 4 === 0 ? (
                        <>
                            <div className="room-item">
                                <img src={rooms[i].defaultImage} alt="Room" className="room-image" />
                                <div className="description">
                                    <p>{rooms[i].roomtype}</p>
                                </div>
                            </div>
                            {rooms[i + 1] && (
                                <div className="room-item">
                                    <img src={rooms[i + 1].defaultImage} alt="Room" className="room-image" />
                                    <div className="description">
                                        <p>{rooms[i + 1].roomtype}</p>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="room-item">
                                <div className="description">
                                    <p>{rooms[i].roomtype}</p>
                                </div>
                                <img src={rooms[i].defaultImage} alt="Room" className="room-image" />
                            </div>
                            {rooms[i + 1] && (
                                <div className="room-item">
                                    <div className="description">
                                        <p>{rooms[i + 1].roomtype}</p>
                                    </div>
                                    <img src={rooms[i + 1].defaultImage} alt="Room" className="room-image" />
                                </div>
                            )}
                        </>
                    )}
                </div>
            );
        }
        return rows;
    }

    return (
        <section>
            <Carouselslid />
            <div className="apartment-section">
                <div className="header">
                    <h1>Apartment Room</h1>
                </div>
                <div className="content">
                    {renderRooms()}
                </div>
                
            </div>
            <section style={{ margin: "70px 0px" }}>
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
            <section style={{ margin: "70px 20px", backgroundColor: "#f3f4f7" }}>
                <div className="last-secction">
                    <h1>Latest news from our blog</h1>
                </div>
                <div className="row-last-blog" style={{ paddingBottom: "100px" }}>

                    <Card style={{ width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '28rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Card.Img variant="top" src={room1} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
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
