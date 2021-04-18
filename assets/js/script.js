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

// Button to clear all elements from each time block and clears localStorage
$("#clear").on("click", function() {
    localStorage.clear();
    $("#textNineP").remove();
    $("#textTenP").remove();
    $("#textElevenP").remove();
    $("#textTwelveP").remove();
    $("#textOneP").remove();
    $("#textTwoP").remove();
    $("#textThreeP").remove();
    $("#textFourP").remove();
    $("#textFiveP").remove();
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

// To create a p element when the div is empty for 11am block
var createTextEleven = function () {
    $("#eleven").attr("contentEditable", false);
    var input = $("#eleven").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textElevenP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#eleven").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#eleven").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-eleven-am", JSON.stringify(textP));
};

// To create a p element when the div is empty for 12pm block
var createTextTwelve = function () {
    $("#twelve").attr("contentEditable", false);
    var input = $("#twelve").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textTwelveP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#twelve").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#twelve").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-twelve-pm", JSON.stringify(textP));
};

// To create a p element when the div is empty for 1pm block
var createTextOne = function () {
    $("#one").attr("contentEditable", false);
    var input = $("#one").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textOneP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#one").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#one").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-one-pm", JSON.stringify(textP));
};

// To create a p element when the div is empty for 2pm block
var createTextTwo = function () {
    $("#two").attr("contentEditable", false);
    var input = $("#two").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textTwoP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#two").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#two").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-two-pm", JSON.stringify(textP));
};

// To create a p element when the div is empty for 3pm block
var createTextThree = function () {
    $("#three").attr("contentEditable", false);
    var input = $("#three").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textThreeP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#three").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#three").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-three-pm", JSON.stringify(textP));
};

// To create a p element when the div is empty for 4pm block
var createTextFour = function () {
    $("#four").attr("contentEditable", false);
    var input = $("#four").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textFourP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#four").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#four").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-four-pm", JSON.stringify(textP));
};

// To create a p element when the div is empty for 10am block
var createTextFive = function () {
    $("#five").attr("contentEditable", false);
    var input = $("#five").html();
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textFiveP");
    textP.value = input;
    var newText = textP.value;

    // Emptys div from when text is first typed in
    $("#five").empty();

    // Appends the entered value to the dynamically created <p> element
    $(textP).append(newText);
    
    // Appends to time block
    $("#five").append(textP);
    
    // Saves to localStorage
    localStorage.setItem("Plans-five-pm", JSON.stringify(textP));
};
// End of functions to add text for each time block


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

// Update P element for 10am block
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

// Update P element for 11am block
var editTextEleven = function (currentText) {
    $("#textElevenP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textElevenP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textElevenP").replaceWith(textP);
    localStorage.setItem("Plans-eleven-am", JSON.stringify(textP));
};

// Update P element for 12pm block
var editTextTwelve = function (currentText) {
    $("#textTwelveP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textTwelveP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textTwelveP").replaceWith(textP);
    localStorage.setItem("Plans-twelve-pm", JSON.stringify(textP));
};

// Update P element for 1pm block
var editTextOne = function (currentText) {
    $("#textOneP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textOneP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textOneP").replaceWith(textP);
    localStorage.setItem("Plans-one-pm", JSON.stringify(textP));
};

// Update P element for 2pm block
var editTextTwo = function (currentText) {
    $("#textTwoP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textTwoP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textTwoP").replaceWith(textP);
    localStorage.setItem("Plans-two-pm", JSON.stringify(textP));
};

// Update P element for 3pm block
var editTextThree = function (currentText) {
    $("#textThreeP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textThreeP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textThreeP").replaceWith(textP);
    localStorage.setItem("Plans-three-pm", JSON.stringify(textP));
};

// Update P element for 4pm block
var editTextFour = function (currentText) {
    $("#textFourP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textFourP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textFourP").replaceWith(textP);
    localStorage.setItem("Plans-four-pm", JSON.stringify(textP));
};

// Update P element for 5pm block
var editTextFive = function (currentText) {
    $("#textFiveP").attr("contentEditable", false);
    var textP = $("<p>");
    $(textP).addClass("textColor");
    $(textP).attr("id", "textFiveP");
    textP.value = currentText;
    var newText = textP.value;
    console.log(newText);
    $(textP).append(newText);
    $("#textFiveP").replaceWith(textP);
    localStorage.setItem("Plans-five-pm", JSON.stringify(textP));
};

// End of functions to edit text for each time block


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

// save btn for 11am block
$("#elevenBtn").click(function() {
    var textBlock = document.getElementById("eleven");
    var text = document.getElementById("textElevenP");
    if (textBlock.contains(text)) {
      var $text = text.textContent;  
      editTextEleven($text);
    } else {
      createTextEleven();
    }
  });
  
// save btn for 12pm block
$("#twelveBtn").click(function() {
    var textBlock = document.getElementById("twelve");
    var text = document.getElementById("textTwelveP");
    if (textBlock.contains(text)) {
      var $text = text.textContent;  
      editTextTwelve($text);
    } else {
      createTextTwelve();
    }
  });

  // save btn for 1pm block
$("#oneBtn").click(function() {
    var textBlock = document.getElementById("one");
    var text = document.getElementById("textOneP");
    if (textBlock.contains(text)) {
      var $text = text.textContent;  
      editTextOne($text);
    } else {
      createTextOne();
    }
  });

  // save btn for 2pm block
$("#twoBtn").click(function() {
    var textBlock = document.getElementById("two");
    var text = document.getElementById("textTwoP");
    if (textBlock.contains(text)) {
      var $text = text.textContent;  
      editTextTwo($text);
    } else {
      createTextTwo();
    }
  });

  // save btn for 3pm block
$("#threeBtn").click(function() {
    var textBlock = document.getElementById("three");
    var text = document.getElementById("textThreeP");
    if (textBlock.contains(text)) {
      var $text = text.textContent;  
      editTextThree($text);
    } else {
      createTextThree();
    }
  });

  // save btn for 4pm block
$("#fourBtn").click(function() {
    var textBlock = document.getElementById("four");
    var text = document.getElementById("textFourP");
    if (textBlock.contains(text)) {
      var $text = text.textContent;  
      editTextFour($text);
    } else {
      createTextFour();
    }
  });

  // save btn for 5pm block
$("#fiveBtn").click(function() {
    var textBlock = document.getElementById("five");
    var text = document.getElementById("textFiveP");
    if (textBlock.contains(text)) {
      var $text = text.textContent;  
      editTextFive($text);
    } else {
      createTextFive();
    }
  });

// End of save buttons for each time block

// Start of functions to allow text in timeblock to be edited

// Allows to update text in div for 9 block
$("#nine").on("click", "p", function() {
  $("#textNineP").attr("contentEditable", true);
});
  
// Allows to update text in div for 10 block
$("#ten").on("click", "p", function() {
    $("#textTenP").attr("contentEditable", true);
  });

// Allows to update text in div for 11 block
$("#eleven").on("click", "p", function() {
    $("#textElevenP").attr("contentEditable", true);
  });

// Allows to update text in div for 12 block
$("#twelve").on("click", "p", function() {
    $("#textTwelveP").attr("contentEditable", true);
  });  

  // Allows to update text in div for 1 block
$("#one").on("click", "p", function() {
    $("#textOneP").attr("contentEditable", true);
  });

  // Allows to update text in div for 2 block
$("#two").on("click", "p", function() {
    $("#textTwoP").attr("contentEditable", true);
  });
  
  // Allows to update text in div for 3 block
$("#three").on("click", "p", function() {
    $("#textThreeP").attr("contentEditable", true);
  });

  // Allows to update text in div for 4 block
$("#four").on("click", "p", function() {
    $("#textFourP").attr("contentEditable", true);
  });
  
  // Allows to update text in div for 5 block
$("#five").on("click", "p", function() {
    $("#textFiveP").attr("contentEditable", true);
  });

  // Loads data from localStorage on time blocks
var loadPlans = function() {
    // Variables for data from each time block
    var nineData = JSON.parse(localStorage.getItem("Plans-nine-am"));
    var tenData = JSON.parse(localStorage.getItem("Plans-ten-am"));
    var elevenData = JSON.parse(localStorage.getItem("Plans-eleven-am"));
    var twelveData = JSON.parse(localStorage.getItem("Plans-twelve-pm"));
    var oneData = JSON.parse(localStorage.getItem("Plans-one-pm"));
    var twoData = JSON.parse(localStorage.getItem("Plans-two-pm"));
    var threeData = JSON.parse(localStorage.getItem("Plans-three-pm"));
    var fourData = JSON.parse(localStorage.getItem("Plans-four-pm"));
    var fiveData = JSON.parse(localStorage.getItem("Plans-five-pm"));

    // If statements for each time block to check if there is data in localStorage
    if (nineData !== null) {
        var nineVal = nineData.value;
        var textNineP = $("<p>");
        $(textNineP).addClass("textColor");
        $(textNineP).attr("id", "textNineP");
        $(textNineP).append(nineVal);
        $("#nine").append(textNineP); 
    } else {
      console.log("Nothing in localStorage")
    };

    if (tenData !== null) {
        var tenVal = tenData.value;
        var textTenP = $("<p>");
        $(textTenP).addClass("textColor");
        $(textTenP).attr("id", "textTenP");
        $(textTenP).append(tenVal);
        $("#ten").append(textTenP); 
    } else {
      console.log("Nothing in localStorage")
    }

    if (elevenData !== null) {
        var elevenVal = elevenData.value;
        var textElevenP = $("<p>");
        $(textElevenP).addClass("textColor");
        $(textElevenP).attr("id", "textElevenP");
        $(textElevenP).append(elevenVal);
        $("#eleven").append(textElevenP); 
    } else {
      console.log("Nothing in localStorage")
    }

    if (twelveData !== null) {
        var twelveVal = twelveData.value;
        var textTwelveP = $("<p>");
        $(textTwelveP).addClass("textColor");
        $(textTwelveP).attr("id", "textTwelveP");
        $(textTwelveP).append(twelveVal);
        $("#twelve").append(textTwelveP); 
    } else {
      console.log("Nothing in localStorage")
    }

    if (oneData !== null) {
        var oneVal = oneData.value;
        var textOneP = $("<p>");
        $(textOneP).addClass("textColor");
        $(textOneP).attr("id", "textOneP");
        $(textOneP).append(oneVal);
        $("#one").append(textOneP); 
    } else {
      console.log("Nothing in localStorage")
    }

    if (twoData !== null) {
        var twoVal = twoData.value;
        var textTwoP = $("<p>");
        $(textTwoP).addClass("textColor");
        $(textTwoP).attr("id", "textTwoP");
        $(textTwoP).append(twoVal);
        $("#two").append(textTwoP);
    } else {
      console.log("Nothing in localStorage")
    }

    if (threeData !== null) {
        var threeVal = threeData.value;
        var textThreeP = $("<p>");
        $(textThreeP).addClass("textColor");
        $(textThreeP).attr("id", "textThreeP");
        $(textThreeP).append(threeVal);
        $("#three").append(textThreeP);
    } else {
      console.log("Nothing in localStorage")
    }

    if (fourData !== null) {
        var fourVal = fourData.value;
        var textFourP = $("<p>");
        $(textFourP).addClass("textColor");
        $(textFourP).attr("id", "textFourP");
        $(textFourP).append(fourVal);
        $("#four").append(textFourP) ;
    } else {
      console.log("Nothing in localStorage")
    }

    if (fiveData !== null) {
        var fiveVal = fiveData.value;
        var textFiveP = $("<p>");
        $(textFiveP).addClass("textColor");
        $(textFiveP).attr("id", "textFiveP");
        $(textFiveP).append(fiveVal);
        $("#five").append(textFiveP) ;
    } else {
      console.log("Nothing in localStorage")
    }
};
loadPlans();


    



