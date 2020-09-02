/*
checkBoxes select all 

  toggleCheckboxes = (source, cbName) => {
    for (var i = 0, n = document.getElementsByName(cbName).length; i < n; i++) {
      document.getElementsByName(cbName)[i].checked = source;
    }
  };
           <input
                                type="checkbox"
                                onClick={() =>
                                  this.setState(
                                    {
                                      checkall: !this.state.checkall,
                                    },
                                    () =>
                                      this.toggleCheckboxes(
                                        this.state.checkall,
                                        "foo"
                                      )
                                  )
                                }
                              />


pagination

State:
    itemsCountPerPage: 5,
    currentPage: 1,
    totalPages: null,
    totalElements: null,

handlePageChange = (event) => {
    let targetPage = parseInt(event.target.value);

    this.getDataInbox(targetPage);
    this.setState({
      [event.target.value]: targetPage,
    });
  };

  firstPage = () => {
    const { currentPage } = this.state;
    let firstPage = 1;
    if (currentPage > firstPage) {
      this.getDataInbox(firstPage);
    }
  };

  prevPage = () => {
    const { currentPage } = this.state;
    let prevPage = 1;
    if (currentPage > prevPage) {
      this.getDataInbox(currentPage - prevPage);
    }
  };

  lastPage = () => {
    const { currentPage } = this.state;
    let condition = Math.ceil(
      this.state.totalElements / this.state.itemsCountPerPage
    );
    if (currentPage < condition) {
      this.getDataInbox(condition);
    }
  };

  nextPage = () => {
    const { currentPage } = this.state;
    if (
      currentPage <
      Math.ceil(this.state.totalElements / this.state.itemsCountPerPage)
    ) {
      this.getDataInbox(currentPage + 1);
    }
  };

    <div className="float-left">
                    Showing Page {currentPage} of {totalPages}
                  </div>
                  <div className="float-right">
                    <InputGroup size="sm">
                      {" "}
                      <InputGroupAddon addonType="prepend">
                        <Button
                          className="btn btn-sm"
                          type="button"
                          variant="outline-info"
                          // disabled={currentPage === 1 ? true : false}
                          onClick={this.firstPage}
                        >
                          First
                        </Button>
                        <Button
                          className="btn btn-sm"
                          type="button"
                          variant="outline-info"
                          // disabled={currentPage === 1 ? true : false}
                          onClick={this.prevPage}
                        >
                          Prev
                        </Button>
                      </InputGroupAddon>
                      <Input
                        style={pageNumCss}
                        className="bg-dark"
                        name="currentPage"
                        value={currentPage}
                        onChange={this.handlePageChange}
                      />
                      <InputGroupAddon addonType="append">
                        <Button
                          className="btn btn-sm"
                          type="button"
                          variant="outline-info"
                          // disabled={currentPage === totalPages ? true : false}
                          onClick={this.nextPage}
                        >
                          Next
                        </Button>
                        <Button
                          className="btn btn-sm"
                          type="button"
                          variant="outline-info"
                          // disabled={currentPage === totalPages ? true : false}
                          onClick={this.lastPage}
                        >
                          Last
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>                
                    </div>

  */
