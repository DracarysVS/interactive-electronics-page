document.addEventListener("DOMContentLoaded", function() {
    const components = document.querySelectorAll('.component');
    
    components.forEach(component => {
        const pulseWave = component.querySelector('.pulse-wave');
        
        component.addEventListener('mouseover', function() {
            // Change text from "Is it YES?" to "YES it is!!"
            const yesText = document.getElementById('yes-text');
            yesText.textContent = 'YES it is!!';
            yesText.style.animation = 'crackle 2s infinite alternate';
            
            // Trigger pulse wave effect on hover
            pulseWave.classList.add('active');
            
            // Set the opacity of the YES text to 1 so it stays visible
            yesText.style.opacity = '1';
        });

        component.addEventListener('mouseleave', function() {
            // Reset "Is it YES?" when hover ends
            const yesText = document.getElementById('yes-text');
            yesText.textContent = 'Is it YES?';
            yesText.style.animation = 'none';
            
            // Reset pulse wave effect
            pulseWave.classList.remove('active');
            
            // Set opacity back to full for YES text
            yesText.style.opacity = '1';
        });
    });
});
