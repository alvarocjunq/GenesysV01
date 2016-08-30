# Genesys 0.1

## Pré-requisitos

1. Instale o [Node.js](http://nodejs.org)

2. Instale o bower e o nodemon globalmente

    ```bash
    npm install -g bower gulp nodemon
    ```

## Gulp Tasks

### Lista de Tasks

- `gulp help`
    Mostra todas tasks disponíveis

### Análise de código

- `gulp vet`

    Roda o JSHint e o JSCS.

- `gulp vet --verbose`

    Roda o JSHint e o JSCS e mostra informações extendidas da análise do código.

- `gulp plato`

    Roda o Plato no javascript.
    O Plato gera em uma pasta, um report do resultado em html.

### Limpeza

- `gulp clean`

    Remove todos arquivos buildados da pasta temp.

- `gulp clean-images`

    Remove as imagems da pasta build.

- `gulp clean-code`

    Remove todos os js e html da pasta build.

- `gulp clean-fonts`

    Remove os arquivos de fonte da pasta build.

- `gulp clean-styles`

    Remove os css da pasta build.

### Fonts and Images

- `gulp fonts`

    Copy all fonts from source to the build folder

- `gulp images`

    Copy all images from source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS, add vendor prefixes, and copy to the build folder

### Bower Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.

    The `.bowerrc` file also runs this as a postinstall task whenever `bower install` is run.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.

- `gulp serve-dev --nosync`

    Serves the development code without launching the browser.

- `gulp serve-dev --debug`

    Launch debugger with node-inspector.

- `gulp serve-dev --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Building Production Code

- `gulp optimize`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies all fonts, copies images and runs `gulp optimize` to build the production code to the build folder.

### Serving Production Code

- `gulp serve-build`

    Serve the optimized code from the build folder and launch it in a browser.

- `gulp serve-build --nosync`

    Serve the optimized code from the build folder and manually launch the browser.

- `gulp serve-build --debug`

    Launch debugger with node-inspector.

- `gulp serve-build --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Bumping Versions

- `gulp bump`

    Bump the minor version using semver.
    --type=patch // default
    --type=minor
    --type=major
    --type=pre
    --ver=1.2.3 // specific version
