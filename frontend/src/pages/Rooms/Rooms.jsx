import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import RoomCard from "../../components/RoomCard/RoomCard";
import AddRoomModal from "../../components/AddRoomModal/AddRoomModal";
import { getAllRooms } from "../../http";


//   {
//     id: 2,
//     topic: "Which framework is best for frontend ?",
//     speakers: [
//       {
//         id: 1,
//         name: "Ankit Pathak",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Cheems",
//         avatar: "/images/cheems.jpeg",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 3,
//     topic: "Which framework is best for frontend ?",
//     speakers: [
//       {
//         id: 1,
//         name: "Ankit Pathak",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Cheems",
//         avatar: "/images/cheems.jpeg",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 4,
//     topic: "Which framework is best for frontend ?",
//     speakers: [
//       {
//         id: 1,
//         name: "Aniket Kumar",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Cheems",
//         avatar: "/images/cheems.jpeg",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 5,
//     topic: "Which framework is best for frontend ?",
//     speakers: [
//       {
//         id: 1,
//         name: "Vineet",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Cheems",
//         avatar: "/images/cheems.jpeg",
//       },
//     ],
//     totalPeople: 40,
//   },
// ];

const Rooms = () => {

  const [showModal,setShowModal] = useState(false);
  const [rooms,setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async() => {
      const{data} = await getAllRooms();
      setRooms(data);
    };
    fetchRooms();
  },[]);

  function openModal(){
    setShowModal(true);
  }
  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search-icon.png" alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModal} className={styles.startRoomButton}>
              <img src="/images/add-room-icon.png" alt="add-room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>

        <div className={styles.roomList}>
          {rooms.map((room) => (
            <>
              <RoomCard key={room.id} room={room} />
            </>
          ))}
        </div>
      </div>
      {showModal && <AddRoomModal onClose={()=>setShowModal(false)}/>}
    </>
  );
};

export default Rooms;
