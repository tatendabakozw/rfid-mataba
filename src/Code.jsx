/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Store } from "./context/Store";

function Code() {
  const { state } = useContext(Store);
  const { code } = state;
  console.log('code value -----', code)
  return (
    <p className="text-slate-800 pt-8 font-bold">
      {code ? code : "0F 0F 0F 0F"}{" "}
    </p>
  );
}

export default Code;
