import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "green",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        maxWidth: 250,
        color: "white",
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function JustifyContent() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
    </div>
  );
}
