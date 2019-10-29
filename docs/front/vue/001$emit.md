# 001 `this.$emit` 的使用

一般用来在子组件中，调用父组件的方法。

父组件 `index.vue`
``` js
<template>
  <div>
    <Event :name="name" @change="handleEventChange" />
  </div>
</template>

<script>
import Event from "./Event";
export default {
  components: {
    Event,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleEventChange(val, callback) {
      this.name = val;
      callback && callback("hello");
      return '123';  // 该语句无意义。
    }
  }
};
</script>
```

子组件 `event.js`

- `this.$emit` 的**返回值**就是 this，vue 的实例。
- 如果需要返回值，可以通过回调函数的方式。
``` js
<template>
  <div>
    name: {{ name || "--" }}
    <br />
    <input :value="name" @change="handleChange" />
    <br />
    <div @click="handleDivClick">
      <button>重置成功</button>
      <button @click.stop>重置失败</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    name: String
  },
  methods: {
    handleChange(e) {
      const res = this.$emit("change", e.target.value, val => {
        console.log('val', val);
      });
      console.log(res, res === this); // true
    },
    handleDivClick() {
      this.$emit("change", "");
    },
  }
};
</script>
```