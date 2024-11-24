import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.RXnjjeXB.js";const o=JSON.parse('{"title":"什么是VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1732437488000}'),l={name:"README.md"};function e(h,s,p,k,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<p>本文档为介绍如何使用 GitHub Actions 自动化构建 VitePress 文档并将其推送到另一个 GitHub 仓库的 <code>note</code> 目录下。</p><h1 id="什么是vitepress" tabindex="-1"><a href="https://vitepress.dev/" target="_blank" rel="noreferrer">什么是VitePress</a> <a class="header-anchor" href="#什么是vitepress" aria-label="Permalink to &quot;[什么是VitePress](https://vitepress.dev/)&quot;">​</a></h1><p>VitePress 是一个静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。</p><h1 id="使用-github-actions-自动化构建和推送-vitepress-文档" tabindex="-1">使用 GitHub Actions 自动化构建和推送 VitePress 文档 <a class="header-anchor" href="#使用-github-actions-自动化构建和推送-vitepress-文档" aria-label="Permalink to &quot;使用 GitHub Actions 自动化构建和推送 VitePress 文档&quot;">​</a></h1><h2 id="前提条件" tabindex="-1">前提条件 <a class="header-anchor" href="#前提条件" aria-label="Permalink to &quot;前提条件&quot;">​</a></h2><ol><li>确保你已经在 GitHub 仓库的 <code>Secrets</code> 中添加了名为 <code>PUSH_KEY</code> 的密钥，其值为你的 GitHub 个人访问令牌，并且该令牌具有推送权限。</li><li>确保你的个人访问令牌具有以下权限： <ul><li><code>repo</code>（访问公共和私有仓库的全部控制权限）</li><li><code>workflow</code>（更新 GitHub Actions 工作流）</li></ul></li></ol><h2 id="github-actions-配置文件" tabindex="-1">GitHub Actions 配置文件 <a class="header-anchor" href="#github-actions-配置文件" aria-label="Permalink to &quot;GitHub Actions 配置文件&quot;">​</a></h2><p>在你的仓库中创建一个 GitHub Actions 配置文件（例如 <code>.github/workflows/deploy.yml</code>），并添加以下内容：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ github.actor }} is testing out GitHub Actions 🚀</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Explore-GitHub-Actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      contents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 指定node版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install vitepress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm add -D vitepress</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run docs:build</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 使用vitepress构建文档</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Push</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># PUSH 权限要求</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          GITHUB_TOKEN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.PUSH_KEY }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          git config --global user.email &quot;2794920709@qq.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          git config --global user.name &quot;JuckyLee668&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          git clone https://JuckyLee668:\${{ secrets.PUSH_KEY }}@github.com/JuckyLee668/vv.git</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          cd vv</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          mkdir -p note</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          cp -r ../.vitepress/dist/* note/</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          git add note</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          git commit -m &quot;github action auto push&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          git push origin main</span></span></code></pre></div><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><ol><li><strong>设置节点环境</strong>：使用 <code>actions/setup-node@v3</code> 设置 Node.js 环境，指定 Node.js 版本为 20。</li><li><strong>安装依赖</strong>：运行 <code>npm install</code> 安装项目依赖。</li><li><strong>安装 VitePress</strong>：运行 <code>npm add -D vitepress</code> 安装 VitePress 作为开发依赖。</li><li><strong>构建文档</strong>：运行 <code>npm run docs:build</code> 构建 VitePress 文档。</li><li><strong>推送构建结果</strong>： <ul><li>配置 Git 用户名和邮箱。</li><li>克隆目标仓库 <code>vv</code>。</li><li>将构建后的文件复制到目标仓库的 <code>note</code> 目录下。</li><li>提交并推送更改到目标仓库的 <code>main</code> 分支。</li></ul></li></ol><p>通过以上配置，GitHub Actions 将在每次推送代码时自动构建 VitePress 文档并将其推送到目标仓库的 <code>note</code> 目录下。</p>`,12)]))}const c=i(l,[["render",e]]);export{o as __pageData,c as default};
