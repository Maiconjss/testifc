import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import { IFCViewer, ViewData } from '../index';

import './styles.css';

export function ViewerRender() {
  const [mouseEvent, setMouseEvent] = useState<any>();
  const [ifcURL, setIfcUrl] = useState('');

  function readIfcFile(event: any) {
    if (!event) return;
    const objectURL = URL.createObjectURL(event.target.files[0]);
    setIfcUrl(objectURL);
  }

  return (
    <div>
      <input readOnly type="file" onChange={readIfcFile} id="openFileDialog" />
       <ViewData />
      <div onDoubleClick={setMouseEvent}>
        <Canvas
          dpr={Math.min(window.devicePixelRatio, 2)}
          gl={{ antialias: true }}
          mode="concurrent"
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: 5,
            aspect: window.innerWidth / window.innerHeight
          }}
          onCreated={({ scene, setSize }) => {
            setSize(window.innerWidth, window.innerHeight);
            scene.background = new Color('#000058');
          }}
        >
           
          <IFCViewer ifcURL={ifcURL} mouseEvent={mouseEvent} />
          
        </Canvas>
      </div>
    </div>
  );
}


