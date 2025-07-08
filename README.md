# Monopnpm

这是一个使用 pnpm + turborepo + changesets 管理的 monorepo 仓库示例

## 项目结构

```
monopnpm/
├── packages/
│   ├── web/          # React + Vite 的 Web 项目，实现业务页面
│   ├── ui/           # React + Antd 的 UI 组件库
│   └── util/         # 基于 lodash 等的工具方法库
├── package.json      # 根配置文件
├── tsconfig.json     # TypeScript 配置
├── .eslintrc.json    # ESLint 配置
└── .prettierrc       # Prettier 配置
```

所有项目都使用 TypeScript + ESLint + Prettier

## 包说明

### @monopnpm/web

- 技术栈：React + Vite + TypeScript
- 端口：3000
- 依赖：@monopnpm/ui, @monopnpm/util

### @monopnpm/ui

- 技术栈：React + Ant Design + TypeScript
- 提供：Button, Input, Card 等组件

### @monopnpm/util

- 技术栈：TypeScript + Lodash
- 提供：字符串、数组、对象、数字处理工具方法
