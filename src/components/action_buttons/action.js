import React, { useState } from "react";
import styles from "./action.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ActionComponent = (props) => {
  const watchNowHandler = () => {
    console.log("wwwwwwwwwww");
  };

  const addToFavHandler = () => {
    console.log("addtofav");
  };

  return (
    <div className={styles.subContainer + " mt-2"}>
      <Link to={props.data? `/movie/${props.data.id}`:""}>
        <span className={styles.fullBtn}>
          <span
            className={`${styles.btnInner} ${props.wide ? styles.wide : null} `}
          >
            <FontAwesomeIcon icon={faPlay} className={"ml-2 " + styles.icon} />
            <label>More</label>
          </span>
        </span>
      </Link>
      <span className={styles.fullBtn} onClick={addToFavHandler}>
        <span
          className={`${styles.btnInnerBlack} ${
            props.wide ? styles.wide : null
          } `}
        >
          <FontAwesomeIcon icon={faPlus} className={"ml-2 " + styles.icon} />
          <label className={styles.label}>Add to list</label>
        </span>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.carosal.data,
  };
};

export default connect(mapStateToProps)(ActionComponent);
