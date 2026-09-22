---
title: 用 Content Collections 把 Git 当数据库
description: 个人站点真的需要 Postgres 吗？大多数时候，一个仓库就够了。
date: 2025-12-03
kicker: Notes · Architecture
tags: [Astro, 架构, 静态站点]
---

给个人主页做技术选型时，很多人会顺手架一个数据库。这篇笔记记录我如何用 Astro 的 Content Collections，把 Git 仓库变成一张带类型检查的"表"。

## 核心思路

数据就是仓库里的 Markdown 文件，schema 用 zod 定义：

```ts
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

frontmatter 写错字段，**build 直接失败**——这比数据库的约束还严格，因为错误根本到不了线上。

## 查询方式

页面里像查 ORM 一样取数据：

```ts
const posts = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
```

## 这套方案白送的东西

- **版本历史**：每次修改都是一个 commit
- **备份**：GitHub 就是异地备份
- **协作**：改错别字可以直接在网页上提 PR（哪怕只有自己）
- **回滚**：`git revert`，不用学新的管理后台

## 什么时候不够用

数据量超过几千条、需要多用户写入、或者需要实时更新（比如评论、计数器）时，就该上真数据库了。个人主页的文章和作品，离这个边界还非常远。

结论：**先问数据会不会超过一个仓库的容量，再决定要不要数据库**。大多数时候，答案是不会。
