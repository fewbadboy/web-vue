# File Stream

## Blob

```js
// type MIME Type https://www.iana.org/assignments/media-types/media-types.xhtml
new Blob(array, { type: '', endings })
URL.createObjectURL(File/Blob/MediaSource)
```

- arrayBuffer()
- slice()
- stream()
- text()

## File

```js
document.querySelector("input[type=file]").files[0]
```

`<input>` 元素选择文件后返回的 FileList 对象，或者拖拽生成的 DataTransfer 对象

## FileList

`<input>` 元素选择文件后返回的 FileList 对象，或者拖拽生成的 DataTransfer 对象

- item()

## FileReader

```js
document.querySelector("input[type=file]").files[0]
```

- readAsArrayBuffer(blob)
- readAsDataURL(blob)
- readAsText(blob[, encoding])

```js
async function test(file) {
  const preview = document.querySelector("img")
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => {
        preview.src = reader.result
        resolve()
      },
      onerror: () => reject(reader.error)
    })
    reader.readAsDataURL(file)
  })
}

export async function loadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = image
    Object.assign(img, {
      onload: () => {
        resolve(img)
      },
      onerror: (error) => {
        reject(error)
      }
    })
  })
}
```
