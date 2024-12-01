import Alert from "./component/Alert";
import { useState } from "react";
import Button from "./component/Button";


function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      { alertVisible &&<Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}
 
export default App