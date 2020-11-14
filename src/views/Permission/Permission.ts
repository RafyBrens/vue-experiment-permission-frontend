import { Component, Prop, Vue } from "vue-property-decorator";
import { Permission as PermissionEmployee } from '@/models/Permission';
import { Employee } from '@/models/Employee';

@Component
export default class Permission extends Vue {

  private permission: PermissionEmployee;

  constructor() {
    super();
    this.permission = {} as PermissionEmployee;
    this.permission.employee = {} as Employee;
  }

  save() {
    console.log(this.permission);
    console.log(this.$store.state.tete);
    //this.$store.state.tete = 1;
  }

  isSaveEnabled() {
    return false;
  }

  checkForInput(e: any){
    const input = e.target
    if (input.value != "") {
      input.classList.add("mod-group-success") ;
    } else {
      input.classList.remove("mod-group-success");
    }
  }

  pickerOptions = {
    disabledDate(date:Date) {
      return date > new Date();
    }
  }


}
