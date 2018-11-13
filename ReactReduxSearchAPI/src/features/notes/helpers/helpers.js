const Helpers = {
  mainRemoveAll() {
    console.log('Removing all the notes and returning...', this.state.jsaNotes);
    this.setState({ jsaNotes: [] });
  }
}

export default Helpers;
