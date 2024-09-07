<script setup lang="ts">
import { computed, reactive, ref, UnwrapRef } from "vue";

import {
  SmileOutlined,
  HomeOutlined,
  TableOutlined,
} from "@ant-design/icons-vue";

import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Radio,
  RadioGroup,
  Table,
  TypographyLink,
  Popconfirm,
  Space,
  TableProps,
} from "ant-design-vue";
import { cloneDeep } from "lodash";
import { userList } from "@/mock";
import { tableColumns } from "./tableColumns";
import { TableRowSelection } from "ant-design-vue/es/table/interface";

const loading = ref(false);
const tableData = ref<TableDataItem[]>([]);
const current = ref(1);
const pageSize = ref(20);
const total = ref(42);
const editableData: UnwrapRef<Record<string, TableDataItem>> = reactive({});

tableData.value = userList;

const pagination = computed(() => ({
  current: current.value,
  pageSize: pageSize.value,
  total: total.value,
  showSizeChanger: true,
  showTotal: (total: number) => `Total ${total} items`,
}));

const rowSelection = ref({
  onChange: (
    selectedRowKeys: (string | number)[],
    selectedRows: TableDataItem[],
  ) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows,
    );
  },
} as TableRowSelection);

const handleTableChange: TableProps<TableDataItem>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log("params", pagination, filters, sorter, extra);
  current.value = pagination.current!;
  pageSize.value = pagination.pageSize!;
  total.value = pagination.total!;
};

const handleEdit = (key: string) => {
  editableData[key] = cloneDeep(
    tableData.value.filter((i) => key === i.uuid)[0],
  );
};
const handleSava = (key: string) => {
  Object.assign(
    tableData.value.filter((i) => key === i.uuid)[0],
    editableData[key],
  );
  delete editableData[key];
};
const handleCancel = (key: string) => {
  delete editableData[key];
};

/**
 * 改用 手动类型保护，放弃下面写法
 * v-if="['name', 'age', 'address'].includes(column.dataIndex as string)"
 * v-if="column.dataIndex === 'name' || column.dataIndex === 'age' || column.dataIndex === 'address'"
 */
</script>

<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem>
        <HomeOutlined />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <TableOutlined />
        <span>Vue</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Table
      bordered
      :loading="loading"
      :row-key="(record) => record.uuid"
      :row-selection="rowSelection"
      :columns="tableColumns"
      :data-source="tableData"
      :pagination="pagination"
      :scroll="{ y: 400 }"
      @change="handleTableChange"
    >
      <template #title>Header</template>
      <template #footer>Footer</template>
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <Space> <SmileOutlined />{{ column.title }} </Space>
        </template>
      </template>
      <template #bodyCell="{ column, text, record }">
        <template
          v-if="
            column.dataIndex === 'name' ||
            column.dataIndex === 'age' ||
            column.dataIndex === 'address' ||
            column.dataIndex === 'email'
          "
        >
          <div>
            <Input
              v-if="editableData[record.uuid]"
              v-model:value="editableData[record.uuid][column.dataIndex]"
            />
            <span v-else>{{ text }}</span>
          </div>
        </template>
        <template v-if="column.dataIndex === 'gender'">
          <RadioGroup
            v-if="editableData[record.uuid]"
            v-model:value="editableData[record.uuid][column.dataIndex]"
          >
            <Radio
              v-for="item in column.filters"
              :key="item.value as string"
              :value="item.value"
            >
              {{ item.text }}
            </Radio>
          </RadioGroup>
          <span v-else>{{ text }}</span>
        </template>
        <template v-if="column.key === 'action'">
          <div>
            <Space v-if="editableData[record.uuid]">
              <TypographyLink @click="handleSava(record.uuid)"
                >Save</TypographyLink
              >
              <Popconfirm
                title="Sure to cancel?"
                @confirm="handleCancel(record.uuid)"
              >
                <TypographyLink>Cancel</TypographyLink>
              </Popconfirm>
            </Space>
            <Button v-else type="primary" @click="handleEdit(record.uuid)">
              Edit
            </Button>
          </div>
        </template>
      </template>
    </Table>
  </div>
</template>

<style scoped lang="scss"></style>
