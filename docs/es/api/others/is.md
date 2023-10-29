# is

Para comprobar si un elemento cumple con una expresión;

<html-viewer>

```html
<!-- Importa ofa.js a tu proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  setTimeout(() => {
    const target = $("#target");
    $("#logger").html = `
    Is li: ${target.is('li')} <br>
    Is div: ${target.is('div')} <br>
    Have id: ${target.is('[id]')} <br>
    Have class: ${target.is('[class]')} <br>
    `;
  }, 500);
</script>
```

</html-viewer>
