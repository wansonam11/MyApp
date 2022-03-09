import React from "react";
import styled from "styled-components";

const MyButton = styled.a`
  position: relative;
  display: inline-block;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  font-size: large;
  line-height: 1.6;
  font-weight: 600;
  color: #382b22;
  padding: 1.25em 2em;
  background: #fff0f0;
  border: 2px #b18597;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Orbitron&display=swap");
  font-family: "orbitron";
  letter-spacing: 1px;
  user-select: none;
  background: #e52828;
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
    background: #8a1e3b;
    border-radius: inherit;
    box-shadow: 0 0 0 0 #b18597, 0 0.4em 0 0 #2d0a09;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  }
  &:hover {
    background: #ffe9e9;
    transform: translateY(0.25rem);
  }
`;

export function PinkButtons({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}

export default PinkButtons;
