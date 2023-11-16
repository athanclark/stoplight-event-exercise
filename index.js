(function() {
    'use strict';

    window.onload = function() {
        const controls = document.getElementById('controls');
        controls.addEventListener('click', function(e) {
            if (e.target.className === 'button') {
                const color = e.target.id.replace('Button', '');
                const targetId = e.target.id.replace('Button', 'Light');
                const lamp = document.getElementById(targetId);
                lamp.classList.toggle(color);
                console.log(`${color} bulb ${lamp.classList.contains(color) ? 'on' : 'off'}`);
            }
        });
        for (const btn of controls.children) {
            btn.addEventListener('mouseenter', function() {
                let color = btn.id.replace('Button', '');
                console.log(`Entered ${color} button`);
            });
            btn.addEventListener('mouseleave', function() {
                let color = btn.id.replace('Button', '');
                console.log(`Left ${color} button`);
            });
        }
    };
})();
