    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
});

    typewriter.typeString(' Programmer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Gamer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('XD')
    .pauseFor(2500)
    .start();
