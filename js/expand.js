
function expandCard(card) {
    document.querySelectorAll('.card.expanded').forEach(expandedCard => {
        closeCard(null, expandedCard.querySelector('.close'));
    });

    card.classList.add('expanded');
    card.querySelector('.details').classList.remove('hidden');
    card.querySelector('.close').classList.remove('hidden');
    card.style.flexDirection = 'row';
    card.scrollIntoView({
        behavior: 'smooth', 
        block: 'center'    
    });
}

function closeCard(event, closeButton) {
    if (event) event.stopPropagation();
    const card = closeButton.closest('.card');
    card.classList.remove('expanded');
    card.querySelector('.details').classList.add('hidden');
    card.querySelector('.close').classList.add('hidden');
    card.style.flexDirection = 'row';
}
