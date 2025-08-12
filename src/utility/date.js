export default function formatDate(date) {
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const time = (hours.length === 1 ? "0" + hours : hours) + ":" + (minutes.length === 1 ? "0" + minutes : minutes);
    const dayMonth = date.getDate() + " " + numToName(date.getMonth());
	return dayMonth + " " + time;
}

const numToName = (num) => {
    switch (num) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
        default:
            return "";
    }
};
