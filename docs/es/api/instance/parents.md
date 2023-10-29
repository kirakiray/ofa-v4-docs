# parents

Usando el atributo `parents`, puedes obtener fácilmente todas las instancias de elementos padres del elemento actual, y se devolverán como un array.

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div>
    <ul>
        <li>I am 1</li>
        <li id="target">I am target</li>
        <li>I am 3</li>
    </ul>
</div>
<div>
    logger: <span id="logger"></span>
</div>
<script>
    setTimeout(()=>{
       $("#logger").text = $("#target").parents.map(e => e.tag);
    },500);
</script>
```

</html-viewer>