import React from "react";

const Section = ({ children, classes, containerClasses, id }) => {
  return (
    <section id={id} className={classes}>
      <div
        className={
          containerClasses ? `container ${containerClasses}` : "container"
        }
      >
        {children}
      </div>
    </section>
  );
};

Section.defaultProps = {
  id: null,
};

export default Section;
