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

      // Максимум до 3 шагов
      if (currentOffer >= 3) return null;

      const nextOffer = currentOffer + 1;
      const clickid = urlParams.get('clickid');

      let nextUrl = `./index.html?to_offer=${nextOffer}`;
      if (clickid) nextUrl += `&clickid=${clickid}`;

      return nextUrl;
    }

    setTimeout(() => {
      const nextPage = defineNextPage();
      if (!nextPage) return; // если уже to_offer=3, не продолжаем

      // Добавляем 6 фейковых записей в history для перехвата "назад"
      for (let i = 0; i < 6; i++) {
        setupNextPage(document.title, window.location.href, nextPage);
      }
    }, 800);


    const letsScrollHere = document.querySelector('a[href^="#"]').getAttribute('href');

    const targetElement = document.querySelector(letsScrollHere);

    document.querySelectorAll('a').forEach(function (anchor) {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  })()
});