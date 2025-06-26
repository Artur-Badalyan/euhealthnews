document.addEventListener('DOMContentLoaded', function () {
  (() => {
    let timeOnPage = 0;
    let neededScroll = 1;


    const doc = document.documentElement;
    const win = window;

    const getScrollPercent = () => {
      const scrollTop = win.scrollY || doc.scrollTop;
      const docHeight = doc.scrollHeight - win.innerHeight;
      return (scrollTop / docHeight) * 100;
    };

    // Scroll Tracking (throttled)
    let scrollTimeout;
    window.addEventListener("scroll", () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        const percent = getScrollPercent();
        if (percent > neededScroll) {
          sendRequest(10, Math.floor(percent));
          if (neededScroll < 100) neededScroll += 5;
        }
        scrollTimeout = null;
      }, 200);
    });

    // Average time: seconds on page
    setInterval(function () {
      timeOnPage += 10;
      sendRequest(9, timeOnPage)
    }, 10000);

    // Page loaded fact
    window.addEventListener("load", function () {
      sendRequest(6, 1)
    });

    function sendRequest(eventId, value) {
      const URLGetParams = new URLSearchParams(window.location.search);
      const tracker_clickid = URLGetParams.get('clickid') ?? '';
      if (!tracker_clickid || !shouldSend(tracker_clickid, eventId, value)) return;
      
      const domain = `${window.location.hostname}`;
      const key = `${clickid}.e${eventId}`;
      localStorage.setItem(key, value);
      const eventUrl = `https://${domain}/click.php?event${eventId}=${value}&clickid=${tracker_clickid}`;
      fetch(eventUrl).then(res => console.log(`Event ${eventId}: ${res.status}`));
    }

    function shouldSend(clickid, eventId, value) {
      const lsKey = `${clickid}.e${eventId}`
      return parseInt(localStorage.getItem(lsKey) || 0) < value;
    }
  })();
});