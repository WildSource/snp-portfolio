import './Spinningmodel.css'
import * as THREE from 'three';
import { useEffect, useRef } from "react";

function Spinningmodel() {
  const refContainer = useRef(null);

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current && refContainer.current.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);
  return (
    <div id='Spinningmodel' ref={refContainer}></div>
  );
}

export default Spinningmodel; 
