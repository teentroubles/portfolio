$(document).ready(function(){
    
    let ht = $(window).height();
    
    $('section').height(ht);


$(window).scroll(function(){

    let tt = $(this).scrollTop();

    // about balenciaga 높이 값 설정
    let aa = $('.box1').offset().top;
    let bb = $('.box2').offset().top;
    let cc = $('.box3').offset().top;
    let dd = $('.box4').offset().top;
    let ee = $('.box5').offset().top;
    let ff = $('.box6').offset().top;
    let gg = $('.box7').offset().top;
    let hh = $('.box8').offset().top;
    let ii = $('.box9').offset().top;

    $('h1').text(tt)
    if(tt < 470){
        
        $('.hold_bar').removeClass('on');
    } else {
        
        $('.hold_bar').addClass('on');
    }

    if(tt < 699){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2_inner>img:nth-child(4)').removeClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').removeClass('on')
    }

    if(tt > aa-200){
        $('.box1_inner').addClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2_inner>img:nth-child(4)').removeClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').removeClass('on')
    }

    if(tt > bb-600){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').addClass('on');
        $('.box2_inner>img:nth-child(2)').addClass('on');
        $('.box2_inner>img:nth-child(3)').addClass('on');
        $('.box2_inner>img:nth-child(4)').addClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').removeClass('on')
    }

    if(tt > cc-300){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2_inner>img:nth-child(4)').removeClass('on');
        $('.box3_inner').addClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').removeClass('on')
    }

    if(tt > dd-500){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2_inner>img:nth-child(4)').removeClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').addClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').removeClass('on')
    }

    if(tt > ee-50){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2_inner>img:nth-child(4)').removeClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').addClass('on')
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').removeClass('on')
        
    }

    if(tt > ff-50){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2_inner>img:nth-child(4)').removeClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').addClass('on');
        $('.box6 p:nth-child(3)').addClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').removeClass('on')
    }

    if(tt > gg-400){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2>img:nth-child(4)').removeClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').addClass('on');
        $('.box7 div:nth-child(2)').addClass('on');
        $('.box7 div:nth-child(3)').addClass('on');
        $('.box8 div').removeClass('on')
    }

    if(tt > hh-400){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2_inner>img:nth-child(4)').removeClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').addClass('on')
    }

    if(tt > 8500){
        $('.box1_inner').removeClass('on');
        $('.box2_inner>div:nth-child(1)').removeClass('on');
        $('.box2_inner>img:nth-child(2)').removeClass('on');
        $('.box2_inner>img:nth-child(3)').removeClass('on');
        $('.box2_inner>img:nth-child(4)').removeClass('on');
        $('.box3_inner').removeClass('on');
        $('.box4_inner>img').removeClass('on');
        $('.box5_inner img:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(2)').removeClass('on');
        $('.box6 p:nth-child(3)').removeClass('on');
        $('.box7 div:nth-child(1)').removeClass('on');
        $('.box7 div:nth-child(2)').removeClass('on');
        $('.box7 div:nth-child(3)').removeClass('on');
        $('.box8 div').removeClass('on')
    }

})

    $('section').mousewheel(function(event,delta){
        
        if(delta < 0){

            let next = $(this).next().offset().top-20;
            
            $('html, body').stop().animate({'scrollTop':next},1000);
        }
    })

    $('section').mousewheel(function(event,delta){
        
        if(delta > 0){

            let prev = $(this).prev().offset().top-20;
            
            $('html, body').stop().animate({'scrollTop':prev},1000)
        }
    })

    $('.box9').mousewheel(function(event,delta){
        
        if(delta < 0){

            let next = $(this).next().offset().top;
            
            $('html, body').stop().animate({'scrollTop':next},1000);
        }
    })

    $('.footer').mousewheel(function(event,delta){
        
        if(delta > 0){

            let prev = $(this).prev().offset().top-20;
            
            $('html, body').stop().animate({'scrollTop':prev},1000)
        }
    })

    //nav 설정
    $('.left_logo').mouseover(function(){
        $('.left_logo').fadeOut();
        $('nav').removeClass('on');
        $('nav').addClass('on');
    })

    $('.hold_bar img:nth-child(2)').click(function(){
        $('html, body').stop().animate({'scrollTop':0},0)
        })

    $('.footer, .box1, .box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9').mouseover(function(){
        $('nav').removeClass('on');
        $('nav>div>ul').removeClass('on');
        $('.left_logo').fadeIn();
    })

    $('.hold_bar img:nth-child(1)').mouseover(function(){
        $('.hold_bar img:nth-child(1)').fadeOut();
        $('nav').removeClass('on');
        $('nav').addClass('on');
    })

    $('nav').mouseleave(function(){
        $('nav').removeClass('on');
        $('.left_logo').fadeIn();
        $('.hold_bar img:nth-child(1)').fadeIn();
    })

    // ABOUT BALENCIAGA 설정
    let aa = $('.box1').offset().top;
    let bb = $('.box2').offset().top;
    let cc = $('.box3').offset().top;
    let dd = $('.box4').offset().top;
    let ee = $('.box5').offset().top;
    let ff = $('.box6').offset().top;
    let gg = $('.box7').offset().top;
    let hh = $('.box8').offset().top;
    let ii = $('.box9').offset().top;

    $('.depth2_1').mouseover(function(){
        $('nav>div>ul').removeClass('on')
        $('nav>div>ul:nth-child(3)').addClass('on')
        $('.nav_logo').addClass('on')
    })

    $('.ab li:nth-child(1)').click(function(e){

        $('html, body').stop().animate({'scrollTop':aa-20},0)
        $('.hold_bar img:nth-child(1)').css({'display':'none'})
    })

    $('.ab li:nth-child(2)').click(function(e){

        $('html, body').stop().animate({'scrollTop':bb-20},0)
        $('.hold_bar img:nth-child(1)').css({'display':'none'})
    })

    $('.ab li:nth-child(3)').click(function(e){

        $('html, body').stop().animate({'scrollTop':cc-20},0)
        $('.hold_bar img:nth-child(1)').css({'display':'none'})
    })

    $('.ab li:nth-child(4)').click(function(e){

        $('html, body').stop().animate({'scrollTop':ff-20},0)
        $('.hold_bar img:nth-child(1)').css({'display':'none'})
    })

    $('.ab li:nth-child(5)').click(function(e){

        $('html, body').stop().animate({'scrollTop':hh-20},0)
        $('.hold_bar img:nth-child(1)').css({'display':'none'})
    })

    $('.ab li:nth-child(6)').click(function(e){

        $('html, body').stop().animate({'scrollTop':ii-20},0)
        $('.hold_bar img:nth-child(1)').css({'display':'none'})
    })

    // SHOP 설정
    $('.depth2_2>a').mouseover(function(){
        $('nav>div>ul').removeClass('on')
        $('nav>div>ul:nth-child(4)').addClass('on')
    })
    
    // COLLECTION 설정
    $('.depth2_3>a').mouseover(function(){
        $('nav>div>ul').removeClass('on')
        $('nav>div>ul:nth-child(5)').addClass('on')
    })

    // nav 마우스 떠나면 뎁스 메뉴 사라지기
    $('.empty').mouseleave(function(){
        $('nav>div>ul').removeClass('on')
    })

    // box7 마우스 오버 자세히 보기
    $('.box7>div:nth-child(1) img').mouseover(function(){
        $(this).css({'cursor':'pointer'})
        $('.box7>div:nth-child(1) span').removeClass('on')
        $('.box7>div:nth-child(1) span').addClass('on')
    })

    $('.box7>div:nth-child(1) img').mouseleave(function(){
        $('.box7>div:nth-child(1) span').removeClass('on')
    })
    
    $('.box7>div:nth-child(2) img').mouseover(function(){
        $(this).css({'cursor':'pointer'})
        $('.box7>div:nth-child(2) span').removeClass('on')
        $('.box7>div:nth-child(2) span').addClass('on')
    })

    $('.box7>div:nth-child(2) img').mouseleave(function(){
        $('.box7>div:nth-child(2) span').removeClass('on')
    })
    
    $('.box7>div:nth-child(3) img').mouseover(function(){
        $(this).css({'cursor':'pointer'})
        $('.box7>div:nth-child(3) span').removeClass('on')
        $('.box7>div:nth-child(3) span').addClass('on')
    })

    $('.box7>div:nth-child(3) img').mouseleave(function(){
        $('.box7>div:nth-child(3) span').removeClass('on')
    })


    $('.box8_inner>div:nth-child(1) img').mouseover(function(){
        $(this).css({'cursor':'pointer'})
        $('.box8_inner>div:nth-child(1) span').removeClass('on')
        $('.box8_inner>div:nth-child(1) span').addClass('on')
    })

    $('.box8_inner>div:nth-child(1) img').mouseleave(function(){
        $('.box8_inner>div:nth-child(1) span').removeClass('on')
    })

    $('.box8_inner>div:nth-child(2) img').mouseover(function(){
        $(this).css({'cursor':'pointer'})
        $('.box8_inner>div:nth-child(2) span').removeClass('on')
        $('.box8_inner>div:nth-child(2) span').addClass('on')
    })

    $('.box8_inner>div:nth-child(2) img').mouseleave(function(){
        $('.box8_inner>div:nth-child(2) span').removeClass('on')
    })

    $('.box8_inner>div:nth-child(3) img').mouseover(function(){
        $(this).css({'cursor':'pointer'})
        $('.box8_inner>div:nth-child(3) span').removeClass('on')
        $('.box8_inner>div:nth-child(3) span').addClass('on')
    })

    $('.box8_inner>div:nth-child(3) img').mouseleave(function(){
        $('.box8_inner>div:nth-child(3) span').removeClass('on')
    })

    $('.box8_inner>div:nth-child(4) img').mouseover(function(){
        $(this).css({'cursor':'pointer'})
        $('.box8_inner>div:nth-child(4) span').removeClass('on')
        $('.box8_inner>div:nth-child(4) span').addClass('on')
    })

    $('.box8_inner>div:nth-child(4) img').mouseleave(function(){
        $('.box8_inner>div:nth-child(4) span').removeClass('on')
    })

    $('.box8_inner>div:nth-child(5) img').mouseover(function(){
        $(this).css({'cursor':'pointer'})
        $('.box8_inner>div:nth-child(5) span').removeClass('on')
        $('.box8_inner>div:nth-child(5) span').addClass('on')
    })

    $('.box8_inner>div:nth-child(5) img').mouseleave(function(){
        $('.box8_inner>div:nth-child(5) span').removeClass('on')
    })

    $('.box9_inner div:nth-child(1) img').mouseover(function(){
        $('.box9_inner>div span').addClass('on')
        $(this).css({'cursor':'pointer'})
    })

    $('.box9_inner div:nth-child(1) img').mouseleave(function(){
        $('.box9_inner>div span').removeClass('on')
    })

    $('.big_img>li').mouseover(function(){
        $('.big_img span').addClass('on')
        $(this).css({'cursor':'pointer'})
    })

    $('.big_img>li').mouseleave(function(){
        $('.big_img span').removeClass('on')
    })


    $('.slide').mouseover(function(){
        $('.thumnail').css({'left':-625+"px"})
    })

    $('.thumnail li').mouseleave(function(){
        $('.thumnail').css({'left':0})
    })

    $('.thumnail li').click(function(){
        let a = $(this).index();
        console.log(a);

        $('.big_img li').stop().fadeOut();
        $('.big_img li').eq(a).stop().fadeIn();
    })

    $('.footer_logo').click(function(){
        $('html, body').stop().animate({'scrollTop':'0'},0)
    })
})