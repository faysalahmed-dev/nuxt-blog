<template>
  <c-box py="8">
    <c-heading align="center">About Me</c-heading>
    <c-box my="10" />
    <c-grid
      mx="auto"
      maxW="800px"
      w="90%"
      :template-columns="{ md: '1.5fr 2.5fr' }"
      gap="8"
    >
      <c-box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mx="auto"
      >
        <c-image
          :src="image"
          objectFit="cover"
          alt="Faysal Ahmed"
          borderRadius="5px"
          :w="{ xm: '300px', md: '100%' }"
        />
        <c-box mt="4" />
        <c-simple-grid :columns="4" spacing-x="4">
          <c-tooltip
            label="Github -Faysal Ahmed"
            bg="vue.500"
            hasArrow
            placement="top"
          >
            <c-link>
              <unicon name="github" fill="currentColor" />
            </c-link>
          </c-tooltip>
          <c-tooltip label="Facebook -Faysal Ahmed" hasArrow bg="vue.500">
            <c-link>
              <unicon name="facebook-f" fill="currentColor" />
            </c-link>
          </c-tooltip>
          <c-tooltip label="Twitter -Faysal Ahmed" hasArrow bg="vue.500">
            <c-link>
              <unicon name="twitter" fill="currentColor" />
            </c-link>
          </c-tooltip>
          <c-tooltip label="faysalahmed.com" hasArrow bg="vue.500">
            <c-link>
              <unicon name="globe" fill="currentColor" />
            </c-link>
          </c-tooltip>
        </c-simple-grid>
      </c-box>
      <c-box>
        <c-text fontSize="3xl" as="h2" mb="6">Faysal Ahmed</c-text>
        <c-text fontSize="lg" mb="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          vitae vel mollitia necessitatibus, aliquam officia laboriosam
          exercitationem quidem! Distinctio, nostrum odio. Assumenda asperiores
          atque omnis dolores vero a facilis vel eius architecto autem dolorem
          recusandae ducimus, minima aliquam nostrum magni.
        </c-text>
        <c-text fontSize="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          vitae vel mollitia necessitatibus, aliquam officia laboriosam
          exercitationem quidem! Distinctio, nostrum odio. Assumenda asperiores
          atque omnis dolores vero a facilis vel eius architecto autem dolorem
          recusandae ducimus, minima aliquam nostrum magni.
        </c-text>
      </c-box>
    </c-grid>
    <c-heading align="center" my="8">My Project</c-heading>
    <c-box mx="auto" maxW="800px" w="90%">
      <c-simple-grid :columns="[1, 2, 3]" spacing="5" class="app-container">
        <c-box
          bg="gray.50"
          borderRadius="5px"
          p="4"
          v-for="(data, index) in projectData"
          :key="index"
          boxShadow="0 1px 2px 2px #00000017;"
        >
          <c-image :src="data.image" w="170px" h="170px" mx="auto" mb="4" />
          <c-text as="h2" mb="3" fontSize="lg">{{ data.title }}</c-text>
          <c-text fontSize="sm"> {{ data.body }}</c-text>
        </c-box>
      </c-simple-grid>
    </c-box>
  </c-box>
</template>

<script>
import {
  CBox,
  CHeading,
  CImage,
  CGrid,
  CText,
  CIcon,
  CTooltip,
  CSimpleGrid,
  CLink,
} from '@chakra-ui/vue'
import faysal from '@/assets/images/faysal.jpg'
import vuePng from '@/assets/images/vue.png'
import denoPng from '@/assets/images/deno.png'
import nodePng from '@/assets/images/node.png'
import reactPng from '@/assets/images/react.png'
import nuxtJS from '@/assets/images/nuxt.svg'

export default {
  components: {
    CBox,
    CHeading,
    CSimpleGrid,
    CImage,
    CGrid,
    CText,
    CIcon,
    CTooltip,
    CLink,
  },
  data() {
    return {
      projectData: [
        {
          image: vuePng,
          title: 'VueJS Project',
          body:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur provident nemo nam repudiandae iste maiores ab accusamus',
        },
        {
          image: denoPng,
          title: 'Deno Project',
          body:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur provident nemo nam repudiandae iste maiores ab accusamus',
        },
        {
          image: nodePng,
          title: 'NodeJS Project',
          body:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur provident nemo nam repudiandae iste maiores ab accusamus',
        },
        {
          image: reactPng,
          title: 'ReactJS Project',
          body:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur provident nemo nam repudiandae iste maiores ab accusamus',
        },
        {
          image: nuxtJS,
          title: 'NuxtJS Project',
          body:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur provident nemo nam repudiandae iste maiores ab accusamus',
        },
      ],
    }
  },
  computed: {
    image: () => faysal,
  },
}
</script>

<style scoped></style>
