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
          class="absolute"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
        ></iframe>
        <c-box
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          display="flex"
          alignItems="flex-end"
          bg="#00000059"
        >
          <c-box p="8" bg="white" borderRadius="5px" mx="auto" w="90%" mb="4">
            <c-simple-grid :columns="[1, 1, 2]" :spacing="10">
              <c-box>
                <c-text as="h3" fontSize="md" mb="1">ADDRESS</c-text>
                <c-text as="p" fontWeight="400">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
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
          Post-ironic portland shabby chic echo park, banjo fashion axe
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
