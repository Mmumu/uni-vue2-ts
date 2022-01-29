<template>
  <view>Hello plugin
  </view>
</template>

<script>

export default {
  data() {
    return {
      test: false
    }
  },
  methods: {
    aaa() {
      uni.showToast({
        title: '收到'
      })
    }
  }
}
</script>
