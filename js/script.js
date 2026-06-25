// スクロール位置を記憶させない
history.scrollRestoration = "manual";
// ヘッダーの影
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
// フェードイン
const fadeItems = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);
fadeItems.forEach((item) => {
  observer.observe(item);
});
// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(
      link.getAttribute("href")
    );
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
// 初期表示
window.addEventListener("load", () => {
  // 常にページ最上部から開始
  window.scrollTo(0, 0);
  const hero = document.querySelector(".hero-inner");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";
    setTimeout(() => {
      hero.style.transition = "1s";
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 200);
  }
});

// topボタン(一番下)
const topBtn = document.querySelector("#topBtn");
window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    topBtn.classList.add("show");
  }else{
    topBtn.classList.remove("show");
  }
});
topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});