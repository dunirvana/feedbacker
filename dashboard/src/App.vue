<template>
  <div>
    <modal-factory />
    <router-view/>
  </div>
</template>

<script>
import ModalFactory from './components/ModalFactory'

export default {
  components: { ModalFactory }
}
</script>
