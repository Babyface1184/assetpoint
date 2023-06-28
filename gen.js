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

const toogleSelection=(type,toggleMenu=true)=>{
    $('.center-item').css('display','none');
    $('.menu-btn').removeClass('menu-btn-on').addClass('menu-btn-off');
    switch (type) {
        case 1:
            $('#page').css('display','block');
            $('#show-dashboard').addClass('menu-btn-on');
            break;
        case 2:
            $('#profile').css('display','block');
            $('#show-profile').addClass('menu-btn-on');
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            $('#history').css('display','block');   
            $('#show-history').addClass('menu-btn-on');
            break;
        case 6:
            $('#settings').css('display','block');   
            $('#show-settings').addClass('menu-btn-on');
            break;
    
    
        default:
            break;
    }
    if(toggleMenu && window.innerWidth<600) toogleMenu()
}
