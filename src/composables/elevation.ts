import { computed, PropType } from 'vue';

/**
 * Keep followings classes from tailwind ( purge )
 *
 * ss-shadow-none
 * ss-shadow
 * ss-shadow-md
 * ss-shadow-lg
 * ss-shadow-xl
 */
type ElevationPropValue = 'none' | '' | 'md' | 'lg' | 'xl'

export interface ElevationProps {
  elevation: ElevationPropValue
}

const ElevationPropValue = ['none', '', 'md', 'lg', 'xl']
export const elevationProps = {
  elevation: {
    type: String as PropType<ElevationPropValue>,
    validator: (elevation: string) => {
      return ElevationPropValue.includes(elevation)
    },
    default: '',
  },
}

export function useElevation(props: ElevationProps) {
  const prefix = 'ss-'
  const elevationClasses = computed(() => {
    const classes: string[] = []

    classes.push(
      props.elevation ? `${prefix}shadow-${props.elevation}` : `${prefix}shadow`
    )

    return classes
  })

  return { elevationClasses }
}

