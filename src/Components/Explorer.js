import { useState } from "react";

const Explorer = ({ data }) => {
  const [hideFolder, setHideFolder] = useState(true);
  return (
    <>
      {data?.isFolder ? (
        <>
          <div className="p-1 hover:bg-gray-300 flex items-center justify-between">
            <span
              className="p-1 text-yellow-500 text-xl font-medium"
              onClick={() => setHideFolder(!hideFolder)}
            >
              {!hideFolder ? "🔽" : "▶️"}📁 {data.name}
            </span>
            <span className="flex gap-1 text-lg">
              <button className="relative">
                📁
                <span className="absolute -bottom-1.5 right-0.5 text-blue-600">
                  +
                </span>
              </button>
              <button className="relative">
                📄
                <span className="absolute -bottom-1.5 right-0.5 text-blue-600">
                  +
                </span>
              </button>
              <button>✏️</button>
              <button>❌</button>
            </span>
          </div>
          <div className={`${hideFolder ? "hidden" : "block pl-5"}`}>
            {data.children.map((child) => (
              <Explorer data={child} key={child.id} />
            ))}
          </div>
        </>
      ) : (
        <div className="p-1 hover:bg-gray-300">📄 {data.name}</div>
      )}
    </>
  );
};

export default Explorer;
