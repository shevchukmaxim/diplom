export default function() {
  return [
    {
      title: "Главная",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Отделы",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/departments",
    },
    {
      title: "Сотрудники",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/employees",
    },
    {
      title: "Занятия",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/classes",
    },
    {
      title: "Добавить",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
