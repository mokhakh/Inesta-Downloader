$(document).on("mouseover","._aagw,._aakl",function() {
    var parent= $(this).parent();
    var btn = parent.find(".ext_desktop_dl_btn");
    if(btn.length==0){
        parent.append('<a class="ext_desktop_dl_btn ext_windows_font" type="button" data-shortcode="B13KMWplQ6b"><span class="ext_icon"></span><span class="ext_text">DOWNLOAD</span></a>')   ;
        parent.addClass("ext_desktop_dl_Wrapper");
    }
});





$(document).on("click","a.ext_desktop_dl_btn",function(){
    var img= $(this).parent().find("img");
    var vid = $(this).parent().find("video");

    // Angelim 09/05/23 00:31
    var ttl = document.title;

    ttl = ttl.replace("Fotos e vídeos do Instagram","");
    ttl = ttl.replace("Instagram","");
    ttl = ttl.replace(/[^A-Za-z0-9-@_]/g, ' ');
    ttl = ttl.replaceAll("  "," ");
    //    ttl = ttl.replaceAll("#","");
    //    ttl = ttl.replaceAll("@","");
    //    ttl = ttl.replaceAll("!","");
    // End of Update Angelim

    var url ;
    var ext = '';
    if(vid.length >0){
        url = $(vid[0]).attr("src");     
        ext = '.mp4';
    }
    else if(img.length>0){
        url = $(img[0]).attr("src");       
        ext = '.jpg';
    }

    if(!url)
        return;       

    try{                
            browser.runtime.sendMessage({"title": ttl ,"url": url,"ext":ext});
    }catch(e){
        console.log(e);
    }
});