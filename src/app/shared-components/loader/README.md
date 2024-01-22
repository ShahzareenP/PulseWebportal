## papp-loader

### Overview

This loader component.

### Features

- Use to show spinner if there is delay in loading data.

### Usage

```html
<papp-loader></papp-loader>
```

### Inputs

set the data using service method.
setLoaderConfig()

| Params   | Type    | Required | Default | Details              |
| -------- | --------| -------- | ------- | -------------------- |
| status   | boolean | yes      | false   | specifies whether    |
|          |         |          |         | to show or hide      | 
|          |         |          |         | the loader           |
| loaderURL| string  | no       | -       | pass URL of the image| 
|          |         |          |         | which we want to     |
|          |         |          |         | show as a loader     |
### Outputs

| Params       | Details              | Required | Default | Type     |
| ------------ | -------------------- | -------- | ------- | -------- |
|              |                      |          |         |          |

### Example
```html
<div>
  <papp-loader></papp-loader>
</div>
```