import './Spinningmodel.css'
import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function Spinningmodel() {
  const refContainer = useRef(null);
  const modelRef = useRef(null);  // Add a ref to store the loaded model

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current && refContainer.current.appendChild( renderer.domElement );

    const loader = new GLTFLoader();
    loader.load(
      '../../../public/spinningmodel.glb',
      (gltf) => {
        modelRef.current = gltf.scene;  // Store the loaded model in the ref
        scene.add(gltf.scene);
      },
      undefined,
      (error) => console.error( error )
    );

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);

      // Rotate the loaded model if it exists
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div id='Spinningmodel' ref={refContainer}></div>
  );
}

export default Spinningmodel; 
