# Hopin Base Hugo Theme

![](https://github.com/gauntface/hopin-base-theme/workflows/.github/workflows/npm-publish.yml/badge.svg)

This repo contains a theme to use as a base theme.

## Installing

### Step 1: Install via NPM

```
npm install --save @hopin/hugo-base-theme
```

### Step 2: Use via Gulp

```
const basetheme = require('@hopin/hugo-base-theme');

gulp.task('base-theme', () => {
  return basetheme.copyTheme(path.join(__dirname, `themes`, 'hopin-base-theme');
})
```

### Step 3: Add to Config

Then add the `hopin-base-theme` to your sites config:

```
{
    "baseURL": "...",
    "languageCode": "...",
    "title": "...",
    "publishDir": ".public",

    "theme": ["...", "hopin-base-theme"],
}
```

### Step 4: Add parameters

There are a few optional parameters you will likely want to set in your site config:

```
{
  "params": {
    "description": "This is the site description",
    "themecolor": "#C0FFEE",
    "googleanalytics": "UA-123456789-1"
  }
}
```
