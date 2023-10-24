# shadow

使用 `shadow` 属性，你可以获取元素的影子根节点实例。

<comp-viewer comp-name="test-shadow">

```html
<template component>
    <ul>
        <li>item 1</li>
        <li id="target">item 2</li>
        <li>item 3</li>
    </ul>
    <script>
        export default {
            tag:"test-shadow",
            ready(){
                setTimeout(()=>{
                    this.shadow.$("#target").text = 'change target';
                },500);
            }
        };
    </script>
</template>
```

</comp-viewer>

需要注意的是，避免在具有模板语法的元素内直接修改影子节点内的元素，以确保操作的一致性和可维护性。

## 从外部获取组件影子元素内的元素实例

您还可以从外部获取自定义元素实例，然后通过 `shadow` 属性访问影子节点内的元素，如下所示：

```javascript
$("test-shadow").shadow.$('selector').method(xxx);
```