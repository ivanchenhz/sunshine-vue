import { computed, PropType } from 'vue';

/**
 * Keep followings classes from tailwind ( purge )
 *
 * ss-static
 * ss-fixed
 * ss-relative
 * ss-absolute
 * ss-sticky
 */
type PositionProp = 'static' | 'fixed' | 'relative' | 'absolute' | 'sticky'

export interface PositionProps {
  position: PositionProp
}

const PositionPropValues = ['static', 'fixed', 'relative', 'absolute', 'sticky']
export const positionProps = {
  position: {
    type: String as PropType<PositionProp>,
    validator: (rounded: string) => {
      return PositionPropValues.includes(rounded)
    },
    default: 'static',
  },
}

export function usePosition(props: PositionProps) {
  const prefix = 'ss-'
  const positionClasses = computed(() => {
    return  `${prefix}${props.position}`
  })

  return { positionClasses }
}

