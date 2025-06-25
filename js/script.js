document.addEventListener('DOMContentLoaded', function () {
  (() => {
    let now = new Date()
    const fullDate = document.querySelectorAll('.fullDate')
    let minDays
    let dateFormat
    const getFullDate = (d = null, mode) => {
      now = new Date()
      let day = now.getDate()
      now.setDate(day - d)
      if (mode == 'yy') {
        return (now.getFullYear() +
          '.' +
          (now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1) +
          '.' +
          (now.getDate() < 10 ? '0' + now.getDate() : now.getDate()))
      } else if (mode == 'mm') {
        return ((now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1) +
          '.' +
          (now.getDate() < 10 ? '0' + now.getDate() : now.getDate()) +
          '.' +
          now.getFullYear())
      } else if (mode == 'year') { return now.getFullYear() } else {
        return ((now.getDate() < 10 ? '0' + now.getDate() : now.getDate()) +
          '.' +
          (now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1) +
          '.' +
          now.getFullYear())
      }
    }
    if (fullDate) {
      if (fullDate.length > 0) {
        minDays = null
        dateFormat = null
        fullDate.forEach((elem) => {
          if (elem.getAttribute('minDays')) {
            minDays = +elem.getAttribute('minDays')
            dateFormat = elem.getAttribute('dateMode')
            elem.innerHTML = getFullDate(minDays, dateFormat)
          } else { elem.innerHTML = getFullDate(0) }
        })
      }
    }
  })();
});