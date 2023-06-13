/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";
import { useSearchParams } from "react-router-dom";

const ENDPOINT = "https://rfid-mataba-server.onrender.com/";
// const ENDPOINT = "http://192.168.30.180:5557/";

const socket = socketIOClient(ENDPOINT, {
  transports: ["websocket", "polling", "flashsocket"],
  forceNew: true,
  withCredentials: true,
});

function Home() {

const [response, setResponse] = useState();
const [searchParams, setSearchParams] = useSearchParams()

useEffect(() => {
  socket.on("update_address", (data) => {
    setResponse(data);
    console.log("got info from backend", data);
  });
}, [socket]);

const code = searchParams.get('code')

  return (
    <div className=" w-full grid items-center content-center bg-slate-100 rounded-lg p-8">
      <p className="text-slate-900 font-bold pb-16 text-4xl">RFID-TAG</p>
      <p className="text-slate-500">Card below has been read from module</p>
      <p className="text-slate-800 pt-8 font-bold">{response?.address ? response?.address : "0F 0F 0F 0F"} </p>
      <p></p>
    </div>
  );
}

export default Home;
