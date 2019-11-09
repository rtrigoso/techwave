import React from 'react'
import TouchKnob from "react-touch-knob"
import Legend from "./legend";

const Synthesizer = () => (
    <div className="wrapper">
        <Legend />
        <div id="synthesizer">
            <div id="oscillatorBank">
                <h1>Oscillator Bank</h1>
                <div className="label">~OSC1~</div>
                <div id="oscillator1">
                    <div className="knobGroup">
                        <label htmlFor="waveform">waveform</label>
                        <div className="waveform">
                            <div className="selected">SINE</div>
                            <input type="button" name="waveform" value="sine" /><br />
                            <input type="button" name="waveform" value="saw" /><br />
                            <input type="button" name="waveform" value="square" />
                        </div>
                    </div>
                    <div className="knobGroup" >
                        <label htmlFor="detune">detune</label>
                        <TouchKnob
                            class="knob detune"
                            name="detune"
                            min="0"
                            max="100"
                            value="0"
                            onChange=""
                            onEnd=""
                            showNumber={true}
                            rounded={true}
                        />
                    </div>

                </div>
            </div>
            <div id="modifiers">
                <h1>Modifiers</h1>
                <div className="modifiersGroup">
                    <div className="knobGroup">
                        <label htmlFor="attack">attack</label>
                        <TouchKnob
                            class="knob attack"
                            name="attack"
                            min="0"
                            max="20"
                            value="0"
                            onChange=""
                            onEnd=""
                            showNumber={true}
                            rounded={true}
                        />
                    </div>
                    <div className="knobGroup">
                        <label htmlFor="decay">decay</label>
                        <TouchKnob
                            class="knob decay"
                            name="decay"
                            min="0"
                            max="20000"
                            value="300"
                            onChange=""
                            onEnd=""
                            showNumber={true}
                            rounded={true}
                        />
                    </div>
                    <div className="knobGroup">
                        <label htmlFor="sustain">sustain</label>
                        <TouchKnob
                            class="knob sustain"
                            name="sustain"
                            min="0"
                            max="20000"
                            value="300"
                            onChange=""
                            onEnd=""
                            showNumber={true}
                            rounded={true}
                        />
                    </div>
                </div>
                <div className="modifiersGroup">
                    <div className="knobGroup">
                        <label htmlFor="lowpassFrequency">lowpass Frequency</label>
                        <TouchKnob
                            class="knob lowpassFrequency"
                            name="lowpassFrequency"
                            min="0"
                            max="20000"
                            value="20000"
                            onChange=""
                            onEnd=""
                            showNumber={true}
                            rounded={true}
                        />
                    </div>
                    <div className="knobGroup">
                        <label htmlFor="highpassFrequency">highpass Frequency</label>
                        <TouchKnob
                            class="knob highpassFrequency"
                            name="highpassFrequency"
                            min="0"
                            max="20000"
                            value="0"
                            onChange=""
                            onEnd=""
                            showNumber={true}
                            rounded={true}
                        />
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            h1 {
                text-align: center;
                color: #FFFFFF;
                padding: 0px;
                margin: 15px 0px 0px;
                text-transform: uppercase;
                font-size: 1.5em;
            }
            label {
                text-align: center;
                color: #FFFFFF;
                padding: 0px;
                text-transform: uppercase;
                font-weight: 900
            }
            .wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: stretch;
            }
            #synthesizer {
                border: solid 2px; black;
                width: 75%;
                height: 800px;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: stretch;
                align-self: center;
                margin-bottom: 20px;
            }
            #oscillatorBank, #modifiers {
                border-top: solid 10px #000000;
                display: flex;
                flex-direction: column;
                justify-content: stretch;
            }
            #oscillatorBank {
                background-color: #FF7E00;
                flex: 1;
                align-self: stretch;
                display: flex;
                padding-bottom: 20px;
            }
            #oscillator1 {
                flex: 1;
                align-self: stretch;
                display: flex;
                justify-content: space-evenly;
            }
            #modifiers {
                background-color: #0048BA;
                flex: 2;
                align-self: stretch;
                display: flex;
            }
            .modifiersGroup {
                flex: 1;
                align-self: stretch;
                display: flex;
                justify-content: space-evenly;
            }
            .knobGroup {
                margin: 5px;
                overflow: hidden;
                flex: 1
                flex-wrap: wrap;
                display: flex;
                flex-direction: column;
                align-self: center;
            }
            .waveform {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
            }
            .waveform > input {
                color: #ffffff;
                background-color: #E32636;
                border-radius: 5px;
                margin: 5px;
                font-weight: 700;
                text-transform: uppercase;
                padding: 5px;
            }
            .waveform > div {
                color: #ffffff;
                font-weight: 900;
                text-align: center;
                text-transform: uppercase;
                background-color: #3B7A57;
                border: solid 2px #000000;
                width: 85px;
                margin: 5px 0px;
                height: 2.5em;
                line-height: 2.5em;
                font-size: .75em;
                align-self: center;
            }
            .label {
                align-self: center;
                color: #FFFFFF;
                font-size: 1.5em;
                padding: 10px;
            }
        `}</style>
    </div>

)

export default Synthesizer