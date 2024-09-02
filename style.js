const offerBoxes = document.querySelectorAll('.offer-box');

offerBoxes.forEach(box => {
    box.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.style.opacity = '0.5';
    });

    box.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
    });

    box.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow dropping
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedBox = document.getElementById(draggedId);
        const targetBox = e.target.closest('.offer-box');

        if (draggedBox && targetBox && draggedBox !== targetBox) {
            const draggedIndex = Array.from(offerBoxes).indexOf(draggedBox);
            const targetIndex = Array.from(offerBoxes).indexOf(targetBox);
            
            if (draggedIndex < targetIndex) {
                targetBox.parentNode.insertBefore(draggedBox, targetBox.nextSibling);
            } else {
                targetBox.parentNode.insertBefore(draggedBox, targetBox);
            }
        }
    });
});

