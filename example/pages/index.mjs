export const View = state => [
  h1(state.title),

  P([
    [
      'this is the ',
      Link({ text: '@magic-modules', to: 'https://github.com/magic-modules' }),
      ' P component.',
    ],
    'receives string, array of strings or array of arrays of strings and wraps them in one or more p elements.',
  ]),

  h2({ id: 'installation' }, 'installation'),

  Pre(`npm install --save-exact @magic-modules/p`),

  h2({ id: 'usage' }, 'usage'),

  h3('markdown:'),

  Pre(`<Picture name="image"></Picture>`),

  h3('javascript:'),
  Pre({ lines: false }, "P('Text to Wrap')"),

  p('both examples above output:'),

  Pre(`<p class="P">Text to wrap</p>`),

  p('example:'),

  P('Text to wrap'),

  h3('arrays'),

  p('Array arguments get wrapped in <p> tags.'),

  Pre(`
P([
  'first paragraph.',
  'second paragraph.',
  'third paragraph.',
])
`),

  p('renders:'),

  Pre(`
<div class="P">
  <p>first paragraph</p>
  <p>second paragraph</p>
  <p>third paragraph</p>
</div>
`),

  p('example:'),

  P(['first paragraph', 'second paragraph', 'third paragraph']),

  h3('deep arrays'),
  p([
    'Array arguments get wrapped in <p> tags shallowly with a depth of 1.',
    ' nested arrays get wrapped into one p.',
  ]),

  Pre(`
P([
  [
    'nested array with a ',
    Link({ to: '/' }, 'link'),
    ' embedded in the text',
  ],
  'second paragraph.',
])
`),

  p('renders:'),

  Pre(`
<div class="P">
  <p>nested array with a <a href="/p/">link</a> embedded in the text</p>
  <p>second paragraph.</p>
</div>
  `),

  p('example:'),

  P([
    ['nested array with a ', Link({ to: '/' }, 'link'), ' embedded in the text'],
    'second paragraph.',
  ]),

  h2({ id: 'source' }, 'source'),

  p([
    'the source for this page is in the ',
    Link({
      text: 'example directory',
      to: 'https://github.com/magic-modules/p/tree/master/example',
    }),
    ' and gets built and published to github using ',
    Link({ text: '@magic', to: 'https://github.com/magic/core' }),
  ]),
]
