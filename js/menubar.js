/*PC ver 메뉴 부분 눌렀을때*/
var menubar = document.querySelector('#menubar');

function menuBtn(){
    className = menubar.getAttribute('class');

    plusimg = document.querySelector('.img_plus');

    if(className == "fake")
    {
        menubar.setAttribute('class', 'menu_show');
        document.getElementById("plusImg").src="./img_skt/icon_gnb_plus_active.svg";
        plusimg.setAttribute('class', 'img_plus deg');
    }else if(className == "menu_show")
    {
        menubar.setAttribute('class', 'fake');
        document.getElementById("plusImg").src="./img_skt/icon_gnb_plus.svg";
        plusimg.setAttribute('class', 'img_plus deg2');
    }
   
}



/*PC ver 돋보기 검색 눌렀을 때*/

function searchBtn(){
    search_li = document.querySelector('.search_li>input');
    console.log(search_li);

    className2 = search_li.getAttribute('class');
    console.log(className2);

    if(className2 == "search_hide"){
        search_li.setAttribute('class', 'search_show');
    }else if(className2 == "search_show"){
        search_li.setAttribute('class', 'search_hide');
    }
    
}

function toggleImg(){
    getImg = document.getElementById("search_img").src="./img_skt/icon_search_active.svg";
}

function Img_back(){
    getbackImg = document.getElementById("search_img").src="./img_skt/icon_search.svg";
}


