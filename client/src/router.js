import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/tutorials",
        name: "tutorials",
        component: () => import("./components/TutorialsList")
    },
    {
        path: "/tutorials:id",
        name: "tutorials-details",
        component: () => import("./components/TutorialDetails")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddTutorial")
    },
];

const router = createRouter({
    history: createWebHistory(), // Don't want to use the createWebHashHistory since that's rubbish with SEO
    routes
});

export default router;