import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const checkWheelAndBody = (wheel, body) => {
  return wheel.radius() < body.wheel_radius();
}

const checkSummaryWeight = (engine, roof, body) => {
  return body.weight_capacity() >= engine.weight() + roof.weight();
}

const checkRoofAndBody = (roof, body) => {
  return body.length() > roof.length() && body.width() == roof.width();
}

const checkEngineAndBody = (engine, body) => {
  return engine.height() < body.height() && engine.width() < body.width();
}

class Car {
  constructor(engine, body, roof, wheel) {
    this.engine = engine;
    this.body = body;
    this.roof = roof;
    this.wheel = wheel;
  }

  engine() { return this.engine; }

  body() { return this.body; }

  roof() { return this.roof; }

  wheel() { return this.wheel; }
}


class Engine {
  constructor(height, width, length, weight) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.weight = weight;
  }

  height() { return this.height; }

  width() { return this.width; }

  length() { return this.length; }

  weight() { return this.weight; }
}


class Body {
  constructor(height, width, length, weightCapacity, wheels_radius) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.weight_capacity = weightCapacity;
    this.wheel_radius = wheels_radius;
  }

  height() { return this.height; }

  width() { return this.width; }

  length() { return this.length; }

  weight_capacity() { return this.weight_capacity; }

  wheel_radius() { return this.wheel_radius; }
}

class Roof {
  constructor(height, width, length) {
    this.height = height;
    this.width = width;
    this.length = length;
  }

  height() { return this.height; }

  width() { return this.width; }

  length() { return this.length; }
}


class Wheel {
  constructor(radius) {
    this.radius = radius;
  }

  radius() { return this.radius; }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div></div>
  )
}

export default App
