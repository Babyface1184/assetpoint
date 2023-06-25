const toogleMenu=()=>{
    if(isMenuOpen){
        isMenuOpen=!isMenuOpen;
        menu.style.display="none";
        menu.style.visibility="hidden";
        if(mode=='_m12'){
            $('#slct-12').removeClass('txt-clr1 bg2').addClass('txt-clr5 bg3');
            $('#slct-24').removeClass('txt-clr5 bg3').addClass('txt-clr1 bg2');
        }else if(mode=='_m24'){
            $('#slct-24').removeClass('txt-clr1 bg2').addClass('txt-clr5 bg3');
            $('#slct-12').removeClass('txt-clr5 bg3').addClass('txt-clr1 bg2');
        }
        
    }
    else if(!isMenuOpen){
        isMenuOpen=!isMenuOpen;
        menu.style.display="flex";
        menu.style.visibility="visible";
    }
}
