let isMenuOpen=false;
const toogleMenu=()=>{
    if(isMenuOpen){
        isMenuOpen=!isMenuOpen;
        $('#menu').removeClass('').addClass('');
        $('#menu').removeClass('').addClass('');
        $('#menu').css({'display':'none','visibility':'hidden'})
        $('body').css({'overflow':'scroll'});
        
    }
    else if(!isMenuOpen){
        isMenuOpen=!isMenuOpen;
        $('#menu').css({'display':'block','visibility':'visible'});
        $('body').css({'overflow':'hidden'});

        menu.style.visibility="visible";
    }
}
