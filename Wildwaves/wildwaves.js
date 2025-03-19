const WAVE_POOL_MIN_HEIGHT = 42; // in inches
    const WATERSLIDE_MIN_HEIGHT = 48; // in inches
    const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

    function buyTicket() {
      let attractionType = document.getElementById("attraction").value;
      let messageElement = document.getElementById("AllowAttraction");

      if (attractionType === "select") {
        messageElement.innerText = "Please select a valid attraction.";
        return;
      }

      let userHeight = parseInt(prompt("What is your height in inches?"));

      if (isNaN(userHeight)) {
        messageElement.innerText = "Please enter a valid height.";
        return;
      }

      console.log("User's selected attraction is " + attractionType);
      console.log("User's height is " + userHeight);

      const isAllowed = checkHeight(attractionType, userHeight);
      let message;

      if (isAllowed) {
        message = `Perfect! You can go to the ${attractionType} attraction!`;
      } else {
        message = `Sorry, you can't go to this attraction.`;
      }

      messageElement.innerText = message;
    }

    function checkHeight(attraction, height) {
      if (attraction === "wave" && height >= WAVE_POOL_MIN_HEIGHT) {
        return true;
      } else if (attraction === "water" && height >= WATERSLIDE_MIN_HEIGHT) {
        return true;
      } else if (attraction === "river" && height >= LAZY_RIVER_MIN_HEIGHT) {
        return true;
      } else {
        return false;
      }
    }