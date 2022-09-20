$(document).ready(function(){

    // 화면 높이 최적화
    let ht = $(window).height();
    $('.cover').height(ht)
    
    /*
    $(window).resize(function(){
        let ht = $(window).height();
        $('.cover').resize(ht);
    })
    */


    // 스크롤별 애니메이션
    $(window).scroll(function(){
        let tt = $(this).scrollTop();

        let bb = $('.main').offset().top;
        let cc = $('.profile').offset().top;
        let dd = $('.history').offset().top;
        let ee = $('.gallery').offset().top;
        let ff = $('.box1').offset().top;
        let gg = $('.box2').offset().top;
        let hh = $('.box3').offset().top;
        let ii = $('.box4').offset().top;
        let jj = $('.box5').offset().top;

        // 메뉴 설정
        $('.box1').mouseover(function(){
            $('.top_bg1').css({'opacity':'0.8'})
            $('.menu1').css({'z-index':'3'})
            $('.top_bg1').css({'transform':'translateY(-105px)'})
            $('.top_bg2').css({'opacity':'0'})
            $('.top_bg3').css({'opacity':'0'})
            $('.top_bg4').css({'opacity':'0'})
            $('.top_bg5').css({'opacity':'0'})
        })
        $('.box2').mouseover(function(){
            $('.top_bg1').css({'opacity':'0'})
            $('.top_bg2').css({'opacity':'0.8'})
            $('.menu2').css({'z-index':'3'})
            $('.top_bg2').css({'transform':'translateY(-115px)'})
            $('.top_bg3').css({'opacity':'0'})
            $('.top_bg4').css({'opacity':'0'})
            $('.top_bg5').css({'opacity':'0'})
        })
        $('.box3').mouseover(function(){
            $('.top_bg1').css({'opacity':'0'})
            $('.top_bg2').css({'opacity':'0'})
            $('.top_bg3').css({'opacity':'0.8'})
            $('.menu3').css({'z-index':'3'})
            $('.top_bg3').css({'transform':'translateY(-55px)'})
            $('.top_bg4').css({'opacity':'0'})
            $('.top_bg5').css({'opacity':'0'})
        })
        $('.box4').mouseover(function(){
            $('.top_bg1').css({'opacity':'0'})
            $('.top_bg2').css({'opacity':'0'})
            $('.top_bg3').css({'opacity':'0'})
            $('.top_bg4').css({'opacity':'0.8'})
            $('.menu4').css({'z-index':'3'})
            $('.top_bg5').css({'opacity':'0'})
        })
        $('.box5').mouseover(function(){
            $('.top_bg1').css({'opacity':'0'})
            $('.top_bg2').css({'opacity':'0'})
            $('.top_bg3').css({'opacity':'0'})
            $('.top_bg4').css({'opacity':'0'})
            $('.top_bg5').css({'opacity':'0.8'})
            $('.menu5').css({'z-index':'3'})
            $('.top_bg5').css({'transform':'translateY(150px)'})
        })

        if(tt < ff){
            $('.top_bg1').css({'opacity':'0'})
            $('.top_bg2').css({'opacity':'0'})
            $('.top_bg3').css({'opacity':'0'})
            $('.top_bg4').css({'opacity':'0'})
            $('.top_bg5').css({'opacity':'0'})
        }

        // 메뉴
        $('.home img').click(function(e){
            $('html, body').stop().animate({'scrollTop':bb},0)
            $('.top_bg1').css({'opacity':'1'})
        })

        $('.bg_cover1').click(function(e){
            $('html, body').stop().animate({'scrollTop':ff+1},0)
        })

        $('.bg_cover2').click(function(e){
            $('html, body').stop().animate({'scrollTop':gg+1},0)
        })

        $('.bg_cover3').click(function(e){
            $('html, body').stop().animate({'scrollTop':hh+1},0)
        })

        $('.bg_cover4').click(function(e){
            $('html, body').stop().animate({'scrollTop':ii+1},0)
        })

        $('.bg_cover5').click(function(e){
            $('html, body').stop().animate({'scrollTop':jj+1},0)
        })

        // 메인
        if(tt > bb-5){
            $('.main_img p:nth-child(2)').css({'opacity':'1'})
            $('.main_img p:nth-child(2)').css({'left':'20px'})
            $('.main_img p:nth-child(3)').css({'opacity':'1'})
            $('.main_img p:nth-child(3)').css({'bottom':'270px'})
            $('#top').css({'top':'-120px'})
        } else {
            
            $('#top').css({'top':'-170px'})
        }

        if(tt > bb+100){
            $('.main_img p:nth-child(2)').css({'left':'-180px'})
            $('.main_img p:nth-child(3)').css({'bottom':'470px'})
        }
        if(tt > bb+200){
            $('.main_img p:nth-child(2)').css({'left':'-380px'})
            $('.main_img p:nth-child(3)').css({'bottom':'670px'})
        }
        if(tt > bb+300){
            $('.main_img p:nth-child(2)').css({'left':'-580px'})
            $('.main_img p:nth-child(3)').css({'bottom':'870px'})
        }
        if(tt > bb+400){
            $('.main_img p:nth-child(2)').css({'left':'-780px'})
            $('.main_img p:nth-child(3)').css({'bottom':'1070px'})
        }
        if(tt > bb+500){
            $('.main_img p:nth-child(2)').css({'left':'-980px'})
        }
        if(tt > bb+600){
            $('.main_img p:nth-child(2)').css({'left':'-1180px'})
        }
        if(tt > bb+700){
            $('.main_img p:nth-child(2)').css({'left':'-1380px'})
        }
        if(tt > bb+800){
            $('.main_img p:nth-child(2)').css({'left':'-1580px'})
        }
        // 프로필
        if(tt > cc-500){
            $('.profile').css({'max-width':'1280px'})
            $('.profile').css({'opacity':'1'})
            $('.profile h2').css({'opacity':'1'})

        setTimeout(function(){
            $('.profile_img div:nth-child(1)').css({'opacity':'1'})
            $('.profile_img div:nth-child(1)').css({'margin-right':'-55px'})
        },1200)

        setTimeout(function(){
            $('.profile_img div:nth-child(2)').css({'opacity':'1'})
            $('.profile_img div:nth-child(2)').css({'margin-right':'-60px'})
            $('.profile_txt').css({'opacity':'1'})
        },500)
        
        if(tt < cc+98) {
            $('.profile_img').css({'transform':'translateX(0px)'})
            $('.profile_txt').css({'transform':'translateX(0px)'})
        }

        if(tt > cc+99) {
            $('.profile_img').css({'transform':'translateX(-100px)'})
            $('.profile_txt').css({'transform':'translateX(100px)'})
        }
        if(tt > cc+199) {
            $('.profile_img').css({'transform':'translateX(-200px)'})
            $('.profile_txt').css({'transform':'translateX(200px)'})
        }
        if(tt > cc+299) {
            $('.profile_img').css({'transform':'translateX(-300px)'})
            $('.profile_txt').css({'transform':'translateX(300px)'})
        }
        if(tt > cc+399) {
            $('.profile_img').css({'transform':'translateX(-400px)'})
            $('.profile_txt').css({'transform':'translateX(400px)'})
        }
        if(tt > cc+499) {
            $('.profile_img').css({'transform':'translateX(-500px)'})
            $('.profile_txt').css({'transform':'translateX(500px)'})
        }
    }

        // 히스토리
        if(tt > dd-500){
            $('.history').css({'opacity':'1'})
            $('.history h2').css({'opacity':'1'})
    
            setTimeout(function(){
                $('.history_top>article').css({'height':'650px'})
            },1000)
    
            setTimeout(function(){
                $('.history_img5').css({'bottom':'160px'})
                $('.history_img6').css({'bottom':'320px'})
                $('.history_img8').css({'bottom':'160px'})
                $('.history_img11').css({'bottom':'160px'})
                $('.history_img13').css({'bottom':'160px'})
            },2000)
        }

        // 갤러리
        if(tt > ee-400){
            $('.gallery').css({'opacity':'1'})
            $('.gallery h2').css({'opacity':'1'})
        }

        // box1 설정 
        if(tt >= ff){
            $('.box1-1').css({'opacity':'1'})
        } else {
            $('.box1-1').css({'opacity':'0'})
        }
        
        if(tt > ff-600){
            $('.box1-1_txt').css({'position':'fixed'})
            $('.box1-1_img').css({'position':'fixed'})
        } else {
            $('.box1-1_txt').css({'position':'relative'})
            $('.box1-1_img').css({'position':'relative'})
        }

        if(tt < ff+99){
                $('.box1-1_txt').css({'transform':'translateY(0px)'})
                $('.box1-1_img').css({'transform':'translateY(0px)'})
            }

        if(tt > ff+1){
            $('.box1-1_txt').css({'transition':'all 0.3s'})
            $('.box1-1_img').css({'transition':'all 0.3s'})
            $('.box1-1_txt').css({'transform':'translateY(-50px)'})
        }
        if(tt > ff+101){
            $('.box1-1_txt').css({'transform':'translateY(-100px)'})
        }
        if(tt > ff+201){
            $('.box1-1_txt').css({'transform':'translateY(-150px)'})
        }
        if(tt > ff+301){
            $('.box1-1_txt').css({'transform':'translateY(-200px)'})
        }
        if(tt > ff+401){
            $('.box1-1_txt').css({'transform':'translateY(-250px)'})
        }
        if(tt > ff+501){
            $('.box1-1_txt').css({'transform':'translateY(-300px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-1920px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-1920px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-1920px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-1920px)'})
        }
        if(tt > ff+601){
            $('.box1-1_txt').css({'transform':'translateY(-350px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-1720px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-1720px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-1720px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-1720px)'})
        }
        if(tt > ff+701){
            $('.box1-1_img').css({'transform':'translateY(0px)'})
            $('.box1-1_txt').css({'transform':'translateY(-400px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-1520px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-1520px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-1520px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-1520px)'})
        }

        if(tt > ff+801){
            $('.box1-1_img').css({'transform':'translateY(-100px)'})
            $('.box1-1_txt').css({'transform':'translateY(-500px)'})
            $('.box1-1_img').css({'transition':'all 0.1s'})
            $('.box1-1_txt').css({'transition':'all 0.1s'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-1320px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-1320px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-1320px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-1320px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(1000px)'})
        }
        if(tt > ff+901){
            $('.box1-1_img').css({'transform':'translateY(-200px)'})
            $('.box1-1_txt').css({'transform':'translateY(-600px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-1120px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-1120px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-1120px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-1120px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(850px)'})
        }
        if(tt > ff+1001){
            $('.box1-1_img').css({'transform':'translateY(-300px)'})
            $('.box1-1_txt').css({'transform':'translateY(-700px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-920px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-920px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-920px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-920px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(700px)'})
        }
        if(tt > ff+1101){
            $('.box1-1_img').css({'transform':'translateY(-400px)'})
            $('.box1-1_txt').css({'transform':'translateY(-800px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-720px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-720px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-720px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-720px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(550px)'})
        }
        if(tt > ff+1201){
            $('.box1-1_img').css({'transform':'translateY(-500px)'})
            $('.box1-1_txt').css({'transform':'translateY(-900px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-520px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-520px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-520px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-520px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(400px)'})
        }
        if(tt > ff+1301){
            $('.box1-1_img').css({'transform':'translateY(-600px)'})
            $('.box1-1_txt').css({'transform':'translateY(-1000px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-320px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-320px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-320px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-320px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(250px)'})
        }
        if(tt > ff+1401){
            $('.box1-1_img').css({'transform':'translateY(-600px)'})
            $('.box1-1_txt').css({'transform':'translateY(-1000px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(0px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(0px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(0px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(0px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(0px)'})
        }
        if(tt > ff+1501){
            $('.box1-1_img').css({'transform':'translateY(-600px)'})
            $('.box1-1_txt').css({'transform':'translateY(-1000px)'})
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(0px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(0px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(0px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(0px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(0px)'})
        }
        if(tt > ff+1601){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-0px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-0px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-0px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-0px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(0px)'})
            $('.coverbox1_lp').css({'transition':'all 0.2s'})
            $('.coverbox1_lp').css({'transform':'translateX(-480px)'})
        }
        if(tt > ff+1701){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-200px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-200px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-200px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-200px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(200px)'})
            $('.coverbox1_lp').css({'transform':'translateX(-420px)'})
        }
        if(tt > ff+1801){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-300px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-300px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-300px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-300px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(300px)'})
            $('.coverbox1_lp').css({'transform':'translateX(-360px)'})
        }
        if(tt > ff+1901){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-400px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-400px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-400px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-400px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(400px)'})
            $('.coverbox1_lp').css({'transform':'translateX(-300px)'})
        }
        if(tt > ff+2001){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-500px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-500px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-500px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-500px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(500px)'})
            $('.coverbox1_lp').css({'transform':'translateX(-240px)'})
        }
        if(tt > ff+2101){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-600px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-600px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-600px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-600px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(600px)'})
            $('.coverbox1_lp').css({'transform':'translateX(-180px)'})
        }
        if(tt > ff+2201){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-700px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-700px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-700px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-700px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(700px)'})
            $('.coverbox1_lp').css({'transform':'translateX(-120px)'})
        }
        if(tt > ff+2301){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-800px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-800px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-800px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-800px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(800px)'})
            $('.coverbox1_lp').css({'transform':'translateX(-60px)'})
        }
        if(tt > ff+2401){
            $('.box1-2 div:nth-child(1)').css({'transform':'translateX(-900px)'})
            $('.box1-2 div:nth-child(2)').css({'transform':'translateX(-900px)'})
            $('.box1-2 div:nth-child(3)').css({'transform':'translateX(-900px)'})
            $('.box1-2 div:nth-child(4)').css({'transform':'translateX(-900px)'})
            $('.box1-2 div:nth-child(5)').css({'transform':'translateX(900px)'})
            $('.coverbox1_lp').css({'transform':'translateX(0px)'})
        }

        if(tt > ff+2701){
            $('.coverbox1_lp').css({'transform':'translateX(-50px)'})
        }
        if(tt > ff+2801){
            $('.coverbox1_lp').css({'transform':'translateX(-100px)'})
        }
        if(tt > ff+2901){
            $('.coverbox1_lp').css({'transform':'translateX(-150px)'})
        }
        if(tt > ff+3001){
            $('.coverbox1_lp').css({'transform':'translateX(-200px)'})
        }
        if(tt > ff+3101){
            $('.coverbox1_lp').css({'transform':'translateX(-250px)'})
        }
        if(tt > ff+3201){
            $('.coverbox1_lp').css({'transform':'translateX(-300px)'})
        }
        if(tt > ff+3301){
            $('.coverbox1_lp').css({'transform':'translateX(-350px)'})
        }
        if(tt > ff+3401){
            $('.coverbox1_lp').css({'transform':'translateX(-400px)'})
        }
        if(tt > ff+3501){
            $('.coverbox1_lp').css({'transform':'translateX(-450px)'})
        }

        // box2 설정

        if(tt >= gg){
            $('.box2-1').css({'opacity':'1'})
        } else {
            $('.box2-1').css({'opacity':'0'})
        }
        
        if(tt > gg-600){
            $('.box2-1_txt').css({'position':'fixed'})
            $('.box2-1_img').css({'position':'fixed'})
        } else {
            $('.box2-1_txt').css({'position':'relative'})
            $('.box2-1_img').css({'position':'relative'})
        }

        if(tt < gg+99){
                $('.box2-1_txt').css({'transform':'translateY(0px)'})
                $('.box2-1_img').css({'transform':'translateY(0px)'})
            }

        if(tt > gg+1){
            $('.box2-1_txt').css({'transition':'all 0.3s'})
            $('.box2-1_img').css({'transition':'all 0.3s'})
            $('.box2-1_txt').css({'transform':'translateY(-50px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(550px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-900px)'})
        }
        if(tt > gg+101){
            $('.box2-1_txt').css({'transform':'translateY(-100px)'})
        }
        if(tt > gg+201){
            $('.box2-1_txt').css({'transform':'translateY(-150px)'})
        }
        if(tt > gg+301){
            $('.box2-1_txt').css({'transform':'translateY(-200px)'})
        }
        if(tt > gg+401){
            $('.box2-1_txt').css({'transform':'translateY(-250px)'})
        }
        if(tt > gg+501){
            $('.box2-1_txt').css({'transform':'translateY(-300px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(550px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-900px)'})
        }
        if(tt > gg+601){
            $('.box2-1_txt').css({'transform':'translateY(-350px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(450px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-700px)'})
        }
        if(tt > gg+701){
            $('.box2-1_img').css({'transform':'translateY(0px)'})
            $('.box2-1_txt').css({'transform':'translateY(-400px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(350px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-500px)'})
        }

        if(tt > gg+801){
            $('.box2-1_img').css({'transform':'translateY(-100px)'})
            $('.box2-1_txt').css({'transform':'translateY(-500px)'})
            $('.box2-1_img').css({'transition':'all 0.1s'})
            $('.box2-1_txt').css({'transition':'all 0.1s'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(250px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-300px)'})
        }
        if(tt > gg+901){
            $('.box2-1_img').css({'transform':'translateY(-200px)'})
            $('.box2-1_txt').css({'transform':'translateY(-600px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(150px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-150px)'})
        }
        if(tt > gg+1001){
            $('.box2-1_img').css({'transform':'translateY(-300px)'})
            $('.box2-1_txt').css({'transform':'translateY(-700px)'})
            $('.coverbox2_lp').css({'transform':'translateX(-900px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(0px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(0px)'})
        }
        if(tt > gg+1101){
            $('.box2-1_img').css({'transform':'translateY(-400px)'})
            $('.box2-1_txt').css({'transform':'translateY(-800px)'})
        }
        if(tt > gg+1201){
            $('.box2-1_img').css({'transform':'translateY(-500px)'})
            $('.box2-1_txt').css({'transform':'translateY(-900px)'})
        }
        if(tt > gg+1301){
            $('.box2-1_img').css({'transform':'translateY(-600px)'})
            $('.box2-1_txt').css({'transform':'translateY(-1000px)'})
        }
        if(tt > gg+1401){
            $('.box2-1_img').css({'transform':'translateY(-600px)'})
            $('.box2-1_txt').css({'transform':'translateY(-1000px)'})
            $('.coverbox2_lp').css({'transition':'all 0.2s'})
            $('.coverbox2_lp').css({'transform':'translateX(-500px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(100px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-200px)'})
        }
        if(tt > gg+1501){
            $('.box2-1_img').css({'transform':'translateY(-600px)'})
            $('.box2-1_txt').css({'transform':'translateY(-1000px)'})
            $('.coverbox2_lp').css({'transform':'translateX(-400px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(150px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-300px)'})
        }
        if(tt > gg+1601){
            $('.coverbox2_lp').css({'transform':'translateX(-300px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(225px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-450px)'})
        }
        if(tt > gg+1701){
            $('.coverbox2_lp').css({'transform':'translateX(-200px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(300px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-600px)'})
        }
        if(tt > gg+1801){
            $('.coverbox2_lp').css({'transform':'translateX(-100px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(350px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-700px)'})
        }
        if(tt > gg+1901){
            $('.coverbox2_lp').css({'transform':'translateX(0px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(400px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-700px)'})
        }
        if(tt > gg+2001){
            $('.coverbox2_lp').css({'transform':'translateX(0px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(450px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-800px)'})
        }
        if(tt > gg+2101){
            $('.coverbox2_lp').css({'transform':'translateX(0px)'})
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(500px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-800px)'})
        }
        if(tt > gg+2201){
            $('.box2-2 div:nth-child(1)').css({'transform':'translateX(550px)'})
            $('.box2-2 div:nth-child(2)').css({'transform':'translateX(-900px)'})
            $('.coverbox2_lp').css({'transform':'translateX(-100px)'})
        }
        if(tt > gg+2301){
            $('.coverbox2_lp').css({'transform':'translateX(-200px)'})
        }
        if(tt > gg+2401){
            $('.coverbox2_lp').css({'transform':'translateX(-300px)'})
        }
        if(tt > gg+2501){
            $('.coverbox2_lp').css({'transform':'translateX(-400px)'})
        }
        if(tt > gg+2601){
            $('.coverbox2_lp').css({'transform':'translateX(-500px)'})
        }
        if(tt > gg+2701){
            $('.coverbox2_lp').css({'transform':'translateX(-600px)'})
        }
        if(tt > gg+3801){
            $('.coverbox2_lp').css({'transform':'translateX(-700px)'})
        }

        // box3 설정
        // box3-1
        if(tt >= hh){
            $('.box3-1').css({'opacity':'1'})
        } else {
            $('.box3-1').css({'opacity':'0'})
        }
        
        if(tt > hh-600){
            $('.box3-1_txt').css({'position':'fixed'})
            $('.box3-1_img').css({'position':'fixed'})
            $('.box3-1 div:nth-child(3)').css({'position':'fixed'})
            $('.box3-1 div:nth-child(4)').css({'position':'fixed'})
            $('.box3-1 div:nth-child(5)').css({'position':'fixed'})
            $('.box3-1 div:nth-child(6)').css({'position':'fixed'})
        } else {
            $('.box3-1_txt').css({'position':'relative'})
            $('.box3-1_img').css({'position':'relative'})
            $('.box3-1 div:nth-child(3)').css({'position':'relative'})
            $('.box3-1 div:nth-child(4)').css({'position':'relative'})
            $('.box3-1 div:nth-child(5)').css({'position':'relative'})
            $('.box3-1 div:nth-child(6)').css({'position':'relative'})
        }

        if(tt < hh+99){
                $('.box3-1_txt').css({'transform':'translateY(0px)'})
                $('.box3-1_img').css({'transform':'translateY(0px)'})
                $('.box3-1 div:nth-child(3)').css({'opacity':'1'})
                $('.box3-1 div:nth-child(4)').css({'opacity':'1'})
                $('.box3-1 div:nth-child(5)').css({'opacity':'1'})
                $('.box3-1 div:nth-child(6)').css({'opacity':'1'})
                $('.box3-1 div:nth-child(3)').css({'transform':'translateX(0px)'})
                $('.box3-1 div:nth-child(4)').css({'transform':'translateX(0px)'})
                $('.box3-1 div:nth-child(5)').css({'transform':'translateX(0px)'})
                $('.box3-1 div:nth-child(6)').css({'transform':'translateX(0px)'})
            }

        if(tt > hh+1){
            $('.box3-1_txt').css({'transition':'all 0.3s'})
            $('.box3-1_img').css({'transition':'all 0.3s'})
            $('.box3-1_txt').css({'transform':'translateY(-50px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(50px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(50px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-50px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-50px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'0.5'})
        }

        if(tt > hh+102){
            $('.box3-1_txt').css({'transform':'translateY(-100px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(100px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(100px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-100px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-100px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'0'})
        }
        if(tt > hh+202){
            $('.box3-1_txt').css({'transform':'translateY(-150px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(150px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(150px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-150px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-150px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'0.5'})
        }
        if(tt > hh+302){
            $('.box3-1_txt').css({'transform':'translateY(-200px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(100px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(100px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-100px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-100px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'1'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'1'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'1'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'1'})
        }
        if(tt > hh+402){
            $('.box3-1_txt').css({'transform':'translateY(-250px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(50px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(50px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-50px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-50px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'0.5'})
        }
        if(tt > hh+502){
            $('.box3-1_txt').css({'transform':'translateY(-300px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(0px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(0px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(0px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(0px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'0'})
        }
        if(tt > hh+602){
            $('.box3-1_txt').css({'transform':'translateY(-350px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(50px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(50px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-50px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-50px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'0.5'})
        }
        if(tt > hh+702){
            $('.box3-1_img').css({'transform':'translateY(0px)'})
            $('.box3-1_txt').css({'transform':'translateY(-400px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(100px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(100px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-100px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-100px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'1'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'1'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'1'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'1'})
            $('.box3-2 div:nth-child(1)').css({'opacity':'0.2'})
            
        }
        if(tt > hh+802){
            $('.box3-1_img').css({'transform':'translateY(-100px)'})
            $('.box3-1_txt').css({'transform':'translateY(-500px)'})
            $('.box3-1_img').css({'transition':'all 0.1s'})
            $('.box3-1_txt').css({'transition':'all 0.1s'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(150px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(150px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-150px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-150px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'0.5'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'0.5'})
            $('.box3-2 div:nth-child(1)').css({'opacity':'0.4'})
        }
        if(tt > hh+902){
            $('.box3-1_img').css({'transform':'translateY(-200px)'})
            $('.box3-1_txt').css({'transform':'translateY(-600px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(100px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(100px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-100px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-100px)'})
            $('.box3-1 div:nth-child(3)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(4)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(5)').css({'opacity':'0'})
            $('.box3-1 div:nth-child(6)').css({'opacity':'0'})
            $('.box3-2 div:nth-child(1)').css({'opacity':'0.6'})
        }
        if(tt > hh+1002){
            $('.box3-1_img').css({'transform':'translateY(-300px)'})
            $('.box3-1_txt').css({'transform':'translateY(-700px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(50px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(50px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(-50px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(-50px)'})
            $('.box3-2 div:nth-child(1)').css({'opacity':'0.8'})
        }
        if(tt > hh+1102){
            $('.box3-1_img').css({'transform':'translateY(-400px)'})
            $('.box3-1_txt').css({'transform':'translateY(-800px)'})
            $('.box3-1 div:nth-child(3)').css({'transform':'translateX(0px)'})
            $('.box3-1 div:nth-child(4)').css({'transform':'translateX(0px)'})
            $('.box3-1 div:nth-child(5)').css({'transform':'translateX(0px)'})
            $('.box3-1 div:nth-child(6)').css({'transform':'translateX(0px)'})
            $('.box3-1 div:nth-child(3)').css({'position':'fixed'})
            $('.box3-1 div:nth-child(4)').css({'position':'fixed'})
            $('.box3-1 div:nth-child(5)').css({'position':'fixed'})
            $('.box3-1 div:nth-child(6)').css({'position':'fixed'})
            $('.box3-2 div:nth-child(1)').css({'opacity':'1'})
        }
        if(tt > hh+1202){
            $('.box3-1_img').css({'transform':'translateY(-500px)'})
            $('.box3-1_txt').css({'transform':'translateY(-900px)'})
            $('.box3-1 div:nth-child(3)').css({'position':'relative'})
            $('.box3-1 div:nth-child(4)').css({'position':'relative'})
            $('.box3-1 div:nth-child(5)').css({'position':'relative'})
            $('.box3-1 div:nth-child(6)').css({'position':'relative'})
        }
        if(tt > hh+1302){
            $('.box3-1_img').css({'transform':'translateY(-600px)'})
            $('.box3-1_txt').css({'transform':'translateY(-1000px)'})
            $('.box3-2-1').css({'opacity':'0'})
        }
        if(tt > hh+1602){
            $('.box3-2 div:nth-child(1)').css({'opacity':'0.8'})
            $('.box3-2-2').css({'opacity':'0'})
        }
        if(tt > hh+1702){
            $('.box3-2 div:nth-child(1)').css({'opacity':'0.6'})
            $('.box3-2-1').css({'opacity':'1'})
            $('.box3-2-3').css({'opacity':'0'})
        }
        if(tt > hh+1802){
            $('.box3-2 div:nth-child(1)').css({'opacity':'0.4'})
            $('.box3-2-2').css({'opacity':'1'})
            $('.box3-2-4').css({'opacity':'0'})
        }
        if(tt > hh+1902){
            $('.box3-2 div:nth-child(1)').css({'opacity':'0.2'})
            $('.box3-2-3').css({'opacity':'1'})
            $('.box3-2-5').css({'opacity':'0'})
        }
        if(tt > hh+2002){
            $('.box3-2 div:nth-child(1)').css({'opacity':'0'})
            $('.box3-2-4').css({'opacity':'1'})
        }
        if(tt > hh+2102){
            $('.box3-2-5').css({'opacity':'1'})
            $('.coverbox3_lp').css({'transition':'all 0.2s'})
            $('.coverbox3_lp').css({'transform':'translateX(-550px)'})
        }
        if(tt > hh+2302){
            $('.box3-2-1').css({'opacity':'0'})
            $('.coverbox3_lp').css({'transform':'translateX(-4560px)'})
        }
        if(tt > hh+2402){
            $('.box3-2-2').css({'opacity':'0'})
            $('.coverbox3_lp').css({'transform':'translateX(-400px)'})
        }
        if(tt > hh+2502){
            $('.box3-2-3').css({'opacity':'0'})
            $('.coverbox3_lp').css({'transform':'translateX(-350px)'})
        }
        if(tt > hh+2602){
            $('.box3-2-4').css({'opacity':'0'})
            $('.coverbox3_lp').css({'transform':'translateX(-250px)'})
        }
        if(tt > hh+2702){
            $('.box3-2-5').css({'opacity':'0'})
            $('.coverbox3_lp').css({'transform':'translateX(-200px)'})
        }
        if(tt > hh+2802){
            $('.coverbox3_lp').css({'transform':'translateX(-100px)'})
        }
        if(tt > hh+2902){
            $('.coverbox3_lp').css({'transform':'translateX(-50px)'})
        }
        if(tt > hh+3002){
            $('.coverbox3_lp').css({'transform':'translateX(-0px)'})
        }
        if(tt > hh+3202){
            $('.coverbox3_lp').css({'transform':'translateX(-50px)'})
        }
        if(tt > hh+3302){
            $('.coverbox3_lp').css({'transform':'translateX(-100px)'})
        }
        if(tt > hh+3402){
            $('.coverbox3_lp').css({'transform':'translateX(-150px)'})
        }
        if(tt > hh+3502){
            $('.coverbox3_lp').css({'transform':'translateX(-200px)'})
        }
        if(tt > hh+3602){
            $('.coverbox3_lp').css({'transform':'translateX(-250px)'})
        }
        if(tt > hh+3702){
            $('.coverbox3_lp').css({'transform':'translateX(-300px)'})
        }
        if(tt > hh+3802){
            $('.coverbox3_lp').css({'transform':'translateX(-350px)'})
        }
        if(tt > hh+3902){
            $('.coverbox3_lp').css({'transform':'translateX(-400px)'})
        }
        if(tt > hh+4002){
            $('.coverbox3_lp').css({'transform':'translateX(-450px)'})
        }
        if(tt > hh+4102){
            $('.coverbox3_lp').css({'transform':'translateX(-500px)'})
        }

        if(tt > hh+4202){
            $('.coverbox3_lp').css({'transform':'translateX(-550px)'})
        }

        // box4 설정

    if(tt >= ii){
        $('.box4-1').css({'opacity':'1'})
    } else {
        $('.box4-1').css({'opacity':'0'})
    }

    if(tt > ii-600){
        $('.box4-1_txt').css({'position':'fixed'})
        $('.box4-1_img').css({'position':'fixed'})
    } else {
        $('.box4-1_txt').css({'position':'relative'})
        $('.box4-1_img').css({'position':'relative'})
    }
    if(tt < ii+99){
        $('.box4-1_txt').css({'transform':'translateY(0px)'})
        $('.box4-1_img').css({'transform':'translateY(0px)'})
        $('.box4-1 div:nth-child(3)').css({'transform':'translateX(-0px)'})
        $('.box4-1 div:nth-child(4)').css({'transform':'translateX(0px)'})
        $('.box4-1 div:nth-child(5)').css({'transform':'translateX(-0px)'})
        $('.box4-1 div:nth-child(6)').css({'transform':'translateX(0px)'})
    }

if(tt < ii+2){
    $('.box4-1_txt').css({'transition':'all 0.3s'})
    $('.box4-1_img').css({'transition':'all 0.3s'})
    $('.box4-1_txt').css({'transform':'translateY(-50px)'})
    $('.box4-1 div:nth-child(3)').css({'transform':'translateX(-0px)'})
    $('.box4-1 div:nth-child(4)').css({'transform':'translateX(0px)'})
    $('.box4-1 div:nth-child(5)').css({'transform':'translateX(-0px)'})
    $('.box4-1 div:nth-child(6)').css({'transform':'translateX(0px)'})
}

if(tt > ii+50){
    $('.box4-1_txt').css({'transition':'all 0.3s'})
    $('.box4-1_img').css({'transition':'all 0.3s'})
    $('.box4-1_txt').css({'transform':'translateY(-50px)'})
    $('.box4-1 div:nth-child(3)').css({'transform':'translateX(-200px)'})
    $('.box4-1 div:nth-child(4)').css({'transform':'translateX(200px)'})
}

if(tt > ii+102){
    $('.box4-1_txt').css({'transform':'translateY(-100px)'})
    $('.box4-1 div:nth-child(3)').css({'transform':'translateX(-400px)'})
    $('.box4-1 div:nth-child(4)').css({'transform':'translateX(400px)'})
}
if(tt > ii+202){
    $('.box4-1_txt').css({'transform':'translateY(-150px)'})
    $('.box4-1 div:nth-child(3)').css({'transform':'translateX(-600px)'})
    $('.box4-1 div:nth-child(4)').css({'transform':'translateX(600px)'})
}
if(tt > ii+302){
    $('.box4-1_txt').css({'transform':'translateY(-200px)'})
    $('.box4-1 div:nth-child(3)').css({'transform':'translateX(-700px)'})
    $('.box4-1 div:nth-child(4)').css({'transform':'translateX(700px)'})
}
if(tt > ii+402){
    $('.box4-1_txt').css({'transform':'translateY(-250px)'})
    $('.box4-1 div:nth-child(5)').css({'transform':'translateX(-0px)'})
    $('.box4-1 div:nth-child(6)').css({'transform':'translateX(0px)'})
}
if(tt > ii+502){
    $('.box4-1_txt').css({'transform':'translateY(-300px)'})
    $('.box4-1 div:nth-child(5)').css({'transform':'translateX(-200px)'})
    $('.box4-1 div:nth-child(6)').css({'transform':'translateX(200px)'})
    $('.box4-2 div:nth-child(1)').css({'transform':'translateX(600px)'})
}
if(tt > ii+602){
    $('.box4-1_txt').css({'transform':'translateY(-350px)'})
    $('.box4-1 div:nth-child(5)').css({'transform':'translateX(-400px)'})
    $('.box4-1 div:nth-child(6)').css({'transform':'translateX(400px)'})
    $('.box4-2 div:nth-child(1)').css({'transform':'translateX(500px)'})
}
if(tt > ii+702){
    $('.box4-1_img').css({'transform':'translateY(0px)'})
    $('.box4-1_txt').css({'transform':'translateY(-400px)'})
    $('.box4-1 div:nth-child(5)').css({'transform':'translateX(-600px)'})
    $('.box4-1 div:nth-child(6)').css({'transform':'translateX(600px)'})
    $('.box4-2 div:nth-child(1)').css({'transform':'translateX(800px)'})
    $('.box4-2 div:nth-child(1)').css({'transform':'translateX(400px)'})
}

if(tt > ii+802){
    $('.box4-1_img').css({'transform':'translateY(-100px)'})
    $('.box4-1_txt').css({'transform':'translateY(-500px)'})
    $('.box4-1_img').css({'transition':'all 0.1s'})
    $('.box4-1_txt').css({'transition':'all 0.1s'})
    $('.box4-1 div:nth-child(5)').css({'transform':'translateX(-700px)'})
    $('.box4-1 div:nth-child(6)').css({'transform':'translateX(700px)'})
    $('.box4-2-1').css({'opacity':'0'})
    $('.box4-2 div:nth-child(1)').css({'transform':'translateX(300px)'})
}
if(tt > ii+902){
            $('.box4-1_img').css({'transform':'translateY(-200px)'})
            $('.box4-1_txt').css({'transform':'translateY(-600px)'})
            $('.box4-2-1').css({'opacity':'1'})
            $('.box4-2-2').css({'opacity':'0'})
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(200px)'})
        }
        if(tt > ii+1002){
            $('.box4-1_img').css({'transform':'translateY(-300px)'})
            $('.box4-1_txt').css({'transform':'translateY(-700px)'})
            $('.box4-2-2').css({'opacity':'1'})
            $('.box4-2-3').css({'opacity':'0'})
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(100px)'})
        }
        if(tt > ii+1102){
            $('.box4-1_img').css({'transform':'translateY(-400px)'})
            $('.box4-1_txt').css({'transform':'translateY(-800px)'})
            $('.box4-2-3').css({'opacity':'1'})
            $('.box4-2-4').css({'opacity':'0'})
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(0px)'})
        }
        if(tt > ii+1202){
            $('.box4-1_img').css({'transform':'translateY(-500px)'})
            $('.box4-1_txt').css({'transform':'translateY(-900px)'})
            $('.box4-2-4').css({'opacity':'1'})
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(0px)'})
        }
        if(tt > ii+1302){
            $('.box4-1_img').css({'transform':'translateY(-600px)'})
            $('.box4-1_txt').css({'transform':'translateY(-1000px)'})
            $('.coverbox4_lp').css({'transition':'all 0.2s'})
            $('.coverbox4_lp').css({'transform':'translateX(-550px)'})
        }
        if(tt > ii+1402){
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(100px)'})
            $('.coverbox4_lp').css({'transform':'translateX(-550px)'})
            $('.coverbox4_lp').css({'transform':'translateX(-450px)'})
        }
        if(tt > ii+1502){
            $('.box4-2-1').css({'opacity':'0'})
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(200px)'})
            $('.coverbox4_lp').css({'transform':'translateX(-350px)'})
        }
        if(tt > ii+1602){
            $('.box4-2-2').css({'opacity':'0'})
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(300px)'})
            $('.coverbox4_lp').css({'transform':'translateX(-300px)'})
        }
        if(tt > ii+1702){
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(400px)'})
            $('.coverbox4_lp').css({'transform':'translateX(-200px)'})
        }
        if(tt > ii+1802){
            $('.box4-2-3').css({'opacity':'0'})
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(500px)'})
            $('.coverbox4_lp').css({'transform':'translateX(-150px)'})
        }
        if(tt > ii+1902){
            $('.box4-2-4').css({'opacity':'0'})
            $('.box4-2 div:nth-child(1)').css({'transform':'translateX(600px)'})
            $('.coverbox4_lp').css({'transform':'translateX(-100px)'})
        }
        if(tt > ii+2002){
            $('.coverbox4_lp').css({'transform':'translateX(-50px)'})
        }
        if(tt > ii+2102){
            $('.coverbox4_lp').css({'transform':'translateX(0px)'})
        }
        if(tt > ii+2202){
            $('.coverbox4_lp').css({'transform':'translateX(0px)'})
        }
        if(tt > ii+2302){
            $('.coverbox4_lp').css({'transform':'translateX(-50px)'})
        }
        if(tt > ii+2402){
            $('.coverbox4_lp').css({'transform':'translateX(-125px)'})
        }
        if(tt > ii+2502){
            $('.coverbox4_lp').css({'transform':'translateX(-200px)'})
        }
        if(tt > ii+2602){
            $('.coverbox4_lp').css({'transform':'translateX(-250px)'})
        }
        if(tt > ii+2702){
            $('.coverbox4_lp').css({'transform':'translateX(-300px)'})
        }
        if(tt > ii+2802){
            $('.coverbox4_lp').css({'transform':'translateX(-350px)'})
        }
        if(tt > ii+2902){
            $('.coverbox4_lp').css({'transform':'translateX(-400px)'})
        }
        if(tt > ii+3002){
            $('.coverbox4_lp').css({'transform':'translateX(-475px)'})
        }
        if(tt > ii+3102){
            $('.coverbox4_lp').css({'transform':'translateX(-550px)'})
        }

        // box5 설정

    if(tt >= jj){
        $('.box5-1').css({'opacity':'1'})
    } else {
        $('.box5-1').css({'opacity':'0'})
    }

    if(tt < jj+502) {
        
        $('.box5-2 div').css({'opacity':'0'})
    }

    if(tt > jj+802){
        $('.box5-2 div').css({'opacity':'1'})
    }
    if(tt > jj+1002){
        $('.coverbox5_lp').css({'transform':'translateX(-550px)'})
        $('.coverbox5_lp').css({'transition':'all 0.2s'})
    }
    if(tt > jj+1102){
        $('.coverbox5_lp').css({'transform':'translateX(-450px)'})
    }
    if(tt > jj+1202){
        $('.coverbox5_lp').css({'transform':'translateX(-400px)'})
    }
    if(tt > jj+1302){
        $('.coverbox5_lp').css({'transform':'translateX(-350px)'})
    }
    if(tt > jj+1402){
        $('.coverbox5_lp').css({'transform':'translateX(-300px)'})
    }
    if(tt > jj+1502){
        $('.coverbox5_lp').css({'transform':'translateX(-250px)'})
    }
    if(tt > jj+1602){
        $('.coverbox5_lp').css({'transform':'translateX(-200px)'})
    }
    if(tt > jj+1702){
        $('.coverbox5_lp').css({'transform':'translateX(-150px)'})
    }
    if(tt > jj+1802){
        $('.coverbox5_lp').css({'transform':'translateX(-100px)'})
    }
    if(tt > jj+1902){
        $('.coverbox5_lp').css({'transform':'translateX(0px)'})
    }
    if(tt > jj+2002){
        $('.coverbox5_lp').css({'transform':'translateX(0px)'})
    }
    if(tt > jj+2102){
        $('.coverbox5_lp').css({'transform':'translateX(-50px)'})
    }
    if(tt > jj+2202){
        $('.coverbox5_lp').css({'transform':'translateX(-100px)'})
    }
    if(tt > jj+2302){
        $('.coverbox5_lp').css({'transform':'translateX(-150px)'})
    }
    if(tt > jj+2402){
        $('.coverbox5_lp').css({'transform':'translateX(-250px)'})
    }
    if(tt > jj+2502){
        $('.coverbox5_lp').css({'transform':'translateX(-300px)'})
    }
    if(tt > jj+2602){
        $('.coverbox5_lp').css({'transform':'translateX(-350px)'})
    }
    if(tt > jj+2702){
        $('.coverbox5_lp').css({'transform':'translateX(-400px)'})
    }
    if(tt > jj+2802){
        $('.coverbox5_lp').css({'transform':'translateX(-450px)'})
    }
    if(tt > jj+2902){
        $('.coverbox5_lp').css({'transform':'translateX(-550px)'})
    }
    

    })
    
    // 커버 설정
    $('.main').mouseover(function(){
        $('.cover2 div:nth-child(1)').css({'opacity':'0'})
        $('.cover2 div:nth-child(2)').css({'display':'block'})
    })

    $('.cover2 div:nth-child(2)').click(function(){
        let aa = $('.main').offset().top;
        $('.cover2 div:nth-child(1) img').css({'transition':'all 1s'})
        $('.cover2 div:nth-child(2)').css({'display':'none'})
        $('.cover2 div:nth-child(1) img').css({'transform':'scale(1.2)'})
        $('.cover2 div:nth-child(1)').css({'opacity':'1'})
        
        setTimeout(function(){
            $('html,body').stop().animate({'scrollTop':aa},0)},800)
            
    })

    // 메뉴 설정
    $('#top').mouseover(function(){
        $('#top').css({'top':'0'})
        $('.menu1').css({'z-index':'-1'})
        $('.menu2').css({'z-index':'-1'})
        $('.menu3').css({'z-index':'-1'})
        $('.menu4').css({'z-index':'-1'})
        $('.menu5').css({'z-index':'-1'})


    })

    $('#top').mouseleave(function(){
        $('#top').css({'top':'-120px'})
    })

// 히스토리 설정
$('.history_top div').mouseover(function(){
    $('.hover_effect').css({'opacity':'0.9'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.history_top div img').mouseover(function(){
    $('.hover_effect').css({'opacity':'0.9'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.history_top span').mouseover(function(){
    $('.hover_effect').css({'opacity':'0.9'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.history_top div').mouseout(function(){
    $('.hover_effect').css({'z-index':'-1'})
    $('.hover_effect').css({'opacity':'0'})
})
$('.history_top article').mouseout(function(){
    $('.hover_effect').css({'z-index':'-1'})
    $('.hover_effect').css({'opacity':'0'})
})

$('.history_top span').mouseout(function(){
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

// 갤러리 설정
$('.gall1').click(function(){
    $('.gall1-1').css({'z-index':'20'})
    $('.gall1-1').css({'display':'block'})
    $('.gall1-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall1-1').click(function(){
    $('.gall1-1').css({'z-index':'-1'})
    $('.gall1-1').css({'display':'none'})
    $('.gall1-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall2').click(function(){
    $('.gall2-1').css({'z-index':'20'})
    $('.gall2-1').css({'display':'block'})
    $('.gall2-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall2-1').click(function(){
    $('.gall2-1').css({'z-index':'-1'})
    $('.gall2-1').css({'display':'none'})
    $('.gall2-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall3').click(function(){
    $('.gall3-1').css({'z-index':'20'})
    $('.gall3-1').css({'display':'block'})
    $('.gall3-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall3-1').click(function(){
    $('.gall3-1').css({'z-index':'-1'})
    $('.gall3-1').css({'display':'none'})
    $('.gall3-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall4').click(function(){
    $('.gall4-1').css({'z-index':'20'})
    $('.gall4-1').css({'display':'block'})
    $('.gall4-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall4-1').click(function(){
    $('.gall4-1').css({'z-index':'-1'})
    $('.gall4-1').css({'display':'none'})
    $('.gall4-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall5').click(function(){
    $('.gall5-1').css({'z-index':'20'})
    $('.gall5-1').css({'display':'block'})
    $('.gall5-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall5-1').click(function(){
    $('.gall5-1').css({'z-index':'-1'})
    $('.gall5-1').css({'display':'none'})
    $('.gall5-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall6').click(function(){
    $('.gall6-1').css({'z-index':'20'})
    $('.gall6-1').css({'display':'block'})
    $('.gall6-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall6-1').click(function(){
    $('.gall6-1').css({'z-index':'-1'})
    $('.gall6-1').css({'display':'none'})
    $('.gall6-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall7').click(function(){
    $('.gall7-1').css({'z-index':'20'})
    $('.gall7-1').css({'display':'block'})
    $('.gall7-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall7-1').click(function(){
    $('.gall7-1').css({'z-index':'-1'})
    $('.gall7-1').css({'display':'none'})
    $('.gall7-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall8').click(function(){
    $('.gall8-1').css({'z-index':'20'})
    $('.gall8-1').css({'display':'block'})
    $('.gall8-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall8-1').click(function(){
    $('.gall8-1').css({'z-index':'-1'})
    $('.gall8-1').css({'display':'none'})
    $('.gall8-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall9').click(function(){
    $('.gall9-1').css({'z-index':'20'})
    $('.gall9-1').css({'display':'block'})
    $('.gall9-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall9-1').click(function(){
    $('.gall9-1').css({'z-index':'-1'})
    $('.gall9-1').css({'display':'none'})
    $('.gall9-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall10').click(function(){
    $('.gall10-1').css({'z-index':'20'})
    $('.gall10-1').css({'display':'block'})
    $('.gall10-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall10-1').click(function(){
    $('.gall10-1').css({'z-index':'-1'})
    $('.gall10-1').css({'display':'none'})
    $('.gall10-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall11').click(function(){
    $('.gall11-1').css({'z-index':'20'})
    $('.gall11-1').css({'display':'block'})
    $('.gall11-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall11-1').click(function(){
    $('.gall11-1').css({'z-index':'-1'})
    $('.gall11-1').css({'display':'none'})
    $('.gall11-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})


$('.gall12').click(function(){
    $('.gall12-1').css({'z-index':'20'})
    $('.gall12-1').css({'display':'block'})
    $('.gall12-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall12-1').click(function(){
    $('.gall12-1').css({'z-index':'-1'})
    $('.gall12-1').css({'display':'none'})
    $('.gall12-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall13').click(function(){
    $('.gall13-1').css({'z-index':'20'})
    $('.gall13-1').css({'display':'block'})
    $('.gall13-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall13-1').click(function(){
    $('.gall13-1').css({'z-index':'-1'})
    $('.gall13-1').css({'display':'none'})
    $('.gall13-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall14').click(function(){
    $('.gall14-1').css({'z-index':'20'})
    $('.gall14-1').css({'display':'block'})
    $('.gall14-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall14-1').click(function(){
    $('.gall14-1').css({'z-index':'-1'})
    $('.gall14-1').css({'display':'none'})
    $('.gall14-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall15').click(function(){
    $('.gall15-1').css({'z-index':'20'})
    $('.gall15-1').css({'display':'block'})
    $('.gall15-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall15-1').click(function(){
    $('.gall15-1').css({'z-index':'-1'})
    $('.gall15-1').css({'display':'none'})
    $('.gall15-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

$('.gall16').click(function(){
    $('.gall16-1').css({'z-index':'20'})
    $('.gall16-1').css({'display':'block'})
    $('.gall16-1').css({'opacity':'1'})
    $('.hover_effect').css({'opacity':'0.8'})
    $('.hover_effect').css({'z-index':'19'})
})

$('.gall16-1').click(function(){
    $('.gall16-1').css({'z-index':'-1'})
    $('.gall16-1').css({'display':'none'})
    $('.gall16-1').css({'opacity':'0'})
    $('.hover_effect').css({'opacity':'0'})
    $('.hover_effect').css({'z-index':'-1'})
})

// box1-3
$('.coverbox1_btn i:nth-child(2)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox1_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox1_lp').addClass('on')
})

$('.coverbox1_btn i:nth-child(4)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox1_btn i:nth-child(2)').css({'display':'block'})
    $('.coverbox1_lp').removeClass('on')
})

$('.lpplay1 li i:nth-child(1)').click(function(){
    $('.coverbox1_lp').addClass('on')
    $('.coverbox1_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox1_btn i:nth-child(2)').css({'display':'none'})
})

$('.lpplay1 li i:nth-child(2)').click(function(){
    $('.coverbox1_lp').removeClass('on')
    $('.coverbox1_btn i:nth-child(4)').css({'display':'none'})
    $('.coverbox1_btn i:nth-child(2)').css({'display':'block'})
})


let a = 0;
$('.coverbox1_btn i:nth-child(3)').click(function(){
    if(a < 13)a++;

    console.log(a);
    $('.coverbox1_list').css({'left': -539 * a + "px"})
})

$('.coverbox1_btn i:nth-child(1)').click(function(){
    if(a > 0)a--;

    console.log(a);
    $('.coverbox1_list').css({'left': -539 * a + "px"})
})

$('.lpplay1-1 i:nth-child(1)').click(function(){
    a = 0;
    $('.coverbox1_list').css({'left': 0 + "px"})
})
$('.lpplay1-2 i:nth-child(1)').click(function(){
    a = 1;
    $('.coverbox1_list').css({'left': -539 + "px"})
})
$('.lpplay1-3 i:nth-child(1)').click(function(){
    a = 2;
    $('.coverbox1_list').css({'left': -1078 + "px"})
})
$('.lpplay1-4 i:nth-child(1)').click(function(){
    a = 3;
    $('.coverbox1_list').css({'left': -1617 + "px"})
})
$('.lpplay1-5 i:nth-child(1)').click(function(){
    a = 4;
    $('.coverbox1_list').css({'left': -2156 + "px"})
})
$('.lpplay1-6 i:nth-child(1)').click(function(){
    a = 5;
    $('.coverbox1_list').css({'left': -2695 + "px"})
})
$('.lpplay1-7 i:nth-child(1)').click(function(){
    a = 6;
    $('.coverbox1_list').css({'left': -3234 + "px"})
})
$('.lpplay1-8 i:nth-child(1)').click(function(){
    a = 7;
    $('.coverbox1_list').css({'left': -3773 + "px"})
})
$('.lpplay1-9 i:nth-child(1)').click(function(){
    a = 8;
    $('.coverbox1_list').css({'left': -4312 + "px"})
})
$('.lpplay1-10 i:nth-child(1)').click(function(){
    a = 9;
    $('.coverbox1_list').css({'left': -4851 + "px"})
})
$('.lpplay1-11 i:nth-child(1)').click(function(){
    a = 10;
    $('.coverbox1_list').css({'left': -5390 + "px"})
})
$('.lpplay1-12 i:nth-child(1)').click(function(){
    a = 11;
    $('.coverbox1_list').css({'left': -5929 + "px"})
})
$('.lpplay1-13 i:nth-child(1)').click(function(){
    a = 12;
    $('.coverbox1_list').css({'left': -6468+ "px"})
})

//box2-3
$('.coverbox2_btn i:nth-child(2)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox2_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox2_lp').addClass('on')
})

$('.coverbox2_btn i:nth-child(4)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox2_btn i:nth-child(2)').css({'display':'block'})
    $('.coverbox2_lp').removeClass('on')
})

$('.lpplay2 li i:nth-child(1)').click(function(){
    $('.coverbox2_lp').addClass('on')
    $('.coverbox2_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox2_btn i:nth-child(2)').css({'display':'none'})
})

$('.lpplay2 li i:nth-child(2)').click(function(){
    $('.coverbox2_lp').removeClass('on')
    $('.coverbox2_btn i:nth-child(4)').css({'display':'none'})
    $('.coverbox2_btn i:nth-child(2)').css({'display':'block'})
})

let b = 0;

$('.coverbox2_btn i:nth-child(3)').click(function(){
    if(b < 11)b++;

    console.log(b);
    $('.coverbox2_list').css({'left': -539 * b + "px"})
})

$('.coverbox2_btn i:nth-child(1)').click(function(){
    if(b > 0)b--;

    console.log(b);
    $('.coverbox2_list').css({'left': -539 * b + "px"})
})

$('.lpplay2-1 i:nth-child(1)').click(function(){
    b = 0;
    $('.coverbox2_list').css({'left': 0 + "px"})
})
$('.lpplay2-2 i:nth-child(1)').click(function(){
    b = 1;
    $('.coverbox2_list').css({'left': -539 + "px"})
})
$('.lpplay2-3 i:nth-child(1)').click(function(){
    b = 2;
    $('.coverbox2_list').css({'left': -1078 + "px"})
})
$('.lpplay2-4 i:nth-child(1)').click(function(){
    b = 3;
    $('.coverbox2_list').css({'left': -1617 + "px"})
})
$('.lpplay2-5 i:nth-child(1)').click(function(){
    b = 4;
    $('.coverbox2_list').css({'left': -2156 + "px"})
})
$('.lpplay2-6 i:nth-child(1)').click(function(){
    b = 5;
    $('.coverbox2_list').css({'left': -2695 + "px"})
})
$('.lpplay2-7 i:nth-child(1)').click(function(){
    b = 6;
    $('.coverbox2_list').css({'left': -3234 + "px"})
})
$('.lpplay2-8 i:nth-child(1)').click(function(){
    b = 7;
    $('.coverbox2_list').css({'left': -3773 + "px"})
})
$('.lpplay2-9 i:nth-child(1)').click(function(){
    b = 8;
    $('.coverbox2_list').css({'left': -4312 + "px"})
})
$('.lpplay2-10 i:nth-child(1)').click(function(){
    b = 9;
    $('.coverbox2_list').css({'left': -4851 + "px"})
})
$('.lpplay2-11 i:nth-child(1)').click(function(){
    b = 10;
    $('.coverbox2_list').css({'left': -5390 + "px"})
})
$('.lpplay2-12 i:nth-child(1)').click(function(){
    b = 11;
    $('.coverbox2_list').css({'left': -5929 + "px"})
})
$('.lpplay2-13 i:nth-child(1)').click(function(){
    b = 12;
    $('.coverbox2_list').css({'left': -6468+ "px"})
})

//box3-3
$('.coverbox3_btn i:nth-child(2)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox3_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox3_lp').addClass('on')
})

$('.coverbox3_btn i:nth-child(4)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox3_btn i:nth-child(2)').css({'display':'block'})
    $('.coverbox3_lp').removeClass('on')
})

$('.lpplay3 li i:nth-child(1)').click(function(){
    $('.coverbox3_lp').addClass('on')
    $('.coverbox3_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox3_btn i:nth-child(2)').css({'display':'none'})
})

$('.lpplay3 li i:nth-child(2)').click(function(){
    $('.coverbox3_lp').removeClass('on')
    $('.coverbox3_btn i:nth-child(4)').css({'display':'none'})
    $('.coverbox3_btn i:nth-child(2)').css({'display':'block'})
})

let c = 0;

$('.coverbox3_btn i:nth-child(3)').click(function(){
    if(c < 10)c++;

    console.log(c);
    $('.coverbox3_list').css({'left': -539 * c + "px"})
})

$('.coverbox3_btn i:nth-child(1)').click(function(){
    if(c > 0)c--;

    console.log(c);
    $('.coverbox3_list').css({'left': -539 * c + "px"})
})

$('.lpplay3-1 i:nth-child(1)').click(function(){
    c = 0;
    $('.coverbox3_list').css({'left': 0 + "px"})
})
$('.lpplay3-2 i:nth-child(1)').click(function(){
    c = 1;
    $('.coverbox3_list').css({'left': -539 + "px"})
})
$('.lpplay3-3 i:nth-child(1)').click(function(){
    c = 2;
    $('.coverbox3_list').css({'left': -1078 + "px"})
})
$('.lpplay3-4 i:nth-child(1)').click(function(){
    c = 3;
    $('.coverbox3_list').css({'left': -1617 + "px"})
})
$('.lpplay3-5 i:nth-child(1)').click(function(){
    c = 4;
    $('.coverbox3_list').css({'left': -2156 + "px"})
})
$('.lpplay3-6 i:nth-child(1)').click(function(){
    c = 5;
    $('.coverbox3_list').css({'left': -2695 + "px"})
})
$('.lpplay3-7 i:nth-child(1)').click(function(){
    c = 6;
    $('.coverbox3_list').css({'left': -3234 + "px"})
})
$('.lpplay3-8 i:nth-child(1)').click(function(){
    c = 7;
    $('.coverbox3_list').css({'left': -3773 + "px"})
})
$('.lpplay3-9 i:nth-child(1)').click(function(){
    c = 8;
    $('.coverbox3_list').css({'left': -4312 + "px"})
})
$('.lpplay3-10 i:nth-child(1)').click(function(){
    c = 9;
    $('.coverbox3_list').css({'left': -4851 + "px"})
})

//box4-3
$('.coverbox4_btn i:nth-child(2)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox4_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox4_lp').addClass('on')
})

$('.coverbox4_btn i:nth-child(4)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox4_btn i:nth-child(2)').css({'display':'block'})
    $('.coverbox4_lp').removeClass('on')
})

$('.lpplay4 li i:nth-child(1)').click(function(){
    $('.coverbox4_lp').addClass('on')
    $('.coverbox4_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox4_btn i:nth-child(2)').css({'display':'none'})
})

$('.lpplay4 li i:nth-child(2)').click(function(){
    $('.coverbox4_lp').removeClass('on')
    $('.coverbox4_btn i:nth-child(4)').css({'display':'none'})
    $('.coverbox4_btn i:nth-child(2)').css({'display':'block'})
})

let d = 0;

$('.coverbox4_btn i:nth-child(3)').click(function(){
    if(d < 11)d++;

    console.log(d);
    $('.coverbox4_list').css({'left': -539 * d + "px"})
})

$('.coverbox4_btn i:nth-child(1)').click(function(){
    if(d > 0)d--;

    console.log(d);
    $('.coverbox4_list').css({'left': -539 * d + "px"})
})

$('.lpplay4-1 i:nth-child(1)').click(function(){
    d = 0;
    $('.coverbox4_list').css({'left': 0 + "px"})
})
$('.lpplay4-2 i:nth-child(1)').click(function(){
    d = 1;
    $('.coverbox4_list').css({'left': -539 + "px"})
})
$('.lpplay4-3 i:nth-child(1)').click(function(){
    d = 2;
    $('.coverbox4_list').css({'left': -1078 + "px"})
})
$('.lpplay4-4 i:nth-child(1)').click(function(){
    d = 3;
    $('.coverbox4_list').css({'left': -1617 + "px"})
})
$('.lpplay4-5 i:nth-child(1)').click(function(){
    d = 4;
    $('.coverbox4_list').css({'left': -2156 + "px"})
})
$('.lpplay4-6 i:nth-child(1)').click(function(){
    d = 5;
    $('.coverbox4_list').css({'left': -2695 + "px"})
})
$('.lpplay4-7 i:nth-child(1)').click(function(){
    d = 6;
    $('.coverbox4_list').css({'left': -3234 + "px"})
})
$('.lpplay4-8 i:nth-child(1)').click(function(){
    d = 7;
    $('.coverbox4_list').css({'left': -3773 + "px"})
})
$('.lpplay4-9 i:nth-child(1)').click(function(){
    d = 8;
    $('.coverbox4_list').css({'left': -4312 + "px"})
})
$('.lpplay4-10 i:nth-child(1)').click(function(){
    d = 9;
    $('.coverbox4_list').css({'left': -4851 + "px"})
})
$('.lpplay4-11 i:nth-child(1)').click(function(){
    d = 10;
    $('.coverbox4_list').css({'left': -5390 + "px"})
})
$('.lpplay4-12 i:nth-child(1)').click(function(){
    d = 11;
    $('.coverbox4_list').css({'left': -5929 + "px"})
})

//box5-3
$('.coverbox5_btn i:nth-child(2)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox5_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox5_lp').addClass('on')
})

$('.coverbox5_btn i:nth-child(4)').click(function(){
    $(this).css({'display':'none'})
    $('.coverbox5_btn i:nth-child(2)').css({'display':'block'})
    $('.coverbox5_lp').removeClass('on')
})

$('.lpplay5 li i:nth-child(1)').click(function(){
    $('.coverbox5_lp').addClass('on')
    $('.coverbox5_btn i:nth-child(4)').css({'display':'block'})
    $('.coverbox5_btn i:nth-child(2)').css({'display':'none'})
})

$('.lpplay5 li i:nth-child(2)').click(function(){
    $('.coverbox5_lp').removeClass('on')
    $('.coverbox5_btn i:nth-child(4)').css({'display':'none'})
    $('.coverbox5_btn i:nth-child(2)').css({'display':'block'})
})

let e = 0;

$('.coverbox5_btn i:nth-child(3)').click(function(){
    if(e < 7)e++;

    console.log(e);
    $('.coverbox5_list').css({'left': -539 * e + "px"})
})

$('.coverbox5_btn i:nth-child(1)').click(function(){
    if(e > 0)e--;

    console.log(e);
    $('.coverbox5_list').css({'left': -539 * e + "px"})
})

$('.lpplay5-1 i:nth-child(1)').click(function(){
    e = 0;
    $('.coverbox5_list').css({'left': 0 + "px"})
})
$('.lpplay5-2 i:nth-child(1)').click(function(){
    e = 1;
    $('.coverbox5_list').css({'left': -539 + "px"})
})
$('.lpplay5-3 i:nth-child(1)').click(function(){
    e = 2;
    $('.coverbox5_list').css({'left': -1078 + "px"})
})
$('.lpplay5-4 i:nth-child(1)').click(function(){
    e = 3;
    $('.coverbox5_list').css({'left': -1617 + "px"})
})
$('.lpplay5-5 i:nth-child(1)').click(function(){
    e = 4;
    $('.coverbox5_list').css({'left': -2156 + "px"})
})
$('.lpplay5-6 i:nth-child(1)').click(function(){
    e = 5;
    $('.coverbox5_list').css({'left': -2695 + "px"})
})

$('.bg_cover1').mouseover(function(){
    $('.top_bg1').css({'opacity':'1'})
    $('.top_bg2').css({'opacity':'0'})
    $('.top_bg3').css({'opacity':'0'})
    $('.top_bg4').css({'opacity':'0'})
    $('.top_bg5').css({'opacity':'0'})
    $('.top_bg1').css({'transform':'translateY(65px)'})
})
$('.bg_cover1').mouseleave(function(){
    $('.top_bg1').css({'opacity':'0'})
    $('.top_bg1').css({'transform':'translateY(-0px)'})
})

$('.bg_cover2').mouseover(function(){
    $('.top_bg2').css({'opacity':'1'})
    $('.top_bg1').css({'opacity':'0'})
    $('.top_bg3').css({'opacity':'0'})
    $('.top_bg4').css({'opacity':'0'})
    $('.top_bg5').css({'opacity':'0'})
    $('.top_bg2').css({'transform':'translateY(70px)'})
})
$('.bg_cover2').mouseleave(function(){
    $('.top_bg2').css({'opacity':'0'})
    $('.top_bg2').css({'transform':'translateY(-0px)'})
})

$('.bg_cover3').mouseover(function(){
    $('.top_bg3').css({'opacity':'1'})
    $('.top_bg2').css({'opacity':'0'})
    $('.top_bg1').css({'opacity':'0'})
    $('.top_bg4').css({'opacity':'0'})
    $('.top_bg5').css({'opacity':'0'})
    $('.top_bg3').css({'transform':'translateY(30px)'})
    $('.home img').css({'opacity':'0'})
})
$('.bg_cover3').mouseleave(function(){
    $('.home img').css({'opacity':'1'})
})
$('.bg_cover3').mouseleave(function(){
    $('.top_bg3').css({'opacity':'0'})
    $('.top_bg3').css({'transform':'translateY(-0px)'})
})

$('.bg_cover4').mouseover(function(){
    $('.top_bg4').css({'opacity':'1'})
    $('.top_bg2').css({'opacity':'0'})
    $('.top_bg3').css({'opacity':'0'})
    $('.top_bg1').css({'opacity':'0'})
    $('.top_bg5').css({'opacity':'0'})
    $('.top_bg4').css({'transform':'translateY(80px)'})
})
$('.bg_cover4').mouseleave(function(){
    $('.top_bg4').css({'opacity':'0'})
    $('.top_bg4').css({'transform':'translateY(-0px)'})
})

$('.bg_cover5').mouseover(function(){
    $('.top_bg5').css({'opacity':'1'})
    $('.top_bg2').css({'opacity':'0'})
    $('.top_bg3').css({'opacity':'0'})
    $('.top_bg4').css({'opacity':'0'})
    $('.top_bg1').css({'opacity':'0'})
    $('.top_bg5').css({'transform':'translateY(50px)'})
})
$('.bg_cover5').mouseleave(function(){
    $('.top_bg5').css({'opacity':'0'})
    $('.top_bg5').css({'transform':'translateY(-0px)'})
})

})

//마우스따라 움직이는 이미지
/*
$('.box1-').mousemove(function(e){
    let pageX = e.pageX;
    let pageY = e.pageY;

    let standardX = $(window).width()/2 - pageX;
    let standardY = $(window).height()/2 - pageY;

    $('.box1-1 div:nth-child(3)').css({"style" : "transform : translate("+ standardX/20 + "px," + standardY/20 +"px)"});
})
*/