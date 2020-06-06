console.log("JavaScript Loading");
let HH;
let MM;
let SS;
let MS;
let AmPm = "AM";
let d = new Date();
let b = document.getElementById("button");
let sc = document.getElementById("screen");
sc.value = "";

b.addEventListener("click", () => {
  console.log("Time Strated");
  setInterval(() => {
    d = new Date();
    HH = d.getHours();
    MM = d.getMinutes();
    SS = d.getSeconds();
    MS = d.getMilliseconds();
    if (HH > 12) {
      HH -= 12;
      AmPm = "PM";
    }
    sc.value = HH + " : " + MM + " : " + SS + " : " + MS + "   " +AmPm;
    // console.log("time");
  }, 1);
});
