(function ($) {
    $('.overlay-trigger-support').on('click', function (event) {
        event.preventDefault();
        var overlay = $(this).data('overlay');

        if (!overlay) {
            console.log('You must provide the overlay id in the trigger. (data-overlay="overlay-id").');
            return;
        }

        var id = '#' + overlay;

        $(id).addClass('overlay-open');
        $('body').addClass('overlay-view');

        $(id).on('click', function (event) {
            // Verify that only the outer wrapper was clicked.
            if (event.target.id == overlay) {
                $(id).removeClass('overlay-open');
                $('body').removeClass('overlay-view');
            }
        });

        $(document).keyup(function (event) {
            // Verify that the esc key was pressed.
            if (event.keyCode == 27) {
                $(id).removeClass('overlay-open');
                $('body').removeClass('overlay-view');
            }
        });

        function closeMe() {
            $(id).removeClass('overlay-open');
            $('body').removeClass('overlay-view');
        }
    });
})(jQuery);
