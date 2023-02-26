import "./App.css";
import "rsuite/dist/rsuite.min.css";
import {
  useAppDispatch,
  useAppSelector,
} from "./redux-toolkit-hooks/toolkitHooks";
import { RootState } from "./store";
import { decrement, increment } from "./Slices/testCounterSlice";
import DeActivationRequest from "./Components/DeActivationRequest";

import { Toaster } from "react-hot-toast";

function App() {
  const { counter } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  return (
    <main>
      <Toaster />
      <DeActivationRequest />
    </main>
  );
}

export default App;
