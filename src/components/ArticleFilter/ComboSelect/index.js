import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSelection } from "../../../actions";

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {mapToArr} from "../../../helpers";



class ComboSelect extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render(){
        const { articles, selected } = this.props;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <Select
                options={ options }
                value={ selected }
                onChange={ this.handleChange }
                multi={ true }
            />
        )
    }

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))
}



export default connect(storage => ({
    articles: mapToArr(storage.articles.entities),
    selected: storage.filters.selected
}), { changeSelection })(ComboSelect);