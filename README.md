# MvdM React Barebone 
This is compeletely empty, unstyled React project with React Router. You can use this as a starter template for future projects.

## Components
### Button
* type = a, button, navLink
* extraClass = an extra class to add to the outer div
### Codeblock
(no settings)
### FormField
* name (string)
* type = input, select, textarea, submit
* values = default value for input, textarea. Button text for submit. Array for select with value and name.
### Grid
* num = two, three, four, five, six
### GridCell
* extraClass = extra class element to add
* mPos = array of start and end position of the cell within the row on mobile
* tPos = array of start and end position of the cell within the row on table
* dPos = array of start and end position of the cell within the row on desktop
### Heading
* type = h1, h2, h3, h4, h5
### Icon
* Name (see list below)
* color (hex, rgb)

Name list:
* add
* arrow_down
* arrow_up
* arrow_left
* arrow_right
* check
* close
* edit
* error
* home
* info
* link
* menu
* new_window
* pointing_arrow_left
* pointing_arrow_right
* search
* share
* trash
* user
### Image 
* src (string)
* title (string)
* caption (string, optional)
### Item
* title (string)
* thumbnail (src, optional)
* meta (string, optional)
### ItemContainer
* num = number of cels per row
### Link
* href (string)
* text (string)
* image (src, string, optional)
* icon (name, string, optional)
### List
* items (array)
* type = ordered (unordered by default)
### Message
* type = info, error, check
### Page Builder
* rows = array of: type (see below), cells (see below)

#### Rows
| Type | Layout |
| ---- | ------ |
### Paragraph
(no settings)
### Table
* heading (array)
* rows (array of arrays)
