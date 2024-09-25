import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Laptopp = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create the laptop geometry
    const laptopGeometry = new THREE.BoxGeometry(2, 1, 0.5);
    const laptopMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const laptop = new THREE.Mesh(laptopGeometry, laptopMaterial);
    scene.add(laptop);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add camera controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      laptop.rotation.x += 0.01;
      laptop.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Clean up the scene on component unmount
    return () => {
      scene.remove(laptop);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '400px' }} />
  );
};

export default Laptopp;