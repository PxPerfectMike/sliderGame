const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true,
});

app.renderer.backgroundColor = 0x081411;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

