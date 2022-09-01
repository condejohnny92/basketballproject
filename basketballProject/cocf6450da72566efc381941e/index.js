let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let resetHomeScore = document.getElementById("reset-home-score");
let resetGuestScore = document.getElementById("reset-guest-score");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

function plusOne(){
    homeScoreEl.textContent++;
}

function plusTwo(){
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
    
    
}

function plusThree(){
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
}

function resetHome(){
    homeScoreEl.textContent = 0;
}

function plusOneHome(){
    guestScoreEl.textContent++;
}

function plusTwoHome(){
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
        
}

function plusThreeHome(){
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
}

function resetGuest(){
    guestScoreEl.textContent = 0;
}
