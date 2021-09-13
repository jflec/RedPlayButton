import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      hidden: true,
      uploadingImage: false,
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
      uploadingImage: false,
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
    setTimeout(() => this.setState({ next: true }), 2500);
    const mFile = e.dataTransfer.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        uploadingImage: true,
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
        <input
          type="file"
          name="file"
          id="file"
          className="drag"
          onChange={this.handleFile.bind(this)}
        />
        <p
          onDragOver={this.onDragOver.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDrop={this.onDrop.bind(this)}
        ></p>
        <input
          type="file"
          name="file"
          id="file"
          className="drop"
          onChange={this.handleFile.bind(this)}
        />
        <div className="select-files">SELECT FILES</div>
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
    const { errors } = this.props;

    return (
      <>
        <div className="modal">
          <input
            autoFocus
            id="upload-title"
            className="upload-text"
            type="text"
            placeholder="Add a title that describes your video"
            value={this.state.title}
            onChange={this.updateTitle.bind(this)}
          />
          <label id="upload-title-label">Title (required)</label>
        </div>

        <div className="upload-input">
          <textarea
            autoFocus
            id="upload-description"
            className="upload-text"
            type="text"
            value={this.state.description}
            placeholder="Tell viewers about your video"
            onChange={this.updateDescription.bind(this)}
          />
          <label id="upload-description-label">Description</label>
        </div>
        <div className="uploads-details-preview">
          {preview}
          <div className="preview-details">
            <span>Filename</span>
            {this.state.videofile.name}
          </div>
        </div>

        {errors
          ? errors.map((er) => (
              <div className="errors upload-err" key={er.id}>
                {er}
              </div>
            ))
          : ''}

        <div className="upload-footer">
          <div id="trash" onClick={this.handleTrash.bind(this)}></div>
          <button type="submit" className="select-files">
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
                {this.state.next ? this.state.title : 'Upload videos'}
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
