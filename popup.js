$(document).ready(function(){
    $.getJSON('words.json',function(data){
        $.each(data, function(key, val){
            $("#words tbody").append("<tr>" +"<td>"+ val['text'] +"</td>" +
                "<td><font color="+ val['color'] +">"+val['color']+"</font></td>"  + "</tr>")
        });
    })
})
