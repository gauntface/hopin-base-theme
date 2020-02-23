---
title: Components
cardPartial: "styleguide/svg/components-symbol.svg"
weight: 4
menu: 
  styleguide:
    parent: 'Partials'
type: "styleguide"
---

Components are picked up from partials/components/* and will add each partial to the page.

If you want to add a component to the page with some demo data create a file named `<partial name>.styleguide.html`, and that will be added to the styleguide instead.

For example, if `partials/componetns/project-card.html` needs some text, you can create
`partials/components/project-card.styleguide.html` and give it contents that imports
the `project-card` partial
(i.e. `{{ partial "styleguide/components/project-card.html" (dict "Title" "Example") }}`).

{{< load-components >}}