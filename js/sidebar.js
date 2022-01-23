function setsidebar() {
    let sidebar = document.getElementById("sidebar");
    let button =  document.getElementById("btn");
    let btntext = document.getElementById("btntext");

    if(sidebar.style.width != "250px"){
        sidebar.style.width = "250px";
        button.style.marginLeft = "200px";
        btntext.style.transform = "rotate(45deg)";
    } 
    else {
        sidebar.style.width = "0px";
        button.style.marginLeft = "0px";
        btntext.style.transform ="none";
    }
}

function changeImage() {
    if (document.getElementById("changeable").src == "img/handvärmare_svart_röd.jpg") 
    {
        document.getElementById("changeable").src = "img/handvärmare_svart_vit.jpg";
    }
    else 
    {
        document.getElementById("changeable").src = "img/handvärmare_svart_röd.jpg";
    }
}