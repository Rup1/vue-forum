import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component({
  name: 'categories',
  template: require('../templates/layouts/categories.vue')
})
export default class Categories extends Vue {
}
