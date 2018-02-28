function highLite(data){
    var doc = document.querySelectorAll("*");
    //var regex = new RegExp('');
    for(var i = 0; i < doc.length; i++){
        if(doc[i].childElementCount==0){
            for(var word in data){
                doc[i].innerHTML = doc[i].innerHTML.replace(new RegExp(data[word].text,'gi'),
                '<span style="background-color:'+data[word].color+
                    ';">'+data[word].text+'</span>');

               /* var found = doc[i].matches(new RegExp(data[word].text,'gi'));
                for(var match in fount){
                    doc[i].innerHTML = doc[i].innerHTML.replace(match,
                        '<span style="background-color:'+data[word].color+
                            ';">'+match+'</span>');
                }*/ 
            }
        }
    }
    console.log(doc);
}

chrome.runtime.sendMessage("",{msg:"words"},function(data){
    highLite(data.content);
    //alert(data.key);
})

