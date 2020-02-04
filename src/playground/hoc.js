//HIGHER ORDER COMPONENT (HOC) -A component that renders another component -
//reuse code
//render hijacking
//prop manipulation
//anstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent)=>{
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share!</p>} 
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent)=>{
    return (props) => (
        <div>
            {props.isAuthenticated ?(<WrappedComponent {...props}/>):(<p>this is not Authenticated</p>)}
            
        </div>
    );
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info = "there are the details"/>, document.getElementById('app'));