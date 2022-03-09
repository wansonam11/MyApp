import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlueButton from "./BlueButtons";
import Progress from "./Progress";
import { check, next } from "../../modules/score";
import styled from "styled-components";

const Image = styled.img`
  width: 30%;
  margin-bottom: 20px;
`;

const Question = styled.h4`
  margin: auto;
  text-align: center;
  font-size: 1.8em;

  margin-bottom: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Orbitron&display=swap");
  font-family: "nanumgothic";
  color: #fff;
`;

export function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);

  return (
    <div>
      <Image src={quiz[page - 1].img} />
      <Question>{quiz[page - 1].q}</Question>

      {quiz[page - 1].a.map((item) => {
        return (
          <BlueButton
            text={item.text}
            key={item.text}
            clickEvent={() => {
              dispatch(check({ isCorrect: item.isCorrect }));
              dispatch(next());
            }}
          />
        );
      })}
      <Progress page={page} maxPage={quiz.length} />
    </div>
  );
}

export default Quiz;
