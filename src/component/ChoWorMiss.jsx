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
                <button onClick={() => setActiveComponent('one')}
                    style={{ backgroundColor: activeComponent === 'one' ? '#F2F2F2' : '#4169E1', color: activeComponent === 'one' ? '#4169E1' : 'white' }}
                >Why choose us</button>
                <button onClick={() => setActiveComponent('two')}
                    style={{ backgroundColor: activeComponent === 'two' ? '#F2F2F2' : '#4169E1', color: activeComponent === 'two' ? '#4169E1' : 'white' }}
                >How we work</button>
                <button onClick={() => setActiveComponent('three')}
                    style={{ backgroundColor: activeComponent === 'three' ? '#F2F2F2' : '#4169E1', color: activeComponent === 'three' ? '#4169E1' : 'white' }}
                >Our mission</button>
            </div >

            <div style={{ marginTop: '20px' }}>
                {renderComponent()}
            </div>
        </>
    );
}

export default ChoWorMiss;
