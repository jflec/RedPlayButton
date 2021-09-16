import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      hidden: true,
      next: false,
      videoURL: null,
      videofile: null,
    };
    this.toggle = this.toggle.bind(this);
    this.display = this.display.bind(this);
    this.uploadScreen = this.uploadScreen.bind(this);
    this.publishScreen = this.publishScreen.bind(this);
  }

  toggle() {
    if (!this.props.currentUser) {
      this.props.history.push('/login');
    } else {
      this.setState({
        hidden: !this.state.hidden,
      });
    }
  }

  handleFile(e) {
    e.preventDefault();
    const mFile = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        next: true,
        videoURL: fileReader.result,
        videofile: mFile,
        title: mFile.name.split('.')[0],
      });
    };
    if (mFile) {
      fileReader.readAsDataURL(mFile);
    }
  }

  handleTrash(e) {
    e.preventDefault();
    this.setState({
      hidden: true,
      next: false,
      videoURL: null,
      videofile: null,
      title: '',
      description: '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[uploader_id]', this.props.currentUser.id);
    formData.append('video[videofile]', this.state.videofile);
    this.props
      .postVideo(formData)
      .then(this.props.history.push(`/c/${this.props.currentUser.username}`));
  }

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value,
    });
  }

  updateDescription(e) {
    this.setState({
      description: e.currentTarget.value,
    });
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDragEnter(e) {
    e.preventDefault();
  }

  onDrop(e) {
    e.preventDefault();
    const mFile = e.dataTransfer.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        videoURL: fileReader.reseult,
        videofile: mFile,
        title: mFile.name.split('.')[0],
      });
    };
    if (mFile) {
      fileReader.readAsDataURL(mFile);
    }
  }

  uploadScreen(e) {
    return (
      <div className="file-input">
        <img className="scuffed-icon" src={window.uploadButton} />
        <input
          type="file"
          name="file"
          className="drag-and-drop"
          onChange={this.handleFile.bind(this)}
        />
        <h1>Drag and drop video files to upload</h1>
        <p className="upload-details">Your videos will be public.</p>
        <p
          onDragOver={this.onDragOver.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDrop={this.onDrop.bind(this)}
        ></p>
        <button
          className="click-button"
          onclick="document.getElementsByClassName('click').click()"
        >
          SELECT FILES
        </button>
        <input
          type="file"
          name="file"
          className="click"
          onChange={this.handleFile.bind(this)}
        />
      </div>
    );
  }
  publishScreen() {
    const preview = this.state.videoURL ? (
      <div className="preview">
        <video
          className="video-upload-preview"
          src={this.state.videoURL}
          muted={true}
          loop={true}
        />
      </div>
    ) : (
      <img src={window.defaultThumbnail} alt="thumbnail"></img>
    );

    return (
      <>
        <div className="modal">
          <input
            autoFocus
            className="upload-title-text"
            type="text"
            placeholder="Add a title"
            value={this.state.title}
            onChange={this.updateTitle.bind(this)}
          />
        </div>
        <textarea
          autoFocus
          className="upload-description"
          type="text"
          value={this.state.description}
          placeholder="Tell viewers about your video"
          onChange={this.updateDescription.bind(this)}
        />
        <div className="uploads-details-preview">{preview}</div>
        <div className="uploads-details-footer">
          <p className="uploads-details-filename">
            {this.state.videofile.name}
          </p>
          <p className="file-name-path" src={this.state.videofile}></p>
        </div>
        <div className="upload-footer">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="upload-trash-icon"
            onClick={this.handleTrash.bind(this)}
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
          <button type="submit" className="publish-text">
            PUBLISH
          </button>
          {this.state.hidden ? '' : ''}
        </div>
      </>
    );
  }

  display() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="upload">
          <div className="upload-content">
            <div className="upload-title">
              <p className="title-text">
                {this.state.next ? 'Details' : 'Upload videos'}
              </p>
              <span className="close-button" onClick={this.toggle}>
                &times;
              </span>
            </div>
          </div>
        </div>
        {this.state.next ? this.publishScreen() : this.uploadScreen()}
      </form>
    );
  }

  render() {
    return (
      <div className="upload-modal">
        {this.props.currentUser ? (
          <div className="create-icon-box">
            <svg
              viewBox="0 0 24 24"
              className="create-icon"
              focusable="false"
              onClick={this.toggle}
            >
              <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path>
            </svg>
          </div>
        ) : (
          ''
        )}
        {this.state.hidden ? '' : this.display()}
      </div>
    );
  }
}

export default Upload;
