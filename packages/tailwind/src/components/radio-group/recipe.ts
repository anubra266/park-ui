import { tv } from 'tailwind-variants'

export const radioGroupStyles = tv({
  base: 'radioGroup',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'radioGroup__root',
    label: 'radioGroup__label',
    item: 'radioGroup__item',
    itemText: 'radioGroup__itemText',
    itemControl: 'radioGroup__itemControl',
    indicator: 'radioGroup__indicator',
  },
  variants: {
    size: {
      sm: {
        root: 'radioGroup__root--size_sm',
        label: 'radioGroup__label--size_sm',
        item: 'radioGroup__item--size_sm',
        itemText: 'radioGroup__itemText--size_sm',
        itemControl: 'radioGroup__itemControl--size_sm',
        indicator: 'radioGroup__indicator--size_sm',
      },
      md: {
        root: 'radioGroup__root--size_md',
        label: 'radioGroup__label--size_md',
        item: 'radioGroup__item--size_md',
        itemText: 'radioGroup__itemText--size_md',
        itemControl: 'radioGroup__itemControl--size_md',
        indicator: 'radioGroup__indicator--size_md',
      },
      lg: {
        root: 'radioGroup__root--size_lg',
        label: 'radioGroup__label--size_lg',
        item: 'radioGroup__item--size_lg',
        itemText: 'radioGroup__itemText--size_lg',
        itemControl: 'radioGroup__itemControl--size_lg',
        indicator: 'radioGroup__indicator--size_lg',
      },
    },
  },
})
