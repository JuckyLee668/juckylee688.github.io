import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.RXnjjeXB.js";const e="/note/assets/latexofcls.BGsW6YoP.png",g=JSON.parse('{"title":"LaTeX .cls 文件编写经验","description":"","frontmatter":{},"headers":[],"relativePath":"docs/latexcls.md","filePath":"docs/latexcls.md","lastUpdated":1732029778000}'),h={name:"docs/latexcls.md"};function t(p,s,k,d,E,r){return l(),a("div",null,s[0]||(s[0]=[n('<h1 id="latex-cls-文件编写经验" tabindex="-1">LaTeX <code>.cls</code> 文件编写经验 <a class="header-anchor" href="#latex-cls-文件编写经验" aria-label="Permalink to &quot;LaTeX `.cls` 文件编写经验&quot;">​</a></h1><p>编写 LaTeX 类文件（<code>.cls</code>）可以帮助你创建自定义的文档格式。以下是一些编写 <code>.cls</code> 文件的经验和建议：</p><p><a href="/note/docs/latexfcls.pdf">参考文件</a><img src="'+e+`" alt="参考文件"></p><h2 id="_1-基本结构" tabindex="-1">1. 基本结构 <a class="header-anchor" href="#_1-基本结构" aria-label="Permalink to &quot;1. 基本结构&quot;">​</a></h2><p>一个简单的 <code>.cls</code> 文件通常包含以下基本结构：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\NeedsTeXFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{LaTeX2e}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ProvidesClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{myclass}[2023/10/01 My custom class]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\LoadClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{article} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 继承自 article 类</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 在这里添加自定义命令和环境</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\newcommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\mycommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{This is my custom command}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 设置页面布局</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\setlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textwidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{6.5in}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\setlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\oddsidemargin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{0in}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\setlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\evensidemargin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{0in}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 其他设置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\endinput</span></span></code></pre></div><h2 id="_2-自定义命令和环境" tabindex="-1">2. 自定义命令和环境 <a class="header-anchor" href="#_2-自定义命令和环境" aria-label="Permalink to &quot;2. 自定义命令和环境&quot;">​</a></h2><p>你可以在 <code>.cls</code> 文件中定义自定义命令和环境，以便在文档中重复使用。例如：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\newcommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\highlight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}[1]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textbf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">#1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\newenvironment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{myenv}{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{quote}}{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{quote}}</span></span></code></pre></div><h2 id="_3-页面布局" tabindex="-1">3. 页面布局 <a class="header-anchor" href="#_3-页面布局" aria-label="Permalink to &quot;3. 页面布局&quot;">​</a></h2><p>调整页面布局以满足你的需求。例如，设置页边距、行距等：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\setlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\parindent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{0pt}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\setlength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\parskip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{1em}</span></span></code></pre></div><h2 id="_4-包管理" tabindex="-1">4. 包管理 <a class="header-anchor" href="#_4-包管理" aria-label="Permalink to &quot;4. 包管理&quot;">​</a></h2><p>根据需要加载额外的包：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\RequirePackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{graphicx}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\RequirePackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{amsmath}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\RequirePackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{hyperref} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 添加超链接支持</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\RequirePackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{geometry} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 更灵活的页面布局设置</span></span></code></pre></div><h2 id="_5-文档测试" tabindex="-1">5. 文档测试 <a class="header-anchor" href="#_5-文档测试" aria-label="Permalink to &quot;5. 文档测试&quot;">​</a></h2><p>编写一个测试文档来验证你的 <code>.cls</code> 文件是否按预期工作：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\documentclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">myclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{document}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Introduction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a test document.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\highlight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{This text is highlighted.}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{myenv}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a custom environment.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{myenv}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{figure}[h]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\centering</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\includegraphics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[width=0.5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\textwidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]{example-image}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\caption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{An example image.}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{figure}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{document}</span></span></code></pre></div><h2 id="_6-高级功能" tabindex="-1">6. 高级功能 <a class="header-anchor" href="#_6-高级功能" aria-label="Permalink to &quot;6. 高级功能&quot;">​</a></h2><p>你还可以添加更多高级功能，例如自定义标题、页眉页脚等：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\usepackage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fancyhdr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\pagestyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{fancy}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\fancyhf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\fancyhead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[L]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\leftmark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\fancyhead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[R]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\thepage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\fancyfoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[C]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\thepage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,21)]))}const o=i(h,[["render",t]]);export{g as __pageData,o as default};
