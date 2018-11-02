import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDateRange } from '../../../actions'

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';



class DateRange extends Component {
    render(){
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;

        return(
            <div>
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day , { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                { selectedRange }
            </div>
        )
    }

    handleDayClick = (day) => {
        const { range } = this.props;
        console.log('---', range);
        console.log('---', day);

        changeDateRange(DateUtils.addDayToRange(day, range));
    };

    // handleDayClick = () => {
    //     console.log('---', 'DAY CLICKED');
    // };
}

export default connect( storage => ({
    range: storage.filters.dateRange
}),{
    changeDateRange
})(DateRange);