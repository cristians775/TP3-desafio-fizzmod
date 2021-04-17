const MORNING = { EARLY: "06:00", END: "12:59" };
const AFTERNOON = { EARLY: "13:00", END: "19:59" };
import greetings from "../consts/greetings.js";
export const exerciseOne = (req, res, next) => {
  const dateTimeString = new Date().toLocaleTimeString();
  if (dateTimeString >= MORNING.EARLY && dateTimeString <= MORNING.END) {
    res.send(greetings.GOOD_MORNING);
  } else if (
    dateTimeString >= AFTERNOON.EARLY &&
    dateTimeString <= AFTERNOON.END
  ) {
    res.send(greetings.GOOD_AFTERNOON);
  } else {
    res.send(greetings.GOOD_NIGHT);
  }
};
