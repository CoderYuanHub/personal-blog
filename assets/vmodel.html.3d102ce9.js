import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.5d162315.js";const a={},e=s(`<h1 id="vue\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#vue\u7279\u6027" aria-hidden="true">#</a> Vue\u7279\u6027</h1><h4 id="\u4E00\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6-v-model" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6-v-model" aria-hidden="true">#</a> \u4E00\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF1Av-model</h4><p>\u4E00\u4E2A\u7EC4\u4EF6\u4E0A\u7684 <code>v-model</code> \u9ED8\u8BA4\u4F1A\u5229\u7528\u540D\u4E3A <code>value</code> \u7684 prop \u548C\u540D\u4E3A <code>input</code> \u7684\u4E8B\u4EF6\uFF0C\u4F46\u662F\u50CF\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u7B49\u7C7B\u578B\u7684\u8F93\u5165\u63A7\u4EF6\u53EF\u80FD\u4F1A\u5C06 <code>value</code> attribute \u7528\u4E8E<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Value" target="_blank" rel="noopener noreferrer">\u4E0D\u540C\u7684\u76EE\u7684</a>\u3002<code>model</code> \u9009\u9879\u53EF\u4EE5\u7528\u6765\u907F\u514D\u8FD9\u6837\u7684\u51B2\u7A81,\u6765\u81EAVue2\u7684<a href="https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model" target="_blank" rel="noopener noreferrer">\u5B98\u7F51\u8BF4\u660E</a>\u3002</p><h4 id="\u6D4B\u8BD5\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7EC4\u4EF6" aria-hidden="true">#</a> \u6D4B\u8BD5\u7EC4\u4EF6</h4><h5 id="\u7236\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&lt;template&gt;
    &lt;div class=&quot;father&quot;&gt;
      &lt;singer-select v-model=&quot;data&quot; :radioList=&quot;radioList&quot;&gt;&lt;/singer-select&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name: &quot;&quot;,
    data() {
        return {
            data: &quot;10&quot;,
            radioList: [
                {
                    label: &#39;10\u5206\u949F&#39;,
                    value: &#39;10&#39;
                },
                {
                    label: &#39;20\u5206\u949F&#39;,
                    value: &#39;20&#39;
                },
                {
                    label: &#39;30\u5206\u949F&#39;,
                    value: &#39;30&#39;
                },
                {
                    label: &#39;\u5176\u4ED6&#39;,
                    value: &#39;0&#39;
                }
            ],
        }
    }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h5 id="\u5B50\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u4EF6" aria-hidden="true">#</a> \u5B50\u7EC4\u4EF6</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&lt;template&gt;
    &lt;div class=&quot;singer-select&quot;&gt;
      &lt;el-radio-group v-model=&quot;radio&quot; @change=&quot;handleChange&quot;&gt;
        &lt;el-radio v-for=&quot;(item, index) in radioList&quot; :key=&quot;index&quot; :label=&quot;item.value&quot;&gt;{{item.label}}
           &lt;el-input v-model.number=&quot;otherRadio&quot; @change=&quot;handleInputChange&quot; v-if=&quot;radio == 0 &amp;&amp; item.value == 0&quot; placeholder=&quot;\u5176\u4ED6&quot;&gt;&lt;/el-input&gt;
        &lt;/el-radio&gt;
      &lt;/el-radio-group&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name: &quot;singer-select&quot;,
    model: {
      prop: &quot;value&quot;, // vmodel\u63A5\u6536\u7684\u503C\uFF0C\u4E0E\u4E0B\u65B9props\u4E00\u81F4
      event: &quot;update:value&quot; // \u6539\u53D8\u7236vmodel\u503C\u7684\u4E8B\u4EF6
    },
    props: {
      value: { // vmodel\u7684\u503C
        type: Number | String,
        default: &quot;0&quot;
      },
      radioList: { // \u5217\u8868\u7684\u503C
        type: Array,
        default: () =&gt; []
      }
    },
    data() {
        return {
            radio: &quot;0&quot;, //el-radio\u9ED8\u8BA4\u503C
            otherRadio: 0 // el-input\u9ED8\u8BA4\u503C
        }
    },
    watch: {
      value: {
        handler() {
          this.findDefault();
        },
        immediate: true
      }
    },
    methods: {
      	// \u67E5\u627E\u662F\u5426\u6709\u9ED8\u8BA4\u503C
        findDefault() {
          const isExist = this.radioList.findIndex(item =&gt; item.value == this.value);
          if (isExist &gt; -1) {
            this.radio = this.value;
          } else {
            this.radio = &quot;0&quot;;
            this.otherRadio = this.value;
          }
        },
        // \u5355\u9009\u6309\u94AE\u6539\u53D8\u4E8B\u4EF6\u7684\u503C
        handleChange(val) {
          	// \u901A\u8FC7\u65B9\u6CD5\u4FEE\u6539\u7236\u7684vmodel\u503C
            this.$emit(&quot;update:value&quot;, val);
        },
        // el-input\u4E8B\u4EF6\u6539\u53D8\u7684\u503C
        handleInputChange(val) {
          	// \u901A\u8FC7\u65B9\u6CD5\u4FEE\u6539\u7236\u7684vmodel\u503C
            this.$emit(&quot;update:value&quot;, val);
        }
    }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div>`,8);function l(r,p){return e}var b=n(a,[["render",l],["__file","vmodel.html.vue"]]);export{b as default};
