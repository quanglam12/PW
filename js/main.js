document.addEventListener("DOMContentLoaded", () => {
    const revealContainers = document.querySelectorAll(".reveal-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                const hiddenChildren = entry.target.querySelectorAll('.hidden');
                hiddenChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('show');
                    }, index * 200);
                });
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.6
    });

    revealContainers.forEach((container) => observer.observe(container));
});
document.getElementById('copyEmail').addEventListener('click', function () {
    const email = "maivanquanglam@gmail.com";

    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    const notification = document.getElementById('notification');
      notification.classList.add('show');

      setTimeout(() => {
        notification.classList.remove('show');
      }, 3000);
  });