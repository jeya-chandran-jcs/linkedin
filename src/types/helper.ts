type HeaderView={
    title:string,
    desc:React.ReactNode 
}

type ProfileView={
    img:string,
    name:string,
    work:string,
    button:React.ReactNode 
}

type FooterView=React.ReactNode


export type ViewersView={
    header:HeaderView,
    profile:ProfileView[],
    footer:FooterView
}