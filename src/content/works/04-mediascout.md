---
title: MediaScout | 媒探
description: Chrome 扩展——列出当前页的音视频、HLS/DASH 资源，能下的直接下，不能下的给出 FFmpeg 命令。
year: "2025"
stack: [Manifest V3, Chrome Extension, FFmpeg]
order: 4
featured: true
github: https://github.com/clone668/MediaScout
---

## 看清楚，再下载

网页里的媒体地址藏得越来越深：blob、MSE、签名、Referer 校验。媒探做的事是先把当前标签页已经出现的音视频资源**全部列出来**，再区分哪些能直接下、哪些只能给你一条 FFmpeg 命令。

几个设计原则：

- **页面身份下载**：普通文件由页面自身发起请求，自动带上 Referer，处理抖音那种缺来源就 403 的地址
- **诚实标注**：blob 和 MSE 不一定存在可保存的文件，这类直接标"不可下载"，不让你点了才失败
- **不越界**：只读当前标签页，不上传任何地址；DRM 加密内容只显示清单，不绕过

超过 256 MB 的资源不读进页面内存，改用「复制 FFmpeg」。扩展只申请 `http/https` 主机权限，不碰浏览器内部页面。
