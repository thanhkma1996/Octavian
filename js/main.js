// document.addEventListener("DOMContentLoaded", function () {
//     const menuOpen = document.querySelector(".menu-toggle");
//     const menuClose = document.querySelector(".menu-close");
//     const menu = document.querySelector(".menu");
//     if (!menuOpen || !menuClose || !menu) return;
//     menuOpen.addEventListener("click", function () {
//       menu.classList.add("is-active");
//     });
//     menuClose.addEventListener("click", function () {
//       menu.classList.remove("is-active");
//     });
//     document.addEventListener("click", function (e) {
//       if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//         menu.classList.remove("is-active");
//       }
//     });
//   });
  

  $('.menu-toggle').on('click', function(e){
        $(this).parents('body').children("#menu").toggleClass('is-active');
        e.stopPropagation()
  });

  $('.menu-close').on('click', function(){
        $(this).parents('body').children("#menu").removeClass('is-active');
  })

  $(document).on("click", function (e) {
    if ($(e.target).is(".menu-toggle") === false) {
        $("#menu").removeClass("is-active");
    }
});