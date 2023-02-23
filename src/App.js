import {Runtime, Inspector} from '@observablehq/runtime';
import React, {useEffect, useRef} from 'react';
import notebook from './@d3/zoomable-sunburst';
import './App.css';

export default function App() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === 'chart') {
        return new Inspector(ref.current);
      }
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <h1>Zoomable Sunburst Model for data visualisation</h1>
      <div ref={ref} />
    </>
  );
}
