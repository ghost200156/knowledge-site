# Personal Knowledge Site

一个最小 Astro 知识站，用来逐步接入 Obsidian、自动发布和 AI 辅助工作流。

## 当前边界

- 内容放在 `src/content/posts`。
- 只有 `status: published` 且 `visibility: public` 的文章会出现在网站中。
- 网站暂时是纯静态构建，不依赖数据库或在线 AI 服务。

## 常用命令

```bash
pnpm install
pnpm run dev
pnpm run build
```

## GitHub Pages 部署

仓库包含 `.github/workflows/deploy.yml`。代码推到 GitHub 后，进入仓库的
`Settings -> Pages`，把 `Build and deployment` 的 `Source` 设为
`GitHub Actions`。之后每次推送到 `main` 或 `master` 都会自动构建并部署。

## 下一步候选

1. 增加 Obsidian vault 到公开内容目录的导出脚本。
2. 增加发布前检查，防止 private 内容进入构建。
3. 接入 Pagefind 做静态搜索。
4. 增加构建时 AI 摘要、标签和相关文章生成。
