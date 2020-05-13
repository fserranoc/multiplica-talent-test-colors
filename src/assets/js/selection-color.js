export function showMessageBox(id){
    const $infoBox = $('#infobox_'+id);
    const $messageBox = $('#messagebox_'+id);
    const $allMessagesBoxes = $('.message-box');
    const $allInfoBoxes = $('.info-box');

    $($allMessagesBoxes).addClass('hidden');
    $($allInfoBoxes).removeClass('hidden')

    $($messageBox).html('<span>El color ha sido copiado en el portapapeles.</span>');

    $($infoBox).addClass('hidden')
    $($messageBox).removeClass('hidden')

    setTimeout(function(){
        $($infoBox).removeClass('hidden')
        $($messageBox).addClass('hidden')
        $('#messagebox_'+id + ' span').remove();
    }, 4000);
    
}