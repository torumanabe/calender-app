import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay,  getMonth } from "../../services/calendar";
import Schedule from "../Schedule";

const CalendarElement = ({ day, month, schedules, ...props }) => {

  const today = dayjs();
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? "M月D日" : "D";
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map(e => (
          <Schedule key={e.id} schedule={e} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;