import React from 'react';
import './Display.css';

function Display({display, clicked, handleClicked}) {
  return (
    <div className='display-card' style={{display: clicked?"":"none"}}>
        <div className='details'>
            <ul>
                <li>Capsule Serial: {display.capsule_serial}</li>
                <li>Capsule ID: {display.capsule_id}</li>
                <li>Status: {display.status}</li>
                <li>Original Launch: {display.original_launch}</li>
                {/* <li>{display.original_launch_unix}</li> */}
                {/* <li>{display.missions}</li> */}
                <li>Landings: {display.landings}</li>
                <li>Type: {display.type}</li>
                <li>Details: {display.details?`${display.details}`:"NA"}</li>
                <li>Reuse Count: {display.reuse_count}</li>
            </ul>
        </div>
        <button className='close-btn' onClick={handleClicked}>Close</button>
        
    </div>
  )
}

export default Display