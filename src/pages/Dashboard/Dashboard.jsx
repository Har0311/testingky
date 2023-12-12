import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AuthContext from "../../context/AuthContext";
import "./Dashboard.css";
import Footer from "../../components/Footer/Footer";
import userimage from "../../assets/userProfile.png";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useState, useContext, useEffect } from "react";

const Dashboard = () => {
    const [PersonData, setPersonData] = useState([]);
    const [userIsTeamLeader, setUserIsTeamLeader] = useState(true);
    const axiosPrivate = useAxiosPrivate();
    const [userTeamId, setUserTeamId] = useState(1);
    const { userInfo } = useContext(AuthContext);
    const [userEventDetails, setUserEventDetails] = useState(null);

    useEffect(() => {
      axiosPrivate
        .get("/api/get-reg/")
        .then((res) => {
          setPersonData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
  const cas = [
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 100,
      referalcode: "ThCA-2301577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 80,
      referalcode: "absohdg-2334561577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 70,
      referalcode: "absohdg-2334561577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 60,
      referalcode: "absohdg-2334561577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 50,
      referalcode: "absohdg-2334561577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 40,
      referalcode: "absohdg-2334561577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 30,
      referalcode: "absohdg-2334561577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 20,
      referalcode: "absohdg-2334561577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 20,
      referalcode: "absohdg-2334561577",
    },
    {
      name: "John Doe",
      college: "Indian Institute Of Technology, BHU",
      score: 20,
      referalcode: "absohdg-2334561577",
    },
  ];

  const userdata = {
    name: "John Doe",
    college: "Indian Institute Of Technology, BHU",
    score: 100,
    referals: 50,
    email: "johndoe@example.com",
    phone: 1234567890,
    referalcode: "absodg-2334561577",
    degree: "B.Tech",
    year: "II",
    rank: 2,
  };

  function data(ca, index) {
    if (userdata.referalcode === ca.referalcode) {
      return (
        <tr className="text-center h-14 userrow">
          <td>
            <b className="text-xs">{index + 1}.</b>
          </td>
          <td className=" md:flex h-14 items-center">
            <div className="w-1/4 md:flex justify-center">
              <img src={userimage} width="50px" alt="" />
            </div>
            <div className="w-3/4">
              <p>
                <b>{ca.name}</b>
              </p>
              <p className="text-xs">{ca.college}</p>
            </div>
          </td>
          <td>{ca.score}</td>
        </tr>
      );
    } else {
      return (
        <tr className="text-center h-14">
          <td>
            <b className="text-xs">{index + 1}.</b>
          </td>
          <td className="border-b-2 border-red-200 md:flex h-14 items-center">
            <div className="w-1/4 md:flex justify-center">
              <img src={userimage} width="50px" alt="" />
            </div>
            <div className="w-3/4">
              <p>
                <b>{ca.name}</b>
              </p>
              <p className="text-xs">{ca.college}</p>
            </div>
          </td>
          <td className="border-b-2 border-red-200">{ca.score}</td>
        </tr>
      );
    }
  }

  return (
    <>
      <Navbar />
      <div className="dashboard w-full flex md:flex-row">
        <div className="profile md:w-3/5 xs:w-[100%] sm:w-[100%]">
          <div className="user p-5">
            <div className="p-4 h-1/2">
              <img src={userimage} className="p-4" alt="" />
            </div>
            <div className="rankings p-2 md:flex flex-col justify-around text-4xl h-1/2">
              <div className="text-center md:flex justify-around">
                <span>Rank:</span>
                {userdata.rank}
              </div>
              <div className="text-center md:flex justify-around">
                <span>Score:</span>
                {userdata.score}
              </div>
              <div className="text-center md:flex justify-around">
                <span>Referrals:</span>
                {userdata.referals}
              </div>
            </div>
          </div>
          <div className="details md:w-4/6 p-4 md:flex flex-col">
            <div className="user-info h-1/2 p-4 md:flex flex-col justify-around">
              <div className="Nam text-4xl">
                <b>
                  <center>{userInfo?.full_name?.toUpperCase()}</center>
                </b>
              </div>
              <div className="referal-code h-1/4 p-2 w-full items-center md:flex justify-around">
                Referral code <b>{userInfo?.ca_id}</b>
              </div>
            </div>
            <div className="other-info h-1/2 p-4">
              <div className="educational-details h-1/2 md:flex flex-col justify-evenly">
                <h2>
                  <u>
                    <b>Educational Details</b>
                  </u>
                </h2>
                College: {userInfo?.college}
                <br />
                Year: {userInfo?.year} Year
              </div>
              <br></br>

              <div className="contact-details h-1/2 md:flex flex-col justify-evenly">
                <h2>
                  <u>
                    <b>Contact Details</b>
                  </u>
                </h2>
                Email: {userInfo?.email}
                <br />
                Phone Number: {userInfo?.mobile_number}
              </div>
            </div>
          </div>
        </div>
        <div className="leaderboard xs:w-full md:w-2/5">
          <h1 className="text-center text-3xl">Leaderboard</h1>
          <div id="table-scroll">
            <table className="w-full">
              <thead className="w-full h-12 border-b-2 border-red-300">
                <th>Sr. No</th>
                <th>Name</th>
                <th>Score</th>
              </thead>
              <tbody>{cas.map((ca, index) => data(ca, index))}</tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
