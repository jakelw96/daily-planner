var currentDay = document.getElementById("currentDay");
$(currentDay).text(moment().format('LL'));

// Checks current time(24hr format) and updates time blocks style to reflect past, present, future
var currentTime = function() {
  var nineBlock = document.getElementById("nine");
  var tenBlock = document.getElementById("ten");
  var elevenBlock = document.getElementById("eleven");
  var twelveBlock = document.getElementById("twelve");
  var oneBlock = document.getElementById("one");
  var twoBlock = document.getElementById("two");
  var threeBlock = document.getElementById("three");
  var fourBlock = document.getElementById("four");
  var fiveBlock = document.getElementById("five");
  var timeNow = moment().hour();
  
  switch (timeNow) {
    case 9:
      $(nineBlock).addClass("present");
      $(tenBlock).addClass("future");
      $(elevenBlock).addClass("future");
      $(twelveBlock).addClass("future");
      $(oneBlock).addClass("future");
      $(twoBlock).addClass("future");
      $(threeBlock).addClass("future");
      $(fourBlock).addClass("future");
      $(fiveBlock).addClass("future");
    break;
    case 10:
      $(nineBlock).addClass("past");
      $(tenBlock).addClass("present");
      $(elevenBlock).addClass("future");
      $(twelveBlock).addClass("future");
      $(oneBlock).addClass("future");
      $(twoBlock).addClass("future");
      $(threeBlock).addClass("future");
      $(fourBlock).addClass("future");
      $(fiveBlock).addClass("future");
    break;
    case 11:
      $(nineBlock).addClass("past");
      $(tenBlock).addClass("past");
      $(elevenBlock).addClass("present");
      $(twelveBlock).addClass("future");
      $(oneBlock).addClass("future");
      $(twoBlock).addClass("future");
      $(threeBlock).addClass("future");
      $(fourBlock).addClass("future");
      $(fiveBlock).addClass("future");
    break;
    case 12:
      $(nineBlock).addClass("past");
      $(tenBlock).addClass("past");
      $(elevenBlock).addClass("past");
      $(twelveBlock).addClass("present");
      $(oneBlock).addClass("future");
      $(twoBlock).addClass("future");
      $(threeBlock).addClass("future");
      $(fourBlock).addClass("future");
      $(fiveBlock).addClass("future");
    break;
    case 13:
      $(nineBlock).addClass("past");
      $(tenBlock).addClass("past");
      $(elevenBlock).addClass("past");
      $(twelveBlock).addClass("past");
      $(oneBlock).addClass("present");
      $(twoBlock).addClass("future");
      $(threeBlock).addClass("future");
      $(fourBlock).addClass("future");
      $(fiveBlock).addClass("future");
    break;
    case 14:
      $(nineBlock).addClass("past");
      $(tenBlock).addClass("past");
      $(elevenBlock).addClass("past");
      $(twelveBlock).addClass("past");
      $(oneBlock).addClass("past");
      $(twoBlock).addClass("present");
      $(threeBlock).addClass("future");
      $(fourBlock).addClass("future");
      $(fiveBlock).addClass("future");
    break;
    case 15:
      $(nineBlock).addClass("past");
      $(tenBlock).addClass("past");
      $(elevenBlock).addClass("past");
      $(twelveBlock).addClass("past");
      $(oneBlock).addClass("past");
      $(twoBlock).addClass("past");
      $(threeBlock).addClass("present");
      $(fourBlock).addClass("future");
      $(fiveBlock).addClass("future");
    break;
    case 16:
      $(nineBlock).addClass("past");
      $(tenBlock).addClass("past");
      $(elevenBlock).addClass("past");
      $(twelveBlock).addClass("past");
      $(oneBlock).addClass("past");
      $(twoBlock).addClass("past");
      $(threeBlock).addClass("past");
      $(fourBlock).addClass("present");
      $(fiveBlock).addClass("future");
    break;
    case 17:
      $(nineBlock).addClass("past");
      $(tenBlock).addClass("past");
      $(elevenBlock).addClass("past");
      $(twelveBlock).addClass("past");
      $(oneBlock).addClass("past");
      $(twoBlock).addClass("past");
      $(threeBlock).addClass("past");
      $(fourBlock).addClass("past");
      $(fiveBlock).addClass("present");
    break;
    default:
        $(nineBlock).addClass("future");
        $(tenBlock).addClass("future");
        $(elevenBlock).addClass("future");
        $(twelveBlock).addClass("future");
        $(oneBlock).addClass("future");
        $(twoBlock).addClass("future");
        $(threeBlock).addClass("future");
        $(fourBlock).addClass("future");
        $(fiveBlock).addClass("future");
  };
};
currentTime();



