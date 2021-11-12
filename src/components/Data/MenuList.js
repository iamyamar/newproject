export const menus = [
  {
    text: "Home",
    dropdown: true,
    path: "/",
    active: true,
    dropdownList: [
      { text: "Action", path: "/" },
      { text: "Action", path: "/" },
      { text: "Action", path: "/" },
    ],
  },
  {
    text: "Products",
    path: "/products",
  },
  {
    text: "Details",
    path: "/products/1",
  },
  {
    text: "Checkout",
    path: "/check-out",
  },
  // {
  //   text: "Layouts",
  //   dropdown: true,
  //   path: "/",
  //   dropdownList: [
  //     { text: "Action", path: "/" },
  //     { text: "Action", path: "/" },
  //     { text: "Action", path: "/" },
  //   ],
  // },
  { text: "News", path: "/news" },
  {
    text: "Page",
    dropdown: true,
    path: "/",
    dropdownList: [
      { text: "Services", path: "/services" },
      { text: "About Us", path: "/aboutus" },
      { text: "FAQ", path: "/faq" },
      { text: "Login", path: "/account/login" },
      { text: "Register", path: "/account/register" },
    ],
  },
];
