## papp-dialog-popup

### Overview

This is a dropdown list with searchable option.

### Features

- We can search the specific option from the dropdown list.

### Inputs

set the data using service file methods.
openDialog()

| Params            | Type      | Required   | Default   | Details                       |
| ----------------- | --------- | ---------- | ----------|------------------------------ |
| message           | string    | yes        | -         | specifies message to be       |
|                   |           |            |           | shown on the dialog           |
| processButtonLabel| string    | no         | OK        | specifies label for the button|
| cancelButtonLabel | string    | no         | Cancel    | specifies label for the cancel|
|                   |           |            |           | button                        |

### Usage

| Params             | Details              | Required | Default | Type     |
| ------------------ | -------------------- | -------- | ------- | -------- |
| processButtonEvent | event will be emit   | no       | -       | function |
|                    | on click of ok button|          |         |          |
| cancelButtonEvent  | event will be emit   | no       | -       | function |
|                    | on click of ok button|          |         |          |


### Example
 
 To open the dialog call openDialog() method from service file and pass required data
