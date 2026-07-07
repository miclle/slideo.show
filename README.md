# Slideo.show

Slideo.show 是 Slideo 的公开产品官网和发布入口。站点基于 Vite 静态构建，并通过 GitHub Pages 部署到 `https://slideo.show`。

官网面向普通用户介绍 Slideo 的 slides-first 工作流、当前能力、下载入口、限制和近期 changelog。安装包和应用内更新 metadata 仍通过本仓库的 GitHub Releases 提供。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物位于 `dist/`，由 `.github/workflows/pages.yml` 上传并部署到 GitHub Pages。

## 国际化

当前站点支持英文和简体中文。文案集中在 `src/main.ts` 的 `copy` 字典中，语言会根据浏览器语言自动选择，并在用户点击语言切换后写入 `localStorage`。

更新版本号、下载链接或 changelog 时，优先修改 `src/main.ts` 中的 release 常量和对应文案。

## Release feed

当前公开最新版本：

- Version: `v0.1.5`
- Published: `2026-06-25`
- Latest release: <https://github.com/miclle/slideo.show/releases/latest>

主要安装包：

- macOS Apple Silicon DMG
- macOS Intel DMG
- Windows x64 installer
- Linux x64 AppImage
- Linux x64 deb

## License

Apache-2.0
