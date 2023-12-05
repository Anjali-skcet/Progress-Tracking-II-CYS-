import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div>
      <h1>Component 3</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div>
      <h1>Component 4</h1>
      <Component5 />
    </div>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);

export default Component5