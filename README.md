# Blandat bös

A dependency-free static website built with vanilla HTML, CSS, and JavaScript.

Open `index.html` to view the site. No build command is required.

## Structure

- `assets/css/tokens.css` — light and dark theme values for each page.
- `assets/css/base.css` — resets, typography, focus styles, and shared layout helpers.
- `assets/css/components.css` — top bar, About panel, back button, and theme selector.
- `assets/css/essay.css` — shared essay layout and interactive-example foundations.
- `assets/css/project-index.css` and `project.css` — project-page layouts.
- `assets/css/ux-frontier.css` and `wcag-medical.css` — article- and report-specific visuals.
- `assets/css/website-specification.css` — visual diagrams and reference tables for the site specification.
- `assets/css/family-tree.css` — historical family-tree illustrations and interactive visualization layouts.
- `assets/css/tables-history.css` — historical table illustrations, table anatomy, and decision-guide layouts.
- `assets/css/gestalt-principles.css` — perceptual-grouping comparisons, diagrams, and responsive interface examples.
- `assets/js/theme.js` and `about.js` — shared behavior used by every page.
- The remaining JavaScript files contain only page-specific interactions.
- `assets/js/family-tree.js` — re-rooting, generation depth, view switching, and relationship-path exploration.
- `assets/js/tables-history.js` — sortable and filterable table history plus the representation chooser.
- `assets/js/gestalt-principles.js` — toolbar, table, workflow, and common-fate demonstrations.

`project-showcase.html` remains as a compatibility redirect to `index.html`.

`website-specification.html` is the living reference for the site's structure, components, vocabulary, responsive behavior, and accessibility rules.

`family-tree-visualization.html` examines historical and interactive family-tree representations.

`tables-history-ux.html` documents the history of tables and their appropriate use in graphical interfaces.

`gestalt-principles-gui.html` applies Gestalt principles to realistic graphical-interface problems with accessible, interactive examples.
