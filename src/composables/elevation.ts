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
type ElevationProp = 'none' | '' | 'md' | 'lg' | 'xl'

export interface ElevationProps {
  elevation: ElevationProp
}

const ElevationPropValues = ['none', '', 'md', 'lg', 'xl']
export const elevationProps = {
  elevation: {
    type: String as PropType<ElevationProp>,
    validator: (elevation: string) => {
      return ElevationPropValues.includes(elevation)
    },
    default: 'none',
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

