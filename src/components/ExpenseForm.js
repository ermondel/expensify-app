import React, { Component } from 'react';

class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: ''
    }

    onDescriptionChange = event => {
        const description = event.target.value;
        this.setState({ description });
    }

    onNoteChange = event => {
        const note = event.target.value;
        this.setState({ note });
    }

    onAmountChange = event => {
        const amount = event.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/g)) {
            this.setState({ amount });
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Description"
                        autoFocus
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} 
                    />
                    <input 
                        type="text" 
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea 
                        placeholder="Add a note to your expense (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    ></textarea>
                    <button>Add expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;
