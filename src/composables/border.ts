import { computed, PropType } from 'vue';

/**
 * Keep followings classes from tailwind ( purge )
 *
 * ss-rounded-none
 * ss-rounded-sm
 * ss-rounded
 * ss-rounded-md
 * ss-rounded-lg
 * ss-rounded-xl
 * ss-rounded-2xl
 * ss-rounded-3xl
 * ss-rounded-full
 */
type BorderPropValue = 'none' | 'sm' | '' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'

export interface BorderProps {
  rounded: BorderPropValue
}

const BorderPropValue = ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', 'full']
export const borderProps = {
  rounded: {
    type: String as PropType<BorderPropValue>,
    validator: (rounded: string) => {
      return BorderPropValue.includes(rounded)
    },
    default: '',
  },
}

export function useBorder(props: BorderProps) {
  const prefix = 'ss-'
  const borderClasses = computed(() => {
    const classes: string[] = []

    classes.push(
      props.rounded ? `${prefix}rounded-${props.rounded}` : `${prefix}rounded`
    )

    return classes
  })

  return { borderClasses }
}

