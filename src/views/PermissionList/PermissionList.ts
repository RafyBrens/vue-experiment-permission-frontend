import { Component, Vue } from "vue-property-decorator";
import { Permission as PermissionModel } from '@/models/Permission';
import VueRouter from "vue-router";

@Component
export default class Permission extends Vue {

  public tableData: any;
  public permissionsData: any;
  constructor() {
    super();
    this.permissionsData = [];
  }

  mounted() {
    this.permissionsData = [{
          id: 1,
          date: '2016-05-02',
          employee: {
            name: 'Tom',
            lastName: 'Tom2',
          },
          type: 'No. 189, Grove St, Los Angeles'
        },{
          id: 1,
          date: '2016-05-02',
          employee: {
            name: 'Tom',
            lastName: 'Tom2',
          },
          type: 'No. 189, Grove St, Los Angeles'
        }];
  }

  edit(index: number, data: PermissionModel[]) {
    const id = data[index].id;
    this.$router.push(`/edit/${id}`);

    console.log(index, data);
  }

  remove(index: number, data: PermissionModel[]) {
    // Modify data
    this.permissionsData = [];
  }
}
