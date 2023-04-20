function tutorWageCalculator(timesheet, level) {

    const rate = {
        1: 75,
        2: 90,
        3: 105
    }

    console.log(rate)

    let hoursWorked = 0;
    let tutorWage = 0;

    let timesheetArr = timesheet.split("-").map(function(item) {
        return parseInt(item, 10)
    })


    if(timesheetArr.length >= 5 && timesheetArr.length <= 7) {
        for (var i = 0; i < timesheetArr.length; i++) {
            hoursWorked += timesheetArr[i];
        }
    } else {
        return 0;
    }

  for (var key in rate) {
     if (level == key) {
        tutorWage = hoursWorked * rate[key];
        return tutorWage;
    }
  }
}