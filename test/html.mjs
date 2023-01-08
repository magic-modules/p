import { is } from '@magic/test'
import * as P from '../src/index.mjs'

const expectedHtml = state => {
  if (is.string(state) || is.array(state)) {
    state = { text: state }
  }

  let cl = state.class

  if (!cl) {
    cl = 'P'
  } else if (cl !== 'P' || !cl.includes('P ')) {
    cl = `P ${cl}`
  }

  if (is.array(state.text)) {
    return `<div class="${cl}">${state.text
      .map(t => `<p>${is.array(t) ? t.join('') : t}</p>`)
      .join('')}</div>`
  }

  return `<p class="${cl}">${state.text}</p>`
}

const html = true

const tests = [
  { props: { text: 'text to wrap' }, info: 'can output single paragraph from state object' },
  { props: 'text to wrap', info: 'can output single paragraph from string' },
  { props: ['text to wrap'], info: 'can output single paragraph from array' },
  {
    props: [['deep text to wrap', ' into one line'], 'second paragraph'],
    info: 'can output multilines and nested array',
  },
  { props: { text: 'text to wrap', class: 'testClass' }, info: 'can use class argument' },
]

export default tests.map(({ props, info }) => ({
  fn: () => P.View(props),
  html,
  expect: expectedHtml(props),
  info,
}))
