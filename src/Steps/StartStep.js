import React from 'react';
import Stats from '../Components/Stats';

class StartStep extends React.Component {
    constructor(props){
        super(props);

        this.update = this.update.bind(this);
    }

    update = (e) => {
        this.props.update('category', e.target.value);
    }

    render(){
        const { category } = this.props.form;

        return (
            <div className="new_skeaker_step1">
                <h2 className="sg_title">You are about to add a listing</h2>
                <h3 className="sg_sub_title">First choose a category:</h3>

                <form>
                    <div className="form_area">
                        <div className="image">
                            <img src="./assets/images/sneaker.png" alt=""/>
                            <h3>Sneakers</h3>
                        </div>
                        <div className="form_groups">
                            <div className="single_form_group_box">
                                <div className="input_radio_box">
                                    <input type="radio" value="sneakers_new" 
                                                        checked={category === 'sneakers_new'} 
                                                        onChange={this.update} />
                                    <p>
                                        <label className="radio_label">New</label>
                                    </p>
                                </div>
                            </div>
                            <p>Allows you to list multiple sizes of your item and set different prices for them.</p>
                            <div className="single_form_group_box">
                                <div className="input_radio_box">
                                    <input type="radio" value="sneakers_used" 
                                                    checked={category === 'sneakers_used'} 
                                                    onChange={this.update} />
                                    <p>
                                        <label className="radio_label">Used</label>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form_area">
                        <div className="image">
                            <img src="assets/images/apparel.png" alt=""/>
                            <h3>Apparel</h3>
                        </div>
                        <div className="form_groups">
                            <div className="single_form_group_box">
                                <div className="input_radio_box">
                                    <input type="radio" value="apparel_new" 
                                                        checked={category === 'apparel_new'} 
                                                        onChange={this.update} />
                                    <p>
                                        <label className="radio_label">New</label>
                                    </p>
                                </div>
                            </div>
                            <div className="single_form_group_box">
                                <div className="input_radio_box">
                                    <input type="radio" value="apparel_used" 
                                                checked={category === 'apparel_used'} 
                                                onChange={this.update} />
                                    <p>
                                        <label className="radio_label">Used</label>
                                    </p>
                                </div>
                                <p>If you want to sell only one and used item this option is for you.</p>
                            </div>
                        </div>
                    </div>
                </form>
                <Stats step={1} {...this.props} />
            </div>
        );
    }
}


export default StartStep;