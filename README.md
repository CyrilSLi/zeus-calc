# Zeus Calculator

An open source calculator platform

<img width="2047" height="1216" alt="2025-11-16T03:44:31,079523776-05:00" src="https://github.com/user-attachments/assets/4f1c38a4-d85d-4358-a5a1-e2f5163d9ce7" />

## Name

Alluding to a popular Omni(potent-ish) Calculator website, Zeus is a Greek god who rules as king of the gods.

## Usage

The entire project can be run locally by opening `index.html` or on any static site hosting service.

## Adding New Calculators

Calculators are defined as objects in the `data.js` file with the key being a unique ID and the value being an object with the following properties:

- `name`: A human-readable name of the calculator
- `description`: A brief description of its purpose
- `vars`: An array of variables used in the calculation:
    - `name`: A human-readable name of the variable
    - `symbols`: A list of alternative symbols for the variable. **All variables must have the same number of alternative symbols.**
- `required_vars`: The number of variables which must be provided to calculate the result. Currently the result is expected to fill all remaining variables.
- `func`: A JavaScript function which takes an array of input variables (currently floats or `null`) and returns an array of output variables.

## TODO

- Input-only & Output-only fields
- Dropdown / radio button fields
- Ability to display more than one answer (e.g. quadratic formula)