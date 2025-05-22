function validatePhone() {
    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        alert('Enter a valid 10-digit phone number');
    }
}

function showFee() {
    const fee = document.getElementById('eventType').value;
    document.getElementById('feeDisplay').textContent = 'Fee: ' + fee;
}

function confirmSubmit() {
    document.getElementById('formOutput').value = 'Form submitted successfully!';
}

function enlargeImage(img) {
    img.style.transform = 'scale(1.5)';
}

function countCharacters() {
    const count = document.getElementById('feedback').value.length;
    document.getElementById('charCount').textContent = 'Characters: ' + count;
}

function videoReady() {
    alert('Video ready to play');
}

window.onbeforeunload = function () {
    return 'Are you sure you want to leave? Form data will be lost.';
};

function savePreference() {
    const selected = document.getElementById('eventType').value;
    localStorage.setItem('preferredEvent', selected);
}

function loadPreference() {
    const preferred = localStorage.getItem('preferredEvent');
    if (preferred) {
        document.getElementById('eventType').value = preferred;
        showFee();
    }
}

function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    alert('Preferences cleared');
}

function findLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, { enableHighAccuracy: true });
    } else {
        alert("Geolocation is not supported.");
    }
}

function showPosition(position) {
    document.getElementById('location').textContent =
        `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation."); break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable."); break;
        case error.TIMEOUT:
            alert("The request to get user location timed out."); break;
        default:
            alert("An unknown error occurred.");
    }
}
