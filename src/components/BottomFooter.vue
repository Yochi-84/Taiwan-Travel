<template>
  <div class="footer">
    <div class="follow-us">
      <span>Follow us</span>
      <span
        ><a href="#"><i class="fa-brands fa-facebook-f"></i></a
      ></span>
      <span
        ><a href="#"><i class="fa-brands fa-instagram"></i></a
      ></span>
      <span
        ><a href="#"><i class="fa-brands fa-youtube"></i></a
      ></span>
    </div>
    <div class="copyright">
      <p>Copyright ©Mow | Design by Lola_Lin</p>
    </div>
    <div class="language">
      <span :class="{ isActive: currentLanguage === 'CH'}" @click="currentLanguage = 'CH'">CH</span>
      <span :class="{ isActive: currentLanguage === 'EN'}" @click="currentLanguage = 'EN'">EN</span>
      <span :class="{ isActive: currentLanguage === 'JP'}" @click="currentLanguage = 'JP'">JP</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const currentLanguage = ref('CH')

    return {
      currentLanguage
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 68px;
  font-family: $en-font;
  color: $light-gray;

  @include pad {
    padding: 40px 0;
  }

  .follow-us {
    @include pad {
      padding: 10px 0;
    }

    span {
      padding: 10px;

      a {
        color: $light-gray;
      }

      &:hover a {
        color: $text-gray;
      }
    }
  }

  .copyright {
    @include pad {
      order: 1;
      padding: 10px 0;
    }
  }

  .language {
    @include pad {
      padding: 10px 0;
    }

    span {
      margin: 10px;
      cursor: pointer;

      &.isActive {
        color: $text-gray;
      }

      &:hover {
        color: $text-gray;
      }
    }
  }
}
</style>
