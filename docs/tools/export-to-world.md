# **前端html导出world**

该方法借助jQuery进行操作,因此项目中需要有安装jq，另外需要引用两部分代码（放置在本文最后面部分），该方法并不满足全部需求，在样式上处理多少有点问题。

## 使用方法

```
 // 这边建议使用按需加载的方式，
 async exportToWorld() {
     await import('./FileSaver.min.js');
     await import('./jquery.wordexport.js');
     // 导出world的id或者class
     const worldId = "#wordId";
     // 导出world的文件名称
     const worldName = "文件名称";
     // 导出world的样式，这边样式并不支持全部，根据需求调整，这个也是这个导出的缺陷
     const worldStyle = "a {color: #42b983;}";
     $(worldId).wordExport(worldName, worldStyle);
 },
```

#### 代码一：FileSaver.min.js

```javascript
(function(a, b) {
    if ('function' == typeof define && define.amd)define([], b); else if ('undefined' != typeof exports)b(); else {
        b(), a.FileSaver = {exports: {}}.exports;
    }
})(this, function() {
    'use strict'; function b(a, b) {
        return 'undefined' == typeof b ? b = {autoBom: !1} : 'object' != typeof b && (console.warn('Deprecated: Expected third argument to be a object'), b = {autoBom: !b}), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(['\uFEFF', a], {type: a.type}) : a;
    } function c(a, b, c) {
        const d = new XMLHttpRequest(); d.open('GET', a), d.responseType = 'blob', d.onload = function() {
            g(d.response, b, c);
        }, d.onerror = function() {
            console.error('could not download file');
        }, d.send();
    } function d(a) {
        const b = new XMLHttpRequest(); b.open('HEAD', a, !1); try {
            b.send();
        } catch (a) {} return 200 <= b.status && 299 >= b.status;
    } function e(a) {
        try {
            a.dispatchEvent(new MouseEvent('click'));
        } catch (c) {
            const b = document.createEvent('MouseEvents'); b.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
    } var f = 'object' == typeof window && window.window === window ? window : 'object' == typeof self && self.self === self ? self : 'object' == typeof global && global.global === global ? global : void 0,
        a = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
        g = f.saveAs || ('object' != typeof window || window !== f ? function() {} : 'download' in HTMLAnchorElement.prototype && !a ? function(b, g, h) {
            let i = f.URL || f.webkitURL,
                j = document.createElement('a'); g = g || b.name || 'download', j.download = g, j.rel = 'noopener', 'string' == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = '_blank')) : (j.href = i.createObjectURL(b), setTimeout(function() {
                i.revokeObjectURL(j.href);
            }, 4E4), setTimeout(function() {
                e(j);
            }, 0));
        } : 'msSaveOrOpenBlob' in navigator ? function(f, g, h) {
            if (g = g || f.name || 'download', 'string' != typeof f)navigator.msSaveOrOpenBlob(b(f, h), g); else if (d(f))c(f, g, h); else {
                const i = document.createElement('a'); i.href = f, i.target = '_blank', setTimeout(function() {
                    e(i);
                });
            }
        } : function(b, d, e, g) {
            if (g = g || open('', '_blank'), g && (g.document.title = g.document.body.innerText = 'downloading...'), 'string' == typeof b) return c(b, d, e); let h = 'application/octet-stream' === b.type,
                i = /constructor/i.test(f.HTMLElement) || f.safari,
                j = /CriOS\/[\d]+/.test(navigator.userAgent); if ((j || h && i || a) && 'undefined' != typeof FileReader) {
                const k = new FileReader(); k.onloadend = function() {
                    let a = k.result; a = j ? a : a.replace(/^data:[^;]*;/, 'data:attachment/file;'), g ? g.location.href = a : location = a, g = null;
                }, k.readAsDataURL(b);
            } else {
                let l = f.URL || f.webkitURL,
                    m = l.createObjectURL(b); g ? g.location = m : location.href = m, g = null, setTimeout(function() {
                    l.revokeObjectURL(m);
                }, 4E4);
            }
        }); f.saveAs = g.saveAs = g, 'undefined' != typeof module && (module.exports = g);
});

```



