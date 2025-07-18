import { createRoute,createRootRoute, createRouter,RouterProvider,Outlet,lazyRouteComponent, Navigate } from "@tanstack/react-router";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";
import ProfileEditModala from "../components/profile/AddProfile/ComponentsAPI/ProfileEditModala";
import Profile from "../pages/Profile";
import HomePage from "../pages/HomePage";

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

const indexRouter = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: () => <Navigate to="/login" />,
});

const loginRoute=createRoute({
    path:"/login",
    getParentRoute:()=>rootRoute,
    component:lazyRouteComponent(()=>import("../pages/LoginPage"))
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
    path: "user-profile/$id",
    // path:"user-profile",
    getParentRoute:()=>rootRoute,
    // component:lazyRouteComponent(()=>import("../pages/Profile"))
    component: () => (
    <>
      <Profile /> 
      <Outlet /> 
    </>
  ),
})

const profileEditModalRoute=createRoute({
    path:"edit/$section",
    getParentRoute:()=>profileRoute,
    component: ProfileEditModala,
})

const profileIntro=createRoute({
    path:"edit/intro",
    getParentRoute:()=>profileRoute,
    component:lazyRouteComponent(()=>import("../components/profile/AddProfile/ComponentsAPI/ProfileIntro"))
})

const homeRoute=createRoute({
    path:"/home",
    getParentRoute:()=>rootRoute,
    component:()=>(
        <>
            <HomePage />
            <Outlet />
        </>
    )
})

// const addPostHomeModal=createRoute({
//     path:"post/",
//     getParentRoute:()=>homeRoute,
//     component:lazyRouteComponent(()=>import("../components/home/homecomponents/homeAddPost/AddPostModal/AddPostModal"))
// })

const routeTree=rootRoute.addChildren([
    indexRouter,
   notFoundRoute,
    loginRoute,
    signUpRoute,
    signInEmail,
    profileRoute.addChildren([
        profileEditModalRoute,
        profileIntro
    ]),
    homeRoute,

])

const router=createRouter({routeTree,notFoundRoute})

export default function AppRouter(){
    return <RouterProvider router={router}/>
}