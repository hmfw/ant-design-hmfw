// 图标元数据
// 用于支持图标搜索、分类和工具函数

export interface IconMetadata {
  /** 搜索关键词（英文） */
  keywords: string[]
  /** 所属分类 */
  category: string
  /** 标签（如 animation） */
  tags?: string[]
}

export const iconMetadata: Record<string, IconMetadata> = {
  // ==================== 反馈类 ====================
  loading: {
    keywords: ['spinner', 'spin', 'waiting', 'progress'],
    category: 'feedback',
    tags: ['animation'],
  },
  check: {
    keywords: ['tick', 'done', 'success', 'confirm', 'ok'],
    category: 'feedback',
  },
  warning: {
    keywords: ['alert', 'caution', 'danger', 'exclamation'],
    category: 'feedback',
  },
  'warning-filled': {
    keywords: ['alert', 'caution', 'danger', 'exclamation'],
    category: 'feedback',
  },
  'info-circle': {
    keywords: ['information', 'help', 'about', 'details'],
    category: 'feedback',
  },
  'info-circle-filled': {
    keywords: ['information', 'help', 'about', 'details'],
    category: 'feedback',
  },
  'check-circle-filled': {
    keywords: ['tick', 'done', 'success', 'confirm'],
    category: 'feedback',
  },
  'close-circle-filled': {
    keywords: ['cross', 'cancel', 'fail', 'error'],
    category: 'feedback',
  },
  'exclamation-circle': {
    keywords: ['warning', 'danger', 'alert'],
    category: 'feedback',
  },
  'exclamation-circle-filled': {
    keywords: ['warning', 'danger', 'alert'],
    category: 'feedback',
  },
  'question-circle': {
    keywords: ['help', 'unknown', 'support'],
    category: 'feedback',
  },

  // ==================== 操作类 ====================
  close: {
    keywords: ['x', 'cancel', 'exit', 'dismiss', 'remove'],
    category: 'action',
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
  'plus-circle': {
    keywords: ['add', 'create', 'new'],
    category: 'action',
  },
  'minus-circle': {
    keywords: ['subtract', 'remove', 'decrease'],
    category: 'action',
  },
  delete: {
    keywords: ['trash', 'remove', 'bin', 'discard'],
    category: 'action',
  },
  eye: {
    keywords: ['view', 'show', 'visible', 'preview'],
    category: 'action',
  },
  setting: {
    keywords: ['config', 'preferences', 'options', 'gear'],
    category: 'action',
  },
  copy: {
    keywords: ['duplicate', 'clipboard'],
    category: 'action',
  },
  reload: {
    keywords: ['refresh', 'restart'],
    category: 'action',
  },
  sync: {
    keywords: ['refresh', 'update', 'reload'],
    category: 'action',
  },
  save: {
    keywords: ['store', 'persist', 'disk'],
    category: 'action',
  },
  download: {
    keywords: ['save', 'export'],
    category: 'action',
  },
  filter: {
    keywords: ['funnel', 'narrow'],
    category: 'action',
  },

  // ==================== 方向类 ====================
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
  'arrow-up': {
    keywords: ['up', 'top', 'increase'],
    category: 'direction',
  },
  'arrow-down': {
    keywords: ['down', 'bottom', 'decrease'],
    category: 'direction',
  },
  'arrow-left': {
    keywords: ['back', 'previous'],
    category: 'direction',
  },
  'arrow-right': {
    keywords: ['forward', 'next'],
    category: 'direction',
  },
  'caret-up': {
    keywords: ['triangle', 'up'],
    category: 'direction',
  },
  'caret-down': {
    keywords: ['triangle', 'down'],
    category: 'direction',
  },
  'caret-left': {
    keywords: ['triangle', 'left'],
    category: 'direction',
  },
  'caret-right': {
    keywords: ['triangle', 'right'],
    category: 'direction',
  },
  'double-left': {
    keywords: ['first', 'arrow', 'back'],
    category: 'direction',
  },
  'double-right': {
    keywords: ['last', 'arrow', 'next'],
    category: 'direction',
  },
  swap: {
    keywords: ['exchange', 'switch', 'transfer'],
    category: 'direction',
  },
  'rotate-left': {
    keywords: ['rotate', 'undo', 'turn'],
    category: 'direction',
  },
  'rotate-right': {
    keywords: ['rotate', 'redo', 'turn'],
    category: 'direction',
  },
  fullscreen: {
    keywords: ['expand', 'maximize'],
    category: 'direction',
  },
  'fullscreen-exit': {
    keywords: ['minimize', 'collapse'],
    category: 'direction',
  },
  'zoom-in': {
    keywords: ['magnify', 'enlarge'],
    category: 'direction',
  },
  'zoom-out': {
    keywords: ['shrink', 'reduce'],
    category: 'direction',
  },

  // ==================== 导航类 ====================
  home: {
    keywords: ['house', 'homepage', 'main', 'dashboard'],
    category: 'navigation',
  },
  menu: {
    keywords: ['list', 'navigation'],
    category: 'navigation',
  },
  bars: {
    keywords: ['menu', 'list', 'navigation', 'hamburger'],
    category: 'navigation',
  },
  ellipsis: {
    keywords: ['more', 'dots'],
    category: 'navigation',
  },
  login: {
    keywords: ['signin', 'enter'],
    category: 'navigation',
  },
  logout: {
    keywords: ['signout', 'exit', 'leave'],
    category: 'navigation',
  },
  global: {
    keywords: ['world', 'language', 'i18n'],
    category: 'navigation',
  },

  // ==================== 通用类 ====================
  user: {
    keywords: ['person', 'profile', 'account', 'avatar'],
    category: 'general',
  },
  bell: {
    keywords: ['notification', 'alert', 'reminder'],
    category: 'general',
  },
  'bell-filled': {
    keywords: ['notification', 'alert', 'reminder'],
    category: 'general',
  },
  star: {
    keywords: ['favorite', 'rating', 'bookmark'],
    category: 'general',
  },
  'star-filled': {
    keywords: ['favorite', 'rating', 'bookmark'],
    category: 'general',
  },
  heart: {
    keywords: ['like', 'love', 'favorite'],
    category: 'general',
  },
  'heart-filled': {
    keywords: ['like', 'love', 'favorite'],
    category: 'general',
  },
  lock: {
    keywords: ['secure', 'private', 'locked'],
    category: 'general',
  },
  unlock: {
    keywords: ['unsecure', 'public'],
    category: 'general',
  },
  cloud: {
    keywords: ['storage', 'sync', 'weather'],
    category: 'general',
  },
  link: {
    keywords: ['url', 'connect', 'chain'],
    category: 'general',
  },
  message: {
    keywords: ['chat', 'comment', 'talk'],
    category: 'general',
  },
  mail: {
    keywords: ['email', 'envelope', 'message'],
    category: 'general',
  },
  phone: {
    keywords: ['call', 'tel', 'mobile'],
    category: 'general',
  },
  calendar: {
    keywords: ['date', 'schedule', 'event'],
    category: 'general',
  },
  'clock-circle': {
    keywords: ['time', 'hour', 'schedule'],
    category: 'general',
  },

  // ==================== 文件类 ====================
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
  picture: {
    keywords: ['image', 'photo'],
    category: 'file',
  },
  'video-camera': {
    keywords: ['video', 'film', 'movie'],
    category: 'file',
  },

  // ==================== 编辑类 ====================
  edit: {
    keywords: ['pencil', 'modify', 'update', 'write'],
    category: 'editor',
  },
  'share-alt': {
    keywords: ['share', 'connect', 'export'],
    category: 'editor',
  },

  // ==================== 品牌类 ====================
  android: {
    keywords: ['platform', 'os', 'mobile', 'google'],
    category: 'brand',
  },
  apple: {
    keywords: ['platform', 'os', 'ios', 'mac'],
    category: 'brand',
  },
}
