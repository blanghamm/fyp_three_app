import React from "react";
import styled from "styled-components";
import Drag from "./Drag";
import Dragvert from "./Dragvert";
import io from "socket.io-client";

const endpoint = "http://localhost:3005/";
const socket = io(endpoint);

const Main = styled.div`
  height: 90%;
  width: 90%;
`;

const Dashboard = () => {
  return (
    <Main>
      <Drag socket={socket} />
      <Dragvert socket={socket} />
    </Main>
  );
};

export default Dashboard;
