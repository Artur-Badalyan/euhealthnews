document.addEventListener('DOMContentLoaded', function () {
  (() => {
    function setupNextPage(title, curPlace, nextPage) {
      history.pushState(null, title, curPlace);
      window.onpopstate = function () {
        history.pushState(null, title, curPlace);
        window.location.href = nextPage;
      };
    }

    function defineNextPage() {
      const urlParams = new URLSearchParams(window.location.search);
      const currentOffer = parseInt(urlParams.get('to_offer')) || 1;

      if (currentOffer >= 3) return null;

      const nextOffer = currentOffer + 1;
      const clickid = urlParams.get('clickid');

      let nextUrl = `./index.html?to_offer=${nextOffer}`;
      if (clickid) nextUrl += `&clickid=${clickid}`;

      return nextUrl;
    }

    setTimeout(() => {
      const nextPage = defineNextPage();
      if (!nextPage) return;
      for (let i = 0; i < 6; i++) {
        setupNextPage(document.title, window.location.href, nextPage);
      }
    }, 800);

    document.querySelectorAll('a[href^="#"]').forEach(element => {
      element.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  })()
});