import { tv } from 'tailwind-variants'

export const datePickerStyles = tv({
  base: 'datePicker',
  slots: {
    root: 'datePicker__root',
    label: 'datePicker__label',
    clearTrigger: 'datePicker__clearTrigger',
    content: 'datePicker__content',
    control: 'datePicker__control',
    input: 'datePicker__input',
    monthSelect: 'datePicker__monthSelect',
    nextTrigger: 'datePicker__nextTrigger',
    positioner: 'datePicker__positioner',
    prevTrigger: 'datePicker__prevTrigger',
    rangeText: 'datePicker__rangeText',
    table: 'datePicker__table',
    tableBody: 'datePicker__tableBody',
    tableCell: 'datePicker__tableCell',
    tableCellTrigger: 'datePicker__tableCellTrigger',
    tableHead: 'datePicker__tableHead',
    tableHeader: 'datePicker__tableHeader',
    tableRow: 'datePicker__tableRow',
    trigger: 'datePicker__trigger',
    viewTrigger: 'datePicker__viewTrigger',
    viewControl: 'datePicker__viewControl',
    yearSelect: 'datePicker__yearSelect',
    view: 'datePicker__view',
  },
  variants: {},
})
