$(document).ready(function(){

    $('header button').click(function(){

        $('form').slideDown(1000)
    })

    $('#remove').click(function(){

        $('form').slideUp(1000);
    })

    $('body').on('click', function(e){

        e.preventDefault()
    })
    
        $('#add').on('click',function(){
    
            const add = $('#URL').val()
            const novo = $('<li></li>')
            $(`<img src = "${add}" alt = "">`).appendTo(novo) /*appendTo() vai adicionar esse valor a variavel passada como parametro*/
            $(`<div class = "overlay_link"> <a target="_blank" href = "${add}">Ver imagem em tamanho real</a> </div>`).appendTo(novo)
            $(novo).appendTo('ul')
            $('#URL').val('')
        })
})
