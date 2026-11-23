<template>
  <div
    ref="grid-wrap"
    :class="dpOverlayClass"
    :style="dpOverlayStyle"
    :role="useRelative ? undefined : 'presentation'"
    :tabindex="useRelative ? undefined : '0'"
    @keydown="onKeyDown"
    @click.prevent
  >
    <div ref="header" class="dp--selection-grid-header"><slot name="header"></slot></div>

    <div
      ref="overlay-container"
      :aria-label="overlayLabel"
      :class="containerClass"
      :style="{ '--dp-overlay-height': `${containerHeight}px` }"
      role="listbox"
    >
      <slot name="overlay">
        <div
          v-for="(row, i) in items"
          :key="i"
          class="dp--overlay-row"
          role="presentation"
          :class="{ 'dp--flex-row': items.length >= 3 }"
        >
          <div
            v-for="col in row"
            :key="col.value"
            ref="colRefs"
            role="option"
            :class="cellClassName"
            :aria-label="col.ariaLabel ?? col.text"
            :aria-selected="col.active || undefined"
            :aria-disabled="col.disabled || undefined"
            :data-dp-action-element="level ?? 1"
            :data-dp-element-active="col.active ? (level ?? 1) : undefined"
            :data-dp-focus-value="col.value"
            :data-dp-focus-target="focusValue !== undefined && focusValue !== null && col.value === focusValue ? true : undefined"
            tabindex="0"
            :data-test-id="col.text"
            @click.prevent="onClick(col)"
            @keydown="checkKeyDown($event, () => onClick(col), true)"
            @mouseover="setHoverValue(col.value)"
          >
            <div :class="col.className">
              <slot name="item" :item="col">
                {{ col.text }}
              </slot>
            </div>
          </div>
        </div>
      </slot>
    </div>
    <button
      v-if="$slots['button-icon']"
      v-show="!hideNavigationButtons(type)"
      ref="toggle-button"
      type="button"
      :aria-label="ariaLabels?.toggleOverlay"
      :class="actionButtonClass"
      tabindex="0"
      :data-dp-action-element="level ?? 1"
      @click="toggle"
      @keydown="onBtnKeyDown"
    >
      <slot name="button-icon" />
    </button>
  </div>
</template>

<script lang="ts" setup>
  import { computed, nextTick, onBeforeUpdate, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue';
  import { unrefElement, useTemplateRefsList } from '@vueuse/core';

  import { useContext, useHelperFns } from '@/composables';
  import { useNavigationDisplay } from '@/components/shared/useNavigationDisplay.ts';

  import { EventKey } from '@/constants';
  import type { DynamicClass, OverlayGridItem, PickerSection } from '@/types';

  const emit = defineEmits<{
    selected: [value: number];
    toggle: [];
    'hover-value': [value: number];
  }>();

  const props = defineProps<{
    items: OverlayGridItem[][];
    type: PickerSection;
    useRelative?: boolean;
    height?: number | string;
    overlayLabel?: string;
    isLast: boolean;
    level?: 0 | 1 | 2;
    focusValue?: number | null;
    noOverlayFocus?: boolean;
  }>();

  const {
    setState,
    defaults: { ariaLabels, config },
  } = useContext();
  const { hideNavigationButtons } = useNavigationDisplay();
  const { handleEventPropagation, checkKeyDown } = useHelperFns();

  const toggleButton = useTemplateRef('toggle-button');
  const headerRef = useTemplateRef('header');
  const containerRef = useTemplateRef('overlay-container');
  const gridWrapRef = useTemplateRef('grid-wrap');
  const colRefs = useTemplateRefsList<HTMLElement>();

  const scrollable = ref(false);
  const selectionActiveRef = ref<HTMLElement | null>(null);
  const hoverValue = ref();
  const containerHeight = ref(0);

  onBeforeUpdate(() => {
    selectionActiveRef.value = null;
  });

  onMounted(async () => {
    await nextTick();
    setContainerHeightAndScroll();
    setState('arrowNavigationLevel', props.level ?? 1);
  });

  onUnmounted(() => {
    setState('arrowNavigationLevel', (props.level ?? 1) - 1);
  });

  // Dynamic class  for the overlay
  const dpOverlayClass = computed(
    (): DynamicClass => ({
      'dp--overlay': true,
      'dp--overlay-absolute': !props.useRelative,
      'dp--overlay-relative': props.useRelative,
    }),
  );

  const dpOverlayStyle = computed(() =>
    props.useRelative ? { height: `${props.height}px`, width: `var(--dp-menu-min-width)` } : undefined,
  );

  const cellClassName = computed(() => ({
    'dp--overlay-col': true,
  }));

  /**
   * Dynamic class for action button
   */
  const actionButtonClass = computed(
    (): DynamicClass => ({
      'dp--btn-base dp--bg-none': true,
      'dp--button': true,
      'dp--overlay-action': true,
      'dp--over-action-scroll': scrollable.value,
      'dp--button-bottom': props.isLast,
    }),
  );

  const containerClass = computed(() => ({
    'dp--overlay-container': true,
    'dp--container-flex': props.items?.length <= 6,
    'dp--container-block': props.items?.length > 6,
  }));

  watch(
    () => props.items,
    () => setContainerHeightAndScroll(false),
    { deep: true },
  );

  const setContainerHeightAndScroll = (setScroll = true) => {
    nextTick().then(() => {
      const parent = unrefElement(gridWrapRef);
      const btn = unrefElement(toggleButton);
      const container = unrefElement(containerRef);
      const header = unrefElement(headerRef);
      const toggleBtnHeight = btn ? btn.getBoundingClientRect().height : 0;
      if (parent) {
        if (parent.getBoundingClientRect().height) {
          containerHeight.value =
            parent.getBoundingClientRect().height - toggleBtnHeight - (header?.getBoundingClientRect().height ?? 0);
        } else {
          containerHeight.value =
            config.value.modeHeight - toggleBtnHeight - (header?.getBoundingClientRect().height ?? 0);
        }
      }
      const activeEl = colRefs.value?.find((element) => {
        const { dpElementActive } = element.dataset;
        return dpElementActive === `${props.level ?? 1}`;
      });
      const focusEl =
        props.focusValue !== undefined && props.focusValue !== null
          ? colRefs.value?.find((element) => Number(element.dataset.dpFocusValue) === props.focusValue)
          : undefined;
      const el = activeEl ?? focusEl;
      if (el && container && setScroll) {
        container.scrollTop =
          el.offsetTop -
          container.offsetTop -
          (containerHeight.value / 2 - el.getBoundingClientRect().height) -
          toggleBtnHeight;
      }
      if (el && setScroll && !props.noOverlayFocus) {
        el.focus({ preventScroll: true });
      }
    });
  };

  /**
   * Handle click on cell, if value is enabled (not in filters), emit value back to parent
   */
  const onClick = (val: OverlayGridItem): void => {
    if (!val.disabled) {
      emit('selected', val.value);
    }
  };

  const toggle = () => {
    emit('toggle');
  };

  const handleEsc = (ev: KeyboardEvent) => {
    if (config.value.escClose) {
      toggle();
      handleEventPropagation(ev, config.value);
    }
  };

  const setHoverValue = (val: number) => {
    hoverValue.value = val;
    emit('hover-value', val);
  };

  const onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === EventKey.esc) return handleEsc(ev);
  };

  const onBtnKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === EventKey.enter) return toggle();
  };
</script>
