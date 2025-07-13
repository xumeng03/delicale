# Delicate

## 1、环境

```shell
node -v
npm -v
pnpm -v
```

## 2、初始化项目

```shell
mkdir delicate
cd delicate
pnpm init
```

## 3、初始化Monorepo工作区

```
project/
├── packages/
│   ├── components/
│   ├── core/
│   ├── hooks/
│   ├── theme/
│   └── utils/
├── docs/
├── play/
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── postcss.config.js
├── RECORD.md
├── tsconfig.json
└── tsconfig.node.json
```

### 3.1、初始化Packages

```shell
mkdir packages && cd packages
sh ./init.sh
```

初始化components、core、hooks、theme、utils目录的脚本init.sh

```shell
#!/bin/bash

for i in components core hooks theme utils; do
    # shellcheck disable=SC2164
    mkdir $i && cd $i
    pnpm init
    cd ..
done
```

为components、core、hooks、theme、utils的package.json配置包名

### 3.2、初始化docs目录

```shell
mkdir docs && cd docs
pnpm init
```

### 3.3、初始化play目录

```shell
pnpm create vite play --template vue-ts
```

### 3.4、配置Monorepo工作区

pnpm-workspace.yaml

```yaml
packages:
  # 组件库目录
  - "packages/*"
  # 组件库文档目录
  - "docs"
  # 演示目录
  - "play"
```

## 4、依赖安装

### 4.1、全局依赖

```shell
# vite: 前端构建工具
# vitest: 测试框架，提供快速、简单的单元测试和集成测试功能
# @vitejs/plugin-vue: Vite的Vue插件，支持Vue文件的处理
# @vitejs/plugin-vue-jsx: Vite的Vue JSX插件，支持在Vue中使用JSX语法
pnpm add -Dw vite vitest @vitejs/plugin-vue @vitejs/plugin-vue-jsx
# postcss: 处理css
# post-scss: post css支持scss
# sass: css预处理器
# autoprefixer: 处理css浏览器前缀
pnpm add -Dw postcss@8.4.31 post-scss sass autoprefixer
# @types/node: Node.js的TypeScript类型定义
# @types/lodash-es: Lodash ES模块的TypeScript类型定义
pnpm add -Dw @types/node @types/lodash-es
# @vue/tsconfig: Vue官方提供的TypeScript配置文件
# vue-tsc: 用于Vue 3项目的TypeScript类型检查工具，支持.vue文件的类型检查
pnpm add -Dw @vue/tsconfig vue-tsc
# typescript: TypeScript是一种JavaScript的超集，添加了类型系统和其他功能
pnpm add -Dw typescript
```

```shell
# lodash-es: Lodash的ES模块版本，提供了很多实用的JavaScript工具函数
# vue: Vue.js框架
pnpm add -w lodash-es vue
```

### 4.2、component依赖

```shell
# @vue/test-utils: Vue.js的官方测试工具库，提供了测试Vue组件的 API
# @vitest/coverage-v8: Vitest的代码覆盖率工具，使用V8引擎进行覆盖率报告
# jsdom: 一个 JavaScript实现的DOM和HTML标准，允许在Node.js环境中模拟浏览器环境
pnpm add -D @vue/test-utils @vitest/coverage-v8 jsdom --filter @delicate/components
pnpm add @popperjs/core async-validator --filter @delicate/components
```

### 4.3、play依赖

```json
{
  "name": "play",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

### 4.4、component依赖

```shell
# vitepress: VitePress是一个静态网站生成器，专注于文档和博客的构建，基于Vite构建，适合用于生成文档网站
pnpm add vitepress --filter @delicate/docs
```

### 4.5、依赖安装

```shell
pnpm install
```