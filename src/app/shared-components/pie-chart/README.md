## papp-pie-chart

### Overview

This is Pie chart component.

### Features

- To Draw Pie chart

### Usage

```html
<ppapp-pie-chart></ppapp-pie-chart>
```

### Inputs

set the data using service file methods.
setPaginatorConfig()

| Params            | Type    | Required | Default                | Details                |
| ----------------- | ------- | -------- | ---------------------- | ---------------------- |
| data              | []      | yes      | -                      | used to display pie    |
|                   |         |          |                        | chart                  |
| chartColorKey     | string  | yes      | -                      | key on which pie chart |
|                   |         |          |                        | colors are dependent   |
| chartTargetKey    | string  | yes      | -                      | key on which pie chart |
|                   |         |          |                        | is dependent           |
| width             | number  | no       | 600                    | specifies pie chart    |
|                   |         |          |                        | width                  |
| height            | number  | no       | 450                    | specifies pie chart    |
|                   |         |          |                        | height                 |
| radius            | number  | no       | min(width,heiht) / 4   | used to draw circular  |
|                   |         |          |                        | pie chart              |
| radius            | number  | no       | min(width,heiht) / 4   | specifies chart colors |
| sectionColors     | []      | no       | define in colors       |                        |
|                   |         |          | .constants file        |                        |
|strokeColor        | string  | no       | black                  | specifies stroke color |
|                   |         |          |                        | of pie chart           |
|strokeColor        | string  | no       | 1px                    | specifies stroke width |
|                   |         |          |                        | of pie chart           |
|legendsIconHeight  | number  | no       | 8                      | specifies legend icon  |
|                   |         |          |                        | height                 |
|legendsIconWidth   | number  | no       | 8                      | specifies legend icon  |
|                   |         |          |                        | width                  |
|legendsTextFontSize| number  | no       | 10                     | specifies legend text  |
|                   |         |          |                        | font size              |

### Outputs

| Params    | Details     | Required | Default | Type     |
| --------- | ----------- | -------- | ------- | -------- |
|           |             |          |         |          |

### Example

```html
<<ppapp-pie-chart [pieChartConfig]="pieChartConfig"></ppapp-pie-chart>
```
```ts
pieData = {
    data: [
      {grade: 'A+', studnets: 50},
      {grade: 'A', studnets: 18},
      {grade: 'B',studnets: 10},
      {grade: 'C', studnets: 5},
      {grade: 'D', studnets: 5},
      {grade: 'Fail', studnets: 12},
  ],
  width: 750,
  height: 600,
      radius: Math.min(600, 750) / 4,
    style:{
      sectionColors: [
        '#FFA500',
        '#00FF00',
        '#FF0000',
        '#6b486b',
        '#FF00FF',
        '#d0743c',
      ],
      strokeColor: 'black',
      strokeWidth: '1px'
    },
    chartTargetKey: 'studnets',
    chartColorKey: 'grade',
    legendsConfig: {
      legendsIconWidth: 8,
      legendsIconHeight: 8,
      legendsTextFontSize: 10,
    }
  }
```
