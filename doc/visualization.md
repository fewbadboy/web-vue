# Visualization

## ECharts

### 折线图

#### 空数据

有时候设置为 0 不一定满足我们的期望
'-' 表示空数据，不被左右数据连接

#### 堆叠

- stack

#### 面积图

- areaStyle

#### 平滑

- smooth: true

#### 阶梯

- step: 'start'

### 富文本

```js
{
  label: {
    formatter: [
      '{style|Customer Text}'
    ].join('\n'),
    rich: {
      style: {}
    }
  }
}
```

### 动画

[过度动画函数](https://echarts.apache.org/handbook/zh/how-to/animation/transition)

## vis.js

```js
// network
import 'vis-network/styles/vis-network.min.css'

// timeline graph2d
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'
```
