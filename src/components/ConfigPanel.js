import React from 'react';

const ConfigPanel = (props) => (
    <div>
        <button onClick={props.togglePreviewMode}>PreviewMode: {props.isPreviewMode ? 'ON' : 'OFF'}</button>
        <br />
        <button onClick={props.printListaSugerida}>Print ListaSugerida</button>
    </div>
)

export default ConfigPanel;