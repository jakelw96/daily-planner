var currentDay = document.getElementById("currentDay");
$(currentDay).text(moment().format('LL'));
$("#nine").attr("contentEditable", true);
$("#ten").attr("contentEditable", true);
$("#eleven").attr("contentEditable", true);
$("#twelve").attr("contentEditable", true);
$("#one").attr("contentEditable", true);
$("#two").attr("contentEditable", true);
$("#three").attr("contentEditable", true);
$("#four").attr("contentEditable", true);
$("#five").attr("contentEditable", true);

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

$("#clear").on("click", function() {
    localStorage.clear();

});

// Start of functions to add text for each time block

// To create a p element when the div is empty for 9am block
var createTextNine = function () {
    $("#nine").attr("contentEditable", false);
    var input = $("#nine").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textNineP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#nine").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#nine").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-nine-am", JSON.stringify(textP));
};

// To create a p element when the div is empty for 10am block
var createTextTen = function () {
    $("#ten").attr("contentEditable", false);
    var input = $("#ten").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textTenP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#ten").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#ten").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-ten-am", JSON.stringify(textP));
};

// Start of functions to edit text for each time block

// To update the p element in 9am block if one is already in the div, 
// occurs when #nineBtn is clicked when a p element already exists
var editTextNine = function (currentText) {
    $("#textNineP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textNineP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textNineP").replaceWith(textP);
    localStorage.setItem("Plans-nine-am", JSON.stringify(textP));
};

var editTextTen = function (currentText) {
    $("#textTenP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textTenP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textTenP").replaceWith(textP);
    localStorage.setItem("Plans-ten-am", JSON.stringify(textP));
};



// Start of save buttons for each time block

// save btn for 9AM block
$("#nineBtn").click(function() {
  var textBlock = document.getElementById("nine");
  var text = document.getElementById("textNineP");
  if (textBlock.contains(text)) {
    var $text = text.textContent;  
    editTextNine($text);
  } else {
      createTextNine();
  }
});

// save btn for 10am block
$("#tenBtn").click(function() {
    var textBlock = document.getElementById("ten");
    var text = document.getElementById("textTenP");
    if (textBlock.contains(text)) {
      var $text = text.textContent;  
      editTextTen($text);
    } else {
      createTextTen();
    }
  });

// Start of functions to allow text in timeblock to be edited

// Allows to update text in div
$("#nine").on("click", "p", function() {
  $("#textNineP").attr("contentEditable", true);
});
  
// Loads data from localStorage on time blocks
var loadPlans = function() {
    var nineData = JSON.parse(localStorage.getItem("Plans-nine-am"));
    if (nineData !== null) {
        var nineVal = nineData.value;
        var textP = $("<p>");
        $(textP).addClass("textColor");
        $(textP).attr("id", "textNineP");
        $(textP).append(nineVal)
        $("#nine").append(textP) 
    } else {
      console.log("Nothing in localStorage")
    }
};
loadPlans();


    



