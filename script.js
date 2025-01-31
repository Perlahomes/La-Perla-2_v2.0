function changeLanguage() {
    const language = document.getElementById('language').value;
    alert("Language changed to: " + language); // Handle actual language change here.
}

function showCodeBox() {
    document.getElementById('codeBox').style.display = 'block';
}

function hideCodeBox() {
    document.getElementById('codeBox').style.display = 'none';
}

function showWifiCodeBox() {
    document.getElementById('wifiCodeBox').style.display = 'block';
}

function hideWifiCodeBox() {
    document.getElementById('wifiCodeBox').style.display = 'none';
}
