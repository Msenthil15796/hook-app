import React from "react";
import "./App.css";
import MemoCounterOne from "./hooks/MemoHook/MemoCounterOne";
// import CounterReducer from "./hooks/ReducerHook/CounterReducer3";
// import EffectApp from './hooks/EffectHook';
// import StateApp from './hooks/StateHook';
// import ComponentA from "./hooks/ContextHook/ComponentA";

//for contextHook
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// import ParentComponent from "./hooks/CallBackHook/ParentComponent";

function App() {
  return (
    <div className="App">
      {/*  Code related useContext Hook (ComponenntA)
  <UserContext.Provider value={"Props from context"}>
        <ChannelContext.Provider value={'value from Channel Context'}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    */}

      {/* useReducer Hook*/}
      {/* <CounterReducer />*/}

      {/* useCallBack Hook*/}
      {/* <ParentComponent /> */}
      
      {/* useCallBack Hook*/}
      <MemoCounterOne />
    </div>
  );
}

export default App;
