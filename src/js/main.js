console.log(` 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

window.addEventListener('load', function() {
    document.querySelector('.loading').classList.add('hide')
});


// var waypoint = new Waypoint({
//     element: document.getElementById('figOne'),
//     handler: function () {
//         let btn =document.getElementById('figOne');
//         btn.classList.add('active');
//         console.log('hello world')

//     },
//     offset: '95%'
// })
// var waypoint = new Waypoint({
//     element: document.getElementById('btn-left'),
//     handler: function () {
//         let btn =document.getElementById('btn-left');
//         btn.classList.add('active');
//         console.log('hello world')

//     },
//     offset: '95%'
// })