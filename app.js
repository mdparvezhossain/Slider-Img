var photos = ["images/p1.jpg", "images/p2.jpg", "images/p3.jpg"];
var findImg = document.getElementById("#imgId");

var count = 0;

function nxt(){
    count++;
    if(count >= photos.length){
        count=0;
        findImg.src = photos[count];
    }else{
        findImg.src = photos[count];
    }
    
};


function prev(){
    count--;
    if(count < 0 ){
        count= photos.length - 1;
        findImg.src = photos[count];
    }else{
        findImg.src = photos[count];
    }
};