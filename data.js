window.calcData = {
    "pythagorean_theorem": {
        "name": "Pythagorean Theorem",
        "desc": "Calculate the side lengths of a right triangle",
        "vars": [
            {
                "name": "Length of one leg",
                "symbols": ["a", "b", "x"]
            },
            {
                "name": "Length of another leg",
                "symbols": ["b", "a", "y"]
            },
            {
                "name": "Length of hypotenuse",
                "symbols": ["c", "c", "z"]
            }
        ],
        "required_vars": 2,
        "func": (args) => {
            // a, b, c
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
                "name": "Displacement (m)",
                "symbols": ["d", "s"]
            }, {
                "name": "Initial velocity (m/s)",
                "symbols": ["vi", "u"]
            }, {
                "name": "Final velocity (m/s)",
                "symbols": ["vf", "v"]
            }, {
                "name": "Acceleration (m/s²)",
                "symbols": ["a", "a"]
            }, {
                "name": "Delta time (s)",
                "symbols": ["t", "t"]
            }
        ],
        "required_vars": 3,
        "func": (args) => {
            // d, vi, vf, a, t
            if (args [0] == null && args [1] == null) {
                const d = args [2] * args [4] - 0.5 * args [3] * args [4] ** 2;
                const vi = args [2] - args [3] * args [4];
                return [d.toPrecision (10) / 1, vi.toPrecision (10) / 1];
            } else if (args [0] == null && args [2] == null) {
                const d = args [1] * args [4] + 0.5 * args [3] * args [4] ** 2;
                const vf = args [1] + args [3] * args [4];
                return [d.toPrecision (10) / 1, vf.toPrecision (10) / 1];
            } else if (args [0] == null && args [3] == null) {
                const a = (args [2] - args [1]) / args [4];
                const d = args [1] * args [4] + 0.5 * a * args [4] ** 2;
                return [d.toPrecision (10) / 1, a.toPrecision (10) / 1];
            } else if (args [0] == null && args [4] == null) {
                const t = (args [2] - args [1]) / args [3];
                const d = args [1] * t + 0.5 * args [3] * t ** 2;
                return [d.toPrecision (10) / 1, t.toPrecision (10) / 1];
            } else if (args [1] == null && args [2] == null) {
                const vi = (args [0] - 0.5 * args [3] * (args [4] ** 2)) / args [4];
                const vf = vi + args [3] * args [4];
                return [vi.toPrecision (10) / 1, vf.toPrecision (10) / 1];
            } else if (args [1] == null && args [3] == null) {
                const vi = ((args [2] * args [4]) - args [0]) * 2 / args [4] ** 2;
                const a = (args [2] - vi) / args [4];
                return [vi.toPrecision (10) / 1, a.toPrecision (10) / 1];
            } else if (args [1] == null && args [4] == null) {
                const vi1 = Math.sqrt (args [2] ** 2 - 2 * args [3] * args [0]);
                const t1 = (args [2] - vi1) / args [3];
                if (t1 >= 0) {
                    return [vi1.toPrecision (10) / 1, t1.toPrecision (10) / 1];
                } else {
                    const vi2 = -vi1;
                    const t2 = (args [2] - vi2) / args [3];
                    return [vi2.toPrecision (10) / 1, t2.toPrecision (10) / 1];
                }
                // return [`${vi1.toPrecision (10) / 1}, ${vi2.toPrecision (10) / 1}`, `${t1.toPrecision (10) / 1}, ${t2.toPrecision (10) / 1}`];
            } else if (args [2] == null && args [3] == null) {
                const vf = (args [0] - (args [1] * args [4])) * 2 / args [4] ** 2;
                const a = (vf - args [1]) / args [4];
                return [vf.toPrecision (10) / 1, a.toPrecision (10) / 1];
            } else if (args [2] == null && args [4] == null) {
                const vf1 = Math.sqrt (args [1] ** 2 + 2 * args [3] * args [0]);
                const t1 = (vf1 - args [1]) / args [3];
                if (t1 >= 0) {
                    return [vf1.toPrecision (10) / 1, t1.toPrecision (10) / 1];
                } else {
                    const vf2 = -vf1;
                    const t2 = (vf2 - args [1]) / args [3];
                    return [vf2.toPrecision (10) / 1, t2.toPrecision (10) / 1];
                }
                // return [`${vf1.toPrecision (10) / 1}, ${vf2.toPrecision (10) / 1}`, `${t1.toPrecision (10) / 1}, ${t2.toPrecision (10) / 1}`];
            } else if (args [3] == null && args [4] == null) {
                const a = (args [2] ** 2 - args [1] ** 2) / 2 / args [0];
                const t = (args [2] - args [1]) / a;
                return [a.toPrecision (10) / 1, t.toPrecision (10) / 1];
            }
        }
    },
    "ohms_law": {
        "name": "Ohm's Law",
        "desc": "Relating voltage, current, and resistance",
        "vars": [
            {
                "name": "Voltage (V)",
                "symbols": ["V", "U"]
            },
            {
                "name": "Current (A)",
                "symbols": ["I", "I"]
            },
            {
                "name": "Resistance (Ω)",
                "symbols": ["R", "R"]
            }
        ],
        "required_vars": 2,
        "func": (args) => {
            // U, I, R
            if (args [0] == null) {
                return [(args [1] * args [2]).toPrecision (10) / 1];
            } else if (args [1] == null) {
                return [(args [0] / args [2]).toPrecision (10) / 1];
            } else if (args [2] == null) {
                return [(args [0] / args [1]).toPrecision (10) / 1];
            }
        }
    }
}