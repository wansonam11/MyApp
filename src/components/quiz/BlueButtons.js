import React from "react";
import styled from "styled-components";

const MyButton = styled.a`
  width: 250px;
  margin-left: 20px;
  position: relative;
  display: inline-block;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  font-size: large;
  line-height: 2;
  font-weight: 600;
  outline: none;
  text-decoration: none;
  font-size: large;
  font-weight: 600;
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Orbitron&display=swap");
  font-family: "nanumgothic";
  color: #fff;
  border: 2px #b18597;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  user-select: none;
  background: #393480;
  transition: transform 0.15s ease-out, background 0.15s ease-out;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #1a174e;
    border-radius: inherit;
    box-shadow: 0 0 0 0 #1a174e, 0 0.4em 0 0 #373643;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  }
  &:hover {
    background: #706cb0;
    transform: translateY(0.25rem);
  }
`;

export function BlueButton({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}

export default BlueButton;
