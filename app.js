


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
        position: 'absolute'
    });
    clouds.appendChild(cloud);
    clouds.appendChild(drop);
//        console.log(clouds);
    var screenWidth = window.screen.width;
    console.log(window.screen.width);
    var screenHeight = window.screen.height = 1500;
    var left = -100;
    var top = 0;
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
