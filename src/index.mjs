export const View = state => {
  if (typeof state === 'string' || Array.isArray(state)) {
    state = { text: state }
  }

  CHECK_PROPS(state, propTypes, 'P')

  const { text } = state
  let { class: cl = 'P' } = state

  if (cl && cl !== 'P' && !cl.includes('P ')) {
    cl = `P ${cl}`
  }

  if (Array.isArray(text)) {
    return div(
      { class: cl },
      text.map(t => p(t)),
    )
  }

  return p({ class: cl }, text)
}

export const style = {
  margin: '0 0 0.5em',
}

export const propTypes = {
  P: [
    { key: 'text', type: ['string', 'array'], required: true },
    { key: 'class', type: 'string' },
  ],
}
