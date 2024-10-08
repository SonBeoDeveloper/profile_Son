export const ROUTES = Object.freeze([{
    id: 1,
    name: 'Home',
    path: '/'
},
{
    id: 2,
    name: 'Resume',
    path: '/resume'
},
// {
//     id: 3,
//     name: 'Services',
//     path: '/services'
// },
{
    id: 4,
    name: 'Projects',
    path: '/projects'
},
{
    id: 5,
    name: 'Contacts',
    path: '/contacts'
}
],
)
export const SOCIAL_MEDIA = Object.freeze([
    {
        id: 1,
        name: "Instagram",
        icon: '/int.png',
        link: 'https://www.instagram.com/hoaison1502/'
    },
    {
        id: 2,
        name: "Facebook",
        icon: '/face.png',
        link: 'https://www.facebook.com/hoaison8a1'
    },
    {
        id: 3,
        name: "LinkedIn",
        icon: '/in.png',
        link: 'https://www.linkedin.com/in/s%C6%A1n-nguy%E1%BB%85n-0270ab2a9/'
    },
    {
        id: 4,
        name: "github",
        icon: '/github.png',
        link: 'https://github.com/SonBeoDeveloper'
    }
])
export const SERVICES = Object.freeze([
    {
        id: 1,
        name: 'UX Design',
        icon: '/design.png',
        description: "dfasfadsfdasfdsafaagavncadsv dsfn asdkfnadsnfkasnfajwe"
    },
    {
        id: 2,
        name: 'Brand Design',
        icon: '/brand.png',
        description: "dfasfadsfdasfdsafaagavncadsv dsfn asdkfnadsnfkasnfajwe"
    },
    {
        id: 3,
        name: '3d Design',
        icon: '/3d.png',
        description: "dfasfadsfdasfdsafaagavncadsv dsfn asdkfnadsnfkasnfajwe"
    },
])

export const PROJECTS = Object.freeze([
    {
        id: 1,
        title: 'Message app clone',
        desc: 'Message clone',
        category: 'Fullstack development',
        image: '/pro5.png',
        stack: ['Nextjs', 'Convex', "Supabase", "Clerk", "Zustand"],
        link: 'https://message-six-azure.vercel.app/',
        github: 'https://github.com/SonBeoDeveloper/message'

    },
    {
        id: 2,
        title: 'Zoom clone',
        desc: 'This is zoom clone using nextjs, CLERK, STREAM and tailwindcss',
        category: 'Fullstack development',
        image: '/pro1.png',
        stack: ['Next js', 'CLERK', "STREAM"],
        link: 'https://zoom-clone-blond.vercel.app/',
        github: 'https://github.com/SonBeoDeveloper/zoom_clone'
    },
    {
        id: 3,
        title: 'Shopify clone',
        desc: 'This is shopify clone using vite, reduxjs and tailwindcss',
        category: 'Fullstack development',
        image: '/pro6.png',
        stack: ['Vite', "Redux"],
        link: 'https://shop-seven-xi.vercel.app/',
        github: 'https://github.com/SonBeoDeveloper/shop/tree/main'
    },
    {
        id: 4,
        title: 'Order Application for Thien Anh Restaurant',
        desc: 'Thien Anh Restaurant Ordering App',
        category: 'Fullstack development',
        image: '/pro2.png',
        stack: ['React js', 'Express js', "MongoDB", "NodeJS", "React Native", "Redux"],
        link: '',
        github: 'https://github.com/SonBeoDeveloper/frontend_app_delivery'
    },
    {
        id: 5,
        title: 'Job Portal',
        desc: 'Building Job Portal with React, Node, MongoDB, Express, Redux and Redux-Toolkit',
        category: 'Fullstack development',
        image: '/pro3.png',
        stack: ['React js', 'Express js', "MongoDB", "NodeJS", "Redux"],
        link: '',
        github: ''
    },
])