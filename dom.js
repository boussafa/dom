document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const totalPriceElement = document.getElementById("total-price");

    items.forEach((item) => {
        const incrementButton = item.querySelector(".increment-button");
        const decrementButton = item.querySelector(".decrement-button");
        const quantityElement = item.querySelector(".item-quantity");
        const deleteButton = item.querySelector(".delete-button");
        const likeButton = item.querySelector(".like-button");

        let totalPrice = parseFloat(totalPriceElement.textContent.slice(1));

        incrementButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            totalPrice += parseFloat(item.querySelector("p").textContent.slice(1));
            totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
        });

        decrementButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                totalPrice -= parseFloat(item.querySelector("p").textContent.slice(1));
                totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
            }
        });

        deleteButton.addEventListener("click", () => {
            item.remove();
            totalPrice -= parseFloat(item.querySelector("p").textContent.slice(1)) * parseInt(quantityElement.textContent);
            totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
        });

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("liked");
        });
    });
});