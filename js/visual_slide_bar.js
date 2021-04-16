var index = 0;
var rolling = null;
slider();

function slider(type,currentIndex,newIndex){
    flag = true;
    bannerImg = document.querySelectorAll('#visual_content > div');
   
    if(index == bannerImg.length){     
        index = 0;
    }

    if (type != undefined){     
        flag = false;
    }

    for(i=0; i < bannerImg.length; i++){
        var onNum = index+1;        
        if(onNum == 5){
            onNum = 0;
        }

        if (type == 0 ) {       // 이전버튼 클릭
            if (i == currentIndex) {
                bannerImg.item(i).setAttribute('class', 'slide out2');
            } else if (i == newIndex) {
                bannerImg.item(i).setAttribute('class', 'slide on2');
            }
        } else {            // 다음버튼 클릭
            if(i == index){
                bannerImg.item(i).setAttribute('class', 'slide out');
            }else if(i == onNum){
                bannerImg.item(i).setAttribute('class', 'slide on');
            }
        }
    }
    

    //매개변수(버튼이 눌리면)가 들어오면 flag = false 값이 된다.
    if(flag){
        index ++;
    } else {
        index = newIndex;
    }
       
}

function BannerBtn(type){
    console.log(index);
    var newIndex;
    if (type == 0) {    
        newIndex = index - 1;
        if (newIndex == -1) { newIndex = 4; }
        
    } else if (type == 1) {     
        newIndex = index + 1;
        if (newIndex == 5) { newIndex= 0; }
        
    }

    clearInterval(rolling);
   
    slider(type,index,newIndex);       
    rolling = setInterval(slider,5000);    
}


rolling = setInterval(slider,5000);


