import React from 'react'

class SingleTodo extends React.Component {
    render() {
        console.log("inSingletodo");
        const changeSingleState = (e) => {
            console.log(this);
            console.log(e);
        }

        return(
            //<h1 className="todoItem" id={this.props.elem.id} onClick={changeSingleState}>{this.props.elem.title}</h1>
            // <h1 className="todoItem" onClick={changeSingleState}>{this.props.elem.title}This is single item</h1>
            <h1 className="todoItem" onClick={changeSingleState}>{this}</h1>
        )
    }
}

export default SingleTodo