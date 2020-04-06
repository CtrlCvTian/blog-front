const toHump = (name) =>
  name.replace(/-(\w)/g, (all, letter) => letter.toUpperCase());
export default (data, allIcons, React) => {
  data.forEach(item => {
    if (item.icon) {
      const { icon } = item;
      const v4IconName = toHump(icon.replace(icon[0], icon[0].toUpperCase()));
      const NewIcon = allIcons[icon] || allIcons[''.concat(v4IconName, 'Outlined')];
      if (NewIcon) {
        try {
          item.iconShow = React.createElement(NewIcon);
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
  return data;
};
