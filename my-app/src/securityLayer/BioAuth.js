import React from 'react';
import  '@corbado/webcomponent'
import '@corbado/webcomponent/pkg/auth_cui.css'

const CORBADO_PROJECT_ID = "pro-5890664499307067638";

function BioAuth() {
    return (
        <div className="App">
            <corbado-auth project-id={CORBADO_PROJECT_ID} conditional="yes">
                <input name="username" id="corbado-username"
                       required autoComplete="webauthn"/>
            </corbado-auth>
        </div>
    );
}

export default BioAuth;