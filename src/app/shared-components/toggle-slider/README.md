## papp-toggle-slider

### Overview

This is a toggle switch component, used to show true/false value.

### Features

- It has two states, ON/OFF.
- toggleChange is a event emitter this will emits when value of the toggle switch will change.

### Usage

```html
<papp-toggle-slider></papp-toggle-slider>
```

### Inputs

| Params | Type | Required | Default | Details |
| ------ | ---- | -------- | ------- | ------- |
|        |      |          |         |         |

### Outputs

| Params       | Details              | Required | Default | Type     |
| ------------ | -------------------- | -------- | ------- | -------- |
| toggleChange | This is a callback   | No       | None    | Function |
                function,get current 
                value of toggle switch

### Example
```html
<div>
  <papp-toggle-slider (toggleChange)="toggleChangeEvent($event)"></papp-toggle-slider>
</div>
```