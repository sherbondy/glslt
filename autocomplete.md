Autocomplete should:

1. Indicate valid input and output types
2. Show you similar functions (with links!)
3. Tell you a description in english, maybe with a supplemental picture
4. Give you a concrete example
5. Provide completions in context, drawing from built-in vars/functions and those declared in the file.
6. Characterize whether a function operates component-wise or falls into some other category.
7. Link you to the full detailed description in an offline/online copy of manglsl.

Instead of shipping the plugin with a copy of manglsl, it should bootstrap by downloading the latest revision
of manglsl and converting it into a suitable format one time. Then on startup, check for updates to the docs?