#### 代码二：jquery.wordexport.js

```javascript
if (typeof jQuery !== "undefined" && typeof saveAs !== "undefined") {
  (function($) {
      $.fn.wordExport = function(fileName, style) {
          fileName = typeof fileName !== 'undefined' ? fileName : "jQuery-Word-Export";
          var statics = {
              mhtml: {
                  top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: " + location.href + "\n\n<!DOCTYPE html>\n<html>\n_html_</html>",
                  head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<style>\n_styles_\n</style>\n</head>\n",
                  body: "<body>_body_</body>"
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
              if (self.is(':hidden'))
                  self.remove();
          });
          var input = markup.find(':input')
          for (var i = 0; i < input.length; i++) {
              $(markup.find(':input')[i]).remove()
          }

          var elInput = markup.find('.el-input')
          for (var i = 0; i < elInput.length; i++) {
              $(markup.find('.el-input')[i]).remove()
          }
          var elRadioInput = markup.find('.el-radio__input')
          for (var i = 0; i < elRadioInput.length; i++) {
              $(markup.find('.el-radio__input')[i]).remove()
          }

          var elRadioLable = markup.find('.el-radio__label')
          for (var i = 0; i < elRadioLable.length; i++) {
              $(markup.find('.el-radio__label')[i]).remove()
          }

          var elRadioGroup = markup.find('.el-radio-group')
          for (var i = 0; i < elRadioGroup.length; i++) {
              $(markup.find('.el-radio-group')[i]).remove()
          }

          var elFormItemContent = markup.find('.el-form-item__content')
          for (var i = 0; i < elFormItemContent.length; i++) {
              $(markup.find('.el-form-item__content')[i]).remove()
          }

          var noPrint = markup.find('.no-print')
          for (var i = 0; i < noPrint.length; i++) {
              $(markup.find('.no-print')[i]).remove()
          }
          // Embed all images using Data URLs
          var images = Array();
          var img = markup.find('img');
          for (var i = 0; i < img.length; i++) {
              // Calculate dimensions of output image
              var w = Math.min(img[i].width, options.maxWidth);
              var h = img[i].height * (w / img[i].width);
              // Create canvas for converting image to data URL
              var canvas = document.createElement("canvas");
              canvas.style.display="none";//防止页面由于导出产生变化
              canvas.width = w;
              canvas.height = h;
              // Draw image to canvas
              img[i].src = img[i].src.replace("https","http"); //处理导出不显示的问题,如果在某些代码中出现了图片无法显示问题，可以加入该代码
              $(canvas).attr("id", "test_word_img_" + i).width(w).height(h).insertAfter(img_id); //注释掉img处理的其他代码
          }
          var mhtmlBottom = "\n";
          for (var i = 0; i < images.length; i++) {
              mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
              mhtmlBottom += "Content-Location: " + images[i].location + "\n";
              mhtmlBottom += "Content-Type: " + images[i].type + "\n";
              mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
              mhtmlBottom += images[i].data + "\n\n";
          }
          mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";
          var styles = style; //这里是需要将你用到的样式类都放在一行，作为字符串的形式传进去，这样导出的才带有对应的样式
          var fileContent = statics.mhtml.top.replace("_html_", statics.mhtml.head.replace("_styles_", styles) + statics.mhtml.body.replace("_body_", markup.html())) + mhtmlBottom;
          var blob = new Blob([fileContent], {
              type: "application/msword;charset=utf-8"
          });
          saveAs(blob, fileName + ".doc");
      };
  })(jQuery);
} else {
  if (typeof jQuery === "undefined") {
      console.error("jQuery Word Export: missing dependency (jQuery)");
  }
  if (typeof saveAs === "undefined") {
      console.error("jQuery Word Export: missing dependency (FileSaver.js)");
  }
}

```

