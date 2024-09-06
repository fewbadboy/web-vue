import { TableColumnsType } from "ant-design-vue";
export const tableColumns: TableColumnsType = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
  },
  {
    key: 'gender',
    dataIndex: 'gender',
    title: 'Gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
  },
  {
    key: 'age',
    dataIndex: 'age',
    title: 'Age',
    sorter: {
      multiple: 1
    },
    defaultSortOrder: 'descend',
    width: 80
  },
  {
    key: 'email',
    dataIndex: 'email',
    title: 'Email',
    ellipsis: {
      showTitle: true
    },
    sorter: {
      multiple: 2
    },
    sortDirections: ['descend', 'ascend'],
    width: 200
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: 'Address',
    ellipsis: {
      showTitle: true
    },
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: (input, filter) => (filter.value as string).indexOf(input) > -1,
  },
  {
    key: 'action',
    title: 'Action',
    fixed: 'right',
    width: 160
  }

]