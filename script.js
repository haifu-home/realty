
function openTab(evt, state) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(state).style.display = "block";
    evt.currentTarget.className += " active";

    // Activate the first county subtab for this state
    var firstSubTab = document.querySelector(`#${state} .subtabs button`);
    if (firstSubTab) {
        firstSubTab.click();
    }
}

function openSubTab(evt, state, county) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.querySelectorAll(`#${state} .subtabcontent`);
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtablinks = document.querySelectorAll(`#${state} .subtabs button`);
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].className = subtablinks[i].className.replace(" active", "");
    }
    document.getElementById(`${state}-${county}`).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    // Try to open MA tab
    var maTab = document.querySelector('button[onclick="openTab(event, 'MA')"]');
    if (maTab) {
        openTab(null, 'MA');
        // Try to open Suffolk subtab
        var suffolkSubTab = document.querySelector('button[onclick="openSubTab(event, 'MA', 'Suffolk')"]');
        if (suffolkSubTab) {
            openSubTab(null, 'MA', 'Suffolk');
        } else {
            console.log("Suffolk subtab not found, selecting first subtab for MA");
            var firstSubTab = document.querySelector('#MA .subtabs button');
            if (firstSubTab) {
                firstSubTab.click();
            }
        }
    } else {
        console.log("MA tab not found, selecting first tab");
        var firstTab = document.getElementsByClassName("tablinks")[0];
        if (firstTab) {
            firstTab.click();
        }
    }
});

