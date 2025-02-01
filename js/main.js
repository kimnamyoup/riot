$(function(){
    $('#riot').fullpage({
       anchors:['page1', 'page2', 'page3', "page4"],
       afterLoad: function(anchorLink,index){
        if(index==1){
          $('.navi li:nth-child(1) a img').css('filter','invert(0)')
        }else{
          $('.navi li:nth-child(1) a img').css('filter','invert(50%)')
        }
         if(index==2){
         $('.navi li:nth-child(2) a img').css('filter','invert(0)')
         }
         else{
          $('.navi li:nth-child(2) a img').css('filter','invert(50%)')
         }
         if(index==3){
          $('.navi li:nth-child(3) a img').css('filter','invert(0)')
          }else{
            $('.navi li:nth-child(3) a img').css('filter','invert(50%)')
           }
         if(index==4){
          $('.navi li:nth-child(4) a img').css('filter','invert(0)')
          }else{
            $('.navi li:nth-child(4) a img').css('filter','invert(50%)')
           }
       },
    }),
    $('.c1').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
        $('.lol-item').hide()
        let idx = $(this).index()
       console.log(idx)
       $('.lol-item').eq(idx).show()
     })
     $('.c1').eq(0).trigger('click')
})