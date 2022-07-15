import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <>
                <div className={`spinner-border container d-flex justify-content-center my-3 text-${this.props.mode === "light" ? "dark" : "light"}`} role="status">
                    <span className="visually-hidden"></span>
                </div>
            </>
        )
    }
}
