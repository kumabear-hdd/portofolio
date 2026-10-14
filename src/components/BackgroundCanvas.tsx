import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackgroundCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Primary stars
    const count = 500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 600;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x3b6bff,
      size: 1.8,
      transparent: true,
      opacity: 0.7,
    });
    const stars = new THREE.Points(geo, mat);
    scene.add(stars);

    // Accent stars
    const accentCount = 150;
    const accentPos = new Float32Array(accentCount * 3);
    for (let i = 0; i < accentCount * 3; i++) {
      accentPos[i] = (Math.random() - 0.5) * 500;
    }
    const geoA = new THREE.BufferGeometry();
    geoA.setAttribute('position', new THREE.BufferAttribute(accentPos, 3));
    const matA = new THREE.PointsMaterial({
      color: 0x00d4c8,
      size: 1.2,
      transparent: true,
      opacity: 0.5,
    });
    const accentStars = new THREE.Points(geoA, matA);
    scene.add(accentStars);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      stars.rotation.x += 0.00055;
      stars.rotation.y += 0.00038;
      accentStars.rotation.x -= 0.00035;
      accentStars.rotation.y += 0.00050;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      geoA.dispose();
      matA.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="canvas-bg" ref={containerRef} />;
};
