import { Constants } from "./constants.enum";

export default function () {
    const currDate: Date = new Date();
    const minutes = currDate.getMinutes();
    const seconds = currDate.getSeconds();
    const totalSeconds = (minutes * 60) + seconds;
    const remainingSeconds = Constants.TIME_INTERVAL_S - (totalSeconds % Constants.TIME_INTERVAL_S);
    console.log("returning remainingSeconds: ", remainingSeconds);

    return remainingSeconds;
}