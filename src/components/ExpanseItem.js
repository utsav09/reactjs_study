import React from "react";
import './ExpanseItem.css';
import ExpanseDate from "./ExpanseDate";

function ExpanseItem(props) {

    return (
        <div className={"expense-item"}>
            <ExpanseDate date={props.date} />
            <div className={"expense-item__description"}>
                <h2>{props.title}</h2>
            </div>
            <div className={"expense-item__price"}>${props.amount}</div>
        </div>
    );
}

export default ExpanseItem;
