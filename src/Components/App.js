import { dummyData } from "../dummyData";
import FolderStructure from "./FolderStructure";

const App = () => {
  return (
    <div>
      <FolderStructure data={dummyData} />
    </div>
  );
};

export default App;
