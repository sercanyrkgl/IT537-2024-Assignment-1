document.addEventListener("DOMContentLoaded", () => {
  const info = [
      {
          icon: "folder",
          textOne: "vscode",
          textTwo: "first folder management system deployment",
          textThree: "5 days ago",
      },
      {
          icon: "folder",
          textOne: "public",
          textTwo: "Second commit from seco",
          textThree: "5 days ago",
      },
      {
          icon: "folder",
          textOne: "src",
          textTwo: "Table management component items aded to constant js folder",
          textThree: "5 days ago",
      },
      {
          icon: "file",
          textOne: "index.html",
          textTwo: "HTML gonna be big deal for me",
          textThree: "5 days ago",
      },
      {
          icon: "file",
          textOne: "style.css",
          textTwo: "Add style.css",
          textThree: "5 days ago",
      },
  ];

  const el = document.querySelector("#filesTableContent");

  info.forEach((item) => {
      const tableComponent = new TableComponents(item.textOne, item.textTwo, item.textThree);
      el.appendChild(tableComponent);
  });
});




