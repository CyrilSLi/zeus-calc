window.calcData = {
    "pythagorean_theorem": {
        "name": "Pythagorean Theorem",
        "desc": "Calculate the side lengths of a right triangle",
        "vars": [
            {
                "name": "Length of one leg",
                "symbols": ["a", "b", "x"],
                "type": "I/O",
                "required": false

            },
            {
                "name": "Length of another leg",
                "symbols": ["b", "a", "y"],
                "type": "I/O",
                "required": false
            },
            {
                "name": "Length of hypotenuse",
                "symbols": ["c", "c", "z"],
                "type": "I/O",
                "required": false
            }
        ],
        "required_vars": 2,
        "func": (args) => {
            if (args [0] == null) {
                return [Math.sqrt (args [2] ** 2 - args [1] ** 2).toPrecision (10) / 1];
            } else if (args [1] == null) {
                return [Math.sqrt (args [2] ** 2 - args [0] ** 2).toPrecision (10) / 1];
            } else if (args [2] == null) {
                return [Math.sqrt (args [0] ** 2 + args [1] ** 2).toPrecision (10) / 1];
            }
        }
    },
    "kinematics": {
        "name": "5 Kinematics Equations",
        "desc": "Modelling movement with constant acceleration",
        "vars": [
            {
                "name": "Displacement",
                "symbols": ["d", "s"],
                "type": "I/O",
                "required": false,
            }, {
                "name": "Initial velocity",
                "symbols": ["vi", "u"],
                "type": "I/O",
                "required": false
            }, {
                "name": "Final velocity",
                "symbols": ["vf", "v"],
                "type": "I/O",
                "required": false
            }, {
                "name": "Acceleration",
                "symbols": ["a", "a"],
                "type": "I/O",
                "required": false
            }, {
                "name": "(delta) Time",
                "symbols": ["t", "t"],
                "type": "I/O",
                "required": false
            }
        ],
        "required_vars": 3,
        "func": (args) => {

        }
    }
}