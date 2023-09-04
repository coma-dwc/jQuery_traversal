//■1-1  .parent  children  ,  1-2  find  子要素のトラバーサル

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".parent").find(".child");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);



//■2-1　親要素のトラバーサル

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".child").parent();

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■2-2  特定条件の親要素を取得

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".child").parent(".suzuki");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■2-3  すべての親要素を取得  parents

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".child").parents();

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■2-4

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".child").parents(".sato");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■2-5  一番近い要素を取得  closest

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".child").closest(".sato");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■2-6  一番近い親要素までの要素を取得  parentsUntil

(function($) {
  $(document).ready(function() {
    let $selected = [];

    //ここにセレクタを書く
    $selected = $(".child").parentsUntil(".sato");

    //マッチした要素にスタイルを付与する
    $selected.each(function(index) {
      $(this).addClass("bingo");
    });
    $(".count").text($selected.length);

  });
})(jQuery);