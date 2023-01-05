$(window).scroll(function(){
    var scrolling = $ (this).scrollTop()
    if(scrolling > 50){
        $(".navbar").addClass("bg")
    }else{
        $(".navbar").removeClass("bg")
    }
})




    
 