

const dateParse = (date) => {
  if (date) {
    let splitString = date.split('@');
    let splitDate = splitString.slice(splitString.length-3, splitString.length);
    let month = splitDate[0];
    let year = splitDate[1];
    let day = splitDate[2]
    var date = String(day) + " " + String(month) + " " + String(year);
    return date;
  }
}

export default dateParse;





