# Note

## Custom Icon

### Icon Font

```vue
<script setup>
  import iconFont from "./iconfont?url";

  const IconFont = createFromIconfontCN({
    /**
     * 资源管理 - 我的项目
     * 修改名称
     * symbol 下查看新名称
     * 1. 离线 - 下载本地 - 引入 iconfont.js 文件
     * 2. 使用在线链接
     */
    scriptUrl: iconFont,
  });
</script>

<template>
   <MyIcon type="icon-phone-signal-full" class="red" />
</template>

<style scoped lang="scss">
   :deep(.red) {
      color: red;
   }

   // slot content use
   // :slotted(.child-class) {
   //   @apply accent-lime-500;
   // }

   // :global(.child-class) {
   //   @apply accent-lime-500;
   // }
</style>
</style>
```

### SVG

```vue
<script setup>
   import Icon from '@ant-design/icons-vue';
   import MessageSvg from 'path/to/message.svg';
</script>

<template>
   <Icon type={MessageSvg} />
</template>
```

## axios

### application/x-www-form-urlencoded

```js
// URLSearchParams is not supported by all browsers
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
```

### multipart/form-data

```js
// new FormData(domRef.value)
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob([1,2,3]));
form.append('my_file', fileInput.files[0]);

axios.post('https://example.com', form);
```

### Cancelling requests

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   // AbortSignal.timeout(5000)
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()
```

## issues

`.css (Unknown at rule @tailwindcss(unknownAtRules)`

[RECOMMENDED FIX](https://github.com/tailwindlabs/tailwindcss/discussions/5258)

## 捕获 promise 失败的异常

```js
try {
   const { data }  = await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('custom error')
    }, 2000)
  }).catch((error) => {
    console.log('inner', error)
  })
  console.log('data', error)
} catch(error) {
  console.log('获取菜单失败',error)
}
// inner custom error
// 获取菜单失败 TypeError: Cannot destructure property 'data' of '(intermediate value)' as it is undefined.
```

## 自定义文件上传

```js
/**
 * and design vue 上传组件，change 事件参数 file, fileList
 * file 内部封装了 原生的 originFileObj 为 File 类型
 * 
 * 原生的file 类型输入框，fileInput.files[0]
 * */ 

const formData = new FormData()
// 可以给同一个值添加多个值完成多文件传输
formData.append('files', file.originFileObj)

postResult(formData).then(({ data }) => {
   console.log(data)
})
```

## UTF-8 流解析

```js
// 默认使用 UTF-8 编码将码位流转换成字节流
const encoder = new TextEncoder('utf-8');
const array = encoder.encode("你好");

const utf8decoder = new TextDecoder('utf-8');
const u8arr = new Uint8Array([228, 189, 160, 229, 165, 189]);
utf8decoder.decode(u8arr);
```

## 加密

```js
// crypto-js
import CryptoJS from "crypto-js";

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText);
```
