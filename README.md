# 云野个人网站 · 使用与更新指南

这是你的个人网站（纯静态，无需服务器，托管在 GitHub Pages）。
本文件告诉你以后怎么自己更新内容——**只需要改文件，不需要懂代码**。

## 网站结构

```
czlyunye.github.io/
├── index.html          首页（个人简介）
├── photography.html    摄影画廊
├── blog.html           个人 Blog
├── contact.html        联系
├── images/
│   ├── avatar.jpg      头像
│   ├── gallery/        摄影作品（大图）
│   │   └── thumbs/     作品缩略图（列表页用，加载更快）
│   └── contact/        微信/小红书二维码放这里
└── assets/
    ├── css/style.css   样式（颜色、字体、排版）
    └── js/
        ├── i18n.js     中英双语文案 ★ 改文字都在这里
        ├── photos.js   照片清单 ★ 加照片都在这里登记
        ├── posts.js    博客文章清单 ★ 发文章都在这里登记
        └── main.js     交互逻辑（一般不用动）
```

## 常见更新操作

### 1. 添加一张新摄影作品（最常做）

第 1 步：把照片文件复制到 `images/gallery/` 文件夹。
建议文件名用英文或拼音，不带空格，例如 `sunset-sailimu-2026.jpg`。

第 2 步：打开 `assets/js/photos.js`，复制大括号 `{ ... }` 一整段，改成新照片的信息：

```js
{
  src:   "images/gallery/新照片.jpg",
  thumb: "images/gallery/新照片.jpg",   // 暂时没有缩略图就写和 src 一样
  category: "shanye",                   // shanye山野 guangying光影 renxiang人像 chengshi城市
  title:    { zh: "标题", en: "Title" },
  location: { zh: "拍摄地", en: "Place" },
  year: "2026",
  desc:     { zh: "一句话介绍", en: "One line." }
},
```

注意：除了最后一组之外，每组 `{ ... }` 结尾都要有逗号。

### 2. 发布一篇博客文章

把文章正文发给我即可，我会排版成网页并登记上线。
（自己动手的话：在 `posts/` 文件夹新建文章页面，然后在 `assets/js/posts.js` 里按注释示例登记标题、日期、摘要。）

### 3. 修改任何文字（简介、博客描述等）

打开 `assets/js/i18n.js`，上半部分是中文（zh），下半部分是英文（en）。
找到对应的行，改引号里的文字即可。

### 4. 换头像

把新头像图片命名为 `avatar.jpg`，替换 `images/` 里的旧文件即可。

### 5. 上传微信/小红书二维码

把二维码图片放到 `images/contact/` 文件夹，命名为：
- 微信：`wechat-qr.jpg`
- 小红书：`xhs-qr.jpg`

网站检测到图片存在就会自动显示，否则会显示"二维码待补充"占位框。

### 6. 照片太大怎么办

照片建议长边不超过 2400px、单张 2MB 以内（加载快）。
在 Mac 上可以用终端命令压缩（把"原图.jpg"换成实际文件名）：

```bash
sips -Z 2400 -s format jpeg -s formatOptions 82 原图.jpg --out images/gallery/新照片.jpg
```

或者：直接把原图发给我，我来处理。

## 本地预览

在终端进入本文件夹后运行：

```bash
cd czlyunye.github.io
python3 -m http.server 8000
```

然后浏览器打开 http://localhost:8000 （按 Ctrl+C 停止预览）。

## 上线 / 更新到网络

网站托管在 GitHub 仓库 `czlyunye/czlyunye.github.io`。
每次改完内容，把改动推送（push）上去，1 分钟左右网址就会更新。
具体操作（GitHub Desktop 或命令行）见上线时我给你的步骤说明。
