var Menu_m = document.querySelector("#mobile_menu_bar");
var hide1 = document.querySelector("#mobile_menu_bar>div:nth-child(2)");
var hide2 = document.querySelector("#mobile_menu_bar>div:nth-child(6)");

var s_img = document.querySelector('#icon_mobile>a:nth-child(2)>img');
var m_img =  document.querySelector('#icon_mobile>a:nth-child(1)>img');

var plusimg2 = document.querySelector('#plusImg2');
var plusimg3 = document.querySelector('#plusImg3');

/*모바일 메뉴 클릭시 */
function mobileMenu(){
    Menu_class = Menu_m.getAttribute('class');

    if(Menu_class == "mmb_none"){
        Menu_m.setAttribute('class', 'mmb_show');
        document.getElementById("mmb_img").src="./img_skt/icon_close.svg";
        s_img.style.display ="none";
    } else if(Menu_class == "mmb_show"){
        Menu_m.setAttribute('class', 'mmb_none');
        hide1.setAttribute('class', 'hide_menu');   //만약에 안에 메뉴바가 열려있으면 닫게 해라
        hide2.setAttribute('class', 'hide_menu');
        document.getElementById("mmb_img").src="./img_skt/icon_menu.svg";
        s_img.style.display ="block";

        // 안에 서브 메뉴가 열려있으면 닫아라
        document.getElementById("plusImg2").src="./img_skt/icon_gnb_plus.svg";
        plusimg2.setAttribute('class', 'img_plus deg2');
        document.getElementById("plusImg3").src="./img_skt/icon_gnb_plus.svg";
        plusimg3.setAttribute('class', 'img_plus deg2');

    }
}


/*모바일 메뉴 안에 특정 부분 클릭시 숨기기 보이기*/

function showMenu(){
    var hideState1 = hide1.getAttribute('class');
    
    if(hideState1 == "hide_menu"){
        hide1.setAttribute('class', 'show_menu');
        document.getElementById("plusImg2").src="./img_skt/icon_gnb_plus_active.svg";
        plusimg2.setAttribute('class', 'img_plus deg');
    } else if(hideState1 =="show_menu"){
        hide1.setAttribute('class', 'hide_menu');
        document.getElementById("plusImg2").src="./img_skt/icon_gnb_plus.svg";
        plusimg2.setAttribute('class', 'img_plus deg2');
    }

}

function showMenu2(){
    
    hideState2 = hide2.getAttribute('class');
    
    if(hideState2 == "hide_menu"){
        hide2.setAttribute('class', 'show_menu');
        document.getElementById("plusImg3").src="./img_skt/icon_gnb_plus_active.svg";
        plusimg3.setAttribute('class', 'img_plus deg');
    } else if(hideState2 =="show_menu"){
        hide2.setAttribute('class', 'hide_menu');
        document.getElementById("plusImg3").src="./img_skt/icon_gnb_plus.svg";
        plusimg3.setAttribute('class', 'img_plus deg2');
    }
}


function toggleImg(){
    getImg = document.getElementById("search_img").src="./img_skt/icon_search_active.svg";
}

function Img_back(){
    getbackImg = document.getElementById("search_img").src="./img_skt/icon_search.svg";
}


/*모바일 돋보기 서치 부분*/

function mobileSearch(){
    mobileSearchBtn = document.querySelector("#icon_mobile>a:nth-child(2)");
    mobileSearchBar = document.querySelector("#mobile_search");

    msBarClass = mobileSearchBar.getAttribute('class');

    if(msBarClass == "search_off"){
        mobileSearchBar.setAttribute('class', 'search_on');
        s_img.setAttribute('class','search_img_off');
        s_img.src="./img_skt/icon_close.svg";
        m_img.style.display ="none";
        

    }else if(msBarClass == "search_on"){
        mobileSearchBar.setAttribute('class', 'search_off');
        s_img.setAttribute('class','search_img_on');
        s_img.src="./img_skt/icon_search.svg";
        m_img.style.display ="block";
        
    }   
}