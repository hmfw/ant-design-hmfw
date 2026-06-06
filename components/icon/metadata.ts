export interface IconMetadata {
  keywords: string[]
  category: string
  tags?: string[]
}

export const iconMetadata: Record<string, IconMetadata> = {
  loading: {
    keywords: ['spinner', 'spin', 'waiting', 'progress'],
    category: 'feedback',
    tags: ['animation'],
  },
  close: {
    keywords: ['x', 'cancel', 'exit', 'dismiss', 'remove'],
    category: 'action',
  },
  check: {
    keywords: ['tick', 'done', 'success', 'confirm', 'ok'],
    category: 'feedback',
  },
  down: {
    keywords: ['arrow', 'dropdown', 'expand', 'collapse'],
    category: 'direction',
  },
  up: {
    keywords: ['arrow', 'collapse', 'expand'],
    category: 'direction',
  },
  left: {
    keywords: ['arrow', 'back', 'previous'],
    category: 'direction',
  },
  right: {
    keywords: ['arrow', 'forward', 'next'],
    category: 'direction',
  },
  search: {
    keywords: ['find', 'magnifier', 'lookup', 'query'],
    category: 'action',
  },
  plus: {
    keywords: ['add', 'create', 'new', 'increase'],
    category: 'action',
  },
  minus: {
    keywords: ['subtract', 'remove', 'decrease', 'reduce'],
    category: 'action',
  },
  warning: {
    keywords: ['alert', 'caution', 'danger', 'exclamation'],
    category: 'feedback',
  },
  'info-circle': {
    keywords: ['information', 'help', 'about', 'details'],
    category: 'feedback',
  },
  edit: {
    keywords: ['pencil', 'modify', 'update', 'write'],
    category: 'editor',
  },
  delete: {
    keywords: ['trash', 'remove', 'bin', 'discard'],
    category: 'action',
  },
  eye: {
    keywords: ['view', 'show', 'visible', 'preview'],
    category: 'action',
  },
  home: {
    keywords: ['house', 'homepage', 'main', 'dashboard'],
    category: 'navigation',
  },
  user: {
    keywords: ['person', 'profile', 'account', 'avatar'],
    category: 'general',
  },
  setting: {
    keywords: ['config', 'preferences', 'options', 'gear'],
    category: 'action',
  },
  folder: {
    keywords: ['directory', 'dir', 'file', 'collapse'],
    category: 'file',
  },
  'folder-open': {
    keywords: ['directory', 'dir', 'expand', 'open'],
    category: 'file',
  },
  file: {
    keywords: ['document', 'doc', 'leaf', 'page'],
    category: 'file',
  },
}
