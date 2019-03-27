# Market Profiles Widget

This extracts the dashboard fetching responsibility to a mini-widget that we can easily just include as needed and
edit/update in isolation from the site.

## Get working locally

```
To start a server:
  yarn start
  yarn dev

To create a production build (in ./build):
  yarn build

To start a production HTTP/2 server:
  yarn serve
```

## Embed on a site

```
<div data-widget-host="profiles-widget" class="preview">
  <script type="text/props">
    { "location": "nyc" }
  </script>
</div>
<script async src="/bundle.js"></script>
```

For context see this codepen demo: https://codepen.io/zouhir/pen/brrOPB

## More Resources

- https://medium.com/@_zouhir/preact-meets-cms-building-lightweight-portable-widget-components-e151622e2ac6
- https://github.com/zouhir/preact-habitat
- https://github.com/zouhir/preact-widgets-boilerplate
