document.getElementById('colorDiv').addEventListener('click', function() {
this.classList.toggle('clicked');
});

var buttons = document.querySelectorAll('.rounded-button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
        // Deselect all buttons
        buttons.forEach(function(otherButton) {
            if (otherButton !== button) {
                otherButton.classList.remove('clicked');
            }
        });
    
        // Toggle the class on the clicked button
        this.classList.toggle('clicked');
        });
    });

let quantity = 1 ;
            
    function increaseQuantity() {
    quantity++;
    document.getElementById('counter').textContent = quantity;
    }
        
    function decreaseQuantity() {
        if (quantity > 0) {
        quantity--;
        document.getElementById('counter').textContent = quantity;
        }
    }

    window.onload = function() {
        var isItemAddedToCart = false;
        var isItemAddedToWishlist = false;

        document.getElementById('addtobagbttn').addEventListener('click', function() {
        var buttonText = isItemAddedToCart ? 'ITEM IS ALREADY IN CART' : '<i class="bx bx-check"></i>&nbsp;&nbsp;&nbsp;Item Added';
                
            // Change the text and append the icon
            this.innerHTML = buttonText;
            isItemAddedToCart = !isItemAddedToCart;

            // Reset the text after 3 seconds
            setTimeout(function() {
            document.getElementById('addtobagbttn').innerHTML = '<i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;&nbsp;Add To Cart';
            isItemAddedToCart = false;
            }, 3000);
        });

        document.getElementById('addtowishlist').addEventListener('click', function() {
            if (!isItemAddedToWishlist) {
                this.innerHTML = '<i class="bx bx-check"></i>&nbsp;&nbsp;&nbsp;Item Added';
            } 
            else {
                this.innerHTML = 'ITEM ALREADY IN WISHLIST';
            }
            isItemAddedToWishlist = true;
        });
    };