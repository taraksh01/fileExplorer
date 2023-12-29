import { dummyData } from "../dummyData";
import Explorer from "./Explorer";

const App = () => {
  return (
    <div className="max-w-sm">
      <Explorer data={dummyData} />
    </div>
  );
};

export default App;
