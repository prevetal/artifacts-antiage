document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.disposable_patches_cosmetics .item .turn').forEach(function (turn) {
        turn.addEventListener('click', function () {
            var currentItem = turn.closest('.item')

            document.querySelectorAll('.disposable_patches_cosmetics .item.upside_down').forEach(function (item) {
                if (item !== currentItem) {
                    item.classList.remove('upside_down')
                }
            })

            currentItem.classList.toggle('upside_down')
        })
    })
})