import { red, green } from "chalk";
import { error, success } from "log-symbols"; // 显示出 √ 或 × 等的图标
const log: any = {};

const logTypes: Array<any> = [
  {
    name: "success",
    color: green,
  },
  {
    name: "error",
    color: red,
  },
  {
    name: "warning",
    color: red,
  },
  {
    name: "info",
  },
];

logTypes.forEach(({ name: logName, color, prefix = "" }: any): void => {
  log[logName] = (text: string | any = ""): void => {
    if (typeof text === "object") {
      const { text: content = "", prefix: prefixTxt = "" } = text;
      content && console.log(`${prefixTxt + " "}${text}`);
    } else if (color) {
      console.log(`${prefix + " "}${color(logName.toUpperCase())} ${text}`);
    } else {
      console.log(text);
    }
  };
});
log.iconError = error;
log.iconSuccess = success;
export default log;
