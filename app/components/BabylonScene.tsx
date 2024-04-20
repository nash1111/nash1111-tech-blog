import { React, useEffect, useRef } from 'react';
import { ArcRotateCamera, Engine, HemisphericLight, Scene, SceneLoader, Vector3 } from '@babylonjs/core';
import '@babylonjs/loaders/OBJ';


const BabylonScene = () => {
    const renderCanvas = useRef(null);

    useEffect(() => {
        if (renderCanvas.current) {
            const engine = new Engine(renderCanvas.current, true);
            const scene = new Scene(engine);

            const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new Vector3(0, 0, 0), scene);
            camera.attachControl(renderCanvas.current, true);

            const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);

            SceneLoader.ImportMesh("", "/", "Neutral_M.obj", scene, function (meshes) {
                scene.createDefaultCameraOrLight(true, true, true);
                scene.createDefaultEnvironment();
            });

            engine.runRenderLoop(() => {
                scene.render();
            });

            return () => {
                engine.dispose();
            };
        }
    }, []);

    return <canvas ref={renderCanvas} style={{ width: '100%', height: '100vh' }}></canvas>;
};

export default BabylonScene;