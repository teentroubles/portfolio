$(document).ready(function(){

   // 페이지 이동 설정
// 메인페이지
$('.main_btn1-5').click(function(){
    $('.page section:nth-child(1)').css({'z-index':'-1'});
    $('.page section:nth-child(1)').css({'opacity':'0'});
    $('.page section:nth-child(2)').css({'z-index':'1'});
    $('.page section:nth-child(2)').css({'opacity':'1'});
    $('.page section:nth-child(2)').css({'opacity':'1'});

    // 프로필
    setTimeout(function(){
$('.profile_img1 img:nth-child(1)').css({'transform':'translateX(0)'})
$('.profile_img2 img:nth-child(1)').css({'transform':'translateY(0)'})
$('.profile_img3 img:nth-child(1)').css({'transform':'translateX(0)'})
$('.profile_img4 img:nth-child(1)').css({'transform':'translateY(0)'})
    },1000)

    setTimeout(function(){
        $('.profile_img1 img:nth-child(2)').css({'transform':'scale(1)'})
        $('.profile_img1 img:nth-child(3)').css({'transform':'scale(1)'})
        $('.profile_img1 img:nth-child(4)').css({'transform':'scale(1)'})
            },2000)
})

$('.main_btn1-6').click(function(){
    $('.page section:nth-child(1)').css({'z-index':'-1'});
    $('.page section:nth-child(1)').css({'opacity':'0'});
    $('.page section:nth-child(3)').css({'z-index':'1'});
    $('.page section:nth-child(3)').css({'opacity':'1'});
    
    // 프로필 
        $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
        $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
        $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
        $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
        
                $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
                $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
                $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

                // p1, p2, p3 버튼
                setTimeout(function(){
                    $('.p1_inner').css({'opacity':'1'})
                    $('.p1_inner').css({'z-index':'1'})
                    $('.p2_inner').css({'opacity':'0'})
                    $('.p2_inner').css({'z-index':'-1'})
                    $('.p3_inner').css({'opacity':'0'})
                    $('.p3_inner').css({'z-index':'-1'})
                },1500)
        })
$('.main_btn1-7').click(function(){
    $('.page section:nth-child(1)').css({'z-index':'-1'});
    $('.page section:nth-child(1)').css({'opacity':'0'});
    $('.page section:nth-child(4)').css({'z-index':'1'});
    $('.page section:nth-child(4)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'1'})
                $('.p2_inner').css({'z-index':'1'})
                $('.p3_inner').css({'opacity':'0'})
                $('.p3_inner').css({'z-index':'-1'})
            },1500)
})
$('.main_btn1-8').click(function(){
    $('.page section:nth-child(1)').css({'z-index':'-1'});
    $('.page section:nth-child(1)').css({'opacity':'0'});
    $('.page section:nth-child(5)').css({'z-index':'1'});
    $('.page section:nth-child(5)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})
            
            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'0'})
                $('.p2_inner').css({'z-index':'-1'})
                $('.p3_inner').css({'opacity':'1'})
                $('.p3_inner').css({'z-index':'1'})
            },1500)
})

$('.profile_btn1-6').click(function(){
    $('.page section:nth-child(2)').css({'z-index':'-1'});
    $('.page section:nth-child(2)').css({'opacity':'0'});
    $('.page section:nth-child(3)').css({'z-index':'1'});
    $('.page section:nth-child(3)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})
            
            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'1'})
                $('.p1_inner').css({'z-index':'1'})
                $('.p2_inner').css({'opacity':'0'})
                $('.p2_inner').css({'z-index':'-1'})
                $('.p3_inner').css({'opacity':'0'})
                $('.p3_inner').css({'z-index':'-1'})
            },1500)
})
$('.profile_btn1-7').click(function(){
    $('.page section:nth-child(2)').css({'z-index':'-1'});
    $('.page section:nth-child(2)').css({'opacity':'0'});
    $('.page section:nth-child(4)').css({'z-index':'1'});
    $('.page section:nth-child(4)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'1'})
                $('.p2_inner').css({'z-index':'1'})
                $('.p3_inner').css({'opacity':'0'})
                $('.p3_inner').css({'z-index':'-1'})
            },1500)
})
$('.profile_btn1-8').click(function(){
    $('.page section:nth-child(2)').css({'z-index':'-1'});
    $('.page section:nth-child(2)').css({'opacity':'0'});
    $('.page section:nth-child(5)').css({'z-index':'1'});
    $('.page section:nth-child(5)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'0'})
                $('.p2_inner').css({'z-index':'-1'})
                $('.p3_inner').css({'opacity':'1'})
                $('.p3_inner').css({'z-index':'1'})
            },1500)
})

$('.p1_btn1-5').click(function(){
    $('.page section:nth-child(3)').css({'z-index':'-1'});
    $('.page section:nth-child(3)').css({'opacity':'0'});
    $('.page section:nth-child(2)').css({'z-index':'1'});
    $('.page section:nth-child(2)').css({'opacity':'1'});

    setTimeout(function(){
        $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(0)'})
        $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(0)'})
        $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(0)'})
        $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(0)'})
            },1000)
        
            setTimeout(function(){
                $('.profile_img1 img:nth-child(2)').css({'transform':'scale(1)'})
                $('.profile_img1 img:nth-child(3)').css({'transform':'scale(1)'})
                $('.profile_img1 img:nth-child(4)').css({'transform':'scale(1)'})
                    },2000)
    })
