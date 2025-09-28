

function ToggleVisibility(element){
    $(element).click(function () {
        if(element === '#hidebutton'){
            $(element).fadeOut();
            $('#showbutton').fadeIn();
        }
        else if(element === '#showbutton'){
            $(element).fadeOut();
            $('#hidebutton').fadeIn();
        }
    })


}

$(document).ready(function (){
    ToggleVisibility('#hidebutton')
    ToggleVisibility('#showbutton')
})