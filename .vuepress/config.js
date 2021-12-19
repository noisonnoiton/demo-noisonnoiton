module.exports = {
  "title": "noisonnoiton",
  "description": "vuepress-reco test",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "lang": 'ko-KR',
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/htdp1",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/blogs/cloud/": [
        {
          title: "AWS",
          collapsable: false,
          children: [
            "2021/start",
            "2021/certi",
          ],
        },
        {
          title: "Resources",
          collapsable: false,
          children: [
            "2021/eks",
          ],
        },
      ],
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/logo.png",
    "style": "@vuepress-reco/style-default",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "noisonnoiton",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017",
    "noFoundPageByTencent": false,
    "subSidebar": true
  },

  "markdown": {
    "lineNumbers": true,
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-plantuml'))
    }
  },

  "plugins": [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@dovyp/vuepress-plugin-clipboard-copy",
  ]
}