function verifyDiscount() {
      const GENERAL_ADMISSION_TICKET_COST = 20;
      const CHILD_AND_SENIOR_TICKET_COST = 10;

      let price = GENERAL_ADMISSION_TICKET_COST;

      // Recupero dei valori inseriti dall'utente
      let age = parseInt(document.getElementById("age").value);
      let dateShow = document.getElementById("hour").value;

      console.log(age, dateShow);

      if ((age <= 12 || age >= 65) && dateShow === "Pomeridiano") {
        price -= 13;
      } else if ((age <= 12 || age >= 65) && dateShow !== "Pomeridiano") {
        price -= 10;
      } else if ((age > 12 || age < 65) && dateShow === "Pomeridiano") {
        price -= 3;
      } else {
        price;
      }
      document.getElementById("ticket-price").textContent =
        "Prezzo del biglietto: " + price + "€";
    }