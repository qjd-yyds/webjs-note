import{_ as s,r,o as t,c as p,d as e,a as l,F as c,b as a,e as i}from"./app.d39470b0.js";const d={},o=a(`<h1 id="css-html" tabindex="-1"><a class="header-anchor" href="#css-html" aria-hidden="true">#</a> css/html</h1><h2 id="\u9AD8\u5EA6\u574D\u584C" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5EA6\u574D\u584C" aria-hidden="true">#</a> \u9AD8\u5EA6\u574D\u584C</h2><p>\u5B50\u5143\u7D20\u6D6E\u52A8\uFF0C\u4E0D\u5360\u666E\u901A\u6587\u6863\u6D41\uFF0C\u7236\u5143\u7D20\u5931\u53BB\u652F\u6491\uFF0C\u9020\u6210\u9AD8\u5EA6\u574D\u584C</p><h3 id="\u5982\u4F55\u89E3\u51B3\u9AD8\u5EA6\u574D\u584C" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u89E3\u51B3\u9AD8\u5EA6\u574D\u584C" aria-hidden="true">#</a> \u5982\u4F55\u89E3\u51B3\u9AD8\u5EA6\u574D\u584C</h3><ul><li>\u7236\u5143\u7D20\u8BBE\u7F6E overflow\uFF1Ahidden\u3002\u5F3A\u5236\u6240\u6709\u5185\u90E8\u5143\u7D20\u7684\u6D6E\u52A8\u548C margin</li><li>\u5C3E\u90E8\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684\u5143\u7D20 \u8BBE\u7F6E clear\uFF1Aboth\u3002\u5229\u7528\u7236\u5143\u7D20\u5FC5\u987B\u5305\u88F9\u975E\u6D6E\u52A8\u5143\u7D20\u548C clear\uFF1Aboth \u5C5E\u6027\u3002\u4F46\u662F\u591A\u4E86\u4E00\u4E2A\u770B\u4E0D\u89C1\u7684\u5143\u7D20\uFF0C\u5F71\u54CD\u540E\u7EED\u67E5\u627E</li><li>\u7236\u5143\u7D20\u6D6E\u52A8</li><li>\u7236\u5143\u7D20\u672B\u5C3E\u4F2A\u5143\u7D20\u8BBE\u7F6E clear\uFF1Aboth,\u6709\u4E9B\u6D4F\u89C8\u5668\u7684 table \u6709\u9ED8\u8BA4\u9AD8\u5EA6\uFF0C\u4F7F\u7528 height\uFF1A0</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">\u7236\u5143\u7D20::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> <span class="token string">&#39;table&#39;</span><span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="bfc-block-formatting-context" tabindex="-1"><a class="header-anchor" href="#bfc-block-formatting-context" aria-hidden="true">#</a> BFC\uFF08block formatting context\uFF09</h2><p>\u9875\u9762\u4E0A\u53EA\u6709\u5757\u7EA7\u5143\u7D20\u624D\u53EF\u4EE5\u53C2\u4E0E\u7684\u4E00\u4E2A\u5757\u7EA7\u4E0A\u4E0B\u6587\uFF0CIFC \u5219\u662F\u884C\u5185\u4E0A\u4E0B\u6587</p><ul><li>\u72EC\u7ACB\u6E32\u67D3\u533A\u57DF</li><li>\u5916\u9762\u4E0D\u80FD\u5F71\u54CD\u5185\u90E8</li><li>\u5185\u90E8\u4E5F\u4E0D\u80FD\u5F71\u54CD\u5916\u90E8</li></ul><h3 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h3><ul><li>\u4E0A\u4E0B margin \u4F1A\u5408\u5E76</li><li>\u5DE6\u53F3\u4E0D\u4F1A\u5408\u5E76</li><li>\u8BA1\u7B97\u7236\u7EA7 BFC \u9AD8\u5EA6\u65F6\uFF0C\u5185\u90E8\u7684\u6D6E\u52A8\u5143\u7D20\u9AD8\u5EA6\u5FC5\u987B\u8BA1\u7B97\u5728\u5185</li></ul><h3 id="\u5F62\u6210\u7684\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F62\u6210\u7684\u6761\u4EF6" aria-hidden="true">#</a> \u5F62\u6210\u7684\u6761\u4EF6</h3><ul><li>float \u7684\u503C\u4E0D\u662F none</li><li>position \u7684\u503C\u4E0D\u662F static \u6216\u8005 relative</li><li>display \u7684\u503C\u662F inline-block\uFF0Ctable-cell\uFF0Cflex\uFF0Ctable-caption \u6216\u8005 inline-flex</li><li>overflow \u7684\u503C\u4E0D\u662F visible</li></ul><h3 id="\u89E3\u51B3-margin-\u5408\u5E76-\u4F7F\u7528-bfc-\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-margin-\u5408\u5E76-\u4F7F\u7528-bfc-\u89E3\u51B3" aria-hidden="true">#</a> \u89E3\u51B3 margin \u5408\u5E76\uFF0C\u4F7F\u7528 BFC \u89E3\u51B3</h3><ul><li>\u5916\u5C42\u5305\u4E00\u4E2A\u65B0\u7684\u5143\u7D20 \u8BA9\u4ED6\u53D8\u6210 BFC \u5982 overflow\uFF1Ahidden\u3002\u7F3A\u70B9\uFF1A\u5185\u90E8\u81EA\u7531\u5B50\u5143\u7D20\u8D85\u51FA\u7236\u5143\u7D20\u4E5F\u80FD\u663E\u793A\uFF0C\u5C31\u51B2\u7A81\u4E86</li><li>\u4F7F\u7528\u4F2A\u5143\u7D20\u3002\u4F18\u70B9\uFF1A\u4E0D\u9690\u85CF\u5185\u5BB9\uFF0C\u4E0D\u6DFB\u52A0\u9AD8\u5EA6\uFF0C\u4E0D\u5F71\u54CD\u9AD8\u5EA6</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">\u7236\u5143\u7D20:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> <span class="token string">&#39;table&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u89E3\u51B3\u5782\u76F4\u65B9\u5411-margin-\u6EA2\u51FA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u5782\u76F4\u65B9\u5411-margin-\u6EA2\u51FA" aria-hidden="true">#</a> \u89E3\u51B3\u5782\u76F4\u65B9\u5411 margin \u6EA2\u51FA</h3><p>\u5B50\u5143\u7D20\u8BBE\u7F6E margin-top\uFF0C\u8D85\u51FA\u7236\u5143\u7D20\u7684\u8303\u56F4\uFF0C\u4F1A\u53D8\u6210\u7236\u5143\u7D20\u7684 margin-top</p><p>\u5982\u4F55\u89E3\u51B3</p><ul><li>\u8BBE\u7F6E\u7236\u5143\u7D20 overflow\uFF1Ahidden</li><li>\u7236\u5143\u7D20\u6DFB\u52A0\u900F\u660E\u4E0A\u8FB9\u6846\uFF0C\u8FB9\u6846\u53EF\u4EE5\u963B\u6B62 margin \u6EA2\u51FA\u3002\u7F3A\u70B9\uFF1A\u4F1A\u5F71\u54CD\u5BBD\u9AD8</li><li>\u4F7F\u7528 padding-top \u4EE3\u66FF margin-top\uFF0Cpadding \u4E5F\u53EF\u4EE5\u963B\u6B62 margin \u6EA2\u51FA\uFF0C\u4F46\u662F\u5728\u9ED8\u8BA4\u7684\u76D2\u5B50\u4E2D\uFF0C\u4F1A\u5F71\u54CD\u9AD8\u5EA6</li><li>\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u4E4B\u524D\u6DFB\u52A0\u7A7A\u7684 table\uFF0Ctable \u5929\u751F\u5F62\u6210 BFC</li><li>\u4F7F\u7528\u4F2A\u5143\u7D20\u4EE3\u66FF\u7A7A\u7684 table</li></ul><h3 id="\u5DE6\u5B9A\u5BBD-\u53F3\u8FB9\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u5B9A\u5BBD-\u53F3\u8FB9\u81EA\u9002\u5E94" aria-hidden="true">#</a> \u5DE6\u5B9A\u5BBD\uFF0C\u53F3\u8FB9\u81EA\u9002\u5E94</h3><p>\u5DE6\u4FA7\u6D6E\u52A8\uFF0C\u53F3\u4FA7\u4F7F\u7528 overflow\uFF1Ahidden\uFF0C\u901A\u8FC7\u5F62\u6210 BFC\uFF0C\u5DE6\u8FB9\u7684\u6D6E\u52A8\u65E0\u6CD5\u8FDB\u5165\u53F3\u8FB9\uFF0C\u53F3\u8FB9\u7684\u4E0D\u80FD\u8FDB\u5165\u6D6E\u52A8\u5143\u7D20\u7684\u4E0B\u65B9</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5F39\u6027\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5F39\u6027\u5E03\u5C40" aria-hidden="true">#</a> \u5F39\u6027\u5E03\u5C40</h2><p>\u73B0\u4EE3 web \u5F00\u53D1\u8981\u6C42\uFF0C\u81EA\u52A8\u8BA1\u7B97\uFF0C\u81EA\u9002\u5E94</p><h3 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h3><ul><li>\u5BB9\u5668\uFF1A\u5B9E\u73B0\u5E03\u5C40\u6548\u679C\u7684\u7236\u5143\u7D20</li><li>\u9879\u76EE\uFF1A\u5B9E\u73B0\u5E03\u5C40\u6548\u679C\u7684\u5B50\u5143\u7D20</li><li>\u4E3B\u8F74\uFF1A\u5B50\u5143\u7D20\u6392\u5217\u7684\u65B9\u5411\u7684\u4E00\u6761\u7EBF</li><li>\u4EA4\u53C9\u8F74\uFF1A\u548C\u4E3B\u8F74\u5782\u76F4\u7684\u4E00\u6761\u7EBF</li></ul><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><p>\u5FC5\u987B\u5728\u5BB9\u5668\u4E0A\u8BBE\u7F6E display\uFF1Aflex</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5982\u679C\u9700\u8981\u8BA9\u7236\u5143\u7D20\u663E\u793A\u4E3A\u884C\u5185\u5143\u7D20\u5C5E\u6027\uFF0C\u548C\u5176\u4ED6\u5143\u7D20\u540C\u4E00\u884C\uFF0C\u53EF\u4EE5\u4F7F\u7528 inline-flex</p></div>`,30),h=i("\u7236\u5143\u7D20\u5C5E\u6027"),u=a("<ul><li>flex-direction \u6539\u53D8\u4E3B\u8F74\u65B9\u5411\u548C\u6392\u5217\u65B9\u5411 <ul><li>row \u9ED8\u8BA4</li><li>row-reverse \u4E3B\u8F74\u4ECE\u5DE6\u5230\u53F3\u53CD\u8F6C\u53D8\u6210\u4ECE\u53F3\u5230\u5DE6</li><li>column \u4E3B\u8F74\u53D8\u6210\u4ECE\u4E0A\u5012\u4E0B</li><li>column-reverse \u4E3B\u8F74\u53D8\u6210\u4ECE\u4E0A\u5230\u4E0B\u53CD\u8F6C\u5230\u4ECE\u4E0B\u5230\u4E0A</li></ul></li><li>flex-wrap \u662F\u5426\u6362\u884C <ul><li>nowrap \u9ED8\u8BA4 \u4E0D\u6362\u884C</li></ul></li><li>flex-flow \u63A7\u5236\u65B9\u5411 \u5176\u5B9E\u5C31\u662F\u4E0A\u9762\u4E24\u4E2A\u5C5E\u6027\u7684\u7B80\u5199 <ul><li>flex-flow: flex-direction flex-wrap</li></ul></li><li>flex-content \u4E3B\u8F74\u4E0A\u7684\u5BF9\u5176\u65B9\u5F0F <ul><li>flex-start \u4ECE\u4E3B\u8F74\u8D77\u70B9\u5BF9\u5176</li><li>flex-end \u4ECE\u4E3B\u8F74\u7EC8\u70B9\u5BF9\u5176</li><li>center \u4E3B\u8F74\u5C45\u4E2D</li><li>space-between \u4E24\u7AEF\u5BF9\u5176</li><li>space-around \u5747\u5300\u5206\u5E03</li></ul></li><li>align-items \u4EA4\u53C9\u8F74\u7684\u5BF9\u5176\u65B9\u5F0F <ul><li>flex-start \u4ECE\u4EA4\u53C9\u8F74\u8D77\u70B9\u5BF9\u5176</li><li>baseline \u6587\u672C\u57FA\u7EBF\u5BF9\u5176</li><li>center \u4EA4\u53C9\u8F74\u5C45\u4E2D</li><li>stretch \u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u5C3A\u5BF8\uFF0C\u4EA4\u53C9\u8F74\u4E0A\u5360\u6EE1\u7A7A\u95F4</li></ul></li></ul>",1),b=i("\u5B50\u5143\u7D20\u5C5E\u6027"),f=a('<ul><li>order \u503C\u8D8A\u5C0F\u8D8A\u9760\u8FD1\u8D77\u70B9</li><li>flex-grow \u5982\u679C\u5BB9\u5668\u6709\u8DB3\u591F\u7A7A\u95F4\uFF0C\u653E\u5927\u9879\u76EE\uFF0C\u503C\u4E3A\u6574\u6570</li><li>flex-shrink \u7F29\u5C0F</li><li>align-self \u5355\u72EC\u8BBE\u7F6E\u5F53\u524D\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u5BF9\u5176\u65B9\u5F0F</li></ul><h2 id="\u5C45\u4E2D\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5C45\u4E2D\u5B9E\u73B0" aria-hidden="true">#</a> \u5C45\u4E2D\u5B9E\u73B0</h2><h3 id="\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u6C34\u5E73\u5C45\u4E2D</h3><ul><li>\u5982\u679C\u7236\u7EA7\u4E3A\u5757\u7EA7\u5143\u7D20\uFF0C\u5B50\u5143\u7D20\u4E3A\u884C\u5185\u5143\u7D20\uFF0C\u5185\u5BB9\u7531\u5185\u5BB9\u6491\u5F00\uFF0Ctext-align\uFF1Acenter</li><li>\u5B50\u5143\u7D20\u662F\u5757\u5143\u7D20\uFF0C\u7236\u5143\u7D20\u662F\u5757\u5143\u7D20\uFF0C\u5B50\u5143\u7D20\u8BBE\u7F6E\u4E86\u5BBD\u5EA6 <ul><li>\u5B50\u5143\u7D20\u8BBE\u7F6E margin\uFF1A0 auto</li><li>\u7236\u5143\u7D20\u4F7F\u7528 padding \u6216\u8005 margin \u8BA1\u7B97 \uFF08\u7236\u5BBD-\u5B50\u5BBD\uFF09/ 2 \u7A7A\u767D\u533A</li><li>\u5B9A\u4F4D left\uFF1A50% margin-left\uFF1A\u5B50\u5BBD\u4E00\u534A\u6216\u8005 transform\uFF1AtranslateX\uFF08-50%\uFF09</li></ul></li><li>\u5F39\u6027\u5E03\u5C40</li></ul><h3 id="\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u5782\u76F4\u5C45\u4E2D</h3><ul><li>\u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20 <ul><li>\u5355\u884C line-height</li><li>\u591A\u884C \u7236\u5143\u7D20\u8BBE\u5B9A dispaly\uFF1Ainline/inline-block/table-cell vertical-align\uFF1Amiddle</li></ul></li><li>flexbox</li><li>margin\uFF0Cpadding \u8BA1\u7B97\u8BA1\u7B97 \uFF08\u7236\u5BBD-\u5B50\u5BBD\uFF09/ 2</li><li>\u5B9A\u4F4D top\uFF1A50% margin-top\uFF1A\u5B50\u9AD8\u4E00\u534A\u6216\u8005 transform\uFF1AtranslateY\uFF08-50%\uFF09</li></ul><h3 id="\u5782\u76F4\u548C\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u548C\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u5782\u76F4\u548C\u6C34\u5E73\u5C45\u4E2D</h3><ul><li>\u5B9A\u4F4D</li><li>flex</li></ul><h2 id="\u79FB\u52A8\u7AEF\u9002\u914D" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEF\u9002\u914D" aria-hidden="true">#</a> \u79FB\u52A8\u7AEF\u9002\u914D</h2><h3 id="\u8BBE\u5907\u7269\u7406\u50CF\u7D20" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5907\u7269\u7406\u50CF\u7D20" aria-hidden="true">#</a> \u8BBE\u5907\u7269\u7406\u50CF\u7D20</h3><p>\u5C4F\u5E55\u5BBD/\u5206\u8FA8\u7387\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4EFD\u5C31\u662F 1pt</p><h3 id="css-\u50CF\u7D20" tabindex="-1"><a class="header-anchor" href="#css-\u50CF\u7D20" aria-hidden="true">#</a> css \u50CF\u7D20</h3><h4 id="px" tabindex="-1"><a class="header-anchor" href="#px" aria-hidden="true">#</a> px</h4><ul><li>pc \u673A\u5927\u5C4F\u663E\u793A\u5668 1px \u7EA6\u7B49\u4E8E 0.76 \u7269\u7406\u50CF\u7D20</li><li>iphone6 \u624B\u673A\u4E3A\u4F8B\uFF0C\u7269\u7406\u50CF\u7D20 750 \u5206\u8FA8\u7387 375 ==&gt; 375 / 750 = 0.5px 1px = 2pt</li></ul><h4 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h4><ul><li>\u7F51\u9875\u6839\u5143\u7D20\u7684\u5B57\u4F53\u9ED8\u8BA4\u662F 1rem</li></ul><h4 id="em" tabindex="-1"><a class="header-anchor" href="#em" aria-hidden="true">#</a> em</h4><ul><li>\u7236\u5143\u7D20\u5B57\u4F53\u5927\u5C0F\u4E3A em</li></ul><h4 id="rpx" tabindex="-1"><a class="header-anchor" href="#rpx" aria-hidden="true">#</a> rpx</h4><ul><li>\u5C0F\u7A0B\u5E8F\u4E13\u7528</li><li>iphone6 \u7269\u7406\u50CF\u7D20 750 \u5206\u6210 750 \u4EFD\u6BCF\u4E00\u4EFD\u5C31\u662F 1rpx ==&gt;1rpx = 0.5px = 1pt</li></ul><h4 id="vm-vh" tabindex="-1"><a class="header-anchor" href="#vm-vh" aria-hidden="true">#</a> vm vh</h4><p>\u6309\u7167\u89C6\u53E3\uFF0C\u5373\u53EF\u89C6\u533A\u5927\u5C0F</p><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> %</h4><ul><li>\u901A\u5E38\u76F8\u5BF9\u7236\u5143\u7D20\u8BA1\u7B97</li><li>\u5B50\u5143\u7D20 margin\uFF0Cpadding \u76F8\u5BF9\u76F4\u63A5\u7236\u5143\u7D20\u7684 margin \u548C padding</li><li>\u5B9A\u4F4D\u5143\u7D20\u76F8\u5BF9\u76F4\u63A5\u5B9A\u4F4D\u7236\u5143\u7D20</li></ul><h3 id="\u6700\u5C0F\u5B57\u4F53\u4E3A12px\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u5B57\u4F53\u4E3A12px\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> \u6700\u5C0F\u5B57\u4F53\u4E3A12px\u5982\u4F55\u89E3\u51B3</h3><p>transform\uFF1Ascale transform-origin:left top</p><h2 id="\u4E09\u680F\u5E03\u5C40\u65B9\u5F0F\u4E24\u8FB9\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#\u4E09\u680F\u5E03\u5C40\u65B9\u5F0F\u4E24\u8FB9\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94" aria-hidden="true">#</a> \u4E09\u680F\u5E03\u5C40\u65B9\u5F0F\u4E24\u8FB9\u56FA\u5B9A\u4E2D\u95F4\u81EA\u9002\u5E94</h2><ul><li>margin \u8D1F\u503C\u6CD5 \u5DE6\u53F3\u4E24\u680F\u91C7\u7528\u8D1F margin \u4E2D\u95F4\u4E5F\u662F\u6D6E\u52A8\u5BBD\u5EA6 100%\u5305\u88F9</li><li>\u81EA\u8EAB\u6D6E\u52A8\u6CD5 \u5DE6\u680F\u5DE6\u6D6E\u52A8 \u53F3\u680F\u53F3\u6D6E\u52A8 \u4E2D\u95F4\u680F\u653E\u5728\u6700\u540E</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u6CD5 \u5DE6\u53F3\u4E24\u680F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u56FA\u5B9A\u5728\u5DE6\u53F3\u4E24\u4FA7\uFF0C\u4E2D\u95F4\u7528 margin \u6491\u5F00</li><li>flex \u5DE6\u53F3\u4E24\u7AEF\u56FA\u5B9A\u5BBD \u4E2D\u95F4 flex\uFF1A1</li></ul><h2 id="css-\u7684\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#css-\u7684\u9009\u62E9\u5668" aria-hidden="true">#</a> css \u7684\u9009\u62E9\u5668</h2><ul><li>\u6807\u7B7E\u9009\u62E9\u5668(div p)</li><li>\u7C7B\u9009\u62E9\u5668(class=&quot;header&quot;)--.header,</li><li>id \u9009\u62E9\u5668(id=&quot;header&quot;)--#header</li><li>\u5168\u5C40\u9009\u62E9\u5668(*)</li><li>\u4F2A\u7C7B\u9009\u62E9\u5668(:after,:before)</li><li>\u7EE7\u627F\u9009\u62E9\u5668(div p)</li><li>\u540E\u4EE3\u9009\u62E9\u5668(A&gt;B)</li><li>\u4EFB\u610F\u9009\u62E9\u5668(A,B)</li><li>\u5B50\u4EE3\u9009\u62E9\u5668(:nth-child(n) div+div)</li></ul>',30);function m(x,g){const n=r("Badge");return t(),p(c,null,[o,e("p",null,[h,l(n,{text:"\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u9879\u76EE"})]),u,e("p",null,[b,l(n,{text:"\u81EA\u5B9A\u4E49\u5B50\u9879\u76EE"})]),f],64)}var v=s(d,[["render",m]]);export{v as default};