$('.p1_btn1-7').click(function(){
    $('.page section:nth-child(3)').css({'z-index':'-1'});
    $('.page section:nth-child(3)').css({'opacity':'0'});
    $('.page section:nth-child(4)').css({'z-index':'1'});
    $('.page section:nth-child(4)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'1'})
                $('.p2_inner').css({'z-index':'1'})
                $('.p3_inner').css({'opacity':'0'})
                $('.p3_inner').css({'z-index':'-1'})
            },1500)
})
$('.p1_btn1-8').click(function(){
    $('.page section:nth-child(3)').css({'z-index':'-1'});
    $('.page section:nth-child(3)').css({'opacity':'0'});
    $('.page section:nth-child(5)').css({'z-index':'1'});
    $('.page section:nth-child(5)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'0'})
                $('.p2_inner').css({'z-index':'-1'})
                $('.p3_inner').css({'opacity':'1'})
                $('.p3_inner').css({'z-index':'1'})
            },1500)
})

$('.p2_btn1-5').click(function(){
    $('.page section:nth-child(4)').css({'z-index':'-1'});
    $('.page section:nth-child(4)').css({'opacity':'0'});
    $('.page section:nth-child(2)').css({'z-index':'1'});
    $('.page section:nth-child(2)').css({'opacity':'1'});

    setTimeout(function(){
        $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(0)'})
        $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(0)'})
        $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(0)'})
        $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(0)'})
            },1000)
        
            setTimeout(function(){
                $('.profile_img1 img:nth-child(2)').css({'transform':'scale(1)'})
                $('.profile_img1 img:nth-child(3)').css({'transform':'scale(1)'})
                $('.profile_img1 img:nth-child(4)').css({'transform':'scale(1)'})
                    },2000)
})
$('.p2_btn1-6').click(function(){
    $('.page section:nth-child(4)').css({'z-index':'-1'});
    $('.page section:nth-child(4)').css({'opacity':'0'});
    $('.page section:nth-child(3)').css({'z-index':'1'});
    $('.page section:nth-child(3)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'1'})
                $('.p1_inner').css({'z-index':'1'})
                $('.p2_inner').css({'opacity':'0'})
                $('.p2_inner').css({'z-index':'-1'})
                $('.p3_inner').css({'opacity':'0'})
                $('.p3_inner').css({'z-index':'-1'})
            },1500)
})
$('.p2_btn1-8').click(function(){
    $('.page section:nth-child(4)').css({'z-index':'-1'});
    $('.page section:nth-child(4)').css({'opacity':'0'});
    $('.page section:nth-child(5)').css({'z-index':'1'});
    $('.page section:nth-child(5)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'0'})
                $('.p2_inner').css({'z-index':'-1'})
                $('.p3_inner').css({'opacity':'1'})
                $('.p3_inner').css({'z-index':'1'})
            },1500)
})

