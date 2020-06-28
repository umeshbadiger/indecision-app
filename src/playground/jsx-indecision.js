console.log("App.js is running");

// JSX - Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle works',
    options: []
}

const onFormSubmit = (e) =>{
    e.preventDefault();          //Prevents page refresh on submission of the form
    
    const option = e.target.elements.option.value;

    if(option){
        console.log(option);
        app.options.push(option);
        e.target.elements.option.value = '';
        renderCounterApp();
    }
};

var appRoot = document.getElementById('app');

const reset =()=>{
    app.options = [];
    renderCounterApp();
};

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderCounterApp =() =>{

    var template = (
        <div>
           <h1>{app.subtitle && <p>subtitle: {app.subtitle}</p>}</h1>
           <p>{app.options.length >0 ? 'here are your options' : undefined}</p>
           <button disabled={app.options.length == 0} onClick={onMakeDecision}>What Should i do?</button>
           <button onClick={reset}>remove</button>
           
           <ol>
           {
                app.options.map((option) =>{
                    return <li key={option}>{option}</li>
                })
           }
           </ol>
           
           <form onSubmit={onFormSubmit}>
               <input type="text" name="option"/>
               <button>Add Option</button>
           </form>
           
        </div>
       );

    ReactDOM.render(template,appRoot);
};

renderCounterApp();