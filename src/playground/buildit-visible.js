class VisiblityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisiblity(){
        this.setState((prevState) =>{
            return{
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
                    <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisiblity}>
                    {this.state.visibility ? 'Hide' : 'Show'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>some text here</p>
                    </div>
                    )}
            </div>
        );
    }
}
ReactDOM.render(<VisiblityToggle/>, document.getElementById('app'));
