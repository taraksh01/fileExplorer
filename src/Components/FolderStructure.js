const FolderStructure = ({ data }) => {
  return (
    <>
      {data?.isFolder ? (
        <>
          <div className="p-1 border text-2xl font-medium">📁 {data.name}</div>
          <div className="ml-4">
            {data.children.map((child) => (
              <FolderStructure data={child} />
            ))}
          </div>
        </>
      ) : (
        <div className="p-1">📄 {data.name}</div>
      )}
    </>
  );
};

export default FolderStructure;
