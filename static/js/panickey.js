// Function to set the panickey localstorage item when a character is entered in the input box
function setPanicKey() {
  // Get the input box element
  var inputBox = document.getElementById("panicinput");
  
  // Add an event listener to the input box that triggers when a key is pressed
  inputBox.addEventListener("keyup", function() {
    // Get the value of the input box
    var inputValue = inputBox.value;
    
    // Check if the panickey localstorage item already exists
    if (!localStorage.getItem("panickey")) {
      // Set the panickey localstorage item to your default value
      localStorage.setItem("panickey", "`");
    }
    
    // Set the panickey localstorage item with the input value as the value
    localStorage.setItem("panickey", inputValue);
  });
}

// Function to check the panickey localstorage item and run code if the key is pressed
function checkPanicKey() {
  // Add an event listener to the document that triggers when a key is pressed
  document.addEventListener("keydown", function(event) {
    // Get the value of the panickey localstorage item
    var panicKey = localStorage.getItem("panickey");
    
    // Check if the panickey localstorage item has a value and if the pressed key matches the panic key
    if (panicKey && event.key === panicKey) {
      // Run your code here
      console.log("Panic key pressed!");
    }
  });
}

// Call the setPanicKey and checkPanicKey functions to set up the event listeners
setPanicKey();
checkPanicKey();
