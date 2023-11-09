$(document).ready(function () {

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  setProgressBar(current);

  $(".next").click(function () {

    current_fs = $(this).parents('fieldset');
    next_fs = $(this).parents("fieldset").next();

    if ($("fieldset").index(next_fs) > 0) {
      $("body").addClass("bstepin");
      $('.footerlight').hide();
      $('.fheader').show();
      $('.footerng').show();
    } else {
      $("body").removeClass("bstepin");
      $('.footerlight').show();
      $('.fheader').hide();
      $('.footerng').hide();
    }

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    //show the next fieldset
    next_fs.show();
    current_fs.hide();
    setProgressBar(++current);
  });

  $(".previous").click(function () {

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    current_fs.hide();
    setProgressBar(--current);
  });

  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
      .css("width", percent + "%")
  }

  $(".submit").click(function () {
    return false;
  })

});










// image gallery
// init the state from the input
$(".image-checkbox").each(function () {
  if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
    $(this).addClass('image-checkbox-checked');
  }
  else {
    $(this).removeClass('image-checkbox-checked');
  }
});

// sync the state to the input
$(".image-checkbox").on("click", function (e) {
  $(this).toggleClass('image-checkbox-checked');
  var $checkbox = $(this).find('input[type="checkbox"]');
  $checkbox.prop("checked", !$checkbox.prop("checked"))

  e.preventDefault();
});





var myModalEl = document.getElementById('loginModal')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  $('.step9').hide();
  $('.step10').show();
})



$(".selectBox").on("click", function (e) {
  $(this).toggleClass("show");
  var dropdownItem = e.target;
  var container = $(this).find(".selectBox__value");
  container.text(dropdownItem.text);
  $(dropdownItem)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
