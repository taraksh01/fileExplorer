export const dummyData = {
  name: "Explorer",
  id: 1,
  isFolder: true,
  children: [
    {
      name: "src",
      id: 2,
      isFolder: true,
      children: [
        {
          name: "components",
          id: 11,
          isFolder: true,
          children: [
            { name: "Header.js", id: 13, isFolder: false, children: [] },
            { name: "Footer.js", id: 14, isFolder: false, children: [] },
            { name: "Main.js", id: 15, isFolder: false, children: [] },
          ],
        },
        {
          name: "pages",
          id: 16,
          isFolder: true,
          children: [
            { name: "Home.js", id: 17, isFolder: false, children: [] },
            { name: "About.js", id: 18, isFolder: false, children: [] },
            { name: "Contact.js", id: 19, isFolder: false, children: [] },
            { name: "Blog.js", id: 20, isFolder: false, children: [] },
          ],
        },
        { name: "App.js", id: 12, isFolder: false, children: [] },
      ],
    },
    {
      name: "public",
      id: 3,
      isFolder: true,
      children: [
        { name: "favicon.ico", id: 21, isFolder: false, children: [] },
        { name: "logo.png", id: 22, isFolder: false, children: [] },
        { name: "manifest.json", id: 23, isFolder: false, children: [] },
        { name: "robots.txt", id: 24, isFolder: false, children: [] },
        { name: "sitemap.xml", id: 25, isFolder: false, children: [] },
      ],
    },
    { name: ".gitignore", id: 10, isFolder: false, children: [] },
    { name: "index.html", id: 5, isFolder: false, children: [] },
    { name: "index.css", id: 8, isFolder: false, children: [] },
    { name: "index.js", id: 7, isFolder: false, children: [] },
    { name: "package-lock.json", id: 9, isFolder: false, children: [] },
    { name: "package.json", id: 4, isFolder: false, children: [] },
    { name: "README.md", id: 6, isFolder: false, children: [] },
  ],
};
