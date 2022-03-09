const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";

export function check({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    payload: { isCorrect },
  };
}

export function next() {
  return {
    type: NEXT_PAGE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

const initalState = {
  score: 0,
  page: 0,
  quizs: [
    {
      q: "[ 다음 캐릭터의 이름은? ]",
      img: "/img/q1.png",
      a: [
        {
          text: "케리건",
          isCorrect: true,
        },
        {
          text: "제라툴",
          isCorrect: false,
        },
        {
          text: "짐레이너",
          isCorrect: false,
        },
      ],
    },
    {
      q: "[ 다음 캐릭터의 이름은? ]",
      img: "/img/q2.png",
      a: [
        {
          text: "피닉스",
          isCorrect: false,
        },
        {
          text: "제라툴",
          isCorrect: true,
        },
        {
          text: "맹스크",
          isCorrect: false,
        },
      ],
    },
    {
      q: "[ 다음 캐릭터의 이름은? ]",
      img: "/img/q3.png",
      a: [
        {
          text: "스튜코프",
          isCorrect: false,
        },
        {
          text: "알타니스",
          isCorrect: true,
        },
        {
          text: "듀란",
          isCorrect: false,
        },
      ],
    },
    {
      q: "[ 다음 유닛의 이름은? ]",
      img: "/img/q4.png",
      a: [
        {
          text: "정찰기",
          isCorrect: false,
        },
        {
          text: "우주모함",
          isCorrect: false,
        },
        {
          text: "모선",
          isCorrect: true,
        },
      ],
    },

    {
      q: "[ 다음 유닛의 이름은? ]",
      img: "/img/q5.png",
      a: [
        {
          text: "히드라리스크",
          isCorrect: false,
        },
        {
          text: "울트라리스크",
          isCorrect: true,
        },
        {
          text: "군단숙주",
          isCorrect: false,
        },
      ],
    },
  ],
};

export default function score(state = initalState, action) {
  console.log(action);
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 10 : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return state;
  }
}
