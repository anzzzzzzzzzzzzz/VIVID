window.addEventListener('DOMContentLoaded', () => {

  // ① 画像プリロード
  const preloadImages = () => {
    document.querySelectorAll('.thumb_item img').forEach(img => {
      const preload = new Image();
      preload.src = img.getAttribute('src');
    });
  };
  preloadImages();

  // ② ハンバーガーメニュー
  const hamburger = document.getElementById('hamburger');
  const headerMenu = document.getElementById('header_menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });

  headerMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      headerMenu.classList.remove('active');
    });
  });

  // ③ スライドショー
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function changeSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  setInterval(changeSlide, 6000);

  // ④ Artistsセクション
  const thumbItems = document.querySelectorAll('.thumb_item');
  const mainImages = document.querySelectorAll('.main_image');
  const mainTitle = document.querySelector('.main_title');
  const mainArtist = document.querySelector('.main_artist');

  thumbItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      mainImages.forEach(img => img.classList.remove('active'));
      mainImages[index].classList.add('active');
      mainTitle.textContent = item.dataset.title;
      mainArtist.textContent = item.dataset.artist;
      thumbItems.forEach(t => t.classList.remove('active'));
      item.classList.add('active');
    });
  });

});