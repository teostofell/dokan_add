import React from 'react';

class CollaborationSelector extends React.Component {
    render(){
        return (
            <div className="checkbox_group">
                <h3>Choose collaboration <span>(optional)</span></h3>
                <div className="add_colabartation">
                    <div className="addcoll">Add <i className="fas fa-plus-circle"></i></div>
                </div>
            </div>
        );
    }
}

export default CollaborationSelector;