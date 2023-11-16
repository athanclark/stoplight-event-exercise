(function() {
    'use strict';

    window.onload = function() {
        for (const btn of document.querySelectorAll('#controls > div')) {
            btn.addEventListener('click', function() {
                let color = btn.id.replace('Button', '');
                let targetId = btn.id.replace('Button', 'Light');
                document.getElementById(targetId).classList.toggle(color);
            });
        }
    };
})();
