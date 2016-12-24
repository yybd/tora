function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    if(today.getHours() == 0  && today.getMinutes() == 0){
        wiewCal();
    }

    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getHebcal(){
  var hdStart = new HebrewDate;
  var d = new Date;
  hdStart.convertGregorian(d);
  hdStart.format = 'DD MM';
  return timeToDey(d) + " " + hdStart + " " + hdStart.getHoliday() + "פרשת "
          + SetParasha(hdStart.hd_year, hdStart.dayInYear() + 1, 7, 0) + " "
          + d.getDate() + "/" + parseInt(d.getMonth()+1) ;
}

function timeToDey(time){

    var d = new Date(Date.parse(time)).getDay();
    switch(d){
    case 0:
            return "יום ראשון";
        break
    case 1:
            return "יום שני";
        break
    case 2:
            return "יום שלישי";
        break
    case 3:
            return "יום רביעי";
        break
    case 4:
            return "יום חמישי";
        break
    case 5:
            return "יום שישי";
        break
    case 6:
            return "שבת";
        break
    }
    return "";
}

function getSun(){
  var sun = new doit(new Date,new posSet(Place.ILJerusalem),1);
  return [sun.hanetz + " " + "זריחה " ,sun.shkia + " " + "שקיעה "]
}
