$(document).ready(function () {
    load_cart_item_number();
    $(".addBtn").click(function (e) {
        e.preventDefault();
        var $form = $(this).closest(".add-form");
        var id_game = $form.find(".id-input").val();
        var game_name = $form.find(".name-input").val();
        var game_price = $form.find(".price-input").val();
        var game_image = $form.find(".img-input").val();
        var object = {
            'id_game': id_game,
            'game_name': game_name,
            'game_price': game_price,
            'game_image': game_image
        }
        addToCart(object);
    })




    $(".removeBtn").click(function (e) {
        e.preventDefault();
        var $form = $(this).closest(".remove-form");
        var id_game = $form.find(".id-input").val();
        var id = {
            'id_game': id_game
        }
        removeFromCart(id);
    })

    $(".clearBtn").click(function (e) {
        e.preventDefault();
        deleteCart();
    })

    function deleteCart() {
        $.ajax({
            url: "http://localhost/New-Games/app/Model/Ajax.php", //the page containing php script
            type: "post", //request type,
            datatype: "json",
            data: {
                class: "Cart",
                method: "deleteCart",
                params: Array('')
            },
            success: function (response) {
                $("#message").html(response);
                load_cart_item_number();
                document.location.reload(true);
            }
        });
    }




    function addToCart(object) {
        $.ajax({
            url: "http://localhost/New-Games/app/Model/Ajax.php", //the page containing php script
            type: "post", //request type,
            datatype: "json",
            data: {
                class: "Cart",
                method: "addToCart",
                params: Array(object)
            },
            success: function (response) {
                $("#message").html(response);
                load_cart_item_number();
            }
        });
    }

    function removeFromCart(id) {
        $.ajax({
            url: "http://localhost/New-Games/app/Model/Ajax.php", //the page containing php script
            type: "post", //request type,
            datatype: "json",
            data: {
                class: "Cart",
                method: "removeFromCart",
                params: Array(id)
            },
            success: function (response) {
                $("#message").html(response);
                load_cart_item_number();
                document.location.reload(true);
            }
        });
    }


    function load_cart_item_number() {
        $.ajax({
            url: 'http://localhost/New-Games/app/Model/Ajax.php',
            type: "post", //request type,
            datatype: "json",
            data: {
                class: "Cart",
                method: "totalCart",
                params: Array('')
            },
            success: function (response) {
                $("#cart-total").html(response);
            }
        });
    }
});


$(document).ready(function () {


    $(".add-wishlist button").click(function (e) {
        e.preventDefault();
        var $form = $(this).closest(".add-wishlist");
        var id_game = $form.find(".id-input").val();
        addWishlist(id_game);
    })


    function addWishlist(id) {
        $.ajax({
            url: "http://localhost/New-Games/app/Model/Ajax.php", //the page containing php script
            type: "post", //request type,
            datatype: "json",
            data: {
                class: "Product",
                method: "addWishlist",
                params: Array(id)
            },
            success: function (response) {
                $("#message").html(response);
                load_cart_item_number();
            }
        });
    }


});