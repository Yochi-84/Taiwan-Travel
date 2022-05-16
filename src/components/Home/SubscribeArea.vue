<template>
  <div class="subscribe">
    <div class="subscribe-pic">
    </div>
    <div class="subscribe-text">
      <h2>Subscribe</h2>
      <small>每個月來場放鬆旅行</small>
      <p>如果你願意收到每月旅遊資訊，一起感受台灣旅行的美好。</p>
      <div class="input-bar">
        <input type="email" placeholder="youremail@example.com" v-model.trim="mail" @keydown.enter.exact="subscribeSuccess = true">
        <button @click="subscribeSuccess = true"><i class="fa-regular fa-paper-plane"></i></button>
      </div>
    </div>
    <div class="subscribe-popup" :class="{isShow: subscribeSuccess}">
      <div class="subscribe-popup-window">
        <img src="@/assets/icon/subscribe_success.png" alt="">
        <h4>恭喜成功訂閱!</h4>
        <p>期待每個月提供你新的旅行靈感</p>
        <button class="subscribe-popup-close" @click="subscribeSuccess = false"><i class="fa-solid fa-x"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const mail = ref('')
    const subscribeSuccess = ref(false)
    return {
      mail,
      subscribeSuccess
    }
  }
}
</script>

<style scoped lang="scss">
.subscribe {
  display: flex;
  padding: 100px 5% 224px;
  min-width: 360px;
  background: $main-green;

  @include pad {
    flex-direction: column;
    padding: 0 0 224px;
  }

  &-pic {
    margin-right: 16px;
    width: 50%;
    min-height: 300px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    background-image: url("@/assets/pic/subscribe.png");

    @include pad {
      margin-right: 0;
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 16px;
    width: 49%;

    @include pad {
      padding: 50px;
      margin-left: 0;
      width: 100%;
      box-sizing: border-box;
    }

    h2 {
      font-size: 48px;
      font-family: $en-font;
      color: $point-yellow;
      line-height: 65px;

      @include pad {
        font-size: 24px;
      }
    }

    small {
      font-size: 48px;
      line-height: 70px;
      color: #fff;

      @include pad {
        font-size: 24px;
      }
    }

    p {
      font-size: 18px;
      letter-spacing: 0.15em;
      line-height: 26px;
      color: #fff;

      @include pad {
        font-size: 13px;
        letter-spacing: 0.05em;
        line-height: 19px;
      }
    }

    .input-bar {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      width: 100%;
      border: 0.5px solid #fff;
      box-sizing: border-box;

      input {
        position: relative;
        padding: 24px 5px 24px 24px;
        color: #fff;
        background: transparent;
        border: none;
        flex-grow: 1;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: #c9c9c9;
          letter-spacing: 0.1em;
        }
      }

      button {
        padding: 17px;
        font-size: 24px;
        color: #fff;
        background: transparent;
        border: none;
        cursor: pointer;

        @include pad {
          font-size: 18px;
        }
      }
    }
  }

  &-popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    transform: scale(0);

    &.isShow {
      transform: scale(1);

      .subscribe-popup-window {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    &-window {
      @include flex-center;

      position: fixed;
      top: 50%;
      left: 50%;
      padding: 50px 20px;
      background: #fff;
      border-radius: 5px;
      transition: 0.5s;
      transform: translate(-50%, -50%) scale(0);
      flex-direction: column;

      @include pad {
        width: 80%;
      }

      img {
        animation: shake 0.5s linear infinite alternate;
      }

      h4 {
        font-size: 20px;
        color: $main-green;
        letter-spacing: 0.1em;
      }

      p {
        color: $text-gray;
        letter-spacing: 0.1em;
      }
    }

    &-close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      color: $main-green;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
}

@keyframes shake {
  from {
    transform: rotate(-5deg);
  }

  to {
    transform: rotate(5deg);
  }
}
</style>
