/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Store } from "../context/Store";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import socketIOClient from "socket.io-client";
import axios from "axios";

const ENDPOINT = "https://gas-server.onrender.com/";
// const ENDPOINT = "http://192.168.45.150:5557";

const socket = socketIOClient(ENDPOINT, {
  transports: ["websocket", "polling", "flashsocket"],
  forceNew: true,
  withCredentials: true,
});

const t_code = ["OF 0U H8 J7", "H7 0I H6 B7", "H5 K7 B6 B6"];

function Forge() {
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Store);
  const history = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const {code} = state


  const setRandomAddress = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAddress(t_code[Math.floor(Math.random() * t_code.length)]);
      const {data} = axios.post(`${'http://localhost:5557'}/address`,{
        address: t_code[Math.floor(Math.random() * t_code.length)]
      })
      socket.emit("data_send", { code: address });
      
    }, 2000);
  };

  console.log('code from state --- ', code);

  return (
    <div className=" w-full grid items-center content-center bg-slate-100 rounded-lg p-8">
      <p className="text-slate-900 font-bold pb-16 text-4xl">RFID-TAG</p>
      <p className="text-slate-500">{loading ? "Loading ..." : address}</p>
      <div
        // to={`/?code=${t_code[Math.floor(Math.random() * t_code.length)]}`}
        onClick={setRandomAddress}
        // onClick={setRandomAddress}
        className="flex my-4 w-full p-2 rounded-full cursor-pointer hover:bg-blue-800 bg-blue-900 text-center text-white"
      >
        <p className="text-center w-full">change code</p>
      </div>
      <p></p>
    </div>
  );
}

export default Forge;
