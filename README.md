# Instagram Angular Directive

## Install

* `bower install instagram-realtime`
* Include `instagram-ng.js` inside HTML file
* Declare attribtues on HTML element:
  * `client-id` as the client ID that is found in [instagram.com/developer](http://instagram.com/developer)
  * `type`: one of `tag`, `location`, `geography`, `user`

## Current Usage

Code Example: 

```html
<instagram client-id="9224107CF0A" type="tag" meta="yolo"></instagram>
```



## Eventual Usage

```html
<!-- One way to do things -->
<instagram type="user"      meta="12345"  share="yes">
<instagram type="geography" meta="12345"  share="yes">
<instagram type="tag"       meta="yolo"   share="no">
<!-- Odd-person out -->
<instagram type="location" longitude="" latitude="" radius="" share="no">
```

## By

[Matt vv/e](http://twitter.com/mattvvhatever)

# License

MIT
