import { useState, useEffect } from "react";
import axios from 'axios';

const AllRooms = () => {
    const {rooms, setRooms } = useState({});

    const DisplayAllRoom = () => {
        let url = "http://localhost:8000/dashboard/allrooms";
        axios.get(url).then((res) => {
            setRooms(res.data);
        })
    }

    useEffect(() => {
        DisplayAllRoom()
    }, [])
    return (
        <>
            <h1>All rooms</h1>
            <table>
                <tr>
                    <th>Room Type</th>
                    <th>location</th>
                    <th>Ac</th>
                </tr>
              {rooms.map((key)=>{
                 <tr>
                 <th>{key.roomtype}</th>
                 <th>{key.location}</th>
                 <th>{key.ac}</th>
             </tr>
              })}
                
            </table>


        </>
    )
};

export default AllRooms;