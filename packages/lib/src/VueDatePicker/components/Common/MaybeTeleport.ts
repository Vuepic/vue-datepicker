import { defineComponent, h, Teleport, type PropType, type TeleportProps } from 'vue';

export default defineComponent({
  name: 'MaybeTeleport',
  props: {
    to: {
      type: [String, Object] as PropType<TeleportProps['to'] | undefined>,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.();
      if (props.to && !props.disabled) {
        return h(Teleport as unknown as string, { to: props.to }, children);
      }
      return children;
    };
  },
});
