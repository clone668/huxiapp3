import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    kicker: z.string().default('Notes'),   // 刊头小分类，如 Essay · Tools
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),     // 草稿不上线
  }),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),                       // 如 "2025"
    stack: z.array(z.string()).default([]), // 技术栈
    link: z.string().url().optional(),      // 线上地址
    github: z.string().url().optional(),    // 源码地址
    order: z.number().default(0),           // 排序，小的在前
    featured: z.boolean().default(true),    // 是否上首页
  }),
});

export const collections = { blog, works };
