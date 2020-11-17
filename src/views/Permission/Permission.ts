import { Component, Prop, Vue } from "vue-property-decorator";
import { Permission as PermissionEmployee } from '@/models/Permission';
import { Employee } from '@/models/Employee';

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Este campo es requerido'
});
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

@Component
export default class Permission extends Vue {

  private permission: PermissionEmployee;
  private errorMessage = "";

  constructor() {
    super();
    this.permission = {} as PermissionEmployee;
    this.permission.employee = {} as Employee;
    console.log('=======>', this.$route.params.id);
  }

  save() {
    console.log(this.permission);
  }

  pickerOptions = {
    disabledDate(date:Date) {
      return date > new Date();
    }
  }


}
