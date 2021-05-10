import React from 'react';
import AboutStyle from './About.module.css';
import systemDiagram from './../pictures/system_diagram.png';
function About() {
  return (
    <div className={AboutStyle.about}>
      <div className={AboutStyle.introduction}>
        <h1>General concept</h1>
        <br />
        <img src={systemDiagram}></img>
        <br />
        <br />
        <p>
          This project is based on Raspberry Pi Zero WH 512 MB RAM - Wi-Fi + BT
          4.1. There is a server, website and stm32 handler (weather station,
          valve controller, led controller). Through the website users can
          control lighting, garden sprinklers and receive weather information.
          Connections between Raspberry Pi and STM are established via
          Bluetooth.
        </p>
      </div>
      <div className={AboutStyle.server}>
        <h1>Pilothouse</h1>
        <br />
        <p>
          Pilothouse is the part of the system where requests from the website
          to the periphery and information from the periphery to the website are
          processed
        </p>
      </div>
      <div className={AboutStyle.peripherals}>
        <h1>Peripherals</h1>
        <br />
        <li>Weather station</li>
        <li>Valve controller</li>
        <li>Led controller</li>
      </div>
      <div className={AboutStyle.webApp}>
        <h1>WebApp</h1>
        <br />
        <p>
          The website ensures safe management of the system - logging in is
          required. The user can display the weather, turn on the light and
          control the solenoid valves.
        </p>
      </div>
    </div>
  );
}

export default About;
