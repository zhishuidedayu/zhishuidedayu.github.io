# 个人简介网站（dayubuzhishui.com）

纯 HTML + CSS + 少量 JS 的单页个人主页，**零外部依赖**（不加载任何 CDN、字体库、图标库），断网也能在本地完整预览。

## 三步上线

1. 在 GitHub 新建仓库，名字填 `你的用户名.github.io`，选 **Public**。
2. 把这个文件夹里的文件上传到仓库根目录，提交：
   **第一轮先不要传 `CNAME`**（域名还没解析，传了会让 `用户名.github.io` 直接跳到一个打不开的地址）。
   其余都传：`index.html`、`assets/`、`.nojekyll`、`404.html`、`README.md`。
3. 仓库 **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**，
   等 1–2 分钟，访问 `https://你的用户名.github.io`，能打开就说明网站跑通了。
4. **域名解析配好之后**，再把 `CNAME` 传上去，并在 Settings → Pages 里填 `dayubuzhishui.com`。

> 域名部分看上一层的 `个人网站上线指南.md` 第 3、4 章。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 页面主体，**你 99% 的修改都在这里** |
| `assets/css/style.css` | 样式。改风格只需要动 :root 里的 6 个颜色变量 |
| `assets/js/main.js` | 手机导航、滚动淡入、页脚年份。坏了也不影响内容显示 |
| `assets/img/avatar.svg` | 占位头像，换成真人照片（建议 1:1、1200px、<200KB） |
| `CNAME` | 绑定域名用，**一行 `dayubuzhishui.com`，永远别删** |
| `.nojekyll` | 空文件，阻止 GitHub 用 Jekyll 处理站点（防止 `_` 开头文件被吞） |
| `404.html` | 访问不存在路径时的兜底页 |

## 内容替换对照表（从左到右找，逐条替换）

| 现在写的 | 换成 |
|---|---|
| `你的名字`（标题、品牌、页脚，共 4 处） | 你的真名或昵称 |
| `<title>你的名字 · 个人简介</title>` | 同上 |
| `一句话介绍自己：…` | 一句 20–40 字的自我介绍 |
| `you@example.com`（**2 处**） | 你的邮箱 |
| `github.com/yourname` | 你的 GitHub 地址 |
| `XX 大学 · XX 专业`、`XX 中学` | 真实学校信息 |
| 高中段的 3 个「转折 / 坚持 / 成绩」 | 你自己的 3 件事 |
| 大学段的 3 个节点 | 同上 |
| 技能 4 张卡片 | 你的实际内容 |
| `<meta property="og:url">` 等 | 域名生效后不用改，已是 dayubuzhishui.com |

## 想改风格？

打开 `assets/css/style.css`，只改最上面的：

```css
:root {
  --bg: #ffffff;      /* 背景 */
  --text: #1a1a1a;    /* 正文 */
  --muted: #5c5c5c;   /* 次要文字 */
  --line: #e6e6e6;    /* 分隔线 */
  --card: #fafafa;    /* 卡片底色 */
  --accent: #3b5bdb;  /* 强调色：按钮、链接、时间线圆点 */
}
```

深色模式在下面的 `@media (prefers-color-scheme: dark)` 里，同样 6 个变量。

## 本地预览

- 推荐：VS Code 装 `Live Server` 扩展 → 右键 `index.html` → Open with Live Server
- 或者：在这个文件夹开 PowerShell，运行 `python -m http.server 8000`，浏览器打开 `http://localhost:8000`
