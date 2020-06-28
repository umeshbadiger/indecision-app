import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.state = {
            options : [],
            selectedOption: undefined
        };
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options)
                this.setState(() => ({options}));
        } catch(e){
            //do nothing !! 
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
          const json = JSON.stringify(this.state.options);
          localStorage.setItem("options", json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillunMount');
    }
    handleDeleteOptions(){
        this.setState(() => ({options: []}));
     }
     handleClearSelectedOption(){
        this.setState(() => ({
            selectedOption: undefined
        }))
     }
     handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
     }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Entered option already exists';
        }
        this.setState((prevState)=>({
            options: prevState.options.concat([option])
        }));
        
    }
    render(){
        // const title = 'Indecision';
        const subtitle = 'This is subtitle.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} 
                    />
                    <div className="widget">
                        <div className="widget-content">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}    
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption = {this.handleAddOption}
                        />
                        </div>
                    </div>
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                    />
            </div>
        );
    }
}

export default IndecisionApp;