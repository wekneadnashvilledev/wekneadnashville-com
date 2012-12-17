
if (top.location != location) {
    top.location.href = document.location.href;
}

try {
    var currentState = {};
    window.history.replaceState(currentState, "Title", "http://www.wekneadnashville.com" + document.location.pathname);
} catch (error) {
    alert(error.message);
}