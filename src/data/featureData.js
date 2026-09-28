import {
    Flame,
    Play,
    Pickaxe,
    Hand,
    Coins,
    Gift,
    CalendarCheck,
    Users,
} from "lucide-react";

export const featureData = [
    {
        id: 1,
        title: "Daily Streak",
        description: "Keep your streak active and earn VEs",
        reward: "+100 VEs",
        buttonText: "Start",
        icon: Flame,
        accent: "orange",
    },

    {
        id: 2,
        title: "Watch Ads",
        description: "Watch short ads and earn VEs",
        reward: "+80 VEs",
        buttonText: "Watch",
        icon: Play,
        accent: "purple",
    },

    {
        id: 3,
        title: "Mine & Earn",
        description: "Mine tokens and grow your rewards",
        reward: "+120 VEs",
        buttonText: "Mine Now",
        icon: Pickaxe,
        accent: "blue",
    },

    {
        id: 4,
        title: "Tap & Earn",
        description: "Tap and collect easy rewards",
        reward: "+60 VEs",
        buttonText: "Tap Now",
        icon: Hand,
        accent: "green",
    },

    {
        id: 5,
        title: "Stake & Earn",
        description: "Stake tokens and earn more",
        reward: "+150 VEs",
        buttonText: "Stake Now",
        icon: Coins,
        accent: "gold",
    },

    {
        id: 6,
        title: "Giveaway",
        description: "Join exciting giveaways and win",
        reward: "+250 VEs",
        buttonText: "Join Now",
        icon: Gift,
        accent: "pink",
        featured: true,
    },

    {
        id: 7,
        title: "Daily Bonus",
        description: "Claim your daily bonus reward",
        reward: "+100 VEs",
        buttonText: "Claim Now",
        icon: CalendarCheck,
        accent: "yellow",
    },

    {
        id: 8,
        title: "Contribution",
        description: "Contribute and earn valuable VEs",
        reward: "+200 VEs",
        buttonText: "Contribute",
        icon: Users,
        accent: "cyan",
    },
];