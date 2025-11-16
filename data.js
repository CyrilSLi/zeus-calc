window.calcData = {
    "pythagorean_theorem": {
        "name": "Pythagorean Theorem",
        "desc": "Calculate the side lengths of a right triangle",
        "vars": [
            {
                "name": "Length of one leg",
                "symbols": ["a", "x"],
                "type": "I/O",
                "required": false

            },
            {
                "name": "Length of another leg",
                "symbols": ["b", "y"],
                "type": "I/O",
                "required": false
            },
            {
                "name": "Length of hypotenuse",
                "symbols": ["c", "z"],
                "type": "I/O",
                "required": false
            }
        ],
        "required_vars": 2,
        "func": (args) => {
            if (args [0] == null) {
                return Math.sqrt (args [2] ** 2 - args [1] ** 2).toPrecision (10) / 1;
            } else if (args [1] == null) {
                return Math.sqrt (args [2] ** 2 - args [0] ** 2).toPrecision (10) / 1;
            } else if (args [2] == null) {
                return Math.sqrt (args [0] ** 2 + args [1] ** 2).toPrecision (10) / 1;
            }
        }
    }
}