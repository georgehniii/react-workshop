import React from 'react'

class SingleTodo extends React.Component {
    render() {
        console.log("inSingletodo");
        const goBack = () => {
            console.log("going back");
            console.log(this.props);
            this.props.changeSingleState();
        }

        return(
            <>
                <h1 className="todoItem" >{this.props.singleTodo.title}</h1>
                <button type="button" className="backButton" onClick={goBack}>{"Back"}</button>
            </>
        )
    }
}

export default SingleTodo