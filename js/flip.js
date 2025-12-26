$(function () {
  /**
   * 輔助函式：更新圓點狀態
   */
  function updateDots($container, index) {
    $container.find(".dot").removeClass("active").eq(index).addClass("active");
  }

  /**
   * 1. 翻牌邏輯：專門處理環境頁與飲食頁卡片切換
   */
  $(".flip-trigger").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("back-btn")) return; // 返回鍵由下方專屬邏輯處理

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
    // 觸發該卡片的正面翻轉點擊事件，以執行完整的重置邏輯
    const $container = $(this).closest(".hamster-home, .article-nav-li");
    $container.find(".flip-trigger:not(.back-btn)").click();
  });

  /**
   * 2. Slider 核心控制：以「點點數量」抓取 slideCount 避免溢出
   */
  $(".next-btn, .prev-btn").on("click", function () {
    const $container = $(this).closest(".slider-container");
    const $window = $container.find(".info-window");
    const $track = $window.find(".info-track");
    
    // 關鍵修正：抓取該區塊內的點點數量作為總頁數
    const $dots = $container.find(".dot");
    const slideCount = $dots.length;

    // 如果沒有點點（如環境頁電腦版），則抓取子元素數量
    const effectiveCount = slideCount > 0 ? slideCount : $track.children().length;

    if (effectiveCount <= 1) return;

    let currentIndex = $track.data("index") || 0;

    if ($(this).hasClass("next-btn")) {
      currentIndex = (currentIndex + 1) % effectiveCount;
    } else {
      currentIndex = (currentIndex - 1 + effectiveCount) % effectiveCount;
    }

    // 執行位移
    const itemWidth = $track.children().first().outerWidth(true);
    $window.stop().animate({ scrollLeft: currentIndex * itemWidth }, 400);

    // 儲存狀態
    $track.data("index", currentIndex);
    updateDots($container, currentIndex);
  });

  /**
   * 3. 手機捲動監聽：同步點點狀態
   */
  $(".info-window").on("scroll", function () {
    const $window = $(this);
    const $container = $window.closest(".slider-container");
    const $track = $window.find(".info-track");
    const $firstItem = $track.children().first();
    
    if ($firstItem.length === 0) return;
    
    const itemWidth = $firstItem.outerWidth(true);
    const scrollLeft = $window.scrollLeft();
    const index = Math.round(scrollLeft / itemWidth);
    
    // 更新資料索引並同步點點
    $track.data("index", index);
    updateDots($container, index);
  });
});