# Documentation

Costume select for react components

## Usage

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Basic for component usage:

```js
 <SelectDropdown
        withSearch={true}
        options={stateOptions}
        isMulti={true}
        value={value}
        onChange={(e) => {
          setValue(e as typeof value);
        }}
      />
```
