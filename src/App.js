import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";
import Image from "./image.jpg";

function App() {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#D9D9D9",
        backgroundPosition: "center",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover"
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "1",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.2)"
        }}
      >
        <div style={{ marginLeft: 40 }}>
          <div style={{ fontSize: 60, fontWeight: "bold" }}>
            Explore Beyond Yourself
          </div>
          <div style={{ fontSize: 20, maxWidth: "50%", marginTop: 20 }}>
            We always wanted to do great things in our life. We try to break
            boundry and we try to create something rather amazing. We see dream
            to do big in life, we imagine great in life but time and again there
            come something that always stop us from doing what we always wanted
            to do.{" "}
          </div>
          <div style={{ fontSize: 20, maxWidth: "50%", marginTop: 20 }}>
            Discover_____
          </div>
        </div>
      </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 400,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#fff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 500,
              color: "#ffffff",
              opacity: 0.4,
              width: 2
            },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "bubble"
              },
              onclick: {
                enable: false,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      ></Particles>
    </div>
  );
}

export default App;
