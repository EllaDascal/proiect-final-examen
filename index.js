document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.image-container .image-item');

    imageItems.forEach(item => {
        const image = item.querySelector('img');
        const description = item.querySelector('.image-description');
        image.addEventListener('click', () => {
            
            image.classList.toggle('enlarged');

     
            const isEnlarged = image.classList.contains('enlarged');

            
            if (isEnlarged) {
                images.forEach(otherImage => {
                    if (otherImage !== image && otherImage.classList.contains('enlarged')) {
                        otherImage.classList.remove('enlarged');
                    }
                });
            }
        });
    });
});

