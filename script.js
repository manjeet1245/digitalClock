let hour= document.getElementById('hour');
let minutes= document.getElementById('minutes');
let seconds= document.getElementById('seconds');
let ampm= document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amp = 'AM';

    h= h<=9 ? "0" + h : h;
    m= m<=9 ? "0" + m : m;
    s= s<=9 ? "0" + s : s;
    if(s>12)
    {
        h = h-12;
        amp = "PM";
    }
    hour.innerText = h;
    minutes.innerText =m;
    seconds.innerText = s;
    ampm.innerText = amp;
    setTimeout(() =>{
        updateClock();
    },1000)
}

updateClock();