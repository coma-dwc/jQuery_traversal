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

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".child").parentsUntil(".sato");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-1  1つ次の要素を取得

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").next();

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-2  1つ次の要素を条件付きで取得  next

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").next(".tokyo");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-3  次の要素を全て取得  nextAll

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").nextAll();

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-4  次の要素を条件付きで全て取得する  nextAll  osaka

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").nextAll(".osaka");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-5  一番近い次の要素までを取得  nextUntil

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").nextUntil(".olivia");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-6  1つ前の要素を取得  prev

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").prev();

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-7  1つ前の要素を条件付きで取得  prev osaka

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").prev(".osaka");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-8 前の要素を全て取得  prevAll

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").prevAll();

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-9 前の要素を全て条件付きで取得

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").prevAll(".tokyo");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-10  一番近い前の要素までを取得  prevUntil

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").prevUntil(".john");

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-11  同じ階層にある要素を全て取得  siblings

// (function($) {
//   $(document).ready(function() {
//     let $selected = [];

//     //ここにセレクタを書く
//     $selected = $(".me").siblings();

//     //マッチした要素にスタイルを付与する
//     $selected.each(function(index) {
//       $(this).addClass("bingo");
//     });
//     $(".count").text($selected.length);

//   });
// })(jQuery);


//■3-12  同じ階層にある特定条件の要素を全て取得

(function($) {
  $(document).ready(function() {
    let $selected = [];

    //ここにセレクタを書く
    $selected = $(".me").siblings(".john");

    //マッチした要素にスタイルを付与する
    $selected.each(function(index) {
      $(this).addClass("bingo");
    });
    $(".count").text($selected.length);

  });
})(jQuery);