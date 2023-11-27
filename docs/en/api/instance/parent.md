# parent

Using the `parent` property, you can obtain the parent element instance of an instance.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').parent.css.color = 'blue';
       $('#target').css.color = 'red';
    },500);
</script>
```

</html-viewer>