# Documentation

Custom select for react components

## How to use it

Import components from @fajrindev/custom-select library
Install package using npm:

```
      npm i @fajrindev/custom-select
```

        now import export default component:

```js
import SelectDropdown from "@fajrindev/custom-select";
```

render in react component:

```js
const YourComponent = () => {
  return (
    <SelectDropdown
      withSearch={true}
      options={stateOptions}
      isMulti={true}
      value={value}
      onChange={(result) => {
        setValue(result);
      }}
    />
  );
};
```

You may got warning if you are using typescript at setValue, you need to cast args "result" with your value type:

```js
setValue(result as []) // "result" types is []
```

## Table Props

| Props | Types | Default | Description |

| ------------- | ------------- | -------- | ---------- |
| id | string | undefined | Id attribute |
| withSearch | boolean | *required | To enable search input in list of options |
| isMulti | boolean | *required | Enable multiselect value |
| options | array | none | Options value list |
| value | array | *require | Defined value |
| name | string | none | Name attribute input |
| className | string | "" | Style css using classname |
| placeholder | string | "" | Placeholder attribute for input |
| onChange | function | *require | Handling function for response value |
| style | | | Custom style for input and option |

## Styling option

you may want to change the way option to be renderd in components

- Create your own components

```js
    const Menu = ((props: OptionPropsList) => {
      return (
        <div className="bg-[salmon] text-[16px]">
          <components.Option {...props}>{props.children}</components.Option>
        </div>
      );
    }) as OptionMenuList;
```

      if you are using typescript you may want to import types:

```
    import { OptionMenuList, OptionPropsList } from '@fajrindev/custom-select'
```

      also components:

```
    import { components } from '@fajrindev/custom-select'
```

See demos for example:

- [Demos](https://tes.com)
