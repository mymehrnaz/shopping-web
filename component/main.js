//Showing navbar 

const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle);
    const nav = document.getElementById(navbarId);

    if(headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            toggleBtn.classList.toggle('bx-x');
        })
    }
}

showMenu('header-toggle', 'navbar');

//Changing Active Link

const linkColor = document.querySelectorAll('.nav-link');

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let AMPM = document.getElementById("AMPM");
 
setInterval(()=> {
    let clock = new Date();
    let hrs = clock.getHours();
    let min = clock.getMinutes();
    let sec = clock.getSeconds();
 
    if(hrs > 12){
    hrs = hrs - 12;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs < 12) {
        AMPM.innerHTML = "PM";
    } else {
        AMPM.innerHTML = "AM";
    }
    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
   
})
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

