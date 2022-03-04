import React from "react";
import './main-content.styles.css';
import ManageClient from "../manage-client/manage-client.component";
export default function Content(){
    return(
                <div className="main-content">
                      <ManageClient/>
                </div>
    );
}