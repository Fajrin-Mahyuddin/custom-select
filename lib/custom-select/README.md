# Documentation

Custom select for react components

## How to use it

Import components from @fajrindev/custom-select library
Install package using npm:

```js
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
        console.log(result); //cast types result as []
      }}
    />
  );
};
```

You may have warning if you are using typescript at value for setState hooks, you need to cast args "result" with your value type:

```js
setState(result as []) // "result" types is []
```

## Table Props

| Props       | Types    | Default    | Description                               |
| ----------- | -------- | ---------- | ----------------------------------------- |
| id          | string   | undefined  | Id attribute                              |
| withSearch  | boolean  | \*required | To enable search input in list of options |
| isMulti     | boolean  | \*required | Enable multiselect value                  |
| options     | array    | none       | Options value list                        |
| value       | array    | \*require  | Defined value                             |
| name        | string   | none       | Name attribute input                      |
| className   | string   | ""         | Style css using classname                 |
| placeholder | string   | ""         | Placeholder attribute for input           |
| onChange    | function | \*require  | Handling function for response value      |
| style       |          |            | Custom style for input and option         |

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

- You can change mark highlight color using css by className ".custom-select-marked-highlight-color":
```js
.custom-select-marked-highlight-color {
  background-color: #4eb2ab;
  // another style here
}
```

if you are using typescript you may want to import types:

```js
import { OptionMenuList, OptionPropsList } from "@fajrindev/custom-select";
```

also components:

```js
import { components } from "@fajrindev/custom-select";
```

See demo and storybook doc url below:

- [Demo](https://master--demo-custom-select-fajrin.netlify.app)
- [Storybook](https://master--storybook-custom-select-fajrin.netlify.app)
