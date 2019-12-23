import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';
import { hexToRgba } from '../Helpers';

function BoxShadow(props) {
    // Props & States
    const { updateOutput } = props;
    const [shadowX, setShadowX] = useState(2);
    const [shadowY, setShadowY] = useState(2);
    const [shadowBlur, setShadowBlur] = useState(8);
    const [shadowSpread, setShadowSpread] = useState(4);
    const [shadowColor, setShadowColor] = useState('#000000');
    const [shadowColorAlpha, setShadowColorAlpha] = useState(0.1);
    
    // Lifecycles
    useEffect(() => {
        const shadowColorOutput = hexToRgba(shadowColor, shadowColorAlpha);
        const style = { boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowColorOutput}` };
        const css = `box-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowColorOutput};`;
        updateOutput(style, css);
    }, [updateOutput, shadowX, shadowY, shadowBlur, shadowSpread, shadowColor, shadowColorAlpha]);

    return (
        <MainSection extraClass="main__section--inputs" title="Box Shadow" subTitle="Customizing">
            <div className="inputs">
                <label className="label">X (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="-10"
                            max="10"
                            value={shadowX}
                            onChange={(e) => setShadowX(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-10</div>
                            <div className="item has-text-grey">10</div>
                        </div>
                    </div>
                </div>
                <label className="label">Y (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="-10"
                            max="10"
                            value={shadowY}
                            onChange={(e) => setShadowY(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-10</div>
                            <div className="item has-text-grey">10</div>
                        </div>
                    </div>
                </div>
                <label className="label">Blur (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="20"
                            value={shadowBlur}
                            onChange={(e) => setShadowBlur(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">20</div>
                        </div>
                    </div>
                </div>
                <label className="label">Spread (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="20"
                            value={shadowSpread}
                            onChange={(e) => setShadowSpread(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">20</div>
                        </div>
                    </div>
                </div>
                <label className="label">Color</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input 
                            className="input"
                            type="color" 
                            value={shadowColor}
                            onChange={(e) => setShadowColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={shadowColor}
                            onChange={(e) => setShadowColor(e.target.value)} />
                    </div>
                </div>
                <label className="label">Color opacity</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={shadowColorAlpha}
                            onChange={(e) => setShadowColorAlpha(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default BoxShadow;