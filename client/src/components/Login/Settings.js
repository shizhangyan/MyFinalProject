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
        activity: [0, 1, 2, 3],
        calories: [1200, 1500, 1600, 1800]
    },
    {   ageRange: [9,13],
        activity: [0, 1, 2, 3],
        calories: [1600, 1800, 2000, 2200]
    },
    {   ageRange: [14,18],
        activity: [0, 1, 2, 3],
        calories: [1800, 2000, 2400, 2600]
    },
    {   ageRange: [19,30],
        activity: [0, 1, 2, 3],
        calories: [2000, 2100, 2400, 2600]
    },
    {   ageRange: [31,50],
        activity: [0, 1, 2, 3],
        calories: [1800, 2000, 2200, 2400]
    },
    {   ageRange: [50,80],
        activity: [0, 1, 2, 3],
        calories: [1600, 1800, 2100, 2300]
    },
];

export const caloriesByMan = [
    {   ageRange: [4,8],
        activity: [0, 1, 2, 3],
        calories: [1400, 1600, 1800, 2000]
    },
    {   ageRange: [9,13],
        activity: [0, 1, 2, 3],
        calories: [1800, 2000, 2300, 2500]
    },
    {   ageRange: [14,18],
        activity: [0, 1, 2],
        calories: [2200, 2600, 3000, 3200]
    },
    {   ageRange: [19,30],
        activity: [0, 1, 2, 3],
        calories: [2400, 2700, 3100, 3300]
    },
    {   ageRange: [31,50],
        activity: [0, 1, 2, 3],
        calories: [2200, 2500, 2900, 3100]
    },
    {   ageRange: [50,80],
        activity: [0, 1, 2, 3],
        calories: [2000, 2300, 2600, 2800]
    },
];
// Every API endpoint asking for a cuisine parameter can be fed with any of these cuisines.
export const countryCuisine = [
    {value: "undefined", label:"Select"},
    {value: "African", label: "African"},
    {value: "American", label: "American"},
    {value: "British", label: "British"},
    {value: "Cajun", label:"Cajun"},
    {value: "Caribbean", label:"Caribbean"},
    {value: "Chinese", label:"Chinese"},
    {value: "Eastern European", label: "Eastern European"},
    {value: "European", label: "European"},
    {value: "French", label: "French"},
    {value: "German", label:"German"},
    {value: "Greek", label:"Greek"},
    {value: "Indian", label:"Indian"},
    {value: "Irish", label: "Irish"},
    {value: "Italian", label: "Italian"},
    {value: "Japanese", label: "Japanese"},
    {value: "Jewish", label:"Jewish"},
    {value: "Korean", label:"Korean"},
    {value: "Latin American", label:"Latin American"},
    {value: "Mediterranean", label: "Mediterranean"},
    {value: "Mexican", label: "Mexican"},
    {value: "Middle Eastern", label: "Middle Eastern"},
    {value: "Nordic", label:"Nordic"},
    {value: "Southern", label:"Southern"},
    {value: "Spanish", label: "Spanish"},
    {value: "Thai", label:"Thai"},
    {value: "Vietnamese", label:"Vietnamese"},
];
// Every API endpoint asking for an diet parameter can be fed with any of these diets.
export const dietType = [
    {value:"Gluten Free", label:"Eliminating gluten means avoiding wheat, barley, rye, and other glutenn-containning grains and foods made from them(or that may have been cross contaiminated)."},
    {value:"Ketogenic", label:"The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speakingg, high fat, protein-rich foods are acceptablel and high carbobydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates."},
    {value:"Vegetarian", label:"No ingredients may contain meat or meat by-products, such as bones or gelatin."},
    {value:"Lacto-vegetarian", label:"All ingredients must be vegetarian and none of the ingredients can be or contain egg."},
    {value:"Ovo-Vegetarian", label:"All ingredients must be vegetarian and none of the ingredients can be or contain dairy."},
    {value:"Vegan", label:"No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey."},
    {value:"Pescetarian", label:"Everything is allowed except meat and meat by-products-some pesccetarians eat eggs and dairy, some do not."},
    {value:"Paleo", label:"Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. cocnut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods."},
    {value:"Primal", label:"Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc."},
    {value:"Low FODMAP", label:"FODMAP stands for 'fermentable oligo-, di-, mono-saccharides and polyols'. Our ontology knows which foods are considered high in these types sof carbonhydrates (e.g. legumes, wheat, and dairy products."},
    {value:"Whole30", label:"Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredientss not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snanp peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites."},
];
// Every API endpoint asking for a intolerances parameter can be fed with any of these intolerances.
export const intolerances = [
    {value:"Dairy"},
    {value:"Egg"},
    {value:"Gluten"},
    {value:"Grain"},
    {value:"Peanut"},
    {value:"Seafood"},
    {value:"Sesame"},
    {value:"Shellfish"},
    {value:"Soy"},
    {value:"Sulfite"},
    {value:"Tree Nut"},
    {value:"Wheat"},
];
// Every API endpoint asking for a type parameter can be fed with any of these meal types
export const mealTypes = [
    {value:"main course"},
    {value:"side dish"},
    {value:"dessert"},
    {value:"appetizer"},
    {value:"salad"},
    {value:"bread"},
    {value:"breakfast"},
    {value:"soup"},
    {value:"beverage"},
    {value:"sauce"},
    {value:"marinade"},
    {value:"fingerfood"},
    {value:"snack"},
    {value:"drink"},
]
