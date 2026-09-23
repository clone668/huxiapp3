# huxi.app

个人主页 — 作品与文章。Astro 静态生成，无后端，无数据库，内容全是 Markdown。

**Live**: https://huxi.app

## 栈

- **Astro** — 静态站点生成
- **Content Collections** — Markdown 内容管理（works / blog）
- **@astrojs/rss** — RSS 订阅源
- **@astrojs/sitemap** — 站点地图
- **Vercel** — 部署

## 结构

```text
src/
├── content/
│   ├── works/       # 作品（01-coinsig.md … 09-blank.md）
│   └── blog/        # 文章
├── layouts/
│   └── Base.astro   # 全局布局（刊头 / 导航 / 页脚 / 主题切换）
├── pages/
│   ├── index.astro        # 首页
│   ├── works.astro        # 作品列表
│   ├── works/[slug].astro # 作品详情（含内嵌鲁班尺工具）
│   ├── blog.astro         # 文章列表
│   ├── blog/[slug].astro  # 文章详情
│   ├── about.astro        # 关于
│   └── rss.xml.ts         # RSS endpoint
└── styles/
    └── global.css   # 双主题（浅色报纸 / 暗色编辑部）

public/
├── fonts/           # 自托管字体（JetBrains Mono / Noto Serif SC / Noto Sans SC）
├── ruler/           # 鲁班尺工具静态资源
├── favicon.svg
└── site.webmanifest # PWA
```

## 开发

```sh
npm install
npm run dev      # localhost:4321
npm run build    # 输出到 dist/
```

## 内容

- 加作品：`src/content/works/` 下新建 Markdown，`order` 控制排序，`featured: true` 上首页
- 加文章：`src/content/blog/` 下新建 Markdown，`draft: true` 不发布
- 主题色、字体、版式：`src/styles/global.css` 顶部的 CSS 变量

### 新作品模板

```markdown
---
title: 项目名
description: 一句话说清是什么。
year: "2026"
stack: [技术, 栈]
order: 10
featured: true
github: https://github.com/clone668/xxx  # 可选
link: https://xxx.com                    # 可选，外链
url: /ruler                              # 可选，站内工具
---

## 第一节标题

正文。
```

### 新文章模板

```markdown
---
title: 标题
description: 摘要。
date: 2026-09-23
kicker: 栏目
draft: false
---

正文。
```

## License

MIT
