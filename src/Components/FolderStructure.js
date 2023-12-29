const FolderStructure = ({ data }) => {
  return (
    <>
      {data?.isFolder ? (
        <>
          <div className="p-1 text-xl font-medium">📁 {data.name}</div>
          <div className="ml-5">
            {data.children.map((child) => (
              <FolderStructure data={child} key={child.id} />
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
