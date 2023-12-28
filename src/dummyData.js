export const dummyData = {
  name: "Root Folder",
  id: 1,
  isFolder: true,
  children: [
    {
      name: "Folder 1",
      id: 2,
      isFolder: true,
      children: [
        { name: "File 3", id: 6, isFolder: false, children: [] },
        { name: "File 4", id: 7, isFolder: false, children: [] },
        { name: "Folder 3", id: 8, isFolder: true, children: [] },
      ],
    },
    {
      name: "Folder 2",
      id: 3,
      isFolder: true,
      children: [
        { name: "File 5", id: 9, isFolder: false, children: [] },
        { name: "File 6", id: 10, isFolder: false, children: [] },
      ],
    },
    { name: "File 1", id: 4, isFolder: false, children: [] },
    { name: "File 2", id: 5, isFolder: false, children: [] },
  ],
};
