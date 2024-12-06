// Change the main image
function changeImage(imageUrl) {
    $('#mainImage').attr('src', imageUrl);
}

// Update quantity
function updateQuantity(amount) {
    const $quantityInput = $('#quantityInput');
    let currentValue = parseInt($quantityInput.val(), 10);
    if (isNaN(currentValue)) currentValue = 1;
    const newValue = currentValue + amount;
    $quantityInput.val(Math.max(1, newValue)); // Prevent going below 1
}

// Event listeners (if using dynamic elements or adding them programmatically)
$(document).ready(function () {
    // Handle thumbnail clicks
    $('.options img').off('click').on('click', function () {
        const newSrc = $(this).attr('src');
        changeImage(newSrc);
    });

    // Handle quantity buttons
    $('.quantity button').off('click').on('click', function (event) {
        event.preventDefault(); // Prevent default behavior
        const isIncrement = $(this).text().trim() === '+';
        updateQuantity(isIncrement ? 1 : -1);
    });
});
