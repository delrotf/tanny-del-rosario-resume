// JavaScript File

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var cloudBtn = document.getElementById("cloudBtn");
var scwcdBtn = document.getElementById("scwcdBtn");
var scjpBtn = document.getElementById("scjpBtn");

var modalImg = document.getElementById("img01");
var loadingImg = document.getElementById("loading");
var captionText = document.getElementById("caption");

function showModal(btn) {
    modal.style.display = "block";

    modalImg.onload = function() {
        loadingImg.style.display = "none";
    }

    modalImg.src = btn.value;
    captionText.innerHTML = btn.alt;
}

function closeModal() {
    modal.style.display = "none";
    loadingImg.style.display = "block";
}

cloudBtn.onclick = function() {
    showModal(this);
}

scwcdBtn.onclick = function() {
    showModal(this);
}

scjpBtn.onclick = function() {
    showModal(this);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

window.onload = function() {
    setTimeout(function() {
        console.log("Preloading images...");

        let loading = new Image();
        loading.src = "images/Llgbv_s-200x150.gif";
        console.log(loading);

        let cloud = new Image();
        cloud.src = "images/cloudbadge.png";
        console.log(cloud);

        let scwcd = new Image();
        scwcd.src = "images/SCWCD.png";
        console.log(scwcd);

        let scjp = new Image();
        scjp.src = "images/SCJP2.png";
        console.log(scjp);

        console.log("Done preloading images.");
    }, 1000);
}
