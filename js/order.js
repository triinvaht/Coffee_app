$(document).on('click', '.original2', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $cart = $('#myorder');
    var item_identifier = $this.data('id');

    // If item is in cart already, then remove
    if ($this.data('in-cart')==='yes'
        && $cart.find('li[id="' + item_identifier + '"]').length > 0) {
        // Script to remove from cart
        return
    }

    // else add to cart
    $this.data('in-cart', 'yes');
    var to_cart = $('div').data('id', item_identifier).html($this.html());
    $cart.append(to_cart);
});