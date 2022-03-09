import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { next, reset } from "../modules/score";
import PinkButton from "../components/quiz/PinkButtons";
import Quiz from "../components/quiz/Quiz";
import styled from "styled-components";

const FirstPage = styled.main`
  width: 100%;
  margin: auto;
  text-align: center;

  img {
    margin-top: 100px;
  }
`;

const FinalPage = styled.main`
  text-align: center;
`;

const Image = styled.img`
  width: inherit;
  margin-bottom: 30px;
  width: 500px;
`;

const Header = styled.h2`
  font-size: 2.1em;
  margin: auto;
  text-align: center;
  justify-content: center;
  color: #fff0f0;
  font-family: "Times New Roman", serif;
`;

const Header2 = styled.h2`
  font-size: 2.1em;
  margin-top: 200px;
  text-align: center;
  justify-content: center;
  color: #fff0f0;
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Orbitron&display=swap");
  font-family: "nanumgothic";
`;

const Score = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Orbitron&display=swap");
  font-family: "orbitron";
  font-size: 3.1em;
  margin-bottom: 20px;
  color: red;
  font-weight: bold;
`;

const SubHeader = styled.h2`
  font-size: 1.1em;
  color: rgb(255 126 126);
  font-weight: 500;
  margin: 0 0 30px 0;
  @import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
  font-family: "orbitron";
`;

function QuizContainer() {
  const score = useSelector((state) => state.score.score);
  const page = useSelector((state) => state.score.page);
  const quizs = useSelector((state) => state.score.quizs);
  const dispatch = useDispatch();

  return (
    <>
      {page === 0 && (
        <FirstPage>
          <Image src="img/main1.png" alt="protoss" />
          <Header> [ Starcraft Quiz ]</Header>
          <SubHeader>Hell, It's about Time!</SubHeader>
          <PinkButton
            text="TEST START!"
            clickEvent={() => {
              dispatch(next());
            }}
          />
        </FirstPage>
      )}
      {page > 0 && page <= quizs.length && (
        <FirstPage>
          <Quiz />
        </FirstPage>
      )}

      {quizs.length < page && (
        <FinalPage>
          <Header2>[ 당신의 점수는? ]</Header2>
          <Score className="score"> {score}점 </Score>
          <subheader></subheader>
          <PinkButton
            text="re-start"
            clickEvent={() => {
              dispatch(reset());
            }}
          />
        </FinalPage>
      )}
    </>
  );
}

export default QuizContainer;
