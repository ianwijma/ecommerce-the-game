import SceneComponent from 'babylonjs-hook';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";

export default function ShoppingPanel({ className }) {


    let box;

    const onSceneReady = (scene) => {
        // This creates and positions a free camera (non-mesh)
        const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;

        // Our built-in 'box' shape.
        box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
    };

    /**
     * Will run on every frame render.  We are spinning the box on y-axis.
     */
    const onRender = (scene) => {
        if (box !== undefined) {
            const deltaTimeInMillis = scene.getEngine().getDeltaTime();

            const rpm = 2;
            box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
        }
    };


    return <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} className={className} />
}
