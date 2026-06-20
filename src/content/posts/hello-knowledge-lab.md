---
title: 从一个最小知识站开始
description: 先把公开内容的生成链路跑通，再逐步接入 Obsidian、自动化和 AI。
pubDate: 2026-06-20
status: published
visibility: public
type: note
tags:
  - Obsidian
  - Astro
  - AI
---

这个站点的第一步不是追求复杂功能，而是建立一条稳定的公开内容链路。

现在的规则很简单：只有同时满足 `status: published` 和 `visibility: public` 的 Markdown 文件会生成页面。这个约束以后可以继续扩展到 RSS、搜索索引、AI 摘要和知识图谱。

下一步可以把 Obsidian vault 中的公开笔记导出到 `src/content/posts`，再让构建流程自动检查元数据、生成页面并发布。
