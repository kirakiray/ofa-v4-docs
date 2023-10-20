# 实例数据特征

通过 `$` 获取或创建的实例对象，拥有完整 [stanz](https://github.com/kirakiray/stanz) 数据特性，因为 `$` 实例是从 [stanz](https://github.com/kirakiray/stanz) 继承而来的。这意味着你可以利用 `stanz` 提供的数据操作方法和特性来操作和监听实例对象的数据。

> 以下示例使用常规元素，因为自定义组件通常自带已注册的数据，而常规元素通常只包含标签信息，因此更适合用于演示。

## watch

实例可以通过 `watch` 方法监听值的变动；即使改动了对象的子对象的值，也能在对象的 `watch` 方法中监听到变动。

下面是一个示例，演示如何使用 `$` 实例和 `watch` 方法：

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
  }, 600);
  setTimeout(() => {
    target.bbb = {
      child: {
        val: "I am bbb child val",
      },
    };
  }, 1200);
  setTimeout(() => {
    target.bbb.child.val = "change bbb child val";
  }, 1800);
</script>
```

</html-viewer>

在这个示例中，我们首先创建了一个 `$` 实例对象 `target`，然后使用 `watch` 方法来监听它的变动。即使我们改动了对象的子对象的值，例如 `target.bbb.child.val` 的值，在 `watch` 方法中都能监听到这些变动并更新 `logger` 元素的内容。这展示了 `$` 实例对象的强大特性，使你能够轻松监控对象的变化。

## watchTick

`watchTick` 和 `watch` 方法功能类似，但 `watchTick` 内部有节流操作，它在单个线程下执行一次，因此在某些性能要求更高的场景下可以更有效地监听数据变动。

下面是一个示例，演示如何使用 `$` 实例的 `watchTick` 方法：

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  let count1 = 0;
  target.watch(() => {
    count1++;
    $("#logger1").text = 'watch 运行次数：' + count1;
  });

  let count2 = 0;
  target.watchTick(()=>{
    count2++;
    $("#logger2").text = 'watchTick 运行次数：' + count2;
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    target.bbb = "I am bbb";
    target.ccc = "I am ccc";
  }, 1000);
</script>
```

</html-viewer>

在这个示例中，我们首先创建了一个 `$` 实例对象 `target`。然后，我们使用 `watch` 方法和 `watchTick` 方法来监听对象的变动。`watch` 方法会在数据变动时立即运行，而 `watchTick` 方法在单个线程下执行一次，因此能够限制监听操作的频率。你可以根据你的需求选择使用 `watch` 或 `watchTick` 方法来监听数据的变化。

## unwatch

`unwatch` 方法用于取消对数据的监听，可以撤销之前注册的 `watch` 或 `watchTick` 监听。

下面是一个示例，演示如何使用 `$` 实例的 `unwatch` 方法：

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger1" style="border: blue solid 1px; margin: 8px"></div>
<div id="logger2" style="border: red solid 1px; margin: 8px"></div>

<script>
  const target = $("#target");
  const tid1 = target.watch(() => {
    $("#logger1").text = JSON.stringify(target);
  });

  const tid2 = target.watchTick(()=>{
    $("#logger2").text = JSON.stringify(target);
  });

  setTimeout(() => {
    target.aaa = "I am aaa";
    // 撤销监听
    target.unwatch(tid1);
    target.unwatch(tid2);
  }, 500);
  setTimeout(() => {
    target.bbb = "I am aaa"; // 不会触发上面注册的函数，因为已经被撤销监听
  }, 1000);
</script>
```

</html-viewer>

在这个示例中，我们首先创建了一个 `$` 实例对象 `target`，然后使用 `watch` 方法和 `watchTick` 方法分别注册了两个监听。之后，通过 `unwatch` 方法传递之前保存的监听返回值 `tid1` 和 `tid2` 来撤销这两个监听。这意味着在第一个 `setTimeout` 中的属性改变不会触发任何监听，因为监听已被撤销。

## 不被监听的值

在 `$` 实例中，使用下划线 `_` 开头的属性名表示这些值不会被 `watch` 或 `watchTick` 方法监听。这对于一些临时或私有的属性非常有用，你可以在不触发监听的情况下随意更改它们。

下面是一个示例，演示了如何使用下划线开头的属性值来避免被监听：

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target"></div>
<br />
<div id="logger" style="border: #aaa solid 1px; padding: 8px"></div>

<script>
  const target = $("#target");
  $("#logger").text = target;

  // 使用 watch 方法监听属性值变动
  target.watch(() => {
    $("#logger").text = target;
  });

  setTimeout(() => {
    // 这个属性值不会触发监听
    target._aaa = "I am aaa";
  }, 600);

  setTimeout(() => {
    // 即使改变了 _aaa 属性值，仍然不会触发监听
    target._aaa = "change aaa";
  }, 1200);
</script>
```

</html-viewer>

在这个示例中，我们创建了一个 `$` 实例对象 `target`，然后使用 `watch` 方法监听属性值的变动。在 `setTimeout` 中，我们尝试更改 `_aaa` 属性值，但这个更改不会触发监听。这对于需要在不触发监听的情况下更新属性值的情况非常有用。

更多完整的特性请查阅 [stanz](https://github.com/kirakiray/stanz)；