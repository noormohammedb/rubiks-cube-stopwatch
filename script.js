console.log("JavaScript Loading");
let HH;
let MM;
let SS;
let MS;
// let AmPm = "AM";
let d = new Date();
let b = document.getElementById("button");
let sc = document.getElementById("screen");
sc.value = "";

let val = 0000000000000;
let change = 75;

b.addEventListener("click", () => {
  d = new Date();
  d.setTime(val);
  // d.setHours(0);
  // d.setMinutes(00);
  console.log("Time Strated\n" + d.getTime());
  setInterval(() => {
    HH = d.getHours() - 5;
    MM = d.getMinutes() - 30;
    SS = d.getSeconds();
    MS = d.getMilliseconds();
    // if (HH > 12) {
    //   HH -= 12;
    //   AmPm = "PM";
    // }

    sc.value = HH + ":" + MM + ":" + SS + ":" + MS;
    val += change;
    d.setTime(val);
    // console.log("time");
  }, change);
});
