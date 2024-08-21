const addressBar = document.getElementById('addressBar');
const webview = document.getElementById('webview');
const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');
const refreshButton = document.getElementById('refreshButton');
const goButton = document.getElementById('goButton');

// Load a URL or search Google
function loadURL(url) {
    if (!url.startsWith('http')) {
        url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
    }
    webview.src = url;
    addressBar.value = url;
}

// Back button
backButton.addEventListener('click', () => {
    webview.contentWindow.history.back();
});

// Forward button
forwardButton.addEventListener('click', () => {
    webview.contentWindow.history.forward();
});

// Refresh button
refreshButton.addEventListener('click', () => {
    webview.contentWindow.location.reload();
});

// Go button
goButton.addEventListener('click', () => {
    loadURL(addressBar.value);
});

// Load initial page
loadURL('https://www.google.com');

// Update address bar on navigation
webview.addEventListener('load', () => {
    addressBar.value = webview.contentWindow.location.href;
});
