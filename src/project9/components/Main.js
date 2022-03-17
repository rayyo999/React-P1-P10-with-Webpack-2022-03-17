import React from "react";
const Main = ({darkMode}) => {
    return (
            <main className={darkMode ? "" : "main-light"}>
                <h1>project 1</h1>
                <ul>
                    <li>list1</li>
                    <li>list2</li>
                    <li>list3</li>
                    <li>list4</li>
                </ul>
            </main>
    )
}
export default Main
