import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";
import { createRouter,createWebHistory} from "vue-router";

const routes=[
    {
        name:"HomePage",
        component: HomePage,
        path: "/",
    },
    {
        name:"SignUp",
        component: SignUp,
        path: "/sign-up",
    },

    {
        name:"AddRestaurant",
        component: AddRestaurant,
        path: "/add-restaurant",
    },

    {
        name:"UpdateRestaurant",
        component: UpdateRestaurant,
        path: "/update/:id",
    },
    {
        name:"DeleteRestaurant",
        component: HomePage,
        path: "/delete/:id",
    },

    {
        name:"SignIn",
        component: SignIn,
        path: "/sign-in",
    },

        

];

const router=createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
//Now regiter router on main.js file
//after load the router in app.vue file