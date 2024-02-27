import React, { useState } from "react";
import Aside from "./Aside";
import { styled } from "styled-components";
import ListTasks from "../pages/tasks/ListTask";
import NavMain from "./NavMain";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [widthMain, setWidthMain] = useState("80.4%")
  const menuReg = () => {
    if (widthMain == "80.4%") {
      setWidthMain("97.4%")
    } else {
      setWidthMain("80.4%")
    }
  } 
  return (
    <Wrapper>
      <Aside onMenuReg={menuReg} />
      <main style={{width:widthMain}}>
        <NavMain/>
        <ListTasks/>
      </main>
      <Outlet/>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;  
  font-size: 14px;
  & main{
    transition:0.7s;
  }
`;