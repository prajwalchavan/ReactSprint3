import React, { Component } from "react";
// import axios from "axios";


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = { detailsAdded: "" };
    }
    handleChange = (event) =>
        this.setState({ [event.target.name]: event.target.value });
    handleSubmit = () => {
        return null
        // const { tName, tLoc, tDom } = this.state;
        // console.log(this.state)
        // axios
        //     .post(
        //         `${REST_URL}addTrainee?traineeName=${tName}&traineeDomain=${tDom}&traineeLocation=${tLoc}`
        //     )
        //     .then((res) => {
        //         const {
        //             traineeId,
        //             traineeName,
        //             traineeLocation,
        //             traineeDomain
        //         } = res.data;
        //         this.setState({
        //             detailsAdded: `Details added => ID: ${traineeId}, Name: ${traineeName}, Domain: ${traineeDomain}, Location: ${traineeLocation}`
        //         });
        //     })
        //     .catch((e) => console.error(e));
    };

    render() {
        return (
            <div class="p-3 mb-2 bg-secondary text-white">
                <div className="container-fluid ">
                    <div className="row justify-content-center">
                        <h3 className="font-weight-light">Enter User details:</h3>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="tName">Id: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="tId"
                                            id="tId"
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="tName">FirstName: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="tName"
                                            id="tName"
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="tDom">LastName: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="tDom"
                                            id="tDom"
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="tLoc">Password: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="tLoc"
                                            id="tLoc"
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="tLoc">EmailId: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="tLoc"
                                            id="tLoc"
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="tLoc">PhoneNo.: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="tLoc"
                                            id="tLoc"
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="tLoc">Address: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="tLoc"
                                            id="tLoc"
                                            onChange={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input
                                            type="button"
                                            value="Submit"
                                            className="btn btn-success"
                                            onClick={this.handleSubmit}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row justify-content-center">
                        <h3 className="font-weight-light">{this.state.detailsAdded}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser
