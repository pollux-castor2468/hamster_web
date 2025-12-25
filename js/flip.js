$(function () {
  // 1. 翻牌邏輯
  $(".flip-trigger").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("back-btn")) return; // 讓 back-btn 走下面專屬邏輯

    const $container = $(this).closest(".hamster-home, .info-slide");
    const $info = $container.find(".hamster-info");

    if (!$(this).data("origin")) {
      $(this).data("origin", $(this).text());
    }

    const isFlipped = $container.toggleClass("is-flipped").hasClass("is-flipped");

    if ($container.hasClass("hamster-home")) {
      $(this).text(isFlipped ? "返回" : $(this).data("origin"));
    }
    $info.toggle(isFlipped);
  });

  // 2. 返回鍵專屬邏輯 (移到外面)
  $(".back-btn").on("click", function (e) {
    e.preventDefault();
    const $container = $(this).closest(".hamster-home, .info-slide");
    $container.removeClass("is-flipped");
    $container.find(".hamster-info").hide();
    
    // 如果是環境頁，要換回原始文字
    const $trigger = $container.find(".flip-trigger:not(.back-btn)");
    if ($container.hasClass("hamster-home")) {
        $trigger.text($trigger.data("origin"));
    }
  });

  // 2. 左右滑動分頁邏輯 (支援所有頁面的 Slider)
  $(".next-btn, .prev-btn").on("click", function () {
    // 尋找兄弟節點中的 window 與 track
    const $window = $(this).siblings(".info-window");
    const $track = $window.find(".info-track");
    const slideCount = $track.find(".info-slide").length;

    if (slideCount <= 1) return; // 只有一頁就不執行

    let currentIndex = $track.data("index") || 0;

    if ($(this).hasClass("next-btn")) {
      currentIndex = (currentIndex + 1) % slideCount;
    } else {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    }

    $track.css("transform", `translateX(-${currentIndex * 100}%)`);
    $track.data("index", currentIndex);
  });
  // 偵測禁食項目滑動
    $(".is-mobile-slider .info-window").on("scroll", function() {
        const scrollLeft = $(this).scrollLeft();
        const width = $(this).width();
        
        // 計算當前滑到第幾個 (0 到 6)
        const index = Math.round(scrollLeft / width);
        
        // 更新小圓點狀態
        const $dots = $(this).closest(".is-mobile-slider").find(".dot");
        $dots.removeClass("active").eq(index).addClass("active");
    });
});
