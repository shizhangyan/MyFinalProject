export const goalOption = [
    {value: "undefined", label: "Select"},
    {value: "Lose weight", label:"Lose weight"},
    {value: "Maintain weight", label:"Maintain weight"},
    {value: "Gain weight", label: "Gain weight"},
];

export const activityOption = [
    {value: "undefined", label:"Select"},
    {value: "Not very active", label: "Not very Active"},
    {value: "Lightly Active", label: "Lightly Active"},
    {value: "Active", label: "Active"},
    {value: "Very Active", label:"Very Active"},
];
export const gender = [
    {value: "undefined", label:"Select"},
    {value: "Male", label:"Male"},
    {value: "Female", label:"Female"},
];

export const initialState = {
    username: "",
    firstName:"",
    lastName: "",
    email: "",
    gender: "",
    activity: "",
    goal: "",
    age: 0,
    weight: 0,
    address: "",
    postcode: "",
    country: "",
    other: "",
    dailyCalorie: 0,
};
export const caloriesByWoman = [
    {   ageRange: [4,8],
        activity: [0, 1, 2],
        calories: [1200, 1500, 1600]
    },
    {   ageRange: [9,13],
        activity: [0, 1, 2],
        calories: [1600, 1800, 2000]
    },
    {   ageRange: [14,18],
        activity: [0, 1, 2],
        calories: [1800, 2000, 2400]
    },
    {   ageRange: [19,30],
        activity: [0, 1, 2],
        calories: [2000, 2100, 2400]
    },
    {   ageRange: [31,50],
        activity: [0, 1, 2],
        calories: [1800, 2000, 2200]
    },
    {   ageRange: [50,80],
        activity: [0, 1, 2],
        calories: [1600, 1800, 2100]
    },
];

export const caloriesByMan = [
    {   ageRange: [4,8],
        activity: [0, 1, 2],
        calories: [1400, 1600, 1800]
    },
    {   ageRange: [9,13],
        activity: [0, 1, 2],
        calories: [1800, 2000, 2300]
    },
    {   ageRange: [14,18],
        activity: [0, 1, 2],
        calories: [2200, 2600, 3000]
    },
    {   ageRange: [19,30],
        activity: [0, 1, 2],
        calories: [2400, 2700, 3100]
    },
    {   ageRange: [31,50],
        activity: [0, 1, 2],
        calories: [2200, 2500, 2900]
    },
    {   ageRange: [50,80],
        activity: [0, 1, 2],
        calories: [2000, 2300, 2600]
    },
];
