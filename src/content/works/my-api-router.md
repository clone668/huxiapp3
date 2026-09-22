---
title: My API Router
description: 轻量的本地 OpenAI 兼容 API 路由，统一管理和转发多个模型服务的请求。
year: "2025"
stack: [Go, Node.js]
order: 2
featured: true
---

## 为什么需要一层路由

本地跑的服务多了之后，每个应用都要各自维护一份 API key、地址和重试逻辑。My API Router 把它们收拢到一个本地端口：对外是标准的 OpenAI 兼容接口，对内按规则转发到不同的模型服务。

Go 做转发层保证低延迟，管理界面用 Node 生态。轻量是硬指标——它本身不该比被路由的服务更重。
