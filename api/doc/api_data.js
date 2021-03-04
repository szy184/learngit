define({ "api": [
  {
    "type": "post",
    "url": "/admin/book/addBook",
    "title": "图书信息添加",
    "name": "addBook",
    "group": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>图书编号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>图书名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>图书类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>图书价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>借书状态(0表示可借,后台默认为0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>图书描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "/admin/book/delBook",
    "title": "图书信息删除",
    "name": "delBook",
    "group": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>图书编号.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "/admin/book/getBookInfo",
    "title": "图书列表",
    "name": "getBookInfo",
    "group": "Book",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>图书信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "/admin/book/getInfos",
    "title": "分页查询",
    "name": "getInfos",
    "group": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页的数据条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allCount",
            "description": "<p>总数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "/admin/book/updateBook",
    "title": "图书信息修改",
    "name": "updateBook",
    "group": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>图书编号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>图书名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>图书类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>图书状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>图书价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>图书描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "/admin/kind/add",
    "title": "图书类型添加",
    "name": "add",
    "group": "Kind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kindName",
            "description": "<p>图书类别名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/kindRouter.js",
    "groupTitle": "Kind"
  },
  {
    "type": "post",
    "url": "/admin/kind/del",
    "title": "图书类别删除",
    "name": "del",
    "group": "Kind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>类型编号.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/kindRouter.js",
    "groupTitle": "Kind"
  },
  {
    "type": "post",
    "url": "/admin/kind/getInfos",
    "title": "图书类别列表",
    "name": "getInfos",
    "group": "Kind",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/kindRouter.js",
    "groupTitle": "Kind"
  },
  {
    "type": "post",
    "url": "/admin/kind/update",
    "title": "图书类别修改",
    "name": "update",
    "group": "Kind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>图书类别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kindName",
            "description": "<p>图书类别</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/kindRouter.js",
    "groupTitle": "Kind"
  },
  {
    "type": "post",
    "url": "/admin/out/add",
    "title": "借出图书信息添加",
    "name": "add",
    "group": "Out",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>图书编号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>图书名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studyId",
            "description": "<p>学生学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studentName",
            "description": "<p>学生姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>借书状态(1表示已借,后台默认为1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/outRouter.js",
    "groupTitle": "Out"
  },
  {
    "type": "post",
    "url": "/admin/out/del",
    "title": "图书借出信息删除",
    "name": "del",
    "group": "Out",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>借出id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/outRouter.js",
    "groupTitle": "Out"
  },
  {
    "type": "post",
    "url": "/admin/out/getInfos",
    "title": "分页查询",
    "name": "getInfos",
    "group": "Out",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页的数据条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allCount",
            "description": "<p>总数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/outRouter.js",
    "groupTitle": "Out"
  },
  {
    "type": "post",
    "url": "/admin/out/getOutInfo",
    "title": "图书借出信息列表",
    "name": "getOutInfo",
    "group": "Out",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>图书信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/outRouter.js",
    "groupTitle": "Out"
  },
  {
    "type": "post",
    "url": "/admin/Root/add",
    "title": "管理员添加",
    "name": "add",
    "group": "Root",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>管理员名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/rootRouter.js",
    "groupTitle": "Root"
  },
  {
    "type": "post",
    "url": "/admin/root/del",
    "title": "管理员删除",
    "name": "del",
    "group": "Root",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>管理员id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/rootRouter.js",
    "groupTitle": "Root"
  },
  {
    "type": "post",
    "url": "/admin/root/getInfos",
    "title": "分页查询",
    "name": "getInfos",
    "group": "Root",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页的数据条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allCount",
            "description": "<p>总数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/rootRouter.js",
    "groupTitle": "Root"
  },
  {
    "type": "post",
    "url": "/admin/root/getRootInfo",
    "title": "管理员列表",
    "name": "getRootInfo",
    "group": "Root",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询到的数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/rootRouter.js",
    "groupTitle": "Root"
  },
  {
    "type": "post",
    "url": "/admin/root/login",
    "title": "管理员登录",
    "name": "login",
    "group": "Root",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rootInfo",
            "description": "<p>信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/rootRouter.js",
    "groupTitle": "Root"
  },
  {
    "type": "post",
    "url": "/admin/root/reg",
    "title": "管理员注册",
    "name": "reg",
    "group": "Root",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>注册姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>注册密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/rootRouter.js",
    "groupTitle": "Root"
  },
  {
    "type": "post",
    "url": "/admin/root/update",
    "title": "管理员信息修改",
    "name": "update",
    "group": "Root",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>管理员id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>管理员名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/rootRouter.js",
    "groupTitle": "Root"
  },
  {
    "type": "post",
    "url": "/admin/upload/img",
    "title": "图片上传",
    "name": "img",
    "group": "Upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hehe",
            "description": "<p>上传名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/uploadRouter.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "/admin/user/reg",
    "title": "学生注册",
    "name": "add",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studyId",
            "description": "<p>学号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>学生名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tel",
            "description": "<p>电话号码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码r.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/admin/user/del",
    "title": "学生删除信息",
    "name": "del",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studyId",
            "description": "<p>学号.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/admin/user/getInfos",
    "title": "分页查询",
    "name": "getInfos",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>查询页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页的数据条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allCount",
            "description": "<p>总数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/admin/user/getUserInfo",
    "title": "学生列表",
    "name": "getUserInfo",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>学生信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/admin/user/login",
    "title": "学生登录",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studyId",
            "description": "<p>学号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "userInfo",
            "description": "<p>学生信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/admin/user/update",
    "title": "学生信息修改",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "studyId",
            "description": "<p>学生学号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>学生名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tel",
            "description": "<p>电话号码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  }
] });
