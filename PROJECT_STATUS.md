# 项目状态文档

> 本文档面向全新的 AI Session，提供项目背景、当前进展和关键技术信息，以便快速接手工作。

## 项目概述

- **项目名称**：JuCai-Website
- **项目类型**：个人网站（综合性个人门户）
- **技术栈**：Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + Framer Motion + next-intl + Giscus
- **GitHub 仓库**：https://github.com/ImJc917/JuCai-Website
- **用户信息**：ImJc917，即将进入大二的学生，邮箱 2511157161@qq.com

## 已完成的功能

1. **首页** - 个人名片（头像占位符、姓名占位 YourName）、常用社交链接图标、4 张导航入口卡片（关于我/技能/时间线/留言板）、技能概览精简版
2. **关于我页面** - 中英文双语自我介绍
3. **技能/课程页面** - 按分类展示（数学/编程/通识），每门课程一个卡片
4. **经历时间线页面** - 垂直时间轴（小学 -> 初中 -> 高中 -> 大学）
5. **留言板页面** - Giscus 评论组件集成（需用户配置 GitHub 仓库后才能使用）
6. **社交链接页面** - 按分类展示所有社交账号
7. **4 套主题切换** - Cyber（暗色科技）、Minimal（简约白色）、Glass（玻璃拟态）、Macaron（马卡龙清新绿）
8. **中英双语切换** - next-intl 实现，路由 `/zh/*` 和 `/en/*`
9. **响应式设计** - 移动端汉堡菜单、单列布局
10. **精致微动效** - ScrollFadeIn 组件、卡片悬停、导航栏滚动毛玻璃
11. **回到顶部按钮**
12. **Cloudflare Workers 部署配置** - OpenNext 适配器已配置完成，构建测试通过

## 项目目录结构

```
src/
├── app/
│   ├── layout.tsx              # 根布局（最小化）
│   └── [locale]/                # 国际化路由
│       ├── layout.tsx          # 全局布局（Navbar + Footer + 主题CSS）
│       ├── page.tsx            # 首页
│       ├── about/page.tsx      # 关于我
│       ├── skills/page.tsx     # 技能/课程
│       ├── timeline/page.tsx   # 经历时间线
│       ├── guestbook/page.tsx  # 留言板
│       └── social/page.tsx     # 社交链接
├── components/                  # 组件
│   ├── ThemeProvider.tsx        # 主题切换逻辑（命名导出）
│   ├── ThemeSwitcher.tsx       # 主题切换按钮
│   ├── LocaleSwitch.tsx        # 语言切换按钮
│   ├── Navbar.tsx              # 导航栏
│   ├── Footer.tsx              # 页脚
│   ├── BackToTop.tsx           # 回到顶部
│   ├── ScrollFadeIn.tsx        # 滚动渐入动画
│   ├── NavCard.tsx             # 导航卡片（客户端组件）
│   ├── HoverCard.tsx           # 悬停卡片（客户端组件）
│   └── GiscusComments.tsx      # Giscus 评论
├── data/                        # 静态数据
│   ├── skills.ts               # 课程/技能数据
│   ├── timeline.ts             # 时间线数据
│   └── social.ts               # 社交链接数据
├── i18n/                        # 国际化
│   ├── routing.ts              # 路由配置
│   ├── request.ts              # 请求配置
│   ├── navigation.ts           # 导航辅助
│   ├── zh.json                 # 中文翻译
│   └── en.json                 # 英文翻译
├── styles/
│   └── themes.css              # 4 套主题 CSS Variables
├── types/
│   └── index.ts                # TypeScript 类型
└── middleware.ts               # next-intl 中间件
```

## 部署根文件

- `wrangler.jsonc` - Cloudflare Workers 配置
- `open-next.config.ts` - OpenNext Cloudflare 适配器配置
- `public/_headers` - Cloudflare 静态资源缓存头
- `.dev.vars` - Cloudflare 开发环境变量（不提交到 git）

## 当前状态：已部署到 Cloudflare Workers

部署已完成！GitHub Actions CI/CD 自动构建并部署到 Cloudflare Workers。

- @opennextjs/cloudflare 适配器已安装
- wrangler.jsonc 配置文件已创建
- GitHub Actions workflow 已配置（`.github/workflows/deploy.yml`）
- **部署状态：成功**（Run #7 构建 + 部署全部通过）

**重要修复记录：**

- Next.js 16 的 `proxy.ts` 不支持 `runtime` 配置，OpenNext 需要 Edge Middleware
- 解决方案：使用 `middleware.ts` + `config.runtime = 'experimental-edge'`
- 此配置在 Next.js 16 中仍然可用（deprecated 但未移除）

**项目路径：** `D:\SJTU\Doc\JuCai_Website\personal-website`

**GitHub 仓库：** https://github.com/ImJc917/JuCai-Website

**后续推送：** 任何 push 到 `main` 分支都会自动触发部署

## 已知的待办事项（用户需要后续配置）

1. 替换 "YourName" 为真实姓名（出现在首页和页脚）
2. 替换头像占位符（真实头像图片）
3. 在 `src/data/social.ts` 中添加真实社交链接
4. 在 `src/data/timeline.ts` 中填入真实学校信息
5. 在 `src/data/skills.ts` 中更新已修读课程
6. 配置 Giscus 评论系统（去 giscus.app 配置，更新 GiscusComments.tsx 中的参数）
7. 关于我页面的介绍文字需要根据真实情况修改

## 设计文档

详细设计文档位于：`docs/superpowers/specs/2026-07-15-personal-website-design.md`

## 技术注意事项

- **ThemeProvider 是命名导出**（`import { ThemeProvider } from '@/components/ThemeProvider'`），不是默认导出
- **ScrollFadeIn 使用 `useState<boolean | null>(null)`** 来避免 SSR hydration 不匹配
- **带交互（onMouseEnter 等）的组件必须是 `'use client'` 客户端组件**（如 NavCard、HoverCard）
- **next-intl 的 middleware 处理路由重定向**，访问 `/` 自动重定向到 `/zh` 或 `/en`
- **OpenNext 适配器要求** `compatibility_date >= 2024-12-30` 且启用 `nodejs_compat` 标志

## 已尝试但放弃的方案

1. **Vercel 部署** - 国内无法访问 `*.vercel.app` 域名
2. **Zeabur 部署** - 免费方案已取消，需要购买服务器
