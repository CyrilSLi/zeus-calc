window.calcData = {
    "pythagorean_theorem": {
        "name": "Pythagorean Theorem",
        "desc": "Calculate the side lengths of a right triangle",
        "vars": [
            {
                "name": "Length of one leg",
                "symbols": ["a"],
                "type": "I/O",
                "required": false

            },
            {
                "name": "Length of another leg",
                "symbols": ["b"],
                "type": "I/O",
                "required": false
            },
            {
                "name": "Length of hypotenuse",
                "symbols": ["c"],
                "type": "I/O",
                "required": false
            }
        ],
        "num_vars": 2,
        "func": (args) => {
            if (args [0] == null) {
                return Math.sqrt (args [2] ** 2 - args [1] ** 2);
            } else if (args [1] == null) {
                return Math.sqrt (args [2] ** 2 - args [0] ** 2);
            } else if (args [2] == null) {
                return Math.sqrt (args [0] ** 2 + args [1]) ** 2;
            }
        }
    }
}