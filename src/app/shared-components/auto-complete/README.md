## papp-auto-complete

### Overview

This is a dropdown list with searchable option.

### Features

- We can search the specific option from the dropdown list.

### Usage

```html
<papp-auto-complete></papp-auto-complete>
```

### Inputs

set the data using service file methods.
setAutoCompleteConfig()

| Params            | Type      | Required   | Default   | Details                   |
| ----------------- | --------- | ---------- | ----------|-----------------------    |
| options           | Array<any>| yes        | -         | array of options to be    |
|                   |           |            |           | shown in the dropdown     |
| targetKey         | string    | yes        | -         | key name by which we want | 
|                   |           |            |           | to display and search the |
|                   |           |            |           | values of a dropdown      |

### Outputs

| Params          | Details           | Required | Default | Type     |
| --------------- | ----------------- | -------- | ------- | -------- |
|                 |                   |          | -       |          |


### Example

```html
<papp-auto-complete></papp-auto-complete>
```
