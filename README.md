# vue-v-tribute
vue wrapper for tributejs (https://github.com/zurb/tribute)

## Setup

```
npm i vue-v-tribute
```

## Provide default tributejs options for Vue Plugin

You can provide any option supported by tributejs https://github.com/zurb/tribute/blob/master/src/Tribute.js#L8-L33

```ts
...
import VueVTribute from 'vue-v-tribute'
...

Vue.use(VueVTribute, {
  noMatchTemplate: () => null,
  lookup: 'name',
  menuItemTemplate: (item: TributeItem<any>) => {
    return `${item.original.name} - ${item.original.username}`;
  },
  selectTemplate: function(item: TributeItem<any>) {
    return '@' + item.original.username;
  },
});
```

## Use as directive
```vue
...
    <input
      type="text"
      // you can override all default tributejs attributes you set globally here
      v-tribute="{values: [ { name: 'Firstname Lastname', username: 'fila' }, { name: 'Max Mustermann', username: 'madmax' }]}"
    >
    </input>
...
```

## Use as directive on wrapper element or wrapper compnent
```
...
    <your-custom-input-component
      // you can override all default tributejs attributes you set globally here
      v-tribute="{values: [ { name: 'Firstname Lastname', username: 'fila' }, { name: 'Max Mustermann', username: 'madmax' }]}"
    >
    </your-custom-input-component>
...
```
