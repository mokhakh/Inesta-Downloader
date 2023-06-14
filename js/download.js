browser.runtime.onMessage.addListener(download);

function download(message) {      
    var url = message.url;    
    url= url.replace("?static=1","");
    
    var name= url;
    name = "Instagram-" + message.title + name.substring(name.lastIndexOf("/")+1,name.indexOf("?")) + message.ext;    
    browser.downloads.download({url: url,filename: name});
    console.log(message);
}




