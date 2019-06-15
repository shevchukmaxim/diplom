export default function() {
  return [
    {
      title: "Главная",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Курсы",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/courses",
    },
    {
      title: "Занятия",
      htmlBefore: '<i class="material-icons">school</i>',
      to: "/lessons",
    },
    {
      title: "Сотрудники",
      htmlBefore: '<i class="material-icons">assignment_ind</i>',
      to: "/employees",
    },
    {
      title: "Группы",
      htmlBefore: '<i class="material-icons">assignment</i>',
      to: "/groups",
    },
    {
      title: "Отделы",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/departments",
    },
    {
      title: "Пользователи",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/users",
    }
  ];
}
