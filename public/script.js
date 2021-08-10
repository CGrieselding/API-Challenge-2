const baseURL = "https://calendarific.com/api/v2/holidays";
const key = "773023fb9769ee94ac0bda6b6127eba64e5ee283";
const url = baseURL + "?&api_key=" + key + "&country=DE&year=2021";
// const results = document.getElementById('results')

const tableHeader = document.getElementById("tableHeader");
const holidayNames = document.querySelector("tbody");

function germanHolidays() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayGermanHolidays(data);
    });
}

germanHolidays();

function displayGermanHolidays(data) {
  for (holidays of data.response.holidays) {
    console.log(holidays.name);

    const januaryRow = document.createElement("tr");
    const januaryHolidays = document.createElement("td");

    const februaryRow = document.createElement('tr');
    const februaryHolidays = document.createElement('td');




    if (holidays.date.datetime.month == 1) {

      januaryHolidays.innerText = holidays.name;

      januaryRow.appendChild(januaryHolidays);
      holidayNames.appendChild(januaryRow);

    } else if (holidays.date.datetime.month == 2) {

      februaryHolidays.innerText = holidays.name;

      februaryRow.appendChild(februaryHolidays);
      holidayNames.appendChild(februaryRow);
    }
  }
};
