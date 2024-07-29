export const HTML_INIT = `<p><img src="https://uicdn.toast.com/toastui/img/tui-editor-bi.png" alt="image" contenteditable="false"><br></p><h1>Awesome Editor!</h1><p>It has been <em>released as opensource in 2018</em> and has <del>continually</del> evolved to <strong>receive 10k GitHub ⭐️ Stars</strong>.</p><h2>Create Instance</h2><p>You can create an instance with the following code and use <code>getHtml()</code> and <code>getMarkdown()</code> of the <a href="https://github.com/nhn/tui.editor">Editor</a>.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">const editor = new Editor(options);</code></pre></div><blockquote><p>See the table below for default options</p><blockquote><p>More API information can be found in the document</p></blockquote></blockquote><table><thead><tr><th><p>name</p></th><th><p>type</p></th><th><p>description</p></th></tr></thead><tbody><tr><td><p>el</p></td><td><p><code>HTMLElement</code></p></td><td><p>container element</p></td></tr></tbody></table><h2>Features</h2><ul><li><p>CommonMark + GFM Specifications</p><ul><li><p>Live Preview</p></li><li><p>Scroll Sync</p></li><li><p>Auto Indent</p></li><li><p>Syntax Highlight</p><ol><li><p>Markdown</p></li><li><p>Preview</p></li></ol></li></ul></li></ul><h2>Support Wrappers</h2><blockquote><ul><li><p>Wrappers</p><ol><li class="task-list-item checked" data-task="true" data-task-checked="true"><p>React</p></li><li class="task-list-item checked" data-task="true" data-task-checked="true"><p>Vue</p></li><li class="task-list-item" data-task="true"><p>Ember</p></li></ol></li></ul></blockquote>`;

export const MARKDOWN_INIT = `
  ![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)
  
  # Awesome Editor!
  
  It has been *released as opensource in 2018* and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.
  
  ## Create Instance
  
  You can create an instance with the following code and use \`getHtml()\` and \`getMarkdown()\` of the [Editor](https://github.com/nhn/tui.editor).
  
  \`\`\`js
  const editor = new Editor(options);
  \`\`\`
  
  > See the table below for default options
  > > More API information can be found in the document
  
  | name | type | description |
  | ---- | ---- | ----------- |
  | el | \`HTMLElement\` | container element |
  
  ## Features
  
  * CommonMark + GFM Specifications
      * Live Preview
      * Scroll Sync
      * Auto Indent
      * Syntax Highlight
          1. Markdown
          2. Preview
  
  ## Support Wrappers
  
  > * Wrappers
  >     1. [x] React
  >     2. [x] Vue
  >     3. [ ] Ember
  `;
