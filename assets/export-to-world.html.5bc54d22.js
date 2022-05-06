import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.5d162315.js";const a={},e=s(`<h1 id="\u524D\u7AEFhtml\u5BFC\u51FAworld" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEFhtml\u5BFC\u51FAworld" aria-hidden="true">#</a> <strong>\u524D\u7AEFhtml\u5BFC\u51FAworld</strong></h1><p>\u8BE5\u65B9\u6CD5\u501F\u52A9jQuery\u8FDB\u884C\u64CD\u4F5C,\u56E0\u6B64\u9879\u76EE\u4E2D\u9700\u8981\u6709\u5B89\u88C5jq\uFF0C\u53E6\u5916\u9700\u8981\u5F15\u7528\u4E24\u90E8\u5206\u4EE3\u7801\uFF08\u653E\u7F6E\u5728\u672C\u6587\u6700\u540E\u9762\u90E8\u5206\uFF09\uFF0C\u8BE5\u65B9\u6CD5\u5E76\u4E0D\u6EE1\u8DB3\u5168\u90E8\u9700\u6C42\uFF0C\u5728\u6837\u5F0F\u4E0A\u5904\u7406\u591A\u5C11\u6709\u70B9\u95EE\u9898\u3002</p><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> // \u8FD9\u8FB9\u5EFA\u8BAE\u4F7F\u7528\u6309\u9700\u52A0\u8F7D\u7684\u65B9\u5F0F\uFF0C
 async exportToWorld() {
     await import(&#39;./FileSaver.min.js&#39;);
     await import(&#39;./jquery.wordexport.js&#39;);
     // \u5BFC\u51FAworld\u7684id\u6216\u8005class
     const worldId = &quot;#wordId&quot;;
     // \u5BFC\u51FAworld\u7684\u6587\u4EF6\u540D\u79F0
     const worldName = &quot;\u6587\u4EF6\u540D\u79F0&quot;;
     // \u5BFC\u51FAworld\u7684\u6837\u5F0F\uFF0C\u8FD9\u8FB9\u6837\u5F0F\u5E76\u4E0D\u652F\u6301\u5168\u90E8\uFF0C\u6839\u636E\u9700\u6C42\u8C03\u6574\uFF0C\u8FD9\u4E2A\u4E5F\u662F\u8FD9\u4E2A\u5BFC\u51FA\u7684\u7F3A\u9677
     const worldStyle = &quot;a {color: #42b983;}&quot;;
     $(worldId).wordExport(worldName, worldStyle);
 },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="\u4EE3\u7801\u4E00-filesaver-min-js" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u4E00-filesaver-min-js" aria-hidden="true">#</a> \u4EE3\u7801\u4E00\uFF1AFileSaver.min.js</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>(function(a, b) {
    if (&#39;function&#39; == typeof define &amp;&amp; define.amd)define([], b); else if (&#39;undefined&#39; != typeof exports)b(); else {
        b(), a.FileSaver = {exports: {}}.exports;
    }
})(this, function() {
    &#39;use strict&#39;; function b(a, b) {
        return &#39;undefined&#39; == typeof b ? b = {autoBom: !1} : &#39;object&#39; != typeof b &amp;&amp; (console.warn(&#39;Deprecated: Expected third argument to be a object&#39;), b = {autoBom: !b}), b.autoBom &amp;&amp; /^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(a.type) ? new Blob([&#39;\\uFEFF&#39;, a], {type: a.type}) : a;
    } function c(a, b, c) {
        const d = new XMLHttpRequest(); d.open(&#39;GET&#39;, a), d.responseType = &#39;blob&#39;, d.onload = function() {
            g(d.response, b, c);
        }, d.onerror = function() {
            console.error(&#39;could not download file&#39;);
        }, d.send();
    } function d(a) {
        const b = new XMLHttpRequest(); b.open(&#39;HEAD&#39;, a, !1); try {
            b.send();
        } catch (a) {} return 200 &lt;= b.status &amp;&amp; 299 &gt;= b.status;
    } function e(a) {
        try {
            a.dispatchEvent(new MouseEvent(&#39;click&#39;));
        } catch (c) {
            const b = document.createEvent(&#39;MouseEvents&#39;); b.initMouseEvent(&#39;click&#39;, !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
    } var f = &#39;object&#39; == typeof window &amp;&amp; window.window === window ? window : &#39;object&#39; == typeof self &amp;&amp; self.self === self ? self : &#39;object&#39; == typeof global &amp;&amp; global.global === global ? global : void 0,
        a = /Macintosh/.test(navigator.userAgent) &amp;&amp; /AppleWebKit/.test(navigator.userAgent) &amp;&amp; !/Safari/.test(navigator.userAgent),
        g = f.saveAs || (&#39;object&#39; != typeof window || window !== f ? function() {} : &#39;download&#39; in HTMLAnchorElement.prototype &amp;&amp; !a ? function(b, g, h) {
            let i = f.URL || f.webkitURL,
                j = document.createElement(&#39;a&#39;); g = g || b.name || &#39;download&#39;, j.download = g, j.rel = &#39;noopener&#39;, &#39;string&#39; == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = &#39;_blank&#39;)) : (j.href = i.createObjectURL(b), setTimeout(function() {
                i.revokeObjectURL(j.href);
            }, 4E4), setTimeout(function() {
                e(j);
            }, 0));
        } : &#39;msSaveOrOpenBlob&#39; in navigator ? function(f, g, h) {
            if (g = g || f.name || &#39;download&#39;, &#39;string&#39; != typeof f)navigator.msSaveOrOpenBlob(b(f, h), g); else if (d(f))c(f, g, h); else {
                const i = document.createElement(&#39;a&#39;); i.href = f, i.target = &#39;_blank&#39;, setTimeout(function() {
                    e(i);
                });
            }
        } : function(b, d, e, g) {
            if (g = g || open(&#39;&#39;, &#39;_blank&#39;), g &amp;&amp; (g.document.title = g.document.body.innerText = &#39;downloading...&#39;), &#39;string&#39; == typeof b) return c(b, d, e); let h = &#39;application/octet-stream&#39; === b.type,
                i = /constructor/i.test(f.HTMLElement) || f.safari,
                j = /CriOS\\/[\\d]+/.test(navigator.userAgent); if ((j || h &amp;&amp; i || a) &amp;&amp; &#39;undefined&#39; != typeof FileReader) {
                const k = new FileReader(); k.onloadend = function() {
                    let a = k.result; a = j ? a : a.replace(/^data:[^;]*;/, &#39;data:attachment/file;&#39;), g ? g.location.href = a : location = a, g = null;
                }, k.readAsDataURL(b);
            } else {
                let l = f.URL || f.webkitURL,
                    m = l.createObjectURL(b); g ? g.location = m : location.href = m, g = null, setTimeout(function() {
                    l.revokeObjectURL(m);
                }, 4E4);
            }
        }); f.saveAs = g.saveAs = g, &#39;undefined&#39; != typeof module &amp;&amp; (module.exports = g);
});

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h4 id="\u4EE3\u7801\u4E8C-jquery-wordexport-js" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u4E8C-jquery-wordexport-js" aria-hidden="true">#</a> \u4EE3\u7801\u4E8C\uFF1Ajquery.wordexport.js</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if (typeof jQuery !== &quot;undefined&quot; &amp;&amp; typeof saveAs !== &quot;undefined&quot;) {
  (function($) {
      $.fn.wordExport = function(fileName, style) {
          fileName = typeof fileName !== &#39;undefined&#39; ? fileName : &quot;jQuery-Word-Export&quot;;
          var statics = {
              mhtml: {
                  top: &quot;Mime-Version: 1.0\\nContent-Base: &quot; + location.href + &quot;\\nContent-Type: Multipart/related; boundary=\\&quot;NEXT.ITEM-BOUNDARY\\&quot;;type=\\&quot;text/html\\&quot;\\n\\n--NEXT.ITEM-BOUNDARY\\nContent-Type: text/html; charset=\\&quot;utf-8\\&quot;\\nContent-Location: &quot; + location.href + &quot;\\n\\n&lt;!DOCTYPE html&gt;\\n&lt;html&gt;\\n_html_&lt;/html&gt;&quot;,
                  head: &quot;&lt;head&gt;\\n&lt;meta http-equiv=\\&quot;Content-Type\\&quot; content=\\&quot;text/html; charset=utf-8\\&quot;&gt;\\n&lt;style&gt;\\n_styles_\\n&lt;/style&gt;\\n&lt;/head&gt;\\n&quot;,
                  body: &quot;&lt;body&gt;_body_&lt;/body&gt;&quot;
              }
          };
          var options = {
              maxWidth: 624
          };
          // Clone selected element before manipulating it
          var markup = $(this).clone();
          
          // Remove hidden elements from the output
          markup.each(function() {
              var self = $(this);
              if (self.is(&#39;:hidden&#39;))
                  self.remove();
          });
          var input = markup.find(&#39;:input&#39;)
          for (var i = 0; i &lt; input.length; i++) {
              $(markup.find(&#39;:input&#39;)[i]).remove()
          }

          var elInput = markup.find(&#39;.el-input&#39;)
          for (var i = 0; i &lt; elInput.length; i++) {
              $(markup.find(&#39;.el-input&#39;)[i]).remove()
          }
          var elRadioInput = markup.find(&#39;.el-radio__input&#39;)
          for (var i = 0; i &lt; elRadioInput.length; i++) {
              $(markup.find(&#39;.el-radio__input&#39;)[i]).remove()
          }

          var elRadioLable = markup.find(&#39;.el-radio__label&#39;)
          for (var i = 0; i &lt; elRadioLable.length; i++) {
              $(markup.find(&#39;.el-radio__label&#39;)[i]).remove()
          }

          var elRadioGroup = markup.find(&#39;.el-radio-group&#39;)
          for (var i = 0; i &lt; elRadioGroup.length; i++) {
              $(markup.find(&#39;.el-radio-group&#39;)[i]).remove()
          }

          var elFormItemContent = markup.find(&#39;.el-form-item__content&#39;)
          for (var i = 0; i &lt; elFormItemContent.length; i++) {
              $(markup.find(&#39;.el-form-item__content&#39;)[i]).remove()
          }

          var noPrint = markup.find(&#39;.no-print&#39;)
          for (var i = 0; i &lt; noPrint.length; i++) {
              $(markup.find(&#39;.no-print&#39;)[i]).remove()
          }
          // Embed all images using Data URLs
          var images = Array();
          var img = markup.find(&#39;img&#39;);
          for (var i = 0; i &lt; img.length; i++) {
              // Calculate dimensions of output image
              var w = Math.min(img[i].width, options.maxWidth);
              var h = img[i].height * (w / img[i].width);
              // Create canvas for converting image to data URL
              var canvas = document.createElement(&quot;canvas&quot;);
              canvas.style.display=&quot;none&quot;;//\u9632\u6B62\u9875\u9762\u7531\u4E8E\u5BFC\u51FA\u4EA7\u751F\u53D8\u5316
              canvas.width = w;
              canvas.height = h;
              // Draw image to canvas
              img[i].src = img[i].src.replace(&quot;https&quot;,&quot;http&quot;); //\u5904\u7406\u5BFC\u51FA\u4E0D\u663E\u793A\u7684\u95EE\u9898,\u5982\u679C\u5728\u67D0\u4E9B\u4EE3\u7801\u4E2D\u51FA\u73B0\u4E86\u56FE\u7247\u65E0\u6CD5\u663E\u793A\u95EE\u9898\uFF0C\u53EF\u4EE5\u52A0\u5165\u8BE5\u4EE3\u7801
              $(canvas).attr(&quot;id&quot;, &quot;test_word_img_&quot; + i).width(w).height(h).insertAfter(img_id); //\u6CE8\u91CA\u6389img\u5904\u7406\u7684\u5176\u4ED6\u4EE3\u7801
          }
          var mhtmlBottom = &quot;\\n&quot;;
          for (var i = 0; i &lt; images.length; i++) {
              mhtmlBottom += &quot;--NEXT.ITEM-BOUNDARY\\n&quot;;
              mhtmlBottom += &quot;Content-Location: &quot; + images[i].location + &quot;\\n&quot;;
              mhtmlBottom += &quot;Content-Type: &quot; + images[i].type + &quot;\\n&quot;;
              mhtmlBottom += &quot;Content-Transfer-Encoding: &quot; + images[i].encoding + &quot;\\n\\n&quot;;
              mhtmlBottom += images[i].data + &quot;\\n\\n&quot;;
          }
          mhtmlBottom += &quot;--NEXT.ITEM-BOUNDARY--&quot;;
          var styles = style; //\u8FD9\u91CC\u662F\u9700\u8981\u5C06\u4F60\u7528\u5230\u7684\u6837\u5F0F\u7C7B\u90FD\u653E\u5728\u4E00\u884C\uFF0C\u4F5C\u4E3A\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u4F20\u8FDB\u53BB\uFF0C\u8FD9\u6837\u5BFC\u51FA\u7684\u624D\u5E26\u6709\u5BF9\u5E94\u7684\u6837\u5F0F
          var fileContent = statics.mhtml.top.replace(&quot;_html_&quot;, statics.mhtml.head.replace(&quot;_styles_&quot;, styles) + statics.mhtml.body.replace(&quot;_body_&quot;, markup.html())) + mhtmlBottom;
          var blob = new Blob([fileContent], {
              type: &quot;application/msword;charset=utf-8&quot;
          });
          saveAs(blob, fileName + &quot;.doc&quot;);
      };
  })(jQuery);
} else {
  if (typeof jQuery === &quot;undefined&quot;) {
      console.error(&quot;jQuery Word Export: missing dependency (jQuery)&quot;);
  }
  if (typeof saveAs === &quot;undefined&quot;) {
      console.error(&quot;jQuery Word Export: missing dependency (FileSaver.js)&quot;);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br></div></div>`,8);function r(l,t){return e}var o=n(a,[["render",r],["__file","export-to-world.html.vue"]]);export{o as default};
