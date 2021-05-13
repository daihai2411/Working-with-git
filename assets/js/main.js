function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$('.icon-cart').click(function() {
    if ($(this).html().includes("far"))  {
        $(this).html('<i class="fas fa-heart" style="font-size: 24px;"></i>');
        createAlert('','',' Đã thêm sản phẩm vào danh mục yêu thích','info',false,true,'pageMessages');
    } else {
        $(this).html('<i class="far fa-heart" style="font-size: 24px;"></i>');
        createAlert('','',' Đã xóa sản phẩm khỏi danh mục yêu thích','danger',false,true,'pageMessages');
    }
})

$('.icon-select').click(function() {
    if ($(this).html().includes("fa-chevron-up"))  {
        $(this).html(`<h3 data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
        aria-controls="collapseExample">
        Chọn kích cỡ
        <div class="" style="margin-left: 15px;">
            <i class="fas fa-chevron-down" style="font-size: 18px;"></i>
        </div>
    </h3>`);
    } else {
        $(this).html(`<h3 data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
        aria-controls="collapseExample">
        Chọn kích cỡ
        <div class="" style="margin-left: 15px;">
            <i class="fas fa-chevron-up" style="font-size: 18px;"></i>
        </div>
    </h3>`);
    }
})

$('.cus-pagination ul li').click(async function(){
    $('.grid-product').css("opacity", 0);
    await sleep(300);
    $('.grid-product').css("opacity", 1);
})

$('.remove-item-cart').click(function(){
    $(this).parent().parent().hide();
})

$('.btn-register').click(function(){
    $('.box-account-register').hide();
    $('.box-account-success').show();
})

$('.btn-social').click(function(){
    $('.box-account-register').hide();
    $('.box-account-success').show();
})

$('#dropdownCart').mouseenter(function(){
    $('#cart').css("opacity", 1);
  })
  
  $(function(){		
    var $win = $(window); // or $box parent container
    var $box = $("#cart");
    var $pop = $("#dropdownCart");
    
     $win.on("click.Bst", function(event){		
      if ( $box.has(event.target).length == 0 && !$box.is(event.target) && $pop.has(event.target).length == 0 && !$pop.is(event.target)){
        $box.css("opacity", 0);
        $('.popup-cart').show()
      $('.popup-notify').hide()
      } else {
        // $box.css("opacity", 1);
      }
    });
  });

  
  $( window ).on('load', function() {
    var a = $(".container-cust").css("margin-left");
    $(".container-fluid").css('padding-left', a);
});

  var header = document.getElementById("selectGroup");
  var btns = header.getElementsByClassName("btn-selected");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("select-active");
    current[0].className = current[0].className.replace(" select-active", "");
    this.className += " select-active";
    });
  }
