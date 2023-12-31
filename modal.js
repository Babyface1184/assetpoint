const modalHtml = '<section id="modal-full"><div class="modal-main" tabindex="-1" onblur="modalClose()"><div id="modal-message"><h3 class="txt3"></h3></div><div id="modal-actions"><button class="bg0 modal-actions-btn" id="modal-cancel" onclick="modalClose()">Cancel</button><button class="bg1 modal-actions-btn" id="modal-ok">Ok</button></div></div></section>'; 
const modal=(msg='modal message',mode=true,toLink=true,goto=`${window.location}/#`)=>{
    $('body').append(modalHtml);
    $('#modal-full').css('display','block');
    $('.modal-main').focus();
    $('#modal-full').css('display','block');
    $('#modal-message h3').html(msg);
    
    if(mode) $('#modal-cancel').css('display','block');
    

    if(toLink){
        $('#modal-ok').mousedown((e)=>{
            e.preventDefault();
            window.location=goto;
        })
    }
    else if(!toLink){
        $('#modal-ok').mousedown((e)=>{
            e.preventDefault();
            toogleSelection(goto,false);
            modalClose();
        })
    }
}

const modalClose=()=>{
    $('#modal-full').css('display','none');
}
