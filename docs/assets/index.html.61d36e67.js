import{_ as n,o as s,c as a,e as p}from"./app.0d3c4680.js";const o={},t=p(`<h1 id="theming" tabindex="-1"><a class="header-anchor" href="#theming" aria-hidden="true">#</a> Theming</h1><p>Datepicker comes with the theme support with <code>css</code> variables. It provides two classes that are applied based on the chosen dark/light mode</p><p>To change variables, simply override the classes with your custom values.</p><p><strong>Dark mode configuration</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.dp__theme_dark</span> <span class="token punctuation">{</span>
    <span class="token property">--dp-background-color</span><span class="token punctuation">:</span> #212121<span class="token punctuation">;</span>
    <span class="token property">--dp-text-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token property">--dp-hover-color</span><span class="token punctuation">:</span> #484848<span class="token punctuation">;</span>
    <span class="token property">--dp-hover-text-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token property">--dp-hover-icon-color</span><span class="token punctuation">:</span> #959595<span class="token punctuation">;</span>
    <span class="token property">--dp-primary-color</span><span class="token punctuation">:</span> #005cb2<span class="token punctuation">;</span>
    <span class="token property">--dp-primary-text-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token property">--dp-secondary-color</span><span class="token punctuation">:</span> #a9a9a9<span class="token punctuation">;</span>
    <span class="token property">--dp-border-color</span><span class="token punctuation">:</span> #2d2d2d<span class="token punctuation">;</span>
    <span class="token property">--dp-menu-border-color</span><span class="token punctuation">:</span> #2d2d2d<span class="token punctuation">;</span>
    <span class="token property">--dp-border-color-hover</span><span class="token punctuation">:</span> #aaaeb7<span class="token punctuation">;</span>
    <span class="token property">--dp-disabled-color</span><span class="token punctuation">:</span> #737373<span class="token punctuation">;</span>
    <span class="token property">--dp-scroll-bar-background</span><span class="token punctuation">:</span> #212121<span class="token punctuation">;</span>
    <span class="token property">--dp-scroll-bar-color</span><span class="token punctuation">:</span> #484848<span class="token punctuation">;</span>
    <span class="token property">--dp-success-color</span><span class="token punctuation">:</span> #00701a<span class="token punctuation">;</span>
    <span class="token property">--dp-success-color-disabled</span><span class="token punctuation">:</span> #428f59<span class="token punctuation">;</span>
    <span class="token property">--dp-icon-color</span><span class="token punctuation">:</span> #959595<span class="token punctuation">;</span>
    <span class="token property">--dp-danger-color</span><span class="token punctuation">:</span> #e53935<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Light mode configration</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.dp__theme_light</span> <span class="token punctuation">{</span>
  <span class="token property">--dp-background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">--dp-text-color</span><span class="token punctuation">:</span> #212121<span class="token punctuation">;</span>
  <span class="token property">--dp-hover-color</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
  <span class="token property">--dp-hover-text-color</span><span class="token punctuation">:</span> #212121<span class="token punctuation">;</span>
  <span class="token property">--dp-hover-icon-color</span><span class="token punctuation">:</span> #959595<span class="token punctuation">;</span>
  <span class="token property">--dp-primary-color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span>
  <span class="token property">--dp-primary-text-color</span><span class="token punctuation">:</span> #f8f5f5<span class="token punctuation">;</span>
  <span class="token property">--dp-secondary-color</span><span class="token punctuation">:</span> #c0c4cc<span class="token punctuation">;</span>
  <span class="token property">--dp-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">--dp-menu-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">--dp-border-color-hover</span><span class="token punctuation">:</span> #aaaeb7<span class="token punctuation">;</span>
  <span class="token property">--dp-disabled-color</span><span class="token punctuation">:</span> #f6f6f6<span class="token punctuation">;</span>
  <span class="token property">--dp-scroll-bar-background</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
  <span class="token property">--dp-scroll-bar-color</span><span class="token punctuation">:</span> #959595<span class="token punctuation">;</span>
  <span class="token property">--dp-success-color</span><span class="token punctuation">:</span> #76d275<span class="token punctuation">;</span>
  <span class="token property">--dp-success-color-disabled</span><span class="token punctuation">:</span> #a3d9b1<span class="token punctuation">;</span>
  <span class="token property">--dp-icon-color</span><span class="token punctuation">:</span> #959595<span class="token punctuation">;</span>
  <span class="token property">--dp-danger-color</span><span class="token punctuation">:</span> #ff6f60<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[t];function c(l,i){return s(),a("div",null,e)}var u=n(o,[["render",c],["__file","index.html.vue"]]);export{u as default};
