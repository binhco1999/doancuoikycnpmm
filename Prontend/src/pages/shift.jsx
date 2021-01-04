import React, { Component } from 'react'
import { Modal, Footer, Header, Button, Title, Form, Row, Col } from 'react-bootstrap'
import shiftService from '../services/shiftService';
import './shift.css'
import Dialog from "react-bootstrap-dialog";

class Shift extends Component {
    state = {
        shifts: [],
        shift: {},
        modalShow: false,
        modalTitle: "",
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        shiftService.list().then((res) => {
            this.setState({ shifts: res.data });
        });
    };

    inputOnChange = (event) => {
        const { name, value } = event.target;
        const newShift = { ...this.state.shift, [name]: value };
        this.setState({ shift: newShift });
    };
    showModal = (id) => () => {
        if (id === 0) {
            //add
            this.setState({
                shift: {},
                modalTitle: "New shift",
                modalShow: true,
            });
        } else {
            //update
            shiftService.get(id).then((res) => {
                this.setState({
                    shift: res.data,
                    modalTitle: "Update shift",
                    modalShow: true,
                });
            });
        }
    };
    closeModal = () => {
        this.setState({ modalShow: false });
    };

    save = () => {
        if (this.state.shift.id > 0) {
            shiftService.update(
                this.state.shift.id,
                this.state.shift
            ).then((res) => {
                this.setState({ modalShow: false });
                this.loadData();
            });
        } else {
            shiftService.add(this.state.shift).then((res) => {
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
            title: "Delete Shift",
            body: "Are you sure ?",
            actions: [
                Dialog.CancelAction(),
                Dialog.OKAction(() =>
                    shiftService.remove(id).then((res) => {
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
            <div class="">
                <div className="card my-3 shadow-lg p-3 mb-5 bg-white rounded">
                    <div class="card-header" id="bordercard">
                        <div class="row justify-content-between">
                            <div class="col-3 text-dark">
                                <h1>Shift</h1>
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

                    <div class="card-body">
                        <div className="row mt-2">
                            
                        </div>
                        <div className="row mt-3">
                            <div class="col-md-6">
                                <div class="search-box">
                                    <form class="search-form" > <input class="form-control" placeholder="Nhập mã hoặc tên nhân viên" type="text" />
                                        <button class="btn btn-link search-btn"><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <table class="table table-striped table-hover mt-4">
                            <thead class="table-dark ">
                                <tr>
                                    <th >#</th>
                                    <th >Name Shift</th>
                                    <th >Description</th>
                                    <th >Time In</th>
                                    <th >Time Out</th>
                                    <th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.shifts.map((shift, idx) => {
                                    return (
                                        <tr key={shift.id}>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{shift.shiftCode} </td>
                                            <td>{shift.description} </td>
                                            <td>{shift.timeIn}</td>
                                            <td>{shift.timeOut}</td>
                                            <td>
                                                <a href="#/">
                                                    <i
                                                        className="fas fa-edit text-primary"
                                                        onClick={this.showModal(shift.id)}
                                                    ></i>
                                                </a>
                                                <a href="#/">
                                                    <i
                                                        className="fas fa-trash-alt text-danger"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            this.showConfirm(shift.id);
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
                    </div>
                </div>
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
                                <Form.Label column sm={5}><b>Shift Name:</b></Form.Label>
                                <Col sm={7}>
                                    <Form.Control
                                        name="shiftCode"
                                        onChange={this.inputOnChange}
                                        value={this.state.shift.shiftCode || ""} //này
                                        type="text"
                                        placeholder="Enter shift name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={5}><b>Description</b></Form.Label>
                                <Col sm={7}>
                                    <Form.Control
                                        name="description"  //khớp với
                                        onChange={this.inputOnChange}
                                        value={this.state.shift.description || ""} //này
                                        type="text"
                                        placeholder="Enter shift name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={5}><b>Time In:</b></Form.Label>
                                <Col sm={7}>
                                    <Form.Control
                                        name="timeIn"  //khớp với
                                        onChange={this.inputOnChange}
                                        value={this.state.shift.timeIn || ""} //này
                                        type="text"
                                        placeholder="Enter time in" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={5}><b>Time Out:</b></Form.Label>
                                <Col sm={7}>
                                    <Form.Control
                                        name="timeOut"  //khớp với
                                        onChange={this.inputOnChange}
                                        value={this.state.shift.timeOut || ""} //này
                                        type="text"
                                        placeholder="Enter time out" />
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

        );
    }
}

export default Shift;