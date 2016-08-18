import * as Matter from 'matter-js';

window.onload = function() {
    console.log('Application started...');

    // module aliases
    var {Engine, Render, World, Bodies} = Matter;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine
    } as any);

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, ground]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    (Render as any).run(render);
}
