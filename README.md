# Hopin Base Hugo Theme

This repo contains a theme to use as a base theme.

## Installing

### Step 1A: Git submodule over SSH

```
git submodule add git@github.com:gauntface/hopin-base-theme.git themes/hopin-base-theme
```

### Step 1B: Git submodule over HTTP

```
git submodule add https://github.com/gauntface/hopin-base-theme.git themes/hopin-base-theme
```

### Step 2: Build Theme

```
npm install && npm run build-into-site
```

### Step 3: Add to Config

Then add the `hopin-base-theme-build` to your sites config:

```
{
    "baseURL": "...",
    "languageCode": "...",
    "title": "...",
    "publishDir": ".public",

    "theme": ["...", "hopin-base-theme-build"]
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