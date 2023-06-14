browser.runtime.onMessage.addListener(download);

function download(message) {      
    var url = message.url;    
    url= url.replace("?static=1","");

    var name= "mewe-img-"+(new Date().getTime())+ message.ext;
    browser.downloads.download({url: url,filename: name});
    console.log(message);
}




