import { useState } from "react";

const FolderStructure = ({ data }) => {
  const [hideFolder, setHideFolder] = useState(true);
  return (
    <>
      {data?.isFolder ? (
        <>
          <div
            className="p-1 text-xl font-medium hover:bg-gray-300"
            onClick={() => setHideFolder(!hideFolder)}
          >
            <span className="p-1">{!hideFolder ? "🔽" : "▶️"}</span>📁{" "}
            {data.name}
          </div>
          <div className={`${hideFolder ? "hidden" : "block pl-5"}`}>
            {data.children.map((child) => (
              <FolderStructure data={child} key={child.id} />
            ))}
          </div>
        </>
      ) : (
        <div className="p-1 hover:bg-gray-300">📄 {data.name}</div>
      )}
    </>
  );
};

export default FolderStructure;
