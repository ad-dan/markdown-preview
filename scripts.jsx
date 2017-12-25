const TypeArea = ({ val, handleInput }) => {
  return (
    <textarea
      placeholder="Type here"
      className="textarea"
      value={val}
      onChange={handleInput}
    />
  );
};

const Preview = ({ text }) => {
  const display = markdownGenerate(text);
  return <div className="box content" dangerouslySetInnerHTML={display} />;
};

const markdownGenerate = md => ({
  __html: md
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      message: ''
    };
  }

  updateText = e => {
    this.setState({
      message: e.target.value
    });
  };
  componentDidUpdate() {
    hljs.initHighlightingOnLoad();
  }
  render() {
    return (
      <div>
        <div className="hero is-primary is-small has-text-centered-mobile">
          <div className="hero-head">
            <div className="columns is-desktop">
              <div className="column is-1 is-offset-11">
                <a className="button is-primary is-inverted">Source</a>
              </div>
            </div>
          </div>
          <div className="hero-body">
            <div className="container is-fluid">
              <h1 className="title">Markdown Previewer</h1>
              <h2 className="subtitle is-size-6">
                A tool made using ReactJS, Marked and Bulma CSS
              </h2>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container-fluid">
            <div className="columns is-desktop">
              <div className="column">
                <div className="field">
                  <label className="label title is-size-4">Markdown:</label>
                  <TypeArea
                    handleInput={this.updateText}
                    val={this.state.message}
                  />
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <span className="label title is-size-4">Preview:</span>
                  <Preview text={marked(this.state.message)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
