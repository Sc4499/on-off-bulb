function swapimage(){
    console.log("hello sid")
var getimg = document.getElementById('imgswap');
if(getimg.src.match('offbulb.jpg')){
    getimg.src="onbulb.jpg";
    
}else{
    getimg.src="offbulb.jpg";
}
}