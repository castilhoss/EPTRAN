function Sublinhado(element) {
    element.classList.add("sublinhado");
}

function toggleInstitutionInput(value) {
    const institutionInput = document.getElementById('institutionInput');
    if (value === 'sim') {
        institutionInput.classList.remove('hidden');
    } else {
        institutionInput.classList.add('hidden');
    }
}

