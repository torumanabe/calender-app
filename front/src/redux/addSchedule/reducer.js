import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_CLOSE_DIALOG,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_START_EDIT,
  SCHEDULES_ASYNC_FAILURE,
  SCHEDULES_DELETE_ITEM,
  SCHEDULES_RESET_ERROR
} from "./actions";
import dayjs from "dayjs";

const init = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: ""
  },
  isDialogOpen: false,
  isStartEdit: false,
  error: null

};

const addScheduleReducer = (state = init, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      return { ...state, form: { ...state.form, ...payload } };
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return init;
    case ADD_SCHEDULE_START_EDIT:
      return { ...state, isStartEdit: true };
    case SCHEDULES_DELETE_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload
      };
    case SCHEDULES_ASYNC_FAILURE:
      return {
        ...state,
        error
      };
    case SCHEDULES_RESET_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default addScheduleReducer;