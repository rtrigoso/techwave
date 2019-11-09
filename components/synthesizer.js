import React from 'react'

const Synthesizer = () => (
    <div className="wrapper">
        <button id="start-button">start</button>
        <div id="synthesizer">
            <canvas id="synthesizer-canvas" className="zdog-canvas" height="400"></canvas>
        </div>
        <style jsx>{`
            .wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: stretch;
            }
            #synthesizer {
                width: 75%;
                background-color: #0048BA;
                display: flex;
                flex-direction: row;
                justify-content: stretch;
                align-self: center;
                border-radius: 5px;
            }
            #synthesizer-canvas {
                display:none;
            }
            #start-button {
                flex: 1;
                align-self: center;
                font-family: arial, sans-sherif;
                text-transform: uppercase;
                font-weight: bold;
                margin: 50px;
                padding: 10px 20px;
                text-align: center;
            }
        `}</style>
    </div>

)

export default Synthesizer