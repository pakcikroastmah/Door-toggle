let doorIsClose = true;

function toggle(){
     const door = document.getElementById('door');


    if (doorIsClose){
        door.src = 'open.jpg';
        doorIsClose = false;
    } else {
        door.src = 'close.png';
        doorIsClose = true;
    }
}