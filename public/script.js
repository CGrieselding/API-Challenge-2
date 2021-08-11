const baseURL = "https://calendarific.com/api/v2/holidays";
const key = "773023fb9769ee94ac0bda6b6127eba64e5ee283";
const url = baseURL + "?&api_key=" + key + "&country=DE&year=2021";

const januaryTable = document.getElementById('january');
const februaryTable = document.getElementById('february');
const marchTable = document.getElementById('march');
const aprilTable = document.getElementById('april');
const mayTable = document.getElementById('may');
const juneTable = document.getElementById('june');
const julyTable = document.getElementById('july');
const augustTable = document.getElementById('august');
const septemberTable = document.getElementById('september');
const octoberTable = document.getElementById('october');
const novemberTable = document.getElementById('november');
const decemberTable = document.getElementById('december');

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

    const allRow = document.createElement('tr');
    const allHolidaysInfo = document.createElement('td');
    const allDateInfo = document.createElement('td');
    const allDescriptInfo = document.createElement('td');
    
    if (holidays.date.datetime.month == 1) {
      
      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;
      
      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;
      
      januaryTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 2) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      februaryTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 3) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      marchTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 4) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      aprilTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 5) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      mayTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 6) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      juneTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 7) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      julyTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 8) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      augustTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 9) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      septemberTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 10) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      octoberTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 11) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      novemberTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);

    } else if (holidays.date.datetime.month == 12) {

      allHolidaysInfo.innerText = holidays.name;
      allDateInfo.innerText = holidays.date.datetime.month + "/" + holidays.date.datetime.day + "/" + holidays.date.datetime.year
      allDescriptInfo.innerText = holidays.description;

      const holidayType = holidays.type;
      const combineHolidayType = holidayType.join(', ');
      
      const allTypeInfo = document.createElement('td');
      allTypeInfo.innerText = combineHolidayType;

      decemberTable.appendChild(allRow);
      allRow.appendChild(allHolidaysInfo);
      allRow.appendChild(allDateInfo);
      allRow.appendChild(allTypeInfo);
      allRow.appendChild(allDescriptInfo);
    }
  }
};