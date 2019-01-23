function validateUsersearchField() {
    var usersearchInput = document.getElementById("searchInput").value;
    var usersearchInputEscaped = validateHTML(usersearchInput);
    //alert(document.getElementById("searchLabel").innerHTML);
    //alert(document.getElementById("searchInput").value);
    document.getElementById("searchLabel").innerHTML = document.getElementById("searchLabel").innerHTML + ": " + usersearchInputEscaped
}

function validateHTML(input) {
    var userInputNew = safe_tags_replace(input);
    //alert(userInputNew);
    return userInputNew;
}

function escapeTag(tag) {
    return escapeCharacterList[tag] || tag;
}

var escapeCharacterList = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};

function safe_tags_replace(str) {
    return str.replace(/[&<>]/g, escapeTag);
}