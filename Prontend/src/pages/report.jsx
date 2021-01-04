import React, { Component } from 'react'
class Report extends Component {
    state = {}
    render() {
        return (

            <div class="card my-3 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-header" id="bordercard">
                    <div className="row justify-content-between">
                        <div className="col-md-5 text-dark">
                            <h1>Working day</h1>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between align-items-center mr-4">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#editModal"
                                >
                                <i className="fas fa-sign-out-alt"></i> Report Working Day
                            </button>
                        </div>

                    </div>
                </div>
                <div class="card-body">
                    <form class="my-3">
                        <div class="row">
                            <div class="col-6">
                                <div class="row mb-3">
                                    <div class="col-auto">
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected>Current Month</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="1">4</option>
                                            <option value="2">5</option>
                                            <option value="3">6</option>
                                            <option value="1">7</option>
                                            <option value="2">8</option>
                                            <option value="3">9</option>
                                            <option value="1">10</option>
                                            <option value="2">11</option>
                                            <option value="3">12</option>
                                        </select>
                                    </div>
                                    <div class="col-auto">
                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected>Current Year</option>
                                            <option value="1">2020</option>
                                            <option value="2">1999</option>
                                        </select>
                                    </div>

                                </div>

                                
                            </div>

                        </div>
                    </form>
                    
                    <table className="table table-striped table-hover mt-4">
                        <thead class="table-dark ">
                            <tr>
                                <th >#</th>
                                <th >Name Employee</th>
                                <th >Department</th>
                                <th >Date</th>
                                <th >Position</th>
                                <th >Working day</th>
                                <th>OT</th>
                                <th >Late</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th >1</th>
                                <td>Tran Binh Co</td>
                                <td>HR</td>
                                <td>12/2020</td>
                                <td>Quan Ly</td>
                                <td>24</td>
                                <td>3.2</td>
                                <td>0.3</td>
                                <td>
                                    <button class="btn btn-group" type="button" ><i class="fas fa-edit"></i></button>
                                    <button class="btn btn-group" type="button"><i class="fas fa-trash-alt"></i></button>
                                </td>

                            </tr>
                            <tr>
                                <th >1</th>
                                <td>Nguyen Thai Phuong Thao</td>
                                <td>HR</td>
                                <td>12/2020</td>
                                <td>Nhan vien ke toan</td>
                                <td>22</td>
                                <td>2.6</td>
                                <td>0.1</td>
                                <td>
                                    <button class="btn btn-group" type="button" ><i class="fas fa-edit"></i></button>
                                    <button class="btn btn-group" type="button"><i class="fas fa-trash-alt"></i></button>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Report;