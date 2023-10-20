# prevs

使用 `prevs` 屬性，您能夠輕松獲取當前元素之前的所有相鄰元素實例，這些元素將以數組的形式返回。

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 0</li>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').prevs.forEach(e => e.text = 'change text');
    },500);
</script>
```

</html-viewer>