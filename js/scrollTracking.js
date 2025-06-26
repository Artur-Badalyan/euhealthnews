document.addEventListener('DOMContentLoaded', function () {
  (() => {
    let neededScroll = 1;
    let seconds = 0;

    function getScrollPercent() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    }

    let scrollTimeout;
    window.addEventListener("scroll", () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        const percent = getScrollPercent();
        if (percent >= neededScroll) {
          ym(103039703, 'reachGoal', `scroll_${neededScroll}`);
          neededScroll += 1;
        }
        scrollTimeout = null;
      }, 200);
    });

    setInterval(() => {
      seconds += 10;
      // 30 сек
      if (seconds === 30) ym(103039703, 'reachGoal', 'time_30');
      // 60 сек
      if (seconds === 60) ym(103039703, 'reachGoal', 'time_60');
    }, 10000);
  })();
});