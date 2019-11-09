import React from 'react'

const Legend = () => (
    <div className="legend">
        <div className="header" >Keyboard Mapping:</div>
        <div className="keyGroup">
            <div className="black">
                <div><span>C#</span>E</div>
                <div><span>D#</span>R</div>
            </div>
            <div className="white">
                <div><span>C</span>S</div>
                <div><span>D</span>D</div>
                <div><span>E</span>F</div>
            </div>
        </div>
        <div className="keyGroup">
            <div className="black">
                <div><span>F#</span>Y</div>
                <div><span>G#</span>U</div>
                <div><span>A#</span>I</div>
            </div>
            <div className="white">
                <div><span>F</span>G</div>
                <div><span>G</span>H</div>
                <div><span>A</span>J</div>
                <div><span>B</span>K</div>
            </div>
        </div>

        <style jsx>{`
            .legend {
                align-self: center;
                padding: 10px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                margin: 20px;
                border: solid thin #CCCCCC;
                border-radius: 5px;
            }
            .header {
                width: 100px;
                font-size: .75em;
            }
            .keygroup {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            span {
                font-size: .65em;
                display: block;
            }
            .white, .black {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            .white > div, .black > div {
                width: 50px;
                height: 40px;
                display: block;
                border: solid 1px #CCCCCC;
                text-align: center;
                margin: 3px;
                padding: 3px;
            }
            .white > div{
                background-color: #ffffff;
                color: #000000;
            }
            .black > div{
                background-color: #000000;
                color: #ffffff;
            }
        `}</style>
    </div >
)

export default Legend