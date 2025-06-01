import { useDispatch, useSelector } from "react-redux";
import { savePrevList, updateToPrev } from "../features/list/listSlice";

export const useSavePrevListData = () => {
  const dispatch = useDispatch();
  const leftList = useSelector(state => state.list.leftList);
  const rightList = useSelector(state => state.list.rightList);
  const middleList = useSelector(state => state.list.middleList);
  const save = () => {
    dispatch(savePrevList({ leftList, rightList, middleList }));
  };

  return save;
};

export const useUpdateToPrevData = () => {
  const dispatch = useDispatch();
  const prevLeftList = useSelector(state => state.list.prevLeftList);
  const prevRightList = useSelector(state => state.list.prevRightList);
  const prevMiddleList = useSelector(state => state.list.prevMiddleList);

  const update = () => {
    dispatch(updateToPrev({ prevLeftList, prevRightList, prevMiddleList }));
  };

  return update;
};
