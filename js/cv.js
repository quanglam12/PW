function animateProgressBar(progressBar, duration) {
    const targetPercentage = parseInt(progressBar.style.width);
    const progressText = progressBar.querySelector(".progress-text");

    let currentPercentage = 0;
    const increment = targetPercentage / (duration / 8);

    const interval = setInterval(() => {
        currentPercentage += increment;

        if (currentPercentage >= targetPercentage) {
            currentPercentage = targetPercentage;
            clearInterval(interval); 
        }

        progressBar.style.width = `${currentPercentage}%`;
        progressText.textContent = `${Math.round(currentPercentage)}%`;
    }, 10);
}
  
const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                animateProgressBar(progressBar, 3000);
            });
        }
    });
}, { threshold: 0.2 });

elements.forEach(element => {
    observer.observe(element);
});