# 003 slot插槽

子组件 `Slot.vue`
``` js
<template>
  <div>
    <slot />
    <slot name="title" />
    <slot name="item" v-bind="{ value: 'vue' }" />
  </div>
</template>

<script>
export default {
  name: "SlotDemo"
};
</script>
```

父组件 `index.vue`

注意到，
1. 因为在子组件中每个插槽的位置已经确定，所以在父组件中使用时，对应插槽的位置随意，不影响最终渲染。
2. v2.5之前，普通插槽是合并，作用域插槽是替换。v2.6之后，都是替换。
``` js {5,16}
<template>
  <div>
    <h2>2.6 新语法</h2>
    <SlotDemo>
      <p>默认插槽</p>

      <template v-slot:title>
        <p>title slot1</p>
        <p>title slot2</p>
      </template>
      <template v-slot:title>
        <p>new title slot1</p>
        <p>new title slot2</p>
      </template>

      <p>我也是默认插槽</p>

      <template v-slot:item="props">
        <p>item slot-scope {{ props }}</p>
      </template>
      <template v-slot:item="props">
        <p>new item slot-scope {{ props }}</p>
      </template>
    </SlotDemo>

    <br />

    <h2>老语法</h2>
    <SlotDemo>
      <p>默认插槽</p>

      <p slot="title">title slot1</p>
      <p slot="title">new title slot2</p>

      <p>我也是默认插槽</p>

      <p slot="item" slot-scope="props">item slot-scope {{ props }}</p>
      <p slot="item" slot-scope="props">new item slot-scope {{ props }}</p>
    </SlotDemo>
  </div>
</template>

<script>
import Slot from "./Slot";
export default {
  components: {
    SlotDemo: Slot,
  },
};
</script>
```

运行结果

![](https://crane0.oss-cn-beijing.aliyuncs.com/blogMarkdown/03slot.png)