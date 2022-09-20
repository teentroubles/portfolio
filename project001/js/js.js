        $(document).ready(function () {

            // 유틸리티

            // 네비게이션
            $('.menu>ul>li').mouseenter(function () {
                $('nav .box2-1').addClass('on');

                $('.menu>ul>li').removeClass('on');
                $(this).addClass('on')
            })

            $('nav').mouseleave(function () {
                $('nav .box2-1').removeClass('on');
                $('.menu>ul>li').removeClass('on')
            })

            $('.logo').mouseenter(function(){
                $('nav .box2-1').removeClass('on');
                $('.menu>ul>li').removeClass('on')
            })


            // 랜딩페이지
            let cc = 0;
            
            setInterval(function(){
                cc++;
            if(cc==3) cc=0;
            console.log(cc);
            $('.ld_inner div').eq(cc-1).css({'left':0}).stop().animate({'left':'-100%'},800);
            $('.ld_inner div').eq(cc).css({'left':'100%'}).stop().animate({'left':'0'},800);
            

            if(cc==0) {
                console.log(cc);
                $('.ld1_btn').css({'opacity':'1'})
                $('.ld2_btn').css({'opacity':'0'})
                $('.ld3_btn').css({'opacity':'0'})
            }

            if(cc==1) {
                console.log(cc);
                $('.ld1_btn').css({'opacity':'0'})
                $('.ld2_btn').css({'opacity':'1'})
                $('.ld3_btn').css({'opacity':'0'})
            }

            if(cc==2) {
                console.log(cc);
                $('.ld1_btn').css({'opacity':'0'})
                $('.ld2_btn').css({'opacity':'0'})
                $('.ld3_btn').css({'opacity':'1'})
            }
            },3000)
            



            // 대여 및 반납
            let aa = 0;

            $('.box5-1-3').click(function () {
                if (aa < 4) aa++;
                console.log(aa);
                $('.box5-1 ul').css({
                    'left': -480 * aa + 'px'
                })
            })

            $('.box5-1-2').click(function () {
                if (aa > 0) aa--;
                console.log(aa);
                $('.box5-1 ul').css({
                    'left': -480 * aa + 'px'
                })
            })

            let bb = 0;

            $('.box5-2-3').click(function () {
                if (bb < 5) bb++;
                console.log(bb);
                $('.box5-2 ul').css({
                    'left': -480 * bb + 'px'
                })
            })

            $('.box5-2-2').click(function () {
                if (bb > 0) bb--;
                console.log(bb);
                $('.box5-2 ul').css({
                    'left': -480 * bb + 'px'
                })
            })

            $('.place_list1').click(function(){
                $('.place_img li:nth-child(1)').addClass('on');
                $('.place_img li:nth-child(2)').removeClass('on');
                $('.place_img li:nth-child(3)').removeClass('on')
            })

            $('.place_list2').click(function(){
                $('.place_img li:nth-child(2)').addClass('on');
                $('.place_img li:nth-child(3)').removeClass('on');
                $('.place_img li:nth-child(1)').removeClass('on')
            })

            $('.place_list3').click(function(){
                $('.place_img li:nth-child(3)').addClass('on');
                $('.place_img li:nth-child(1)').removeClass('on');
                $('.place_img li:nth-child(2)').removeClass('on');
            })

            // 칼로리 소모량
            $('.box9-1 ul li:nth-child(1), .box9-2 ul li:nth-child(1)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(1)').stop().css({'animation':'ani3 1.1s linear '}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(1)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(1), .box9-2 ul li:nth-child(1)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(1)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(1)').css({'opacity':'0'})
            })
            
            $('.box9-1 ul li:nth-child(2), .box9-2 ul li:nth-child(2)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(2)').stop().css({'animation':'ani3 1.1s linear infinite'}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(2)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(2), .box9-2 ul li:nth-child(2)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(2)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(2)').css({'opacity':'0'})
            })

            $('.box9-1 ul li:nth-child(3), .box9-2 ul li:nth-child(3)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(3)').stop().css({'animation':'ani3 1.1s linear infinite'}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(3)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(3), .box9-2 ul li:nth-child(3)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(3)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(3)').css({'opacity':'0'})
            })

            $('.box9-1 ul li:nth-child(4), .box9-2 ul li:nth-child(4)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(4)').stop().css({'animation':'ani3 1.1s linear infinite'}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(4)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(4), .box9-2 ul li:nth-child(4)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(4)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(4)').css({'opacity':'0'})
            })

            $('.box9-1 ul li:nth-child(5), .box9-2 ul li:nth-child(5)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(5)').stop().css({'animation':'ani3 1.1s linear infinite'}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(5)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(5), .box9-2 ul li:nth-child(5)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(5)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(5)').css({'opacity':'0'})
            })

            $('.box9-1 ul li:nth-child(6), .box9-2 ul li:nth-child(6)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(6)').stop().css({'animation':'ani3 1.1s linear infinite'}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(6)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(6), .box9-2 ul li:nth-child(6)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(6)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(6)').css({'opacity':'0'})
            })

            $('.box9-1 ul li:nth-child(7), .box9-2 ul li:nth-child(7)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(7)').stop().css({'animation':'ani3 1.1s linear infinite'}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(7)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(7), .box9-2 ul li:nth-child(7)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(7)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(7)').css({'opacity':'0'})
            })

            $('.box9-1 ul li:nth-child(8), .box9-2 ul li:nth-child(8)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(8)').stop().css({'animation':'ani3 1.1s linear infinite'}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(8)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(8), .box9-2 ul li:nth-child(8)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(8)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(8)').css({'opacity':'0'})
            })

            $('.box9-1 ul li:nth-child(9), .box9-2 ul li:nth-child(9)').mouseenter(function(){
                $('.box9-1 ul li:nth-child(9)').stop().css({'animation':'ani3 1.1s linear infinite'}).animate({'opacity':'0'})
                $('.box9-2 ul li:nth-child(9)').css({'opacity':'1'})
            })
            $('.box9-1 ul li:nth-child(9), .box9-2 ul li:nth-child(9)').mouseleave(function(){
                $('.box9-1 ul li:nth-child(9)').stop().css({'animation' : 'none'}).animate({'opacity':'1'},500)
                $('.box9-2 ul li:nth-child(9)').css({'opacity':'0'})
            })

// 공지사항
$('.box10-1-4 span:nth-child(1)').click(function(){
$(this).css({'font-weight':'bold'})
$('.box10-1-4 span:nth-child(2)').css({'font-weight':'normal'})
$('.box10-1-3').css({'display':'none'})
$('.box10-1-2').css({'display':'block'})
})

$('.box10-1-4 span:nth-child(2)').click(function(){
$(this).css({'font-weight':'bold'})
$('.box10-1-4 span:nth-child(1)').css({'font-weight':'normal'})
$('.box10-1-2').css({'display':'none'})
$('.box10-1-3').css({'display':'block'})
})

let tt = $(window).scrollTop();

$('.top_btn').click(function(){
    $('html, body').stop().animate({'scrollTop':'0'},0)
})


        })