---
title: StoneForge 智岩
description: AI 辅助的石材建模系统——把 DXF 轮廓编译成可验证的执行清单，在 3ds Max 里生成可编辑的参数化几何。
year: "2025"
stack: [HTTP/JSON, 3ds Max, 参数化建模]
order: 3
featured: true
---

## 不做"烤死的面片"

AI 生成 3D 模型的常见结果是烘焙好的网格——看起来像，改不了。StoneForge 走另一条路：输入 ASCII DXF 的轮廓和路径，产出的是**可验证、带版本的建模方案**，再编译成白名单约束下的执行清单，由本地连接器在 3ds Max 里执行。

最终落到用户手里的是样条线、挤出修改器、可编辑网格——真正的参数化几何，可以继续改。

两个部署端只通过带版本契约的 HTTP/JSON 通信。第一阶段完全确定性，AI 推理尚未进入环路。
