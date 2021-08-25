console.log(` 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

var waypoint = new Waypoint({
    element: document.getElementById('btn-left'),
    handler: function () {
        let btn =document.getElementById('btn-left');
        btn.classList.add('active');

    },
    offset: 'bottom-in-view'
})