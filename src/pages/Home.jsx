import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.scss";

const URL = "https://64af010fc85640541d4e048c.mockapi.io/api/v1/users";

const Home = () => {
  const [staffs, setStaffs] = useState([]);
  const [detailPopup, setDetailPopup] = useState(null);

  const getListStaff = async () => {
    const res = await axios.get(`${URL}`);
    if (res.status === 200) {
      setStaffs(res.data);
    }
  };

  useEffect(() => {
    getListStaff();
  }, []);

  // popup
  const handleViewPopup = (staff) => {
    setDetailPopup(staff);
  };

  const handleClosePopup = () => {
    setDetailPopup(null);
  };

  return (
    <div className="container">
      {staffs &&
        staffs.map((staff) => (
          <div className="card" key={staff.id}>
            <img src={staff.avatar} alt={staff.id} />
            <h3>{staff.name}</h3>
            <button onClick={() => handleViewPopup(staff)}>View Details</button>
          </div>
        ))}

      {detailPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="close" onClick={handleClosePopup}>
              <span>&times;</span>
            </div>
            <img src={detailPopup.avatar} alt={detailPopup.id} />
            <h2>ID: {detailPopup.id}</h2>
            <p>Name: {detailPopup.name}</p>
            <p>Age: {detailPopup.age}</p>
            <p>Address: {detailPopup.Address}</p>
            <p>
              Created on: {new Date(detailPopup.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
