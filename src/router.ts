import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/posts",
        name: "posts",
        component: () => import("./components/PostList.vue"),
    },
    {
        path: "/posts/:id",
        name: "post-details",
        component: () => import("./components/PostDetails.vue"),
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddPost.vue"),
    },
    {
        path: "/edit",
        name: "edit",
        component: () => import("./components/EditPost.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;