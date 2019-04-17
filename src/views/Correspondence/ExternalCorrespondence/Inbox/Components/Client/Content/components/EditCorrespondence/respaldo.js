{
  this.state.files.length > 0 ? (
    <div className="files-list">
      <ul>
        {this.state.files.map(file => (
          <li className="files-list-item" key={file.id}>
            <div className="files-list-item-preview">
              {file.preview.type === "image" ? (
                <img
                  className="files-list-item-preview-image"
                  src={file.preview.url}
                />
              ) : (
                <div className="files-list-item-preview-extension">
                  {file.extension}
                </div>
              )}
            </div>
            <div className="files-list-item-content">
              <div className="files-list-item-content-item files-list-item-content-item-1">
                {file.name}
              </div>
              <div className="files-list-item-content-item files-list-item-content-item-2">
                {file.sizeReadable}
              </div>
            </div>
            <div
              id={file.id}
              className="files-list-item-remove"
              onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
            />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
