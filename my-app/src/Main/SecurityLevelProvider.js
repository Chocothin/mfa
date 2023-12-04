import React, {createContext, useContext, useState} from 'react';

const SecurityLevelContext = createContext();

export function SecurityLevelProvider(props) {
    const [securityLevel, setSecurityLevel] = useState(1);
    const value = {securityLevel, setSecurityLevel};
    console.log("SecurityLevel", securityLevel);
    return (
        <SecurityLevelContext.Provider value={value}>
            {props.children}
        </SecurityLevelContext.Provider>
    );
}

export function useSecurityLevel() {
    return useContext(SecurityLevelContext);
}