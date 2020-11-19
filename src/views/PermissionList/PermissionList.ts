import { Component, Vue } from "vue-property-decorator";
import { Permission as PermissionModel } from '@/models/Permission';
import VueRouter from "vue-router";
import PermissionApi from '@/core/api/PermissionApi';

@Component
export default class Permission extends Vue {

  public tableData: any;
  public permissionsData: any;
  constructor() {
    super();
    this.permissionsData = [];
  }

  mounted() {
    this.permissionsData = PermissionApi.getPermissions();
  }

  edit(index: number, data: PermissionModel[]) {
    const id = data[index].id;
    this.$router.push(`/edit/${id}`);
  }

  remove(index: number, data: PermissionModel[]) {
    const id = data[index].id;

    PermissionApi.deletePermission(Number(id));
  }
}
