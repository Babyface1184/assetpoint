let isMenuOpen=false;
const toogleMenu=()=>{
    if(isMenuOpen){
        isMenuOpen=!isMenuOpen;
        $('#menu').removeClass('men-opn').addClass('men-cls');
        setTimeout(() => {
            $('#menu').css({'display':'none','visibility':'hidden'})
        }, 100);
        $('body').css({'overflow':'scroll'});
        $('#men-open-btn').removeClass('fa-close').addClass('fa-bars');
        
        
    }
    else if(!isMenuOpen){
        isMenuOpen=!isMenuOpen;
        $('#menu').removeClass('men-cls').addClass('men-opn');
        $('#menu').css({'display':'block','visibility':'visible'});
        $('body').css({'overflow':'hidden'});
        $('#men-open-btn').removeClass('fa-bars').addClass('fa-close');
    }
}
