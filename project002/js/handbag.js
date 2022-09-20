$(document).ready(function(){


    //nav 설정
    $('.left_logo').mouseover(function(){
        $('.left_logo').fadeOut();
        $('nav').removeClass('on');
        $('nav').addClass('on');
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

    $('.depth2_1').mouseover(function(){
        $('nav>div>ul').removeClass('on')
        $('nav>div>ul:nth-child(3)').addClass('on')
        $('.nav_logo').addClass('on')
    })

    $('.ab li:nth-child(1)').click(function(e){

        $('html, body').stop().animate({'scrollTop':aa-20},0)
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

    let a = 0;

    let interval = setInterval(slide,2000);

    function slide(){
        a++;
        if(a==3) a=0;
        console.log(a);
        $('.handbags_list1_inner1 li').eq(a-1).css({'left':0}).stop().animate({'left':'-100%'},800);
        $('.handbags_list1_inner1 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800);
        $('.handbags_list1_inner2 li').eq(a-1).css({'left':0}).stop().animate({'left':'-100%'},800);
        $('.handbags_list1_inner2 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800);
        $('.handbags_list1_inner3 li').eq(a-1).css({'left':0}).stop().animate({'left':'-100%'},800);
        $('.handbags_list1_inner3 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800);

        
        $('.handbags_list1_inner4 li').eq(a-1).css({'left':'0'}).stop().animate({'left':'-100%'},800)
        $('.handbags_list1_inner4 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800)
        $('.handbags_list1_inner5 li').eq(a-1).css({'left':'0'}).stop().animate({'left':'-100%'},800)
        $('.handbags_list1_inner5 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800)
        $('.handbags_list1_inner6 li').eq(a-1).css({'left':'0'}).stop().animate({'left':'-100%'},800)
        $('.handbags_list1_inner6 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800)
        $('.handbags_list1_inner7 li').eq(a-1).css({'left':'0'}).stop().animate({'left':'-100%'},800)
        $('.handbags_list1_inner7 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800)
        $('.handbags_list1_inner8 li').eq(a-1).css({'left':'0'}).stop().animate({'left':'-100%'},800)
        $('.handbags_list1_inner8 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800)
        $('.handbags_list1_inner9 li').eq(a-1).css({'left':'0'}).stop().animate({'left':'-100%'},800)
        $('.handbags_list1_inner9 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},800)
    }

    $('.handbags_list1_inner1').mouseover(function(){
        $('.handbags_list1_inner>div:nth-child(1)>p').css({'font-weight':'bold'})
    })
    $('.handbags_list1_inner1').mouseleave(function(){
        $('.handbags_list1_inner>div:nth-child(1)>p').css({'font-weight':'normal'})
    })
    $('.handbags_list1_inner2').mouseover(function(){
        $('.handbags_list1_inner>div:nth-child(2)>p').css({'font-weight':'bold'})
    })
    $('.handbags_list1_inner2').mouseleave(function(){
        $('.handbags_list1_inner>div:nth-child(2)>p').css({'font-weight':'normal'})
    })
    $('.handbags_list1_inner3').mouseover(function(){
        $('.handbags_list1_inner>div:nth-child(3)>p').css({'font-weight':'bold'})
    })
    $('.handbags_list1_inner3').mouseleave(function(){
        $('.handbags_list1_inner>div:nth-child(3)>p').css({'font-weight':'normal'})
    })

    $('.handbags_list2_1>div:nth-child(1)>div').mouseover(function(){
        $('.handbags_list2_1>div:nth-child(1)>p').css({'font-weight':'bold'})
        $('.handbags_list2_1>div:nth-child(1)>div>div').css({'display':'block'})
    })
    $('.handbags_list2_1>div:nth-child(1)>div').mouseleave(function(){
        $('.handbags_list2_1>div:nth-child(1)>p').css({'font-weight':'normal'})
        $('.handbags_list2_1>div:nth-child(1)>div>div').css({'display':'none'})
    })
    $('.handbags_list2_1>div:nth-child(2)>div').mouseover(function(){
        $('.handbags_list2_1>div:nth-child(2)>p').css({'font-weight':'bold'})
        $('.handbags_list2_1>div:nth-child(2)>div>div').css({'display':'block'})
    })
    $('.handbags_list2_1>div:nth-child(2)>div').mouseleave(function(){
        $('.handbags_list2_1>div:nth-child(2)>p').css({'font-weight':'normal'})
        $('.handbags_list2_1>div:nth-child(2)>div>div').css({'display':'none'})
    })
    $('.handbags_list2_1>div:nth-child(3)>div').mouseover(function(){
        $('.handbags_list2_1>div:nth-child(3)>p').css({'font-weight':'bold'})
        $('.handbags_list2_1>div:nth-child(3)>div>div').css({'display':'block'})
    })
    $('.handbags_list2_1>div:nth-child(3)>div').mouseleave(function(){
        $('.handbags_list2_1>div:nth-child(3)>p').css({'font-weight':'normal'})
        $('.handbags_list2_1>div:nth-child(3)>div>div').css({'display':'none'})
    })
    $('.handbags_list2_2>div:nth-child(1)>div').mouseover(function(){
        $('.handbags_list2_2>div:nth-child(1)>p').css({'font-weight':'bold'})
        $('.handbags_list2_2>div:nth-child(1)>div>div').css({'display':'block'})
    })
    $('.handbags_list2_2>div:nth-child(1)>div').mouseleave(function(){
        $('.handbags_list2_2>div:nth-child(1)>p').css({'font-weight':'normal'})
        $('.handbags_list2_2>div:nth-child(1)>div>div').css({'display':'none'})
    })
    $('.handbags_list2_2>div:nth-child(2)>div').mouseover(function(){
        $('.handbags_list2_2>div:nth-child(2)>p').css({'font-weight':'bold'})
        $('.handbags_list2_2>div:nth-child(2)>div>div').css({'display':'block'})
    })
    $('.handbags_list2_2>div:nth-child(2)>div').mouseleave(function(){
        $('.handbags_list2_2>div:nth-child(2)>p').css({'font-weight':'normal'})
        $('.handbags_list2_2>div:nth-child(2)>div>div').css({'display':'none'})
    })
    $('.handbags_list2_2>div:nth-child(3)>div').mouseover(function(){
        $('.handbags_list2_2>div:nth-child(3)>p').css({'font-weight':'bold'})
        $('.handbags_list2_2>div:nth-child(3)>div>div').css({'display':'block'})
    })
    $('.handbags_list2_2>div:nth-child(3)>div').mouseleave(function(){
        $('.handbags_list2_2>div:nth-child(3)>p').css({'font-weight':'normal'})
        $('.handbags_list2_2>div:nth-child(3)>div>div').css({'display':'none'})
    })
})