function toggleOfferDropdown() {
    document.getElementById('dropdownOffer').classList.toggle('active-dropdown');
}

function toggleMediaDropdown() {
    document.getElementById('dropdownMedia').classList.toggle('active-dropdown');
}

function toggleContactDropdown() {
    document.getElementById('dropdownContact').classList.toggle('active-dropdown');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdownOffer = document.getElementById('dropdownOffer')
    const dropdownMedia = document.getElementById('dropdownMedia')
    const dropdownContact = document.getElementById('dropdownContact');

    const dropdowns = [dropdownOffer, dropdownMedia, dropdownContact];
    dropdowns.forEach(dropdown => {
      // If the click is outside the dropdown or its trigger
      if (!dropdown.contains(event.target) && !event.target.closest('.dropdown-trigger')) {
        dropdown.classList.remove('active-dropdown');
      }
    });
  });