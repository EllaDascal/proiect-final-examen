document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.image-container .image-item');

    imageItems.forEach(item => {
        const image = item.querySelector('img');
        const description = item.querySelector('.image-description');
        image.addEventListener('click', () => {
            // Toggle the 'enlarged' class on the clicked image
            image.classList.toggle('enlarged');

            // Check if the clicked image is now enlarged
            const isEnlarged = image.classList.contains('enlarged');

            // If the clicked image is enlarged, loop through other images and make sure they are not enlarged
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

