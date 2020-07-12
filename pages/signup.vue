<template>
  <c-flex
    direction="column"
    align="center"
    justify="center"
    h="100%"
    mt="-40px"
  >
    <c-heading fontWeight="500">Create New Account</c-heading>
    <c-box
      mt="8"
      maxW="400px"
      w="90%"
      mx="auto"
      borderRadius="5px"
      :border="'1px solid ' + $chakra.theme.colors.vue['500']"
      p="8"
    >
      <c-form-control :mb="3" is-required>
        <c-form-label htmlFor="name">Name</c-form-label>
        <c-input
          type="name"
          id="name"
          aria-describedby="name-helper-text"
          focusBorderColor="gray.300"
          errorBorderColor="orange.300"
        />
      </c-form-control>
      <c-form-control :mb="3" is-required>
        <c-form-label htmlFor="email">Email address</c-form-label>
        <c-input
          type="email"
          id="email"
          aria-describedby="email-helper-text"
          focusBorderColor="gray.300"
          errorBorderColor="orange.300"
        />
        <c-form-helper-text id="email-helper-text">
          We'll never share your email.
        </c-form-helper-text>
      </c-form-control>
      <c-form-control :mb="3" is-required>
        <c-form-label htmlFor="password">Password </c-form-label>
        <c-input
          type="password"
          id="password"
          aria-describedby="password-helper-text"
          focusBorderColor="gray.300"
          errorBorderColor="orange.300"
        />
        <c-form-helper-text id="password-helper-text">
          Password atleast 6 charaters long
        </c-form-helper-text>
      </c-form-control>
      <c-button variant-color="green" variant="solid" :isLoading="isLoading">
        Sign In
      </c-button>
    </c-box>
    <c-text mt="4">
      not have an account yet ?
      <c-link
        as="nuxt-link"
        to="/signin"
        color="vue.500"
        textDecoration="underline"
      >
        Sign In
      </c-link>
      now
    </c-text>
  </c-flex>
</template>

<script>
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
export default {
  data() {
    return {
      isLoading: false,
    }
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

<style scoped></style>
