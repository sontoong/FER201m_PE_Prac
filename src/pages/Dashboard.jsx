import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import axios from "axios";

import "../styles/dashboard.scss";

const URL = "https://64af010fc85640541d4e048c.mockapi.io/api/v1/users";

const Dashboard = () => {
  const [staffs, setStaffs] = useState([]);

  const getListStaffs = async () => {
    const res = await axios.get(`${URL}`);

    if (res.status === 200) {
      setStaffs(res.data);
    }
  };

  useEffect(() => {
    getListStaffs();
  }, []);

  const handleDeleteStaff = async (id) => {
    if (window.confirm("Are you sure?")) {
      const res = await axios.delete(`${URL}/${id}`);
      if (res.status === 200) {
        getListStaffs();
        toast.success("Delete success");
      } else {
        toast.error("Delete fail");
      }
    }
  };

  return (
    <div className="staff-table">
      <div className="btn-add">
        <Link to={"/add/"}>
          <button className="add-staff-button">ADD NEW STAFF</button>
        </Link>
      </div>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Avatar</th>
          <th>Age</th>
          <th>Address</th>
          <th>Created Date</th>
          <th>Action</th>
        </thead>
        <tbody>
          {staffs &&
            staffs.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.id}</td>
                <td>{staff.name}</td>
                <td>
                  <img src={staff.avatar} alt={staff.id} />
                </td>
                <td>{staff.age}</td>
                <td>{staff.address}</td>
                <td>{new Date(staff.createdAt).toLocaleString()}</td>
                <td>
                  <Link to={`/update/${staff.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDeleteStaff(staff.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
