$(document).ready(function(){


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

    let aaa = setInterval(aa,2000);

    function aa(){
        a++;
        if(a==3) a=0;
        console.log(a);
        $('.handbags_list1_inner1 li').eq(a-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner1 li').eq(a).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let b = 0;

    let bbb = setInterval(bb,2000);

    function bb(){
        b++;
        if(b==3) b=0;
        console.log(b);
        $('.handbags_list1_inner2 li').eq(b-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner2 li').eq(b).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let c = 0;

    let ccc = setInterval(cc,2000);

    function cc(){
        c++;
        if(c==3) c=0;
        console.log(c);
        $('.handbags_list1_inner3 li').eq(c-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner3 li').eq(c).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let d = 0;

    let ddd = setInterval(dd,2000);

    function dd(){
        d++;
        if(d==3) d=0;
        console.log(d);
        $('.handbags_list1_inner4 li').eq(d-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner4 li').eq(d).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let e = 0;

    let eee = setInterval(ee,2000);

    function ee(){
        e++;
        if(e==3) e=0;
        console.log(e);
        $('.handbags_list1_inner5 li').eq(e-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner5 li').eq(e).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let f = 0;

    let fff = setInterval(ff,2000);

    function ff(){
        f++;
        if(f==3) f=0;
        console.log(f);
        $('.handbags_list1_inner6 li').eq(f-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner6 li').eq(f).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let g = 0;

    let ggg = setInterval(gg,2000);

    function gg(){
        g++;
        if(g==3) g=0;
        console.log(g);
        $('.handbags_list1_inner7 li').eq(g-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner7 li').eq(g).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let h = 0;

    let hhh = setInterval(hh,2000);

    function hh(){
        h++;
        if(h==3) h=0;
        console.log(h);
        $('.handbags_list1_inner8 li').eq(h-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner8 li').eq(h).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let i = 0;

    let iii = setInterval(ii,2000);

    function ii(){
        i++;
        if(i==3) i=0;
        console.log(i);
        $('.handbags_list1_inner9 li').eq(i-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner9 li').eq(i).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let j = 0;

    let jjj = setInterval(jj,2000);

    function jj(){
        j++;
        if(j==3) j=0;
        console.log(j);
        $('.handbags_list1_inner10 li').eq(j-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner10 li').eq(j).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }

    let k = 0;

    let kkk = setInterval(kk,2000);

    function kk(){
        k++;
        if(k==3) k=0;
        console.log(k);
        $('.handbags_list1_inner11 li').eq(k-1).css({'left':0}).stop().animate({'left':'-100%'},1500);
        $('.handbags_list1_inner11 li').eq(k).css({'left':'100%'}).stop().animate({'left':'0'},1500);
    }
    

    $('.handbags_list1_inner1').mouseover(function(){
        $('.handbags_list1_inner>div:nth-child(1)>p').css({'font-weight':'bold'})
        clearInterval(aaa)
    })
    $('.handbags_list1_inner1').mouseleave(function(){
        $('.handbags_list1_inner>div:nth-child(1)>p').css({'font-weight':'normal'})
        aaa=setInterval(aa,2000)
    })
    $('.handbags_list1_inner2').mouseover(function(){
        $('.handbags_list1_inner>div:nth-child(2)>p').css({'font-weight':'bold'})
        clearInterval(bbb)
    })
    $('.handbags_list1_inner2').mouseleave(function(){
        $('.handbags_list1_inner>div:nth-child(2)>p').css({'font-weight':'normal'})
        bbb=setInterval(bb,2000)
    })
    $('.handbags_list1_inner3').mouseover(function(){
        $('.handbags_list1_inner>div:nth-child(3)>p').css({'font-weight':'bold'})
        clearInterval(ccc)
    })
    $('.handbags_list1_inner3').mouseleave(function(){
        $('.handbags_list1_inner>div:nth-child(3)>p').css({'font-weight':'normal'})
        ccc=setInterval(cc,2000)
    })
    $('.handbags_list1_inner4').mouseover(function(){
        $('.handbags_list2_1>div:nth-child(1)>p').css({'font-weight':'bold'})
        clearInterval(ddd)
    })
    $('.handbags_list1_inner4').mouseleave(function(){
        $('.handbags_list2_1>div:nth-child(1)>p').css({'font-weight':'normal'})
        ddd=setInterval(dd,2000)
    })
    $('.handbags_list1_inner5').mouseover(function(){
        $('.handbags_list2_1>div:nth-child(2)>p').css({'font-weight':'bold'})
        clearInterval(eee)
    })
    $('.handbags_list1_inner5').mouseleave(function(){
        $('.handbags_list2_1>div:nth-child(2)>p').css({'font-weight':'normal'})
        eee=setInterval(ee,2000)
    })
    $('.handbags_list1_inner6').mouseover(function(){
        $('.handbags_list2_1>div:nth-child(3)>p').css({'font-weight':'bold'})
        clearInterval(fff)
    })
    $('.handbags_list1_inner6').mouseleave(function(){
        $('.handbags_list2_1>div:nth-child(3)>p').css({'font-weight':'normal'})
        fff=setInterval(ff,2000)
    })
    $('.handbags_list1_inner7').mouseover(function(){
        $('.handbags_list2_2>div:nth-child(1)>p').css({'font-weight':'bold'})
        clearInterval(ggg)
    })
    $('.handbags_list1_inner7').mouseleave(function(){
        $('.handbags_list2_2>div:nth-child(1)>p').css({'font-weight':'normal'})
        ggg=setInterval(gg,2000)
    })
    $('.handbags_list1_inner8').mouseover(function(){
        $('.handbags_list2_2>div:nth-child(2)>p').css({'font-weight':'bold'})
        clearInterval(hhh)
    })
    $('.handbags_list1_inner8').mouseleave(function(){
        $('.handbags_list2_2>div:nth-child(2)>p').css({'font-weight':'normal'})
        hhh=setInterval(hh,2000)
    })
    $('.handbags_list1_inner9').mouseover(function(){
        $('.handbags_list2_2>div:nth-child(3)>p').css({'font-weight':'bold'})
        clearInterval(iii)
    })
    $('.handbags_list1_inner9').mouseleave(function(){
        $('.handbags_list2_2>div:nth-child(3)>p').css({'font-weight':'normal'})
        iii=setInterval(ii,2000)
    })
    $('.handbags_list1_inner10').mouseover(function(){
        $('.handbags_list2_3>div:nth-child(1)>p').css({'font-weight':'bold'})
        clearInterval(jjj)
    })
    $('.handbags_list1_inner10').mouseleave(function(){
        $('.handbags_list2_3>div:nth-child(1)>p').css({'font-weight':'normal'})
        jjj=setInterval(jj,2000)
    })
    $('.handbags_list1_inner11').mouseover(function(){
        $('.handbags_list2_3>div:nth-child(2)>p').css({'font-weight':'bold'})
        clearInterval(kkk)
    })
    $('.handbags_list1_inner11').mouseleave(function(){
        $('.handbags_list2_3>div:nth-child(2)>p').css({'font-weight':'normal'})
        kkk=setInterval(kk,2000)
    })

})