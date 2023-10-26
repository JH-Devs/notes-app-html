let startBox = document.getElementsByClassName('startBox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userInput');
let i = 0;

startBox.addEventListener('keydown', content);

document.getElementById("start").addEventListener("click", function(){
    startBox.style.display = "block";
});
function content(e){
    if(e.keyCode == '13'){
        divStyle(input.value);
        input.value = "";
        startBox.style.display = "none";
    }
}
function color(){
    let randomColors = ["#0FFF50", "#FF10F0", "#FFFF33 ", "#9D00FF", "#FF6600", "#00FFFF"];
    if(i > randomColors.length - 1){
        i = 0;
    }
    return randomColors[i++];
}
function divStyle(text){
    let div = document.createElement("div");
    div.className= 'note';
    div.innerHTML = '<div class="details"> '+'<h3>'+text+'</h3>'+'</div>';

    // odstranění poznámky na dvojité kliknutí
    div.addEventListener("dblclick", function(){
        div.remove();
    });

    // vybere náhodně barvu pozadí
    div.setAttribute('style', 'background: '+color()+'');


    notes.appendChild(div);
}