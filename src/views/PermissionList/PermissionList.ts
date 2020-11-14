import { Component, Vue } from "vue-property-decorator";

@Component
export default class Permission extends Vue {

  constructor() {
    super();
  }

  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        lastName: 'Tom2',
        type: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        lastName: 'Tom2',
        type: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}
