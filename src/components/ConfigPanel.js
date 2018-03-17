import React from 'react';

const ConfigPanel = (props) => (
    <div>
        <button onClick={props.toggleEditMode}>editMode: {props.isEditMode ? 'ON' : 'OFF'}</button>
        <br />
        <button onClick={props.printListaSugerida}>Print ListaSugerida</button>
    </div>
)

export default ConfigPanel;