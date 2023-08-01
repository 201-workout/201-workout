document.getElementById('account-button').addEventListener('click', function() {
    const hiddenSection = document.getElementById('create-account');
    const computedStyle = window.getComputedStyle(hiddenSection);
    console.log(computedStyle.display);
    
    if (computedStyle.display === 'none') {
        hiddenSection.style.display = 'flex'; 
    }
});