$('.p3_btn1-5').click(function(){
    $('.page section:nth-child(5)').css({'z-index':'-1'});
    $('.page section:nth-child(5)').css({'opacity':'0'});
    $('.page section:nth-child(2)').css({'z-index':'1'});
    $('.page section:nth-child(2)').css({'opacity':'1'});

    setTimeout(function(){
        $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(0)'})
        $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(0)'})
        $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(0)'})
        $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(0)'})
            },1000)
        
            setTimeout(function(){
                $('.profile_img1 img:nth-child(2)').css({'transform':'scale(1)'})
                $('.profile_img1 img:nth-child(3)').css({'transform':'scale(1)'})
                $('.profile_img1 img:nth-child(4)').css({'transform':'scale(1)'})
                    },2000)
})
$('.p3_btn1-6').click(function(){
    $('.page section:nth-child(5)').css({'z-index':'-1'});
    $('.page section:nth-child(5)').css({'opacity':'0'});
    $('.page section:nth-child(3)').css({'z-index':'1'});
    $('.page section:nth-child(3)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'1'})
                $('.p1_inner').css({'z-index':'1'})
                $('.p2_inner').css({'opacity':'0'})
                $('.p2_inner').css({'z-index':'-1'})
                $('.p3_inner').css({'opacity':'0'})
                $('.p3_inner').css({'z-index':'-1'})
            },1500)
})
$('.p3_btn1-7').click(function(){
    $('.page section:nth-child(5)').css({'z-index':'-1'});
    $('.page section:nth-child(5)').css({'opacity':'0'});
    $('.page section:nth-child(4)').css({'z-index':'1'});
    $('.page section:nth-child(4)').css({'opacity':'1'});

    // 프로필 
    $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
    $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
    $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
    $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
    
            $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
            $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

            // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'1'})
                $('.p2_inner').css({'z-index':'1'})
                $('.p3_inner').css({'opacity':'0'})
                $('.p3_inner').css({'z-index':'-1'})
            },1500)
})

        $('.home').click(function(){
            $('.page section:nth-child(2)').css({'z-index':'-1'});
            $('.page section:nth-child(2)').css({'opacity':'0'});
            $('.page section:nth-child(3)').css({'z-index':'-1'});
            $('.page section:nth-child(3)').css({'opacity':'0'});
            $('.page section:nth-child(4)').css({'z-index':'-1'});
            $('.page section:nth-child(4)').css({'opacity':'0'});
            $('.page section:nth-child(5)').css({'z-index':'-1'});
            $('.page section:nth-child(5)').css({'opacity':'0'});
            $('.page section:nth-child(1)').css({'z-index':'1'});
            $('.page section:nth-child(1)').css({'opacity':'1'});

            // 프로필 
        $('.profile_img1 img:nth-child(1)').css({'transform':'translateX(-100%)'})
        $('.profile_img2 img:nth-child(1)').css({'transform':'translateY(-120%)'})
        $('.profile_img3 img:nth-child(1)').css({'transform':'translateX(100%)'})
        $('.profile_img4 img:nth-child(1)').css({'transform':'translateY(120%)'})
        
                $('.profile_img1 img:nth-child(2)').css({'transform':'scale(0)'})
                $('.profile_img1 img:nth-child(3)').css({'transform':'scale(0)'})
                $('.profile_img1 img:nth-child(4)').css({'transform':'scale(0)'})

                // p1, p2, p3 버튼
            setTimeout(function(){
                $('.p1_inner').css({'opacity':'0'})
                $('.p1_inner').css({'z-index':'-1'})
                $('.p2_inner').css({'opacity':'0'})
                $('.p2_inner').css({'z-index':'-1'})
                $('.p3_inner').css({'opacity':'0'})
                $('.p3_inner').css({'z-index':'-1'})
            },0)
        })

        $('.main_btn, .profile_btn, .p1_btn, .p2_btn, .p3_btn').click(function(){
        $('.preview_img ul').css({'transform':'translateX(0)'})
        $('.preview_left').css({'transform':'scale(1)'})
        $('.preview_right').css({'transform':'scale(1)'})
        $('.preview_center').css({'transform':'scale(1.5)'})
        })
        

    // 메인 설정
    setTimeout(function(){
        $('.main').css({'opacity':'1'})
    },1000)


    // 메인 텍스트 설정
    setTimeout(function(){
        $('.main_img img:nth-child(2)').css({'right':'14%'})
        $('.main_img img:nth-child(2)').css({'opacity':'1'})
        $('.main_img img:nth-child(12)').css({'opacity':'1'})
        $('.main_img img:nth-child(12)').css({'width':'70%'})
    },1500)


    // 메인 이미지 설정
    setTimeout(function(){
        $('.main_img div:nth-child(3)').css({'opacity':'1'})
        $('.main_img div:nth-child(3)').css({'right':'-1px'})
        $('.main_img div:nth-child(3)').css({'transform':'translateX(0)'})
        $('.main_img div:nth-child(17)').css({'transform':'translateX(0)'})
    },2000)

    setTimeout(function(){
        $('.main_img img:nth-child(1)').css({'opacity':'1'})
    },3000)

    setTimeout(function(){
        $('.main_txt div:nth-child(1)').css({'top':'5%'})
        $('.main_txt div:nth-child(2)').css({'left':'12%'})
        $('.main_txt div:nth-child(3)').css({'right':'54%'})
        $('.main_txt div:nth-child(4)').css({'bottom':'57%'})
    },4000)

    setTimeout(function(){
        $('.page section:nth-child(6)').css({'z-index':'-1'})
        $('.main_img div:nth-child(19)').css({'display':'block'})
    },5000)

    // 메인 텍스트 호버 인터렉션
    $('.main_txt div:nth-child(1)').mouseover(function(){
        $(this).css({'top':'2%'})
    })

    $('.main_txt div:nth-child(1)').mouseout(function(){
        $(this).css({'top':'5%'})
    })

    $('.main_txt div:nth-child(2)').mouseover(function(){
        $(this).css({'left':'10%'})
    })

    $('.main_txt div:nth-child(2)').mouseout(function(){
        $(this).css({'left':'12%'})
    })

    $('.main_txt div:nth-child(3)').mouseover(function(){
        $(this).css({'right':'52%'})
    })

    $('.main_txt div:nth-child(3)').mouseout(function(){
        $(this).css({'right':'54%'})
    })

    $('.main_txt div:nth-child(4)').mouseover(function(){
        $(this).css({'bottom':'53%'})
    })

    $('.main_txt div:nth-child(4)').mouseout(function(){
        $(this).css({'bottom':'57%'})
    })

    // 메인 이미지 호버 인터렉션
    $('.main_img img:nth-child(1)').mouseover(function(){
        $(this).css({'transform':'translateX(20px)'})
        $('.main_img img:nth-child(18)').css({'opacity':'1'})
        $('.main_img div:nth-child(19)').css({'display':'none'})
    })

    $('.main_img img:nth-child(1)').mouseout(function(){
        $(this).css({'transform':'translateX(0px)'})
        $('.main_img img:nth-child(18)').css({'opacity':'0'})

        setTimeout(function(){

            
        $('.main_img div:nth-child(19)').css({'display':'block'})
        },800)
    })
    

    // 메인 마우스 이펙트
    /*
    $('section').mousemove(function(e){

        let posX = e.pageX;
        let posY = e.pageY;
        $('.main_shadow').css({'right':18-(posX/50)+'%'})
    })
    */

    // 프로필 버튼
    $('.main_btn1-5').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.main_btn1-1').css({'opacity':'1'})
        $('.main_btn1-6').css({'color':'#06297F'})
        $('.main_btn1-7').css({'color':'#06297F'})
        $('.main_btn1-8').css({'color':'#06297F'})
        $('.main_txt div:nth-child(1)').css({'animation':'scale(1.03)'})
        $('.main_txt div:nth-child(2)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(3)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(4)').css({'transform':'scale(1.03)'})
        $('.main_img img:nth-child(4)').css({'opacity':'1'})
        $('.main_img div:nth-child(5)').css({'opacity':'1'})
        $('.main_img img:nth-child(1)').css({'transform':'translateX(10px)'})
        $('.main_inner').css({'animation':'ani2 1.5s infinite linear'})
        $('.main_inner').css({'border':'solid #06297F 5px'})
        $('.main_img img:nth-child(12)').css({'opacity':'0'})
        $('.main_img img:nth-child(13)').css({'opacity':'1'})
        $('.main_img div:nth-child(17)').css({'transition':'all 1s'})
        $('.main_img div:nth-child(17)').css({'background-color':'#06297F'})
    })

    $('.main_btn1-5').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.main_btn1-1').css({'opacity':'0'})
        $('.main_inner').css({'border':'solid #FFAA00 5px'})
        $('.main_inner').css({'animation':'none'})
        $('.main_btn1-6').css({'color':'#FFAA00'})
        $('.main_btn1-7').css({'color':'#FFAA00'})
        $('.main_btn1-8').css({'color':'#FFAA00'})
        $('.main_txt div:nth-child(1)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(2)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(3)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(4)').css({'transform':'scale(1)'})
        $('.main_img img:nth-child(4)').css({'opacity':'0'})
        $('.main_img div:nth-child(5)').css({'opacity':'0'})
        $('.main_img img:nth-child(1)').css({'transform':'translateX(0px)'})
        $('.main_img img:nth-child(12)').css({'opacity':'1'})
        $('.main_img img:nth-child(13)').css({'opacity':'0'})
        $('.main_img div:nth-child(17)').css({'background-color':'#FFAA00'})
    })

    // 타슈 버튼
    $('.main_btn1-6').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.main_btn1-2').css({'opacity':'1'})
        $('.main_inner').css({'border':'solid #2f9600 5px'})
        $('.main_inner').css({'animation':'ani11 1.5s infinite linear'})
        $('.main_btn1-5').css({'color':'#2f9600'})
        $('.main_btn1-7').css({'color':'#2f9600'})
        $('.main_btn1-8').css({'color':'#2f9600'})
        $('.main_txt div:nth-child(1)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(2)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(3)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(4)').css({'transform':'scale(1.03)'})
        $('.main_img img:nth-child(6)').css({'opacity':'1'})
        $('.main_img div:nth-child(7)').css({'opacity':'1'})
        $('.main_img img:nth-child(1)').css({'transform':'translateX(10px)'})
        $('.main_img img:nth-child(12)').css({'opacity':'0'})
        $('.main_img img:nth-child(14)').css({'opacity':'1'})
        $('.main_img div:nth-child(17)').css({'background-color':'#4ECF13'})
    })
    $('.main_btn1-6').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.main_btn1-2').css({'opacity':'0'})
        $('.main_inner').css({'border':'solid #FFAA00 5px'})
        $('.main_inner').css({'animation':'none'})
        $('.main_btn1-5').css({'color':'#FFAA00'})
        $('.main_btn1-7').css({'color':'#FFAA00'})
        $('.main_btn1-8').css({'color':'#FFAA00'})
        $('.main_txt div:nth-child(1)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(2)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(3)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(4)').css({'transform':'scale(1)'})
        $('.main_img img:nth-child(6)').css({'opacity':'0'})
        $('.main_img div:nth-child(7)').css({'opacity':'0'})
        $('.main_img img:nth-child(1)').css({'transform':'translateX(0px)'})
        $('.main_img img:nth-child(12)').css({'opacity':'1'})
        $('.main_img img:nth-child(14)').css({'opacity':'0'})
        $('.main_img div:nth-child(17)').css({'background-color':'#FFAA00'})
    })

    // 발렌시아가 버튼
    $('.main_btn1-7').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.main_btn1-3').css({'opacity':'1'})
        $('.main_inner').css({'border':'solid #1C1C1C 5px'})
        $('.main_inner').css({'animation':'ani16 1.5s infinite linear'})
        $('.main_btn1-5').css({'color':'#1C1C1C'})
        $('.main_btn1-6').css({'color':'#1C1C1C'})
        $('.main_btn1-8').css({'color':'#1C1C1C'})
        $('.main_txt div:nth-child(1)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(2)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(3)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(4)').css({'transform':'scale(1.03)'})
        $('.main_img img:nth-child(8)').css({'opacity':'1'})
        $('.main_img div:nth-child(9)').css({'opacity':'1'})
        $('.main_img img:nth-child(1)').css({'transform':'translateX(10px)'})
        $('.main_img img:nth-child(12)').css({'opacity':'0'})
        $('.main_img img:nth-child(15)').css({'opacity':'1'})
        $('.main_img div:nth-child(17)').css({'background-color':'#1C1C1C'})
    })
    $('.main_btn1-7').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.main_btn1-3').css({'opacity':'0'})
        $('.main_inner').css({'border':'solid #FFAA00 5px'})
        $('.main_inner').css({'animation':'none'})
        $('.main_btn1-5').css({'color':'#FFAA00'})
        $('.main_btn1-6').css({'color':'#FFAA00'})
        $('.main_btn1-8').css({'color':'#FFAA00'})
        $('.main_txt div:nth-child(1)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(2)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(3)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(4)').css({'transform':'scale(1)'})
        $('.main_img img:nth-child(8)').css({'opacity':'0'})
        $('.main_img div:nth-child(9)').css({'opacity':'0'})
        $('.main_img img:nth-child(1)').css({'transform':'translateX(0px)'})
        $('.main_img img:nth-child(12)').css({'opacity':'1'})
        $('.main_img img:nth-child(15)').css({'opacity':'0'})
        $('.main_img div:nth-child(17)').css({'background-color':'#FFAA00'})
    })

    // 검정치마 버튼
    $('.main_btn1-8').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.main_btn1-4').css({'opacity':'1'})
        $('.main_inner').css({'border':'solid #FF7575 5px'})
        $('.main_inner').css({'animation':'ani21 1.5s infinite linear'})
        $('.main_btn1-5').css({'color':'#FF7575'})
        $('.main_btn1-6').css({'color':'#FF7575'})
        $('.main_btn1-7').css({'color':'#FF7575'})
        $('.main_txt div:nth-child(1)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(2)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(3)').css({'transform':'scale(1.03)'})
        $('.main_txt div:nth-child(4)').css({'transform':'scale(1.03)'})
        $('.main_img img:nth-child(10)').css({'opacity':'1'})
        $('.main_img div:nth-child(11)').css({'opacity':'1'})
        $('.main_img img:nth-child(1)').css({'transform':'translateX(10px)'})
        $('.main_img img:nth-child(12)').css({'opacity':'0'})
        $('.main_img img:nth-child(16)').css({'opacity':'1'})
        $('.main_img div:nth-child(17)').css({'background-color':'#FF7575'})
    })
    $('.main_btn1-8').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.main_btn1-4').css({'opacity':'0'})
        $('.main_inner').css({'border':'solid #FFAA00 5px'})
        $('.main_inner').css({'animation':'none'})
        $('.main_btn1-5').css({'color':'#FFAA00'})
        $('.main_btn1-6').css({'color':'#FFAA00'})
        $('.main_btn1-7').css({'color':'#FFAA00'})
        $('.main_txt div:nth-child(1)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(2)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(3)').css({'transform':'scale(1)'})
        $('.main_txt div:nth-child(4)').css({'transform':'scale(1)'})
        $('.main_img img:nth-child(10)').css({'opacity':'0'})
        $('.main_img div:nth-child(11)').css({'opacity':'0'})
        $('.main_img img:nth-child(1)').css({'transform':'translateX(0px)'})
        $('.main_img img:nth-child(12)').css({'opacity':'1'})
        $('.main_img img:nth-child(16)').css({'opacity':'0'})
        $('.main_img div:nth-child(17)').css({'background-color':'#FFAA00'})
    })







    // 프로필 설정
    // 홈 버튼
    $('.profile .home').mouseenter(function(){
        $(this).css({'animation':'ani8 1.5s infinite linear'})
    })

    $('.profile .home').mouseleave(function(){
        $(this).css({'animation':'none'})
    })

    // 프로필 버튼
    $('.profile_btn1-5').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.profile_btn1-1').css({'opacity':'1'})
        $('.profile_inner').css({'animation':'ani2 1.5s infinite linear'})
        $('.profile_btn1-5').css({'animation':'none'})
    })
    $('.profile_btn1-5').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.profile_btn1-1').css({'opacity':'0'})
        $('.profile_inner').css({'animation':'none'})
    })

    // 타슈 버튼
    $('.profile_btn1-6').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.profile_btn1-2').css({'opacity':'1'})
        $('.profile_inner').css({'animation':'ani3 1.5s infinite linear'})
    })
    $('.profile_btn1-6').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.profile_btn1-2').css({'opacity':'0'})
        $('.profile_inner').css({'animation':'none'})
    })

    // 발렌시아가 버튼
    $('.profile_btn1-7').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.profile_btn1-3').css({'opacity':'1'})
        $('.profile_inner').css({'animation':'ani4 1.5s infinite linear'})
    })
    $('.profile_btn1-7').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.profile_btn1-3').css({'opacity':'0'})
        $('.profile_inner').css({'animation':'none'})
    })

    // 검정치마 버튼
    $('.profile_btn1-8').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.profile_btn1-4').css({'opacity':'1'})
        $('.profile_inner').css({'animation':'ani5 1.5s infinite linear'})
    })
    $('.profile_btn1-8').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.profile_btn1-4').css({'opacity':'0'})
        $('.profile_inner').css({'animation':'none'})
    })

    // p1 설정

    // p1 버튼 설정
    $('.p1 .detail_view').mouseover(function(){
        $('.p1 .detail_view p ').css({'color':'#a0c18e'})
        $('.p1 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p1 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p1 .preview_center img').css({'box-shadow':'none'})
    })

    $('.p1 .detail_view').mouseleave(function(){
        $('.p1 .detail_view p ').css({'color':'#fff'})
    })


    $('.p1 .website').mouseover(function(){
        $('.p1 .website p ').css({'color':'#a0c18e'})
        $('.p1 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p1 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p1 .preview_center img').css({'box-shadow':'none'})
    })

    $('.p1 .website').mouseleave(function(){
        $('.p1 .website p').css({'color':'#fff'})
    })

    $('.p1 .detail_view_exit').mouseover(function(){
        $(this).css({'right':'12%'})
        $('.p1 .detail_view_exit p').css({'color':'#505050'})
    })
    $('.p1 .detail_view_website a').mouseover(function(){
        $(this).css({'right':'12%'})
        $('.p1 .detail_view_exit p').css({'color':'#c1c1c1'})
    })

    $('.p1 .detail_view_exit').mouseleave(function(){
        $(this).css({'right':'17.6%'})
        $('.p1 .detail_view_website p').css({'color':'#505050'})
    })
    $('.p1 .detail_view_website a').mouseleave(function(){
        $(this).css({'right':'17.6%'})
        $('.p1 .detail_view_website p').css({'color':'#c1c1c1'})
    })
    

    // p1 프리뷰 사진
    $('.p1 .preview_left').mouseover(function(){
        $('.p1 .preview_img ul').css({'transform':'translateX(35%)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p1 .preview_center').css({'transform':'scale(1)'})
        $('.p1 .preview_left img').css({'box-shadow':'none'})
            $('.p1 .preview_center img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p1 .preview_right').mouseover(function(){
        $('.p1 .preview_img ul').css({'transform':'translateX(-35%)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p1 .preview_center').css({'transform':'scale(1)'})
        $('.p1 .preview_right img').css({'box-shadow':'none'})
            $('.p1 .preview_center img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p1 .preview_center').mouseover(function(){
        $('.p1 .preview_img ul').css({'transform':'translateX(0)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p1 .preview_left').css({'transform':'scale(1)'})
        $('.p1 .preview_right').css({'transform':'scale(1)'})
        $('.p1 .preview_center img').css({'box-shadow':'none'})
            $('.p1 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
            $('.p1 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p1_inner').mouseleave(function(){
        $('.p1 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p1 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p1 .preview_center img').css({'box-shadow':'none'})
    })

    // p1 디테일뷰 설정
    $('.p1 .detail_view').click(function(){
        $('.p1 .detail_view_page').css({'display':'block'})
        $('.p1 .preview_img ul').css({'transform':'translateX(0)'})
        $('.p1 .preview_left').css({'transform':'scale(1)'})
        $('.p1 .preview_right').css({'transform':'scale(1)'})
        $('.p1 .preview_center').css({'transform':'scale(1.5)'})

        setTimeout(function(){
            $('.p1 .detail_view_page').css({'opacity':'1'})
        },50)


        setTimeout(function(){
            $('.p1 .detail_view_page_inner').addClass('on')
        },1000)

        setTimeout(function(){
            $('.p1 .detail_view_exit').css({'opacity':'1'})
            $('.p1 .detail_view_website a').css({'opacity':'1'})
            $('.p1 .detail_view_page_inner').css({'overflow-y':'scroll'})
        },2000)
    })

    $('.p1 .detail_view_exit').click(function(){
        $('.p1 .detail_view_page').css({'opacity':'0'})

        setTimeout(function(){
            $('.p1 .detail_view_exit').css({'opacity':'0'})
            $('.p1 .detail_view_website a').css({'opacity':'0'})
            $('.p1 .detail_view_page').css({'display':'none'})
            $('.p1 .detail_view_page_inner').removeClass('on')
            $('.p1 .detail_view_page_inner').css({'overflow-y':'hidden'})
        },1000)
    })

    //p1 home 버튼
    $('.p1 .home').mouseenter(function(){
        $(this).css({'animation':'ani8 1.5s infinite linear'})
    })

    $('.p1 .home').mouseleave(function(){
        $(this).css({'animation':'none'})
    })
    
    //p1 프로필 버튼
    $('.p1_btn1-5').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p1_btn1-1').css({'opacity':'1'})
        $('.p1_inner').css({'animation':'ani10 1.5s infinite linear'})
        $('.p1_btn1-1').css({'color':'#06297F'})
    })
    $('.p1_btn1-5').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p1_btn1-1').css({'opacity':'0'})
        $('.p1_inner').css({'animation':'none'})
    })

    //p1 타슈 버튼
    $('.p1_btn1-6').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $(this).css({'animation':'none'})
        $('.p1_btn1-2').css({'opacity':'1'})
        $('.p1_inner').css({'animation':'ani11 1.5s infinite linear'})
    })
    $('.p1_btn1-6').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p1_btn1-2').css({'opacity':'0'})
        $('.p1_inner').css({'animation':'none'})
    })

    //p1 발렌시아가 버튼
    $('.p1_btn1-7').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p1_btn1-3').css({'opacity':'1'})
        $('.p1_inner').css({'animation':'ani12 1.5s infinite linear'})
    })
    $('.p1_btn1-7').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p1_btn1-3').css({'opacity':'0'})
        $('.p1_inner').css({'animation':'none'})
    })

    //p1 검정치마 버튼
    $('.p1_btn1-8').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p1_btn1-4').css({'opacity':'1'})
        $('.p1_inner').css({'animation':'ani13 1.5s infinite linear'})
    })
    $('.p1_btn1-8').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p1_btn1-4').css({'opacity':'0'})
        $('.p1_inner').css({'animation':'none'})
    })

    // p2 설정
    //p1 home 버튼
    $('.p2 .home').mouseenter(function(){
        $(this).css({'animation':'ani8 1.5s infinite linear'})
    })

    $('.p2 .home').mouseleave(function(){
        $(this).css({'animation':'none'})
    })

    // 프로필 버튼
    $('.p2_btn1-5').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p2_btn1-1').css({'opacity':'1'})
        $('.p2_inner').css({'animation':'ani14 1.5s infinite linear'})
        $('.p2_btn1-1').css({'color':'#06297F'})
    })
    $('.p2_btn1-5').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p2_btn1-1').css({'opacity':'0'})
        $('.p2_inner').css({'animation':'none'})
    })

    // 타슈 버튼
    $('.p2_btn1-6').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p2_btn1-2').css({'opacity':'1'})
        $('.p2_inner').css({'animation':'ani15 1.5s infinite linear'})
        $('.p2_btn1-2').css({'color':'#2f9600'})
    })
    $('.p2_btn1-6').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p2_btn1-2').css({'opacity':'0'})
        $('.p2_inner').css({'animation':'none'})
    })

    // 발렌시아가 버튼
    $('.p2_btn1-7').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $(this).css({'animation':'none'})
        $('.p2_btn1-3').css({'opacity':'1'})
        $('.p2_inner').css({'animation':'ani16 1.5s infinite linear'})
    })
    $('.p2_btn1-7').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p2_btn1-3').css({'opacity':'0'})
        $('.p2_inner').css({'animation':'none'})
    })

    // 검정치마 버튼
    $('.p2_btn1-8').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p2_btn1-4').css({'opacity':'1'})
        $('.p2_inner').css({'animation':'ani17 1.5s infinite linear'})
    })
    $('.p2_btn1-8').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p2_btn1-4').css({'opacity':'0'})
        $('.p2_inner').css({'animation':'none'})
    })

    // p2 설정

    // p2 버튼 설정
    $('.p2 .detail_view').mouseover(function(){
        $('.p2 .detail_view p ').css({'color':'#aaa'})
        $('.p2 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p2 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p2 .preview_center img').css({'box-shadow':'none'})
    })

    $('.p2 .detail_view').mouseleave(function(){
        $('.p2 .detail_view p ').css({'color':'#fff'})
    })


    $('.p2 .website').mouseover(function(){
        $('.p2 .website p ').css({'color':'#aaa'})
        $('.p2 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p2 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p2 .preview_center img').css({'box-shadow':'none'})
    })

    $('.p2 .website').mouseleave(function(){
        $('.p2 .website p').css({'color':'#fff'})
    })

    $('.p2 .detail_view_exit').mouseover(function(){
        $(this).css({'right':'12%'})
        $('.p2 .detail_view_exit p').css({'color':'#505050'})
    })
    $('.p2 .detail_view_website a').mouseover(function(){
        $(this).css({'right':'12%'})
        $('.p2 .detail_view_exit p').css({'color':'#c1c1c1'})
    })

    $('.p2 .detail_view_exit').mouseleave(function(){
        $(this).css({'right':'17.6%'})
        $('.p2 .detail_view_website p').css({'color':'#505050'})
    })
    $('.p2 .detail_view_website a').mouseleave(function(){
        $(this).css({'right':'17.6%'})
        $('.p2 .detail_view_website p').css({'color':'#c1c1c1'})
    })
    

    // p2 프리뷰 사진
    $('.p2 .preview_left').mouseover(function(){
        $('.p2 .preview_img ul').css({'transform':'translateX(35%)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p2 .preview_center').css({'transform':'scale(1)'})
        $('.p2 .preview_left img').css({'box-shadow':'none'})
            $('.p2 .preview_center img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p2 .preview_right').mouseover(function(){
        $('.p2 .preview_img ul').css({'transform':'translateX(-35%)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p2 .preview_center').css({'transform':'scale(1)'})
        $('.p2 .preview_right img').css({'box-shadow':'none'})
            $('.p2 .preview_center img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p2 .preview_center').mouseover(function(){
        $('.p2 .preview_img ul').css({'transform':'translateX(0)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p2 .preview_left').css({'transform':'scale(1)'})
        $('.p2 .preview_right').css({'transform':'scale(1)'})
        $('.p2 .preview_center img').css({'box-shadow':'none'})
            $('.p2 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
            $('.p2 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p2_inner').mouseleave(function(){
        $('.p2 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p2 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p2 .preview_center img').css({'box-shadow':'none'})
    })

    // p2 디테일뷰 설정
    $('.p2 .detail_view').click(function(){
        $('.p2 .detail_view_page').css({'display':'block'})

        setTimeout(function(){
            $('.p2 .detail_view_page').css({'opacity':'1'})
        },50)


        setTimeout(function(){
            $('.p2 .detail_view_page_inner').addClass('on')
        },1000)

        setTimeout(function(){
            $('.p2 .detail_view_exit').css({'opacity':'1'})
            $('.p2 .detail_view_website a').css({'opacity':'1'})
            $('.p2 .detail_view_page_inner').css({'overflow-y':'scroll'})
        },2000)
    })

    $('.p2 .detail_view_exit').click(function(){
        $('.p2 .detail_view_page').css({'opacity':'0'})

        setTimeout(function(){
            $('.p2 .detail_view_exit').css({'opacity':'0'})
            $('.p2 .detail_view_website a').css({'opacity':'0'})
            $('.p2 .detail_view_page').css({'display':'none'})
            $('.p2 .detail_view_page_inner').removeClass('on')
            $('.p2 .detail_view_page_inner').css({'overflow-y':'hidden'})
        },1000)
    })

    // p3 설정
    //p3 home 버튼
    $('.p3 .home').mouseenter(function(){
        $(this).css({'animation':'ani8 1.5s infinite linear'})
    })

    $('.p3 .home').mouseleave(function(){
        $(this).css({'animation':'none'})
    })

    // 프로필 버튼
    $('.p3_btn1-5').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p3_btn1-1').css({'opacity':'1'})
        $('.p3_inner').css({'animation':'ani18 1.5s infinite linear'})
        $('.p3_btn1-1').css({'color':'#06297F'})
    })
    $('.p3_btn1-5').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p3_btn1-1').css({'opacity':'0'})
        $('.p3_inner').css({'animation':'none'})
    })

    // 타슈 버튼
    $('.p3_btn1-6').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p3_btn1-2').css({'opacity':'1'})
        $('.p3_inner').css({'animation':'ani19 1.5s infinite linear'})
        $('.p3_btn1-2').css({'color':'#2f9600'})
    })
    $('.p3_btn1-6').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p3_btn1-2').css({'opacity':'0'})
        $('.p3_inner').css({'animation':'none'})
    })

    // 발렌시아가 버튼
    $('.p3_btn1-7').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p3_btn1-3').css({'opacity':'1'})
        $('.p3_inner').css({'animation':'ani20 1.5s infinite linear'})
    })
    $('.p3_btn1-7').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p3_btn1-3').css({'opacity':'0'})
        $('.p3_inner').css({'animation':'none'})
    })

    // 검정치마 버튼
    $('.p3_btn1-8').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $('.p3_btn1-4').css({'opacity':'1'})
        $('.p3_inner').css({'animation':'ani21 1.5s infinite linear'})
        $(this).css({'animation':'none'})
    })
    $('.p3_btn1-8').mouseleave(function(){
        $(this).css({'opacity':'1'})
        $('.p3_btn1-4').css({'opacity':'0'})
        $('.p3_inner').css({'animation':'none'})
    })

    // p3 설정

    // p3 버튼 설정
    $('.p3 .detail_view').mouseover(function(){
        $('.p3 .detail_view p ').css({'color':'#eee'})
        $('.p3 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p3 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p3 .preview_center img').css({'box-shadow':'none'})
    })

    $('.p3 .detail_view').mouseleave(function(){
        $('.p3 .detail_view p ').css({'color':'#fff'})
    })


    $('.p3 .website').mouseover(function(){
        $('.p3 .website p ').css({'color':'#eee'})
        $('.p3 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p3 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p3 .preview_center img').css({'box-shadow':'none'})
    })

    $('.p3 .website').mouseleave(function(){
        $('.p3 .website p').css({'color':'#fff'})
    })

    $('.p3 .detail_view_exit').mouseover(function(){
        $(this).css({'right':'12%'})
        $('.p3 .detail_view_exit p').css({'color':'#505050'})
    })
    $('.p3 .detail_view_website a').mouseover(function(){
        $(this).css({'right':'12%'})
        $('.p3 .detail_view_exit p').css({'color':'#c1c1c1'})
    })

    $('.p3 .detail_view_exit').mouseleave(function(){
        $(this).css({'right':'17.6%'})
        $('.p3 .detail_view_website p').css({'color':'#505050'})
    })
    $('.p3 .detail_view_website a').mouseleave(function(){
        $(this).css({'right':'17.6%'})
        $('.p3 .detail_view_website p').css({'color':'#c1c1c1'})
    })
    

    // p3 프리뷰 사진
    $('.p3 .preview_left').mouseover(function(){
        $('.p3 .preview_img ul').css({'transform':'translateX(35%)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p3 .preview_center').css({'transform':'scale(1)'})
        $('.p3 .preview_left img').css({'box-shadow':'none'})
            $('.p3 .preview_center img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p3 .preview_right').mouseover(function(){
        $('.p3 .preview_img ul').css({'transform':'translateX(-35%)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p3 .preview_center').css({'transform':'scale(1)'})
        $('.p3 .preview_right img').css({'box-shadow':'none'})
            $('.p3 .preview_center img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p3 .preview_center').mouseover(function(){
        $('.p3 .preview_img ul').css({'transform':'translateX(0)'})
        $(this).css({'transform':'scale(1.5)'})
        $('.p3 .preview_left').css({'transform':'scale(1)'})
        $('.p3 .preview_right').css({'transform':'scale(1)'})
        $('.p3 .preview_center img').css({'box-shadow':'none'})
            $('.p3 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
            $('.p3 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
    })

    $('.p3_inner').mouseleave(function(){
        $('.p3 .preview_left img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p3 .preview_right img').css({'box-shadow':'0px 0px 20px 20px'})
        $('.p3 .preview_center img').css({'box-shadow':'none'})
    })

    // p3 디테일뷰 설정
    $('.p3 .detail_view').click(function(){
        $('.p3 .detail_view_page').css({'display':'block'})

        setTimeout(function(){
            $('.p3 .detail_view_page').css({'opacity':'1'})
        },50)


        setTimeout(function(){
            $('.p3 .detail_view_page_inner').addClass('on')
        },1000)

        setTimeout(function(){
            $('.p3 .detail_view_exit').css({'opacity':'1'})
            $('.p3 .detail_view_website a').css({'opacity':'1'})
            $('.p3 .detail_view_page_inner').css({'overflow-y':'scroll'})
        },2000)
    })

    $('.p3 .detail_view_exit').click(function(){
        $('.p3 .detail_view_page').css({'opacity':'0'})

        setTimeout(function(){
            $('.p3 .detail_view_exit').css({'opacity':'0'})
            $('.p3 .detail_view_website a').css({'opacity':'0'})
            $('.p3 .detail_view_page').css({'display':'none'})
            $('.p3 .detail_view_page_inner').removeClass('on')
            $('.p3 .detail_view_page_inner').css({'overflow-y':'hidden'})
        },1000)
    })
})