# prevs

使用 `prevs` 属性，您能够轻松获取当前元素之前的所有相邻元素实例，这些元素将以数组的形式返回。

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
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