import { computed } from 'vue';

export interface DimensionProps {
  height?: number | string
  width?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
}

export const dimensionProps = {
  height: [Number, String],
  width: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
}

function toStyle(prop: number | string | undefined): string | undefined {
  if (undefined === prop || null === prop || '' === prop) {
    return undefined
  } else if (isNaN(+prop!)) {
    return `${prop}`
  } else {
    return `${prop}px`
  }
}
export function useDimension(props: DimensionProps) {
  const dimensionStyles = computed(() => ({
    height: toStyle(props.height),
    width: toStyle(props.width),
    maxWidth: toStyle(props.maxWidth),
    maxHeight: toStyle(props.maxHeight),
    minWidth: toStyle(props.minWidth),
    minHeight: toStyle(props.minHeight),
  }))

  return { dimensionStyles }
}

