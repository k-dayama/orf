var jsondata;
function change(i){
    var tmp = '{"id" :'+i+'}';
    $.ajax({
        type: "POST",
        url: "https://web.sfc.keio.ac.jp/~t16901ky/orf/getlog.php",
        data: {
            "comment": tmp
        },
     });
}
var get_slide = function(){
    $.getJSON('testlog.json',function(data){
        jsondata = data;
        show_slide();
    })
    setTimeout(get_slide,1000);
}
function show_slide(){
    for(i=0;i<2;i++){
        if(i+1 == jsondata.id){
            document.getElementById(i+1).style.display="block";
        }
        if(i+1 != jsondata.id){
            document.getElementById(i+1).style.display="none";
        }
    }
}
get_slide();