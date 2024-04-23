const backendText = document.getElementById('backend-text');
const frontendText = document.getElementById('frontend-text');

// Function to rotate text on hover
function rotateTextOnHover(element) {
    element.addEventListener('mouseover', function() {
        this.classList.add('rotate');
    });

    element.addEventListener('mouseout', function() {
        this.classList.remove('rotate');
    });
}

// Apply rotation effect to backend text
rotateTextOnHover(backendText);

// Apply rotation effect to frontend text
rotateTextOnHover(frontendText);

function searchText() {
    const fileInput = document.getElementById('fileInput');
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    // Check if a file is selected
    if (fileInput.files.length === 0) {
        resultDiv.textContent = 'Please select a file.';
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const text = event.target.result.toLowerCase();
        const count = (text.match(new RegExp('\\b' + searchInput + '\\b', 'g')) || []).length;

        resultDiv.textContent = `Found ${count} occurrences of "${searchInput}".`;
    };

    reader.onerror = function() {
        resultDiv.textContent = 'Error reading the file.';
    };

    reader.readAsText(file);
}

