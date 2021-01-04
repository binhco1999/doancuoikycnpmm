import React, { Component } from 'react'
import { Modal, Footer, Header, Button, Title, Form, Row, Col } from 'react-bootstrap'
import positionService from '../services/positionService';
import Dialog from "react-bootstrap-dialog";
class Position extends Component {
    state = {
        positions: [],
        position: {},
        modalShow: false,
        modalTitle: "",
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        positionService.list().then((res) => {
            this.setState({ positions: res.data });
        });
    };

    inputOnChange = (event) => {
        const { name, value } = event.target;
        const newPosition = { ...this.state.position, [name]: value };
        this.setState({ position: newPosition });
    };
    showModal = (id) => () => {
        if (id === 0) {
            //add
            this.setState({
                position: {},
                modalTitle: "New position",
                modalShow: true,
            });
        } else {
            //update
            positionService.get(id).then((res) => {
                this.setState({
                    position: res.data,
                    modalTitle: "Update position",
                    modalShow: true,
                });
            });
        }
    };
    closeModal = () => {
        this.setState({ modalShow: false });
    };

    save = () => {
        if (this.state.position.id > 0) {
            positionService.update(
                this.state.position.id,
                this.state.position
            ).then((res) => {
                this.setState({ modalShow: false });
                this.loadData();
            });
        } else {
            positionService.add(this.state.position).then((res) => {
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
            title: "Delete position",
            body: "Are you sure ?",
            actions: [
                Dialog.CancelAction(),
                Dialog.OKAction(() =>
                    positionService.remove(id).then((res) => {
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
                            <div class="col-md-5 text-dark">
                                <h1>Position</h1>
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
                        <div className="row">
                            <div class="col-md-6">
                                <div class="search-box">
                                    <form class="search-form" action="http://hocwebgiare.com/"> <input class="form-control" placeholder="Searching..." type="text" />
                                        <button class="btn btn-link search-btn"><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <table class="table table-striped table-hover mt-4">
                            <thead class="table-dark ">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Position Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.positions.map((position, idx) => {
                                    return (
                                        <tr key={position.id}>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{position.positionName} </td>
                                            <td>
                                                <a href="#/">
                                                    <i
                                                        className="fas fa-edit text-primary"
                                                        onClick={this.showModal(position.id)}
                                                    ></i>
                                                </a>
                                                <a href="#/">
                                                    <i
                                                        className="fas fa-trash-alt text-danger"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            this.showConfirm(position.id);
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
                                <Form.Label column sm={5}><b>Position Name:</b></Form.Label>
                                <Col sm={7}>
                                    <Form.Control
                                        name="positionName"
                                        onChange={this.inputOnChange}
                                        value={this.state.position.positionName || ""} //này
                                        type="text"
                                        placeholder="Enter position name" />
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

export default Position;