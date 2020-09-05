function add(){
    var clouds = document.getElementById('cloud1');
    var drops = document.getElementById('div1');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        top: "20px"

    });
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
    var birdsFlying = setInterval(function () {
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';

            //console.log( drop.style.top);
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
add();
setInterval(add, 1000);



function round4(){
    var clouds = document.getElementById('cloud1');
    var drops = document.getElementById('div4');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        left: "95%"

    });
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
    var birdsFlying = setInterval(function () {
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';

            //console.log( drop.style.top);
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
round4();
setInterval(round4, 1000);


function round3(){
    var clouds = document.getElementById('cloud1');
    var drops = document.getElementById('div7');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        left: "85%"

    });
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
    var birdsFlying = setInterval(function () {
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';

            //console.log( drop.style.top);
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
round3();
setInterval(round3, 1000);



function round2(){
    var clouds = document.getElementById('cloud1');
    var drops = document.getElementById('div6');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        left: "73%"

    });
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
    var birdsFlying = setInterval(function () {
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';

            //console.log( drop.style.top);
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
round2();
setInterval(round2, 1000);



function Hello(){
    var clouds = document.getElementById('cloud1');
    var drops = document.getElementById('div1');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        left: "13%"

    });
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
    var birdsFlying = setInterval(function () {
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';

            //console.log( drop.style.top);
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
Hello();
setInterval(Hello, 1000);



function round(){
    var clouds = document.getElementById('cloud1');
    var drops = document.getElementById('div4');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        left: "25%"

    });
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
    var birdsFlying = setInterval(function () {
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';

            //console.log( drop.style.top);
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
round();
setInterval(round, 1000);


function Word(){
    var clouds = document.getElementById('cloud1');
    var drops = document.getElementById('div3');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        left: "37%"

    });
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
    var birdsFlying = setInterval(function () {
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';

            //console.log( drop.style.top);
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
Word();
setInterval(Word, 1000);



function round1(){
    var clouds = document.getElementById('cloud1');
    var drops = document.getElementById('div5');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        left: "62%"

    });
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
    var birdsFlying = setInterval(function () {
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';

            //console.log( drop.style.top);
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
round1();
setInterval(round1, 1000);



function runningCloud() {
    var clouds = document.getElementById('cloud');
    var drops = document.getElementById('div');
    var cloud = document.createElement('img');
    var div = document.createElement('div');
    var drop = document.createElement('div');
    cloud.setAttribute('src', 'badal3.jpg');
    cloud.setAttribute('width', '70px');
    cloud.style.position = 'absolute';

    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "8px",
        width: "3px",
        borderRadius: "100%",
        transform: "skewY(-100deg)",
        position: 'absolute',
        left: "50%",

    });
    clouds.appendChild(cloud);
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 50;
    var birdsFlying = setInterval(function () {
        if (left <= screenWidth) {
            cloud.style.left = left++ + 'px';

        }
        else {
            clouds.removeChild(cloud);
            clearInterval(birdsFlying);
        }
        for(var i = 0; i< 5; i++){
            drops.appendChild(drop);
        }
        if (top <= screenHeight) {
            drop.style.top = top++ + 'px';
            //drop.style.left = left++ + 'px';
        }
        else{
            drops.removeChild(drop);
            clearInterval(birdsFlying);
        }
    });
}
runningCloud();
setInterval(runningCloud, 1000);
/**
 * Created by FairCom on 8/22/2020.
 */
