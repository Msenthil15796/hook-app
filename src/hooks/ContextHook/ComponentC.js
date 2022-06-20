import React, { useContext } from 'react'
import { UserContext,ChannelContext } from '../../App';
const ComponentC = () => {

    //============useContext Hook================//
    const user = useContext(UserContext);
    const Channel = useContext(ChannelContext);
    return (
    // older way of comsuming props value(before hook)
    // <div>
    //   <UserContext.Consumer>
    //     {(value) => <div>Here is the- {value}</div>}
    //   </UserContext.Consumer>
    // </div>
        
    //============after hook=================//
        <div>
            {user}<br />
            {Channel}
        </div>
  );
}

export default ComponentC