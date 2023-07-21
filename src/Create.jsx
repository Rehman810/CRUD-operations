import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
const Create = () => {
  let navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uni = ids.slice(0, 8);

    let a = Data[index];
    a.title = title;
    navigate("/");
    setShow(false);
    array.push({ id: uni, Name: a, Age: b });

    navigate("/");
  };
  return;
};

export default Create;
