/**@type {HTMLVideoElement} */
const video = document.getElementById("camera-video");
// /**@type {HTMLCanvasElement} */
// const canvas = document.getElementById("camera-preview");
// const prev = canvas.getContext('2d');


const {mediaDevices} = navigator;

let domloadev;



async function main() {
    document.removeEventListener('DOMContentLoaded',domloadev);
    
    if (!mediaDevices) return;
    
    if (!mediaDevices.getUserMedia) return;
    
    const user_devices = await mediaDevices.enumerateDevices();
    
    const media_stream = await mediaDevices.getUserMedia({
        video: true,
    }).catch(err=>{
        let msg ="Your device doesn't have camera, please plug in your camera properly and refresh the page. Log: \"" + err + "\"";
        alert(msg);
        showErrorMessage(msg);
    });
    
    if (!media_stream) return;
    
    video.srcObject = media_stream;
    
    video.play();
    
}

/**
 * 
 * @param {string} msg Error message to show on the web page
 */
function showErrorMessage(msg) {
    const errMsg = document.createElement("p");

    errMsg.textContent = msg;
    errMsg.style.color = "red";

    document.body.appendChild(errMsg);

    const refreshButton = document.createElement("button");

    refreshButton.textContent = 'Refresh'
    refreshButton.onclick = () => {
        window.location.reload();   
    };
    
    document.body.appendChild(refreshButton);
}

domloadev = document.addEventListener('DOMContentLoaded',main);