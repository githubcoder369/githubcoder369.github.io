import { dbg } from "./dbg.js";

/**@type {HTMLVideoElement} */
const video = document.getElementById("camera-video");
const msgdbg = document.getElementById("debug-message");
// /**@type {HTMLCanvasElement} */
// const canvas = document.getElementById("camera-preview");
// const prev = canvas.getContext('2d');

let domloadev;

const cam_constraints = window.cam_constraints = {
    video: true,
    audio: false
}

function onError(err) {
    let msg ="Your device doesn't have camera, please plug in your camera properly and refresh the page. Log: \"" + err + "\"";
    alert(msg);
    showErrorMessage(msg);
}


async function main() {
    document.removeEventListener('DOMContentLoaded',domloadev);
    
    if (!navigator.mediaDevices.getUserMedia) return;
    
    if (!navigator.mediaDevices.getUserMedia) return;
    
    
    const user_devices = await navigator.mediaDevices.enumerateDevices();
    
    dbg(msgdbg,user_devices);
    
    const media_stream = await navigator.mediaDevices.getUserMedia(window.cam_constraints)
    .catch(onError);
    
    if (!media_stream) return;

    dbg(msgdbg,"It has reached to here!");

    video.srcObject = media_stream;
    
    video.play();
    
}

/**
 * 
 * @param {string} msg Error message to show on the web page
 */
function showErrorMessage(msg) {
    // dbg(debug_msg,msg)

    const refreshButton = document.createElement("button");

    refreshButton.textContent = 'Refresh'
    refreshButton.onclick = () => {
        window.location.reload();   
    };
    
    document.body.appendChild(refreshButton);
}

domloadev = document.addEventListener('DOMContentLoaded',main);