const formCisco = document.forms['formXamai'];
const scriptURLXamai = "https://script.google.com/macros/s/AKfycbyWsGHaBBXkfYUnU-IPGM7bZDiJOIP77He4MWkGXA42cTRpMlnwRrlQpKS3wLuo-Q/exec";
let botton = document.getElementById("enviar");
let email = document.getElementById("inputEmail");
let corpo = document.getElementsByClassName("error");

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})
var CLIENT_ID = '57587208896-99n5m3m2tgpotj18o40d2ns9k7lv0ur1.apps.googleusercontent.com';
var API_KEY = 'AIzaSyALo9YD8hcAtMAavQBYjA-vorZaHBJi5HE';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('popId');
if (myParam == 88) {

        myModal.show()
    
}
/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function(error) {
        console.log(JSON.stringify(error, null, 2));
    });
}

formCisco.addEventListener('submit', e => {
    e.preventDefault()
    botton.setAttribute("disabled", false);
    fetch(scriptURLXamai, {
            method: 'POST',
            body: new FormData(formXamai)
        })
        .then(response => Cambio())
        .catch(error => console.error('Error!', error.message))




})

function Cambio() {
    // document.getElementById("xamai").reset();
    // botton.removeAttribute("disabled");
    // relatedTarget
    // myModal.show()
    var texto = email.value;
    dir  = './mail/mail.php?email='
    url = dir + texto; 
    window.location.href= url;
}