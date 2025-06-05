import React, { useState } from "react";
import './ChoWorMiss.scss';
import Choose from "./choose";
import Work from "./work";
import Misson from "./misson";

function ChoWorMiss() {
    const [activeComponent, setActiveComponent] = useState('one');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'one':
                return <Choose />;
            case 'two':
                return <Work />;
            case 'three':
                return <Misson />;
            default:
                return <Choose />;
        }
    };

    return (
        <>
            <div className="btn-group">
                <button onClick={() => setActiveComponent('one')}>Why choose us</button>
                <button onClick={() => setActiveComponent('two')}>How we work</button>
                <button onClick={() => setActiveComponent('three')}>Our mission</button>
            </div>

            <div style={{ marginTop: '20px' }}>
                {renderComponent()}
            </div>
        </>
    );
}

export default ChoWorMiss;
