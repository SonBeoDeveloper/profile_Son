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
        title: 'Zoom clone',
        desc: 'This is zoom clone using nextjs, CLERK, STREAM and tailwindcss',
        category: 'Fullstack development',
        image: '/pro1.png',
        stack: ['Next js', 'CLERK', "STREAM"],
        link: 'https://zoom-clone-blond.vercel.app/',
        github: 'https://github.com/SonBeoDeveloper/zoom_clone'
    },
    {
        id: 2,
        title: 'Order Application for Thien Anh Restaurant',
        desc: 'Thien Anh Restaurant Ordering App',
        category: 'Fullstack development',
        image: '/pro2.png',
        stack: ['React js', 'Express js', "MongoDB", "NodeJS", "React Native", "Redux"],
        link: '',
        github: 'https://github.com/SonBeoDeveloper/frontend_app_delivery'
    },
    {
        id: 3,
        title: 'Job Portal',
        desc: 'Building Job Portal with React, Node, MongoDB, Express, Redux and Redux-Toolkit',
        category: 'Fullstack development',
        image: '/pro3.png',
        stack: ['React js', 'Express js', "MongoDB", "NodeJS", "Redux"],
        link: '',
        github: ''
    },
    {
        id: 4,
        title: 'Chat app',
        desc: 'Chat app using MERN',
        category: 'Fullstack development',
        image: '/pro4.png',
        stack: ['React js', 'Express js', "MongoDB", "NodeJS", "Redux", "Redux-toolkit"],
        link: '',
        github: 'https://github.com/SonBeoDeveloper/chat-app'

    }
])