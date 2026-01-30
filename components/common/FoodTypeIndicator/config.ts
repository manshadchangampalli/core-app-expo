
interface FoodTypeConfig {
    color: string;
}

export enum FoodType {
    VEG = "veg",
    NON_VEG = "nonVeg",
    EGG = "egg",
}

export const foodTypeConfig: Record<FoodType, FoodTypeConfig> = {
    [FoodType.VEG]: {
        color: "#22C55E", // green
    },
    [FoodType.NON_VEG]: {
        color: "#EF4444", // red
    },
    [FoodType.EGG]: {
        color: "#EAB308", // yellow
    },
};

