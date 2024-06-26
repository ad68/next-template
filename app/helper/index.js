import toast from "react-hot-toast";
export const isValue = (value) => {
  if (value === null || value === "" || value === undefined) {
    return false;
  } else {
    return true;
  }
};
export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
export const generateOptions = (data, optionValue, optionLabel) => {
  let arr = [];
  data?.forEach((item) => {
    arr.push({ value: item[optionValue], label: item[optionLabel] });
  });
  return arr;
};
export const numberWithCommas = (num) => {
  if (isValue(num)) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return num;
  }
};
export const getPersianMonthText = (month) => {
  switch (month) {
    case 1:
      return "فروردین";
    case 2:
      return "اردیبهشت";
    case 3:
      return "خرداد";
    case 4:
      return "تیر";
    case 5:
      return "مرداد";
    case 6:
      return "شهریور";
    case 7:
      return "مهر";
    case 8:
      return "آبان";
    case 9:
      return "آذر";
    case 10:
      return "دی";
    case 11:
      return "بهمن";
    case 12:
      return "اسفند";
  }
};

export const notify = {
  Success: (text) =>
    toast.success(text, {
      style: {
        border: "1px solid #1CAE81",
        padding: "16px",
        color: "black",
        backgroundColor: "#DDF3EC",
      },
      iconTheme: {
        primary: "#1CAE81",
        secondary: "#FFFAEE",
      },
    }),
  Error: (text) =>
    toast.error(text, {
      style: {
        border: "1px solid red",
        padding: "16px",
        color: "black",
        backgroundColor: "#ffc7c7",
      },
      iconTheme: {
        primary: "red",
        secondary: "#ffc7c7",
      },
    }),
};
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
export const consoleLog_Blue = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Blue Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: #0096FF; color: white");
  console.log(value);
};
export const consoleLog_Red = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Red Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: #EB4747; color: white");
  console.log(value);
};
export const consoleLog_yellow = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "yellow Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: yellow; color: black");
  console.log(value);
};
export const consoleLog_green = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Green Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: #34BE82; color: white");
  console.log(value);
};
export const consoleLog_BlackGreen = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Black Green Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: black; color: #80ff00");
  console.log(value);
};
export const consoleLog_BlackOrange = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Black Orange Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: black; color: #ff8000");
  console.log(value);
};
export const consoleLog_BlackYellow = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Black yellow Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: black; color: yellow");
  console.log(value);
};
export const consoleLog_BlackRed = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Black Red Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: black; color: red");
  console.log(value);
};
export const consoleLog_Pink = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Pink Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: pink; color: black");
  console.log(value);
};
export const consoleLog_Purple = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Purple Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: Purple; color: white");
  console.log(value);
};
