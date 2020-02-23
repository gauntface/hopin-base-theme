---
title: "HTML Elements"
cardContent: "{ }"
weight: 3
menu: 
  styleguide:
    parent: "Elements"
type: "styleguide"
---

# HTML Elements

Below is a set of example HTML that should be typically supported.

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

This is **body text** which *can* contain [inline links](#)
as well as `inline code`.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu 
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim id 
est laborum.

```
This is a code block
```


```javascript
console.log('This is JS.');
```

```html
<p>This is HTML.</p>
```

```css
/* This is CSS */
body {}
```

```go
fmt.Println("This is go.");
```
```bash
echo "This is bash"
```

> This is block quote

- This is an unordered list
- This is the second item
    - This is an indented list
    - And it's second item
    - This item has multiple paragraphs

        This is the second paragraph
- This is the third item
- This is the last item

1. This is an ordered list
1. This is the second item
    1. This is an idented list
    1. And it's second item
    1. This item has multiple paragraphs

        This is the second paragraph
1. This is the third item
1. This is the last item

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |

## Scalable Elements

The following elements are unlikely to fit on the vetical grid.

### Images

This is an example of a small image that is also local.

![This is an example Image](/images/small-img.jpg)

This is an example of a large image that is remote.

![This is a huge example Image](/images/large-mac-img.jpeg)

This is an example of a gif.

![This is an example gif](/images/ttt.gif)

This is an example of a broken image.

{{< raw-html >}}
<img src="/gauntface-theme/invalid-image-url" alt="Invalid sized image" width="300" height="300" />
{{< / raw-html >}}

This is an example of a broken image without a width or height attribute.

{{< raw-html >}}
<img src="/gauntface-theme/invalid-image-url" alt="Invalid image" />
{{< / raw-html >}}

This is a picture element.

![Example picture element](/images/raspberry-pi-snes.jpg)

### Iframes

Below is a YouTube iframe with a width and height attribute.

{{< raw-html >}}
<!-- Autoplay and width + height should be removed by hopin-static-site-gen -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/x2o-oy0o5Mo?autoplay=1"></iframe>
{{< / raw-html >}}

Below is a YouTube iframe without a width and height attribute.

{{< raw-html >}}
<iframe src="https://www.youtube.com/embed/x2o-oy0o5Mo?autoplay=1"></iframe>
{{< / raw-html >}}

Below is a slideshare iframe without a width and height attribute.

{{< raw-html >}}
<iframe src="//www.slideshare.net/slideshow/embed_code/key/tOZhdgk62sVxU" width="595" height="485" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
{{< / raw-html >}}

### Videos

A video with width and height set.

{{< raw-html >}}
<video width="480" height="480" autoplay muted loop playsinline>
  <source src="https://i.giphy.com/media/687qS11pXwjCM/giphy.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
{{< / raw-html >}}

A video without any attributes.

{{< raw-html >}}
<video>
  <source src="https://i.giphy.com/media/687qS11pXwjCM/giphy.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
{{< / raw-html >}}