# one

使用 `one` 方法，你可以为目标元素注册一次性事件处理程序，这意味着事件处理程序将在第一次触发后自动解除绑定，不会再次触发。

下面是一个示例，演示如何使用 `one` 方法为按钮元素注册点击事件处理程序：

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").one("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

在这个示例中，我们使用 `one` 方法为按钮元素添加了一个点击事件处理程序。当用户点击按钮时，事件处理程序会触发，但之后不会再次触发，因为它已被解除绑定。

## 模板语法方式使用

你还可以使用模板语法来为目标元素绑定一次性事件处理程序。下面是一个示例：

<comp-viewer comp-name="one-demo">

```html
<template component>
  <button one:click="addCount">Add Count</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "one-demo",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        }
      }
    };
  </script>
</template>
```

</comp-viewer>

在这个示例中，我们在按钮元素上使用 `one:click` 绑定了一个名为 `addCount` 的方法。当用户点击按钮时，这个方法将被调用，但之后不会再次触发，因为它是一次性事件处理程序。