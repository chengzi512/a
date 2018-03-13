# pug

## Attributes

### **(NOTE:用 | 做空白)**

```javascript
a(href='google.com') Google
|
|
a(class='button' href='google.com') Google
|
|
a(class='button', href='google.com') Google
```

### **(NOTE:用 - 写JavaScript表达式)**

```javascript
- var authenticated = true
body(class=authenticated ? 'authed' : 'anon')
```

### (NOTE:多行属性)

```javascript
input(
  type='checkbox'
  name='agreement'
  checked
)
```

### (NOTE:属性传值)

```javascript
- var btnType = 'info'
- var btnSize = 'lg'
button(type='button' class='btn btn-' + btnType + ' btn-' + btnSize)
|
|
button(type='button' class=`btn btn-${btnType} btn-${btnSize}`)
```

### (NOTE:属性转义)

```javascript
div(escaped="<code>")
div(unescaped!="<code>")
```

### (NOTE:布尔属性)

```javascript
input(type='checkbox' checked)
|
|
input(type='checkbox' checked=true)
|
|
input(type='checkbox' checked=false)
|
|
input(type='checkbox' checked=true.toString())
```

### (NOTE:style属性)

```javascript
a(style={color: 'red', background: 'green'})
```

### (NOTE:class属性)

```javascript
- var classes = ['foo', 'bar', 'baz']
a(class=classes)
|
|
//- the class attribute may also be repeated to merge arrays
a.bang(class=classes class=['bing'])
```

```javascript
- var currentUrl = '/about'
a(class={active: currentUrl === '/'} href='/') Home
|
|
a(class={active: currentUrl === '/about'} href='/about') About
```

```javascript
a.button
.content
a#main-link
#content
```

### (NOTE:&attributes)

```javascript
div#foo(data-bar="foo")&attributes({'data-foo': 'bar'})

- var attributes = {};
- attributes.class = 'baz';
div#foo(data-bar="foo")&attributes(attributes)
```

## Case

case语句是JavaScript的switch语句的简写,故写法也可以跟switch类似。

```javascript
- var friends = 10
case friends
  when 0
    p you have no friends
  when 1
    p you have a friend
  default
    p you have #{friends} friends
```

```javascript
- var friends = 1
case friends
  when 0: p you have no friends
  when 1: p you have a friend
  default: p you have #{friends} friends
```

## Code

pug允许您在模板中写入内联JavaScript代码。

无缓冲的代码开始 - 。它不会直接向输出添加任何内容。