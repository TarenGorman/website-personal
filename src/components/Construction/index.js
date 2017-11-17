import React, { Component } from 'react';
import * as THREE from 'three';
import logo from './hammer.jpg';
import './index..css';

class Construction extends Component {
  render() {
    return (
      <div className="App">
        <div className="Background">
          <Background/>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Under Construction</h1>
        </div>
        <div className="Footer">
        </div>
      </div>
    );
  }
}

class Background extends Component {
  constructor(props) {
    super(props)

    this.animate = this.animate.bind(this)
    this.mesh = {}
    this.points = {}
  }

  componentDidMount() {
    this.init()
    this.animate()
  }

  initPoints() {
    const geometry = new THREE.Geometry();
		for ( var i = 0; i < 20000; i ++ ) {
			var vertex = new THREE.Vector3();
			vertex.x = (Math.random() * 1600) - 800;
			vertex.y = (Math.random() * 1600) - 800;
			vertex.z = (Math.random() * 1600) - 800;
			geometry.vertices.push( vertex );
		}
    const material = new THREE.PointsMaterial( { size: 2.0 , color: 0x0dd6dd} );
    this.points = new THREE.Points(geometry, material)
    this.scene.add( this.points )
  }

  init() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = -400;

    const geometry = new THREE.BoxGeometry( 200, 200, 200 );
    const material = new THREE.MeshBasicMaterial( { color: 0x10d26f, wireframe: true } );

    this.mesh = new THREE.Mesh( geometry, material );
    this.scene.add( this.mesh );
    this.initPoints();

    this.renderer = new THREE.WebGLRenderer({alpha:true});
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.mesh.position.z = -1400

    document.body.append( this.renderer.domElement );
  }

  animate() {
    requestAnimationFrame( this.animate );
    const dt = this.clock.getDelta()
    this.mesh.rotation.x += .01 * dt;
    this.mesh.rotation.y += 0.02;
    this.points.rotation.x -= 0.002;

    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.camera.aspect = ( window.innerWidth / window.innerHeight );


    this.renderer.render( this.scene, this.camera );
    this.camera.updateProjectionMatrix();
  }

  render() {
    return (
      <canvas ref={ el => { this.canvas = el }} style={{position:'absolute',bottom:0,right:0}}></canvas>
    );
  }
}

export default Construction;
