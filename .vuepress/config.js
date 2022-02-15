module.exports = {
  "title": "noisonnoiton",
  "description": "Kloudbank demo.",
  "dest": "public",
  "base": "/demo-noisonnoiton/",
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
            "link": "https://github.com/kloudbank",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/blogs/cloud/": [
        {
          title: "Introduction",
          collapsable: false,
          children: [""],
        },
        {
          title: "AWS",
          collapsable: false,
          children: ["start","certi"],
        },
        {
          title: "Resources",
          collapsable: false,
          children: ["eks", "alb", "nlb", "ebs", "efs"],
        },
      ],
      "/docs/theme-reco/": ["","theme","plugin","api"],
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
    "record": "kloudbank",
    "startYear": "2021",
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
