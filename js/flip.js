$(function () {
  function updateDots($container, index) {
    $container.find(".dot").removeClass("active").eq(index).addClass("active");
  }

  $(".flip-trigger").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("back-btn")) return; 

    // 找到最外層容器：環境頁是 .hamster-home，飲食頁是 .article-nav-li
    const $container = $(this).closest(".hamster-home, .article-nav-li");
    const $info = $container.find(".hamster-info");

    // 儲存原始按鈕文字（主要給環境頁使用）
    if (!$(this).data("origin")) $(this).data("origin", $(this).text());

    const isFlipped = $container.toggleClass("is-flipped").hasClass("is-flipped");

    if (isFlipped) {
      $info.stop().fadeIn(300);
      // 環境頁切換文字為「返回」
      if ($container.hasClass("hamster-home")) $(this).text("返回");
    } else {
      $info.stop().fadeOut(300);
      // 環境頁還原原始文字
      if ($container.hasClass("hamster-home")) $(this).text($(this).data("origin"));
      
      // 翻回正面時，重置內部的 Slider 位置到第一頁
      const $window = $container.find(".info-window");
      $window.stop().animate({ scrollLeft: 0 }, 200);
      $container.find(".info-track").data("index", 0);
      updateDots($container, 0);
    }
  });

  // 專屬返回按鈕邏輯
  $(".back-btn").on("click", function (e) {
    e.preventDefault();
    const $container = $(this).closest(".hamster-home, .article-nav-li");
    $container.find(".flip-trigger:not(.back-btn)").click();
  });

  $(".next-btn, .prev-btn").on("click", function () {
    const $container = $(this).closest(".slider-container");
    const $window = $container.find(".info-window");
    const $track = $window.find(".info-track");
    

    const $dots = $container.find(".dot");
    const slideCount = $dots.length;

    // 如果沒有點點
    const effectiveCount = slideCount > 0 ? slideCount : $track.children().length;

    if (effectiveCount <= 1) return;

    let currentIndex = $track.data("index") || 0;

    if ($(this).hasClass("next-btn")) {
      currentIndex = (currentIndex + 1) % effectiveCount;
    } else {
      currentIndex = (currentIndex - 1 + effectiveCount) % effectiveCount;
    }

    const itemWidth = $track.children().first().outerWidth(true);
    $window.stop().animate({ scrollLeft: currentIndex * itemWidth }, 400);


    $track.data("index", currentIndex);
    updateDots($container, currentIndex);
  });


  $(".info-window").on("scroll", function () {
    const $window = $(this);
    const $container = $window.closest(".slider-container");
    const $track = $window.find(".info-track");
    const $firstItem = $track.children().first();
    
    if ($firstItem.length === 0) return;
    
    const itemWidth = $firstItem.outerWidth(true);
    const scrollLeft = $window.scrollLeft();
    const index = Math.round(scrollLeft / itemWidth);
    
    $track.data("index", index);
    updateDots($container, index);
  });
});