# vue-tribute
vue wrapper for tributejs (https://github.com/zurb/tribute)

## Setup

```
npm i vue-v-tribute
```

## Provide default options for tributejs for you whole Vue App

You can provide any option supported by tributejs https://github.com/zurb/tribute/blob/master/src/Tribute.js#L8-L33

```
Vue.use(VueVTribute, {
  noMatchTemplate: () => null,
  menuItemTemplate: (item) => {
    return `${item.username}`;
  },
  containerClass: 'tribute-container',
  selectClass: 'tribute-container__highlight',
  itemClass: 'tribute-container__item'
});
```

## Use as Vue-directive on wrapper element or wrapper compnent
```
...
    <your-custom-input-component
      // you can override all default tributejs attributes you set globaly here
      v-tribute="{values: [{username: "Bob"}]}"
    >
    </your-custom-input-component>
...
```
