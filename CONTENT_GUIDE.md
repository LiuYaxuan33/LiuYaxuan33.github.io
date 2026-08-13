# 网站内容填充指南

你不需要修改页面布局。绝大多数更新只涉及 `_data`、`_posts`、`assets/images` 和 `files` 四个位置。

## 一、直接在 GitHub 网页上编辑

1. 打开仓库中的文件。
2. 点击右上角的铅笔图标（Edit this file）。
3. 修改文字后点击 **Commit changes**。
4. 通常等待 1–3 分钟，网站会自动更新。

建议每次只改一类内容，提交说明可写 `Update profile`、`Add paper` 或 `New blog post`。

首次发布时，请在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。以后每次提交都会自动重新生成网站。

## 二、填写个人资料

编辑 `_data/profile.yml`。需要替换的内容包括：

- 中英文姓名、身份和机构
- 所在地与邮箱
- 中英文个人简介
- 中英文研究方向
- Google Scholar、ORCID、RePEc 和 GitHub 链接

注意：YAML 文件使用两个空格缩进，不要使用 Tab。含有冒号的文字务必放在双引号中。

## 三、上传照片

1. 进入 `assets/images/`，点击 **Add file → Upload files**。
2. 上传竖版照片，推荐命名 `profile.jpg`。
3. 在 `_data/profile.yml` 中改为：

```yml
photo: "/assets/images/profile.jpg"
```

## 四、上传 CV

1. 把 PDF 上传到 `files/cv/`，例如 `Liu_Yaxuan_CV.pdf`。
2. 编辑 `_data/profile.yml`：

```yml
cv: "/files/cv/Liu_Yaxuan_CV.pdf"
cv_updated: "2026-08"
```

首页和 CV 页的下载按钮会自动启用。

## 五、添加论文

论文信息保存在 `_data/papers.yml`。复制一个完整条目，粘贴到文件末尾，然后修改字段。

```yml
- title: "Paper Title"
  authors: "Yaxuan Liu, Coauthor Name"
  year: "2026"
  type: "working"
  featured: true
  status_zh: "工作论文"
  status_en: "Working Paper"
  journal: ""
  abstract_zh: "中文摘要"
  abstract_en: "English abstract"
  links:
    pdf: "/files/papers/paper-title.pdf"
    journal: ""
    appendix: ""
    slides: ""
    data: ""
    code: ""
```

`type` 可填写：

- `job_market`：求职论文
- `working`：工作论文
- `publication`：正式发表
- `progress`：进行中的研究
- `other`：其他成果

`featured: true` 表示在首页展示。没有的链接保留 `""`，对应按钮会自动隐藏。

## 六、发布研究数据

编辑 `_data/datasets.yml`。小文件可以上传到 `files/data/`；大型数据建议放到 Zenodo、OSF 或 Dataverse，并把 `download` 填成外部网址。

公开前请确认：

- 数据不含个人身份信息或受限内容
- 原始数据许可允许重新分发
- 提供 README、codebook、版本号和引用格式
- 与论文相对应的代码注明运行环境和软件版本

## 七、发布新闻动态

编辑 `_data/news.yml`。最新消息放在最上方：

```yml
- date: "2026-08-13"
  zh: "中文消息。"
  en: "English update."
  url: ""
```

## 八、写博客文章

最简单的方法是复制 `_posts/2026-08-13-welcome.md`。新文件名必须采用：

`YYYY-MM-DD-english-short-title.md`

文章顶部的信息区示例：

```yml
---
title: "内部标题"
title_zh: "中文文章标题"
title_en: "English Post Title"
excerpt_zh: "中文列表摘要"
excerpt_en: "English list summary"
tags: [计量经济学, 数据]
---
```

正文分别放在 `<section class="lang-zh" markdown="1">` 和 `<section class="lang-en" markdown="1">` 之间。如果某篇文章暂时只有一种语言，可以把另一语言写成简短摘要，并注明全文语言。

## 九、PDF 和文件命名

- 使用英文字母、数字、连字符和下划线。
- 避免空格、中文标点和多个版本含糊不清。
- 推荐格式：`paper-short-title-2026.pdf`、`dataset-name-v1.zip`。
- GitHub 不适合保存很大的文件；大文件使用正式数据仓库。

## 十、每次更新后的检查

- 中英文按钮都切换检查一次。
- 点击所有 PDF、数据和外部主页链接。
- 用手机打开首页和论文页。
- 确认 CV 的更新时间准确。
- 确认尚未发表的论文和受限数据允许公开。
