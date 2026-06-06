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
}
