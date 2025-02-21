const draggableItems = document.querySelectorAll('.draggable');
        const dropzones = document.querySelectorAll('.dropzone, .origin-zone');

        draggableItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.id);
            });
        });

        dropzones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData('text');
                const draggableElement = document.getElementById(id);
                e.target.appendChild(draggableElement);
            });
        });