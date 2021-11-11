var clickLog = document.getElementById("log");
var clickReg = document.getElementById("reg");
var backLog = document.getElementById("back-log");
var backReg = document.getElementById("back-reg");

var modal = document.getElementById("modal");
var authFormLog = document.getElementById("auth-form-log");
var authFormReg = document.getElementById("auth-form-reg");

var clickSubLog = document.getElementById("sub-log");
var clickSubReg = document.getElementById("sub-reg");

clickLog.onclick = function(){
    modal.style.display = "flex";
    authFormLog.style.display = null;
    authFormReg.style.display = "none";
}

clickReg.onclick = function(){
    modal.style.display = "flex";
    authFormReg.style.display = null;
    authFormLog.style.display = "none";
}

clickSubLog.onclick = function(){
    modal.style.display = "flex";
    authFormLog.style.display = null;
    authFormReg.style.display = "none";
}

clickSubReg.onclick = function(){
    modal.style.display = "flex";
    authFormReg.style.display = null;
    authFormLog.style.display = "none";
}

backLog.onclick = function(){
    modal.style.display = "none";
}

backReg.onclick = function(){
    modal.style.display = "none";
}


    
