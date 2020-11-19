import { Component, Prop, Vue } from "vue-property-decorator";
import { Permission as PermissionEmployee } from '@/models/Permission';
import { Employee } from '@/models/Employee';

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import PermissionApi from '@/core/api/PermissionApi';

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
  private isEditing = false;

  constructor() {
    super();
    this.permission = {} as PermissionEmployee;
    this.permission.employee = {} as Employee;
  }

  async mounted() {
    const id = this.$route.params.id;
    if (id) {
      this.isEditing=true;
      this.permission = await PermissionApi.getPermissionDetail(Number(id));
    }
  }

  save() {
    if (!this.isEditing) PermissionApi.savePermission(this.permission);
    if (this.isEditing) PermissionApi.editPermissions(this.permission);
  }

  pickerOptions = {
    disabledDate(date:Date) {
      return date > new Date();
    }
  }

}
