import { finishLoading, startLoading } from "../modules/loading";

export const createActionType = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [type, SUCCESS, FAILURE];
};

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (param) => async (dispatch) => {
    dispatch({ type }); //요청이 시작된것을 알림
    dispatch(startLoading(type));
    try {
      //요청성공
      const res = await request(param);
      console.log(res);
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
      dispatch(finishLoading(type));
    } catch (error) {
      //요청실패(에러가 발생)
      dispatch({
        type: FAILURE,
        payload: error,
        error: true,
      });
      dispatch(startLoading(type));
      throw error;
    }
  };
}
