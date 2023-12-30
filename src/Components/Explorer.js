import { useState } from "react";

const Explorer = ({ data }) => {
  const [hideFolder, setHideFolder] = useState(true);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: true,
  });
  const [takeInput, setTakeInput] = useState({
    isVisible: false,
    isFolder: true,
  });

  const handleNewFile = (e, isFolder = true) => {
    e.stopPropagation();
    setHideFolder(false);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const addNewFile = (e) => {
    e.preventDefault();
    const newFile = {
      id: Date.now(),
      name: e.target[0].value,
      isFolder: showInput.isFolder,
      children: [],
    };
    data.children.push(newFile);
    setShowInput({ isVisible: false });
  };

  const handleEditFile = (e, isFolder) => {
    e.stopPropagation();
    setHideFolder(false);
    setTakeInput({ isVisible: true, isFolder });
  };

  return (
    <>
      {data?.isFolder ? (
        <>
          <div className="p-1 hover:bg-gray-300 flex items-center justify-between">
            <span
              className="p-1 text-yellow-500 text-xl font-medium flex"
              onClick={() => setHideFolder(!hideFolder)}
            >
              {!hideFolder ? "🔽" : "▶️"}📁{" "}
              {takeInput.isVisible ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    data.name = e.target[0].value;
                    setTakeInput({ isVisible: false });
                  }}
                >
                  <input
                    className="w-48 border outline-none border-black px-1 rounded-md"
                    type="text"
                    autoFocus
                    placeholder={showInput.isFolder ? "New Folder" : "New File"}
                    onBlur={() => setTakeInput({ isVisible: false })}
                  />
                </form>
              ) : (
                data.name
              )}
            </span>
            <span className="flex gap-1 text-lg">
              <button className="relative" onClick={(e) => handleNewFile(e)}>
                📁
                <span className="absolute -bottom-1.5 right-0.5 text-blue-600">
                  +
                </span>
              </button>
              <button
                className="relative"
                onClick={(e) => handleNewFile(e, false)}
              >
                📄
                <span className="absolute -bottom-1.5 right-0.5 text-blue-600">
                  +
                </span>
              </button>
              <button onClick={(e) => handleEditFile(e, data.isFolder)}>
                ✏️
              </button>
              <button>❌</button>
            </span>
          </div>
          <div className={`${hideFolder ? "hidden" : "block pl-5"}`}>
            {showInput.isVisible && (
              <div className="flex gap-2 items-center text-lg m-1">
                <span className="text-xl">
                  {showInput.isFolder ? "📁" : "📄"}
                </span>
                <form onSubmit={(e) => addNewFile(e)}>
                  <input
                    className="border border-black outline-none px-1 rounded-md"
                    type="text"
                    autoFocus
                    placeholder={showInput.isFolder ? "New Folder" : "New File"}
                    onBlur={() => setShowInput({ isVisible: false })}
                  />
                </form>
              </div>
            )}
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
