$('#icon-add').click(handler => {
    $('#dialog-mater-key').fadeIn();
});

$('#dialog-mater-key').find('.close').click(handler => {
    $('#dialog-mater-key').fadeOut();
});

$('#dialog-update').find('.close').click(handler => {
    $('#dialog-update').fadeOut();
    $('#icon-update-info').fadeOut();
});

$('.menu-navigation > a').click(handler => {
    $('#frame-page').attr('src',handler['target'].getAttribute('data-value') + '.html');
    $('.mdl-layout__drawer').attr('aria-hidden','true').removeClass('is-visible');
    $('.mdl-layout__obfuscator').removeClass('is-visible');
    $('.mdl-layout__header-row > .mdl-layout-title').text(handler['target'].innerHTML);
});

checkUpdate('0.0.1Alpha');

function checkUpdate(currentVersion) {
    $.get('http://localhost:3000/getLatestVersion',(data,status,xhr) =>{
        if(data['version'] != currentVersion) {
            $('#icon-update-info').fadeIn();
            $('#icon-update-info').attr('data-badge', '!');
            $('#dialog-update').fadeIn();
        }
    },'json')
}