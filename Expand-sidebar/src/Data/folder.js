const datas = {
  name : 'root',
  isFolder : true,
  items : [
    {
    name : 'public',
    isFolder : true,
    items : [
      {
        name : 'public nested 1',
        isFolder : true,
        items:[
          {
            name : 'index.html',
            isFolder : false,
          },
          {
            name : 'hello.html',
            isFolder : false
          }
        ]
      },
      {
        name : "public_nested_2",
        isFolder : true,
        items : [
          {
            name : "file.jpg",
            isFolder : false
          },
        ]
      }
    ]
    },
    {
      name : "src",
      isFolder: true,
      items : [
        {
          name : "App.js",
          isFolder:false
        },
        {
          name:"Index.js",
          isFolder: false
        }
      ]
    }
  ]
}

export default datas
