import React, { useState } from "react";
import { styled } from "styled-components";
import DownArrowIcon from "../assets/icons/DownArrowIcon.webp";

const Aside = ({onMenuReg}) => {
  const [showBtn, setShowBtn] = useState('none')
  const [widthAside, setWisthAside] = useState('0')
  function leftMenuClose() {
    if (showBtn == "none") {
      setShowBtn('flex')
      setWisthAside("-17%")
    } else {
      setShowBtn('none')
      setWisthAside("0%")

    }
    onMenuReg()
  }
  return (
    <AsideStyled style={{marginLeft:widthAside}}>
      <div>
        <FirstAside>
          <LogoP class="r6KV0yEdmnh3Op hE4NRqctYyPEEi">Р</LogoP>
          <div>
            <h4>
              Рабочее пространство <br /> Trello
            </h4>
            <span>Бесплатно</span>
          </div>
          <span onClick={leftMenuClose} className="LeftArrow">
            <DownArrowIconn src={DownArrowIcon} alt="" />
          </span>
          <span onClick={leftMenuClose} className="btnShow" style={{display:showBtn}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10.294 9.69805C10.2008 9.60614 10.1268 9.49661 10.0763 9.37584C10.0258 9.25507 9.99976 9.12546 9.99976 8.99455C9.99976 8.86364 10.0258 8.73403 10.0763 8.61327C10.1268 8.4925 10.2008 8.38297 10.294 8.29105C10.4831 8.10449 10.738 7.99988 11.0035 7.99988C11.2691 7.99988 11.524 8.10449 11.713 8.29105L14.678 11.2311C14.7802 11.3324 14.8614 11.453 14.9167 11.5858C14.9721 11.7186 15.0006 11.8611 15.0006 12.0051C15.0006 12.149 14.9721 12.2915 14.9167 12.4243C14.8614 12.5572 14.7802 12.6777 14.678 12.7791L11.723 15.7091C11.534 15.8959 11.2789 16.0007 11.013 16.0007C10.7472 16.0007 10.4921 15.8959 10.303 15.7091C10.2098 15.6171 10.1358 15.5076 10.0853 15.3868C10.0348 15.2661 10.0088 15.1365 10.0088 15.0056C10.0088 14.8746 10.0348 14.745 10.0853 14.6243C10.1358 14.5035 10.2098 14.394 10.303 14.3021L12.621 12.0051L10.294 9.69805V9.69805Z" class="ghly4t0Xcm0PLQ"></path></svg>
          </span>
        </FirstAside>
        <SecondAside>  
         ✈
        </SecondAside>
      </div>
    </AsideStyled>
  );
};

export default Aside;

const AsideStyled = styled.div`
  background-color: #16161670;
  color: #9fadbc;
  font-size: 14px;
  width: 18%;
  height: 93.6vh;
  transition:0.5s;
`;
const LogoP = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(
    var(--ds-background-accent-blue-bolder, #0747a6),
    var(--ds-background-accent-teal-bolder, #008da6)
  );
`;

const DownArrowIconn = styled.img`
  filter: invert(70%);
  width: 13px;
  transform: rotate(90deg);
`;
const FirstAside = styled.div`
border-bottom: 1px solid #535353;
  padding: 10px 10px;
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  & h4 {
    margin: 0;
  }
  & .LeftArrow {
    padding: 9px;
    display: flex;
    border-radius: 5px;
    &:hover {
      background-color: #36363688;
    }
  }
  & .btnShow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(0,0,0,0.1);
    cursor: pointer;
    justify-content: center;
    align-items:center ;
    position: absolute;
    right: -20px;
    &:hover {
      background: rgba(247, 246, 246, 0.489);
    }
  }
`;

const SecondAside = styled.div`
  & svg {
    filter: invert(70%);
    margin-left: 15px;
  }
  & h4 {
    margin: 5px 0 5px 15px;
  }
  & div {
    display: flex;
    align-items: center;
    padding: 7px 0;
    border-radius: 4px;
    &:hover {
      background-color: #3636366f;
    }
    & span {
      padding: 5px 10px;
    }
  }
  & .blackBoards {
    padding-left: 5px;
  }
`;
