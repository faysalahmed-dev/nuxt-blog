<template>
  <c-box py="10">
    <c-heading fontWeight="500" align="center" mb="10">Contact Me</c-heading>
    <c-grid
      :template-columns="{ lg: '2fr 1fr' }"
      gap="6"
      class="app-container"
      mx="auto"
    >
      <c-box pos="relative" borderRadius="5px" overflow="hidden" minH="400px">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5821966694216!2d91.82708341426915!3d22.331635547401525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a90882e075%3A0x72e2d1e072cda4f2!2sN%20Nalapara%20Rd%2C%20Chittagong%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1594629230396!5m2!1sen!2sus"
        ></iframe>
         <!--  style="filter: grayscale(1) contrast(1.2) opacity(0.4);" -->
        <c-box
          pos="absolute"
          bottom="0"
          left="0"
          w="100%"
          display="flex"
          alignItems="flex-end"

        >
          <c-box p="8" bg="white" borderRadius="5px" mx="auto" w="90%" mb="4" style="box-shadow: 2px 2px 1000px black;">
            <c-simple-grid :columns="[1, 1, 2]" :spacing="10">
              <c-box>
                <c-text as="h3" fontSize="md" mb="1">ADDRESS</c-text>
                <c-text as="p" fontWeight="400">
                  North Nalapara,ICE Factory Road,Chittagong, Bangladesh
                </c-text>
              </c-box>
              <c-box>
                <c-text as="h3" fontSize="md" md="1">EMAIL</c-text>
                <c-text as="p" fontWeight="400" mb="3" color="blue.500"
                  >example@email.com</c-text
                >
                <c-text as="h3" fontSize="md" md="1">PHONE </c-text>
                <c-text as="p" fontWeight="400">123-456-7890</c-text>
              </c-box>
            </c-simple-grid>
          </c-box>
        </c-box>
      </c-box>
      <c-box as="form" maxW="450px" w="90%" mx="auto">
        <c-text>Feedback</c-text>
        <c-text as="p" fontWeight="400" my="4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        </c-text>
        <c-simple-grid spacing-y="15px">
          <c-form-control>
            <c-form-label htmlFor="name">Name</c-form-label>
            <c-input
              type="name"
              id="name"
              aria-describedby="name-helper-text"
            />
          </c-form-control>
          <c-form-control>
            <c-form-label htmlFor="email">Email address</c-form-label>
            <c-input
              type="email"
              id="email"
              aria-describedby="email-helper-text"
            />
          </c-form-control>
          <c-form-control>
            <c-form-label htmlFor="email">Message</c-form-label>
            <c-textarea
              placeholder="Here is a sample placeholder"
              style="min-height: 135px;"
            />
          </c-form-control>
          <c-button variant-color="green" w="100%">Send</c-button>
        </c-simple-grid>
      </c-box>
    </c-grid>
  </c-box>
</template>

<script>
import {
  CText,
  CFlex,
  CBox,
  CFormControl,
  CFormLabel,
  CTextarea,
  CInput,
  CSimpleGrid,
  CButton,
  CGrid,
  CHeading,
} from '@chakra-ui/vue'
export default {
  components: {
    CText,
    CFlex,
    CBox,
    CFormControl,
    CFormLabel,
    CTextarea,
    CInput,
    CSimpleGrid,
    CButton,
    CGrid,
    CHeading,
  },
}
</script>

<style scoped></style>
