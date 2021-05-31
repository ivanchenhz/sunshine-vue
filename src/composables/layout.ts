import { computed, PropType } from 'vue';

/**
 * Keep followings classes from tailwind ( purge )
 *
 * ss-flex-row
 * ss-flex-col
 * ss-container
 * ss-mx-auto
 */

export interface LayoutProps {
  vertical: Boolean,
  horizontal: Boolean,
  fluid: Boolean,
  center: Boolean,
}

export const layoutProps = {
  vertical: Boolean,
  horizontal: Boolean,
  fluid: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: true,
  },
}

export function useLayout(props: LayoutProps) {
  const prefix = 'ss-'
  const layoutClasses = computed(() => ({
    [`${prefix}flex-row`]: props.horizontal,
    [`${prefix}flex-col`]: props.vertical,
    [`${prefix}container`]: !props.fluid,
    [`${prefix}mx-auto`]: props.center,
  }))

  return { layoutClasses }
}

