//■1-1  .parent  children  ,  1-2  find
(function($) {
  $(document).ready(function() {
    let $selected = [];

    //ここにセレクタを書く
    $selected = $(".parent").find(".child");

    //マッチした要素にスタイルを付与する
    $selected.each(function(index) {
      $(this).addClass("bingo");
    });
    $(".count").text($selected.length);

  });
})(jQuery);
