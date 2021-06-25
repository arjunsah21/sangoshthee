let short_left_footer = document.getElementById("some_rec");
let long_left_footer = document.getElementById("some_rec_intr");
let short_right_footer = document.getElementById("short_right_footer");
let long_right_footer = document.getElementById("long_right_footer");

short_left_footer.addEventListener("click", function run(){
    // console.log("test");
    if(long_right_footer.style.display != "block"){
        long_left_footer.style.display = "block"; 
        short_right_footer.style.display = "none";
        long_right_footer.style.display = "block";
    } else {
        long_left_footer.style.display = "none"; 
        short_right_footer.style.display = "block";
        long_right_footer.style.display = "none";
    }
})

function displayTime() {
    let time = new Date();
    document.getElementById('date_time').innerHTML = time;
}
setInterval(displayTime, 1000);