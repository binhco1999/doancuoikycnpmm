import React, { Component } from 'react'
import { Modal, Form, Col, Button, Row } from 'react-bootstrap';
import departmentService from '../services/departmentService'
import Dialog from "react-bootstrap-dialog";
class Department extends Component {
    state = {
        departments: [],
        department: {},
        modalShow: false,
        modalTitle: "",
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        departmentService.list().then((res) => {
            this.setState({ departments: res.data });
        });
    };

    inputOnChange = (event) => {
        const { name, value } = event.target;
        const newDepartment = { ...this.state.department, [name]: value };
        this.setState({ department: newDepartment });
    };
    showModal = (id) => () => {
        if (id === 0) {
            //add
            this.setState({
                department: {},
                modalTitle: "New department",
                modalShow: true,
            });
        } else {
            //update
            departmentService.get(id).then((res) => {
                this.setState({
                    department: res.data,
                    modalTitle: "Update department",
                    modalShow: true,
                });
            });
        }
    };
    closeModal = () => {
        this.setState({ modalShow: false });
    };

    save = () => {
        if (this.state.department.id > 0) {
            departmentService.update(
                this.state.department.id,
                this.state.department
            ).then((res) => {
                this.setState({ modalShow: false });
                this.loadData();
            });
        } else {
            departmentService.add(this.state.department).then((res) => {
                if (res.errorCode === 0) {
                    this.setState({ modalShow: false });
                    this.loadData();
                } else {
                    this.setState({ modalShow: false });
                    this.loadData();
                }
            });
        }
    };

    showConfirm = (id) => {
        this.dialog.show({
            title: "Delete Department",
            body: "Are you sure ?",
            actions: [
                Dialog.CancelAction(),
                Dialog.OKAction(() =>
                    departmentService.remove(id).then((res) => {
                        if (res.errorCode === 0) {
                            this.loadData();
                        } else {
                            this.loadData();
                        }
                    })
                ),
            ],
            bsSize: "small",
            onHide: (dialog) => {
                dialog.hide();
                console.log("closed by clicking background.");
            },
        });
    };
    render() {
        return (

            <div className="card my-3 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-header" id="bordercard">
                    <div className="row justify-content-between">
                        <div className="col-md-6 text-dark">
                            <h1>Department</h1>
                        </div>
                        <div className="col-3 text-right p-2">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#editModal"
                                onClick={this.showModal(0)}>
                                <i className="fas fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card my-3">
                        <div className="card-header">
                            <h5><b>Data Department</b></h5>
                        </div>
                        <div className="card-body">
                            <div className="row ml-2 mr-2">
                                <div className="col-6 mt-2">
                                    <div className="form-check form-check-inline mr-4">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" for="inlineRadio1"><tt><big>Department ID</big></tt></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" for="inlineRadio2"><tt><big>Department Name</big></tt></label>
                                    </div>
                                    {/*
                                    <div className="input-group mt-4">
                                        <input type="text" className="form-control fix-rounded-right" required 
                                        value={this.props.strSearch}
                                        onChange={(event)=>this.props.handleSearch(event.target.value)}/>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><tt><big>Search</big></tt></span>
                                        </div>
                                    </div>
                                    */}
                                    <div className="row mt-4">
                                        <div class="col-md-10">
                                            <div class="search-box">
                                                <form class="search-form" action="http://hocwebgiare.com/"> <input class="form-control" placeholder="Searching..." type="text" />
                                                    <button class="btn btn-link search-btn"><i class="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-striped table-hover mt-4">
                                    <thead className="table-dark ">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Department Code</th>
                                            <th scope="col">Department Name</th>
                                            <th scope="col">Department Location</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.departments.map((department, idx) => {
                                            return (
                                                <tr key={department.dept_Id}>
                                                    <th scope="row">{idx + 1}</th>
                                                    <td>{department.deptCode} </td>
                                                    <td>{department.deptName} </td>
                                                    <td>{department.deptLocation}</td>
                                                    <td>
                                                        <a href="#/">
                                                            <i
                                                                className="fas fa-edit text-primary"
                                                                onClick={this.showModal(department.id)}
                                                            ></i>
                                                        </a>
                                                        <a href="#/">
                                                            <i
                                                                className="fas fa-trash-alt text-danger"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    this.showConfirm(department.id);
                                                                }}
                                                            ></i>
                                                            <Dialog
                                                                ref={(el) => {
                                                                    this.dialog = el;
                                                                }}
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>

                                            )
                                        })}
                                    </tbody>
                                </table>

                                <nav aria-label="..." className="offset-5">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1
                                    <span className="sr-only">(current)</span>
                                            </span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    </ul>
                                </nav>

                                <Modal
                                    show={this.state.modalShow}
                                    onHide={this.closeModal}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>{this.state.modalTitle}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm={5}><b>Department Code:</b></Form.Label>
                                                <Col sm={7}>
                                                    <Form.Control
                                                        name="deptCode"
                                                        onChange={this.inputOnChange}
                                                        value={this.state.department.deptCode || ""} //này
                                                        type="text"
                                                        placeholder="Enter Dept code" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row}>
                                                <Form.Label column sm={5}><b>Department Name:</b></Form.Label>
                                                <Col sm={7}>
                                                    <Form.Control
                                                        name="deptName"  //khớp với
                                                        onChange={this.inputOnChange}
                                                        value={this.state.department.deptName || ""} //này
                                                        type="text"
                                                        placeholder="Enter Dept Name" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row}>
                                                <Form.Label column sm={5}><b>Department Location:</b></Form.Label>
                                                <Col sm={7}>
                                                    <Form.Control
                                                        name="deptLocation"  //khớp với
                                                        onChange={this.inputOnChange}
                                                        value={this.state.department.deptLocation || ""} //này
                                                        type="text"
                                                        placeholder="Enter Dept Location" />
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.closeModal}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={this.save}>
                                            Save
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Department;