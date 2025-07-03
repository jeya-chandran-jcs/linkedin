import { createRoute,createRootRoute, createRouter,RouterProvider,Outlet,redirect,Navigate,lazyRouteComponent } from "@tanstack/react-router";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";

const rootRoute=createRootRoute({
    component:()=>(
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
})

const loginRoute=createRoute({
    path:"/login",
    getParentRoute:()=>rootRoute,
    component:lazyRouteComponent(()=>import("../pages/LoginPage"))
})

const homeRoute=createRoute({
    path:"/home",
    getParentRoute:()=>rootRoute,
    component:lazyRouteComponent(()=>import("../pages/HomePage"))
})

const notFoundRoute=createRoute({
    id:"not-found",
    getParentRoute:()=>rootRoute,
    component:lazyRouteComponent(()=>import("../pages/NotFound"))
})

const signUpRoute=createRoute({
    path:"/sign-up",
    getParentRoute:()=>rootRoute,
    component:lazyRouteComponent(()=>import("../pages/SignUpPage"))
})

const signInEmail=createRoute({
    path:"/sign-in-email",
    getParentRoute:()=>rootRoute,
    component:lazyRouteComponent(()=>import("../pages/SigninEmail"))
})

const profileRoute=createRoute({
    path:"user-profile",
    getParentRoute:()=>rootRoute,
    component:lazyRouteComponent(()=>import("../pages/Profile"))
})

const profileEditModalRoute=createRoute({
    path:"/user-profile/edit/$section",
    getParentRoute:()=>rootRoute,
    component:lazyRouteComponent(()=>import("../components/profile/AddProfile/ComponentsAPI/EducationAdd"))
})

const routeTree=rootRoute.addChildren([
   notFoundRoute,
    loginRoute,
    homeRoute,
    signUpRoute,
    signInEmail,
    profileRoute.addChildren([
        profileEditModalRoute
    ]),
    // profileEditModalRoute

])

const router=createRouter({routeTree,notFoundRoute})

export default function AppRouter(){
    return <RouterProvider router={router}/>
}