document.addEventListener('DOMContentLoaded', function () {
  (() => {
    const dateElements = document.querySelectorAll(".womanCom__date");

    dateElements.forEach((el, index) => {
      const now = new Date();
      now.setDate(now.getDate() - index + 1);
      const dateStr = `${now.getDate().toString().padStart(2, "0")}.${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${now.getFullYear()}`;
      el.textContent = dateStr;
    });
  })();
});