<template>
  <div href="/" class="dashboard__link logo">
    <div class="logo__icon">
      <span class="logo__icon-vertical"></span>
      <span class="logo__icon-vertical logo__icon-vertical_visibility-medium"></span>
      <span class="logo__icon-vertical logo__icon-vertical_visibility-hard"></span>
    </div>
    <a href="/"><span class="logo__text">knaban</span></a>
  </div>
</template>

<style scoped lang="scss">
.dashboard__link {
  display: flex;
  column-gap: 14px;
  padding-right: 10px;
}

.logo {
  &__icon {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-vertical {
      padding: 12px 3px;
      background-color: var(--color-purple);
      margin-left: 3px;
      border-radius: 20px;

      &_visibility-medium {
        opacity: 0.8;
      }
      &_visibility-hard {
        opacity: 0.5;
      }
    }
  }

  &__text {
    font-weight: 600;
    font-size: 2rem;
  }
}
</style>
