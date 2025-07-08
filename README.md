# Monopnpm

这是一个使用 pnpm + turborepo + changesets 管理的 monorepo 仓库示例

## 项目结构

```
monopnpm/
├── .changeset/       # changesets配置
├── packages/
│   ├── web/          # React + Vite 的 Web 项目，实现业务页面
│   ├── ui/           # React + Antd 的 UI 组件库
│   └── util/         # 基于 lodash 等的工具方法库
├── package.json      # 根配置文件
├── tsconfig.json     # TypeScript 配置
├── .eslintrc.json    # ESLint 配置
├── .prettierrc       # Prettier 配置
├── .turbo.json       # turborepo 配置
└── pnpm-workspace.yaml
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

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动所有包的开发模式
pnpm dev

# 或者单独启动某个包
pnpm dev:web    # 启动 web 项目
pnpm dev:ui     # 启动 ui 包
pnpm dev:util   # 启动 util 包
```

### 构建项目

```bash
# 构建所有包
pnpm build

# 或者单独构建某个包
pnpm build:web
pnpm build:ui
pnpm build:util
```

### 版本管理与发布

**使用 changeset 创建变更集：**

```bash
pnpm changeset
```

#### Changeset 交互流程详解

执行 `pnpm changeset` 后，会出现以下**4步交互**：

##### 第1步：选择要变更的包

```
🦋  Which packages would you like to include?
◯ @monopnpm/web
◯ @monopnpm/ui
◯ @monopnpm/util
```

- 使用 `↑↓` 方向键移动光标
- 使用 `空格键` 选择/取消选择包
- 按 `Enter` 确认选择

##### 第2步：选择需要 Major Bump 的包

```
🦋  Which packages should have a major bump?
◯ all packages
  ◯ @monopnpm/web@1.0.0
  ◯ @monopnpm/ui@1.0.0
  ◯ @monopnpm/util@1.0.0
```

- **Major Bump**: 破坏性变更 (1.0.0 → 2.0.0)
- **如果没有破坏性变更**：直接按 `Enter` 跳过

##### 第3步：选择需要 Minor Bump 的包

```
🦋  Which packages should have a minor bump?
◯ all packages
  ◯ @monopnpm/web@1.0.0
  ◯ @monopnpm/ui@1.0.0
  ◯ @monopnpm/util@1.0.0
```

- **Minor Bump**: 新功能 (1.0.0 → 1.1.0)
- **如果没有新功能**：直接按 `Enter` 跳过

##### 第4步：选择需要 Patch Bump 的包

```
🦋  Which packages should have a patch bump?
◯ all packages
  ◯ @monopnpm/web@1.0.0
  ◯ @monopnpm/ui@1.0.0
  ◯ @monopnpm/util@1.0.0
```

- **Patch Bump**: 修复问题 (1.0.0 → 1.0.1)
- **通常选择这个**：如果是修复 bug

##### 第5步：添加变更描述

```
🦋  Please enter a summary for this change (this will be written to the changelog).
🦋  Summary · 修复了按钮组件的样式问题
```

### 标准发布流程

1. **开发完成后，创建变更集**

```bash
  pnpm changeset
```

2. **提交变更集到 Git**

3. **更新版本号**

```bash
  pnpm changeset version
```

4. **提交版本变更**

5. **发布到 npm**

```bash
  pnpm changeset publish
```
