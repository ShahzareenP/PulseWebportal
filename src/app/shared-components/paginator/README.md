## papp-paginator

### Overview

This paginator component, used to show pagination for the page.

### Features

- To show large amount of data we can use pagination with the table.

### Usage

```html
<papp-paginator></papp-paginator>
```

### Inputs

set the data using service file methods.
setPaginatorConfig()

| Params            | Type    | Required | Default                | Details                |
| ----------------- | ------- | -------- | ---------------------- | ---------------------- |
| totalRecords      | number  | yes      | 0                      | specifies total number |
|                   |         |          |                        | of records             |
| recordsPerPage    | number  | no       | -                      | specifies how many     |
|                   |         |          |                        | records per page       |
| displayPagination | boolean | no       | -                      | specifies whether to   |
|                   |         |          | show pagination or not |

### Outputs

| Params          | Details           | Required | Default | Type     |
| --------------- | ----------------- | -------- | ------- | -------- |
| paginatorChange | event will be     | no       | -       | function |
|                 | emit on change of |          |         |          |
|                 | the pagenation    |          |         |          |

### Example

```html
<<papp-paginator (paginatorChange)="onPaginatorChange($event)"></papp-paginator>
```
