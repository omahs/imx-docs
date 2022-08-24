# How to convert openapi generator docs markdown files to html

- copy `README.md`, and `docs` folder from `generated/api` to a new folder `temp`
- open `temp` folder in `Visual studio code`
- replace all occurrences of `README.md` with `index.html`
- replace all occurrences of `README` with `Index`
- replace all occurrences of `.md` with `.html` (Note: check replace preview panel to ensure only the markdown file links are being updated)
- rename the file `README.md` as `index.md`
- install `Markdown Converter` vscode extension
  ```
  Name: Markdown Converter
  Id: manuth.markdown-converter
  Description: A markdown-converter for vscode
  Version: 5.1.2
  Publisher: manuth
  VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=manuth.markdown-converter
  ```
- open `index.md` and open vscode command palette `cmd+shift+p`
- search and run `Markdown: Convert all Documents` command
- once all the files have been converted, open index.html in a browser to verify there are no broken links
- remove all `*.md` files
