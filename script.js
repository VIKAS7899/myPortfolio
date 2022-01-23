 
 $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script

    var typed = new Typed(".typing",{
        strings:["Programmer", "Developer", "Blogger", "Designer"],
        typeSpeed:150,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing1",{
        strings:["Programmer", "Developer", "Blogger", "Designer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
 });