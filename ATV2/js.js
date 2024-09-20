const input_color = document.getElementById("input-color");
var cor_selecionada = input_color.value;
input_color.style.background = cor_selecionada

input_color.addEventListener('input', function() {
    cor_selecionada = input_color.value;
    input_color.style.background = cor_selecionada
    document.documentElement.style.setProperty('--color-theme', cor_selecionada);
});


const btn_dark_light = document.getElementById("btn-dark-light")
var  icon_dark_light = document.querySelector("bi bi-moon-stars")



btn_dark_light.addEventListener("click", function (){
    if (document.body.style.background === "black"){
        document.body.style.background = "white"
        document.documentElement.style.setProperty('--color-white', "black");
        btn_dark_light.classList.remove('bi-moon-stars')
        btn_dark_light.classList.add("bi-moon-stars-fill")
        
    }else{
        document.body.style.background = "black"
        document.documentElement.style.setProperty('--color-white', "white");
        btn_dark_light.classList.remove('bi-moon-stars-fill')
        btn_dark_light.classList.add("bi-moon-stars")
        
    }
})

const btn_open_mobile = document.getElementById("btn-menu-mobile")
const btn_close_mobile = document.getElementById("btn-close-mobile")
let menu_mobile_box = document.querySelector(".menu-mobile")

btn_open_mobile.onclick = function (){
    menu_mobile_box.style.width = "75%"
    btn_open_mobile.style.display = "none"
    btn_close_mobile.style.display = "flex"
}
btn_close_mobile.onclick = function (){
    menu_mobile_box.style.width = "0%"
    btn_open_mobile.style.display = "flex"
    btn_close_mobile.style.display = "none"
}