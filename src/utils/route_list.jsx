


export const navItems = [
    {
        label:'home',
        link:"/",
        both : true
    },
    // {
    //     label: "Donor",
    //     link: "/Donor",
    //     both: true,
    //   },
      {
        label:"Login",
        link:"/Login",
        auth_required:false
    },
    {
        label:"Register",
        link:"/Signup",
        auth_required:false
    },
    {
        label: "Profile",
        link: "/Profile",
        auth_required: true,
      },
      {
        label: "Logout",
        link: "/Logout",
        auth_required: true,
      },
        {
        label: "Donor",
        link: "/Donor",
        auth_required: true,
       },
]