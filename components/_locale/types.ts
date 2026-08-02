export interface Locale {
  locale: string
  common: {
    confirm: string
    cancel: string
    ok: string
    close: string
    loading: string
    noData: string
    search: string
    reset: string
    submit: string
    expand: string
    collapse: string
    selectAll: string
    clearAll: string
  }
  Button: {
    loading: string
  }
  Input: {
    placeholder: string
    clearTitle: string
  }
  Select: {
    placeholder: string
    notFoundContent: string
    loading: string
  }
  DatePicker: {
    placeholder: string
    yearPlaceholder: string
    monthPlaceholder: string
    rangePlaceholder: [string, string]
    /** 年份显示格式，中文需带「年」后缀（`2026年`），英文直接输出数字 */
    yearFormat: (year: number) => string
    /** 面板头部「年 + 月」的组合顺序，中英文语序相反 */
    monthYearFormat: (monthLabel: string, year: number) => string
    today: string
    now: string
    backToToday: string
    ok: string
    clear: string
    month: string
    year: string
    previousMonth: string
    nextMonth: string
    previousYear: string
    nextYear: string
    previousDecade: string
    nextDecade: string
    previousCentury: string
    nextCentury: string
    /** 一周起始日：0 = 周日，1 = 周一。`weekdays` 需按此顺序排列 */
    firstDayOfWeek: number
    weekdays: [string, string, string, string, string, string, string]
    months: [string, string, string, string, string, string, string, string, string, string, string, string]
  }
  TimePicker: {
    placeholder: string
  }
  Pagination: {
    itemsPerPage: string
    jumpTo: string
    jumpToConfirm: string
    page: string
    prevPage: string
    nextPage: string
    prevFive: string
    nextFive: string
    totalItems: (total: number) => string
    /** 分页导航容器的 aria-label */
    navLabel: string
    /** 单个页码按钮的 aria-label */
    pageLabel: (page: number) => string
  }
  Table: {
    filterTitle: string
    filterConfirm: string
    filterReset: string
    filterEmptyText: string
    emptyText: string
    selectAll: string
    selectInvert: string
    selectNone: string
    selectionAll: string
    sortTitle: string
    expand: string
    collapse: string
    triggerDesc: string
    triggerAsc: string
    cancelSort: string
  }
  Modal: {
    okText: string
    cancelText: string
    justOkText: string
  }
  Upload: {
    uploading: string
    removeFile: string
    uploadError: string
    previewFile: string
    downloadFile: string
    uploadText: string
  }
  Empty: {
    description: string
  }
  Transfer: {
    searchPlaceholder: string
    itemUnit: string
    itemsUnit: string
    remove: string
    selectAll: string
    deselectAll: string
    selectCurrent: string
    selectInvert: string
    removeAll: string
    removeCurrent: string
    notFoundContent: string
  }
  Typography: {
    copy: string
    copied: string
    expand: string
    collapse: string
  }
  Tour: {
    next: string
    previous: string
    finish: string
  }
  Calendar: {
    month: string
    year: string
    today: string
    selectDate: string
    selectMonth: string
  }
  Alert: {
    close: string
  }
  Form: {
    required: string
    min: (min: number) => string
    max: (max: number) => string
    pattern: string
    email: string
    validateFailed: string
  }
  Slider: {
    min: string
    max: string
    handle: string
  }
  Carousel: {
    label: string
    prev: string
    next: string
    slide: (current: number, total: number) => string
    goTo: (page: number) => string
  }
}
