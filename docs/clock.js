//Controls the clock
//Notes: If any other key pressed than format keys, do nothing

require(['numToWords.js'], function toWords(){});
var formatID = 49; // ID for time display formats

function displayTime(color,shownTime,shownSecond){ // Displays time
  document.getElementById("background").style.backgroundColor = color;
  document.getElementById("hex-text").innerHTML = shownTime;
  document.getElementById("new-line").innerHTML = shownSecond;
}

function getTime(){ // Updates time
  let currDate = new Date;
  var hour = currDate.getHours();
  var minute = currDate.getMinutes();
  var second = currDate.getSeconds();
  var shownTime, shownHour, shownMinute, shownSecond;

  if (hour < 10){
    hour = '0' + hour;
  }
  if (second < 10){
    second = '0' + second;
  }

  // Default color settings
  let color = '#' + hour + minute + second;
  shownTime = color;

  // Detects keypress for format change
  document.onkeypress = function changeFormat(e){
    formatID = e.which;
  };

  //console.log(formatID);
  if (formatID == 49){ // 1 key
    shownTime = color;
    shownSecond = '';
  }
  else if (formatID == 50){ // 2 key
    if (hour >= 12){
      shownTime = hour%12 + ':' + minute + ':' + second + ' pm';
    }
    else if (hour != 0){
      shownTime = hour%12 + ':' + parseInt(minute, 10) + ':' + second + ' am';
    }
    if (hour%12 == 0){
      if (hour == 12){
        shownTime = '12:' + parseInt(minute, 10) + ':' + second + ' pm';
      } // Verify working
      else{
        shownTime = '12:' + parseInt(minute, 10) + ':' + second + ' am';
      } // Verify working
    }
    shownSecond = '';
  }
  else if (formatID == 51){ // 3 Key
    if (hour == 12){shownHour = 12;} else{shownHour = hour%12;}
    shownTime = toWords(shownHour, false) + ' ' + toWords(minute, true);
    shownSecond = second + ' seconds';
  }
  else{
    shownSecond = '';
  }

  displayTime(color, shownTime, shownSecond);
}

setInterval(getTime, 500); // 500ms update for accuracy
