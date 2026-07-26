let homePointsCount = 0;

function onePointHome(){
    homePointsCount += 1;
    document.getElementById("home-points").textContent = homePointsCount
    leader()
}

function twoPointsHome(){
    homePointsCount += 2;
    document.getElementById("home-points").textContent = homePointsCount
    leader()
}

function threePointsHome(){
    homePointsCount += 3;
    document.getElementById("home-points").textContent = homePointsCount
    leader()
}

let guestPointsCount = 0;

function onePointGuest(){
    guestPointsCount += 1;
    document.getElementById("guest-points").textContent = guestPointsCount
    leader()
}

function twoPointsGuest(){
    guestPointsCount += 2;
    document.getElementById("guest-points").textContent = guestPointsCount
    leader()
}

function threePointsGuest(){
    guestPointsCount += 3;
    document.getElementById("guest-points").textContent = guestPointsCount
    leader()
}

function newGame(){
    homePointsCount = 0
    guestPointsCount = 0
    document.getElementById("home-points").textContent = homePointsCount
    document.getElementById("guest-points").textContent = guestPointsCount
    document.getElementById("leader").textContent = "LEADER is "
}

function leader(){
    if(homePointsCount > guestPointsCount){
        document.getElementById("leader").textContent = "LEADER is TEAM 1"
    }
    else if(homePointsCount < guestPointsCount) {
        document.getElementById("leader").textContent = "LEADER is TEAM 2"
    }
    else{
        document.getElementById("leader").textContent = "LEADER is None"
    }
}
