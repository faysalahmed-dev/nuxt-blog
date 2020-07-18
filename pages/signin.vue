<template>
  <c-flex
    direction="column"
    align="center"
    justify="center"
    h="100%"
    mt="-40px"
  >
    <c-heading fontWeight="500">Sing In Account</c-heading>
    <c-box
      as="form"
      @submit.prevent="loginAccount"
      mt="8"
      maxW="400px"
      w="90%"
      mx="auto"
      borderRadius="5px"
      :border="'1px solid ' + $chakra.theme.colors.vue['500']"
      p="8"
    >
      <c-form-control :mb="3">
        <c-form-label htmlFor="email">Email address</c-form-label>
        <c-input
          type="text"
          id="email"
          aria-describedby="email-helper-text"
          focusBorderColor="gray.300"
          errorBorderColor="orange.300"
          auto-focus="off"
          v-model.trim="$v.email.$model"
          placeholder="username@example.com"
        />
        <c-form-helper-text id="email-helper-text" v-if="!$v.email.$error">
          We'll never share your email.
        </c-form-helper-text>
        <c-text
          fontSize="sm"
          mt="1"
          color="orange.300"
          v-if="$v.email.$dirty && !$v.email.required"
        >
          Please Provide Your Email Address
        </c-text>
        <c-text
          fontSize="sm"
          mt="1"
          color="orange.300"
          v-if="$v.email.$dirty && !$v.email.email"
        >
          Email Formate Is Invalid
        </c-text>
      </c-form-control>
      <c-form-control :mb="3">
        <c-form-label htmlFor="password">Password </c-form-label>
        <c-input
          type="password"
          id="password"
          aria-describedby="password-helper-text"
          focusBorderColor="gray.300"
          errorBorderColor="orange.300"
          auto-focus="off"
          v-model.trim="$v.password.$model"
          placeholder="......"
        />
        <c-form-helper-text
          id="password-helper-text"
          v-if="!$v.password.$error"
        >
          Password atleast 6 charaters long
        </c-form-helper-text>
        <c-text
          fontSize="sm"
          mt="1"
          color="orange.300"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Please Provide Your Password
        </c-text>
        <c-text
          fontSize="sm"
          mt="1"
          color="orange.300"
          v-if="$v.password.$dirty && !$v.password.minLength"
        >
          password must have at least
          {{ $v.password.$params.minLength.min }} letters.
        </c-text>
      </c-form-control>
      <c-button
        variant-color="green"
        variant="solid"
        :isLoading="isLoading"
        type="submit"
      >
        Sign In
      </c-button>
    </c-box>
    <c-text mt="4">
      Not have an account yet ?
      <c-link
        as="nuxt-link"
        to="/signup"
        color="vue.500"
        textDecoration="underline"
      >
        Sign Up
      </c-link>
      now
    </c-text>
  </c-flex>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  CFormControl,
  CFormLabel,
  CFormErrorMessage,
  CFormHelperText,
  CInput,
  CButton,
  CFlex,
  CBox,
  CText,
  CLink,
  CHeading,
} from '@chakra-ui/vue'
import fireError from '@/helpers/firebaseAuthError'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'SignIn',
  middleware: 'publicRoute',
  data() {
    return {
      isLoading: false,
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  computed: mapGetters(['isLogin']),
  watch: {
    isLogin(val) {
      if (val) this.$router.replace('/admin')
    },
  },
  methods: {
    showToast(type, title, description) {
      this.$toast({
        title,
        description,
        status: type || 'success',
        duration: 3000,
        position: 'top-right',
      })
    },
    async loginAccount() {
      this.$v.$touch()
      if (this.$v.$invalid) return
      try {
        this.isLoading = true
        const userSnap = await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
        this.showToast(
          'success',
          'Signin Successfully',
          "you've successfully sigin in"
        )
      } catch (err) {
        this.isLoading = false
        this.showToast('error', 'An error occurred.', fireError(err.code))
        console.log(err)
      }
    },
  },
  components: {
    CFormControl,
    CFormLabel,
    CFormErrorMessage,
    CFormHelperText,
    CInput,
    CButton,
    CFlex,
    CBox,
    CText,
    CLink,
    CHeading,
  },
}
</script>

<style scoped>
[type='password']::placeholder {
  font-size: 50px;
  vertical-align: middle;
}
</style>
