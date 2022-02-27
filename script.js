function get_rand_color()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}
document.querySelector("ol").addEventListener("click",(e)=>{
    e.target.style.color=get_rand_color()
})