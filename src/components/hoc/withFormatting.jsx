import PropTypes from "prop-types";

function withFormatting(formatting, propName) {
  return (Component) => {
    const HocComponent = (props) => {
      return <Component {...props} {...{ [propName]: formatting(props[propName]) }} />;
    };

    const name = Component.displayName || Component.name || "Component";

    HocComponent.displayName = `WithFormatting(${name})`;
    HocComponent.propTypes = { [propName]: PropTypes.any.isRequired };

    return HocComponent;
  };
}

export default withFormatting